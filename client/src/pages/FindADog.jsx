import { FindADogSearch, FindADogDisplay } from "../components";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import customFetch from "../utils/customFetch";
import AdoptionAdvice from "../components/AdoptionAdvice";
import { toast } from "react-toastify";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const { data } = await customFetch.get("/dogs", {
      params,
    });
    return {
      data,
      searchValues: { ...params },
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const FindADogContext = createContext();

const FindADog = () => {
  const { data, searchValues } = useLoaderData();
  return (
    //passing down the dog data to the other two components
    <>
      <FindADogContext.Provider value={{ data, searchValues }}>
        <FindADogSearch />
        <FindADogDisplay />
      </FindADogContext.Provider>
      <AdoptionAdvice />
    </>
  );
};

export const useFindADogContext = () => useContext(FindADogContext);
export default FindADog;
