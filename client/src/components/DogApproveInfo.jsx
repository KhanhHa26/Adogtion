const DogApproveInfo = ({
  _id,
  name,
  breed,
  age,
  location,
  description,
  image,
  approveDog,
  rejectDog,
}) => {
  return (
    <div className="dog-card">
      <img src={image} alt="Dog Image" />
      <h1>{name}</h1>
      <h2>{breed}</h2>
      <p>{age}</p>
      <p>{location}</p>
      <p>{description}</p>
      <div className="approve-reject-btn-container">
        <button
          type="button"
          className="approve-reject-button"
          onClick={() => approveDog(_id)}
        >
          Approve
        </button>
        <button
          type="button"
          className="approve-reject-button"
          onClick={() => rejectDog(_id)}
        >
          Reject
        </button>
      </div>
    </div>
  );
};
export default DogApproveInfo;
