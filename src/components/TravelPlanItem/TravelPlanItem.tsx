function TripItem() {
  return (
    <>
      <div>
        <h1>Details for your trip to {trip.location}</h1>
        <p>
          <img src="URL" alt="fetch img from Google" />
          <strong>Destination: </strong> {trip.location}
        </p>
        <p>
          <strong>Date: </strong> {trip.location}
        </p>
      </div>

      <div className="buttons">
        <button className="delete-button" onClick={() => deleteTrip(trip.id)}>
          Radera 🗑️
        </button>
        <button className="edit-button" onClick={() => editTrip(trip.id)}>
          Redigera ✏️
        </button>
      </div>
      <div>
        <h2>Learn more about {trip.location}</h2>
        <div>fetch Text from wikipedia</div>
      </div>
    </>
  );
}

export default TripItem;
