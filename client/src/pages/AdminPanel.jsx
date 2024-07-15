import { useLoaderData, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useState } from "react";
import DogApproveInfo from "../components/DogApproveInfo";
import DogApprovedHistory from "../components/DogApprovedHistory";

export const loader = async () => {
  try {
    const response = await customFetch.get("/user/admin/dog-stats");
    const dogsResponse = await customFetch.get("/dogs");
    return {
      stats: response.data,
      dogs: dogsResponse.data,
    };
  } catch (error) {
    toast.error("You are not an admin to view this page");
    return redirect("/service");
  }
};

const AdminPanel = () => {
  const { stats, dogs: intialDogs } = useLoaderData();
  const { users, dogs: dogStats } = stats;
  const { dogs } = intialDogs;
  const approvedDogsCount = dogs.filter(
    (dog) => dog.status === "approved"
  ).length;

  const approveDog = async (id) => {
    try {
      await customFetch.patch(`/dogs/${id}`, { status: "approved" });
      toast.success("Dog approved successfully");
    } catch (error) {
      toast.error("Failed to approve dog");
      return error;
    }
  };

  const rejectDog = async (id) => {
    try {
      await customFetch.delete(`/dogs/${id}`, { status: "rejected" });
      toast.success("Dog Rejected");
    } catch (error) {
      toast.error("Fail to reject dog");
      return error;
    }
  };

  const deleteDog = async (id) => {
    try {
      await customFetch.delete(`/dogs/${id}`, { status: "deleted" });
      toast.success("Dog Deleted");
    } catch (error) {
      toast.error("Fail to delete dog");
      return error;
    }
  };

  return (
    <div className="admin-container">
      <div className="dog-stats-container">
        <h1>Statistics</h1>
        <h2>Dogs: {approvedDogsCount}</h2>
        <h2>Users: {users}</h2>
      </div>
      <div className="display-dogs-pending-container">
        <div className="display-dogs-title">
          <h1>Dogs Pending Approval</h1>
        </div>
        <div className="display-dogs-pending-info">
          {dogs.map((dog) =>
            dog.status === "pending" ? (
              <DogApproveInfo
                key={dog._id}
                {...dog}
                approveDog={approveDog}
                rejectDog={rejectDog}
              />
            ) : null
          )}
        </div>
      </div>
      <div className="dog-history-container">
        <div className="display-dogs-title">
          <h1>Approved Dogs</h1>
        </div>
        <div className="display-dogs-pending-info">
          {dogs.map((dog) =>
            dog.status === "approved" ? (
              <DogApprovedHistory
                key={dog._id}
                {...dog}
                deleteDog={deleteDog}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
