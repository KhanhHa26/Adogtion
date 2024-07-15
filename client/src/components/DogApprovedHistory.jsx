const DogApprovedHistory = ({
  _id,
  name,
  breed,
  age,
  location,
  description,
  image,
  deleteDog,
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
          className="show-interest-button"
          onClick={() => deleteDog(_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default DogApprovedHistory;
