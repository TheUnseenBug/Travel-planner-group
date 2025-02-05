// function TripCard() {
//   return (
//     <>
//       <div>
//         <h1>Details for your trip to {trip.location}</h1>
//         <p>
//           <img src="URL" alt="fetch img from Google" />
//           <strong>Destination: </strong> {trip.location}
//         </p>
//         <p>
//           <strong>Date: </strong> {trip.location}
//         </p>
//       </div>

//       <div className="buttons">
//         <button className="delete-button" onClick={() => deleteTrip(trip.id)}>
//           Radera 🗑️
//         </button>
//         <button className="edit-button" onClick={() => editTrip(trip.id)}>
//           Redigera ✏️
//         </button>
//       </div>
//       <div>
//         <h2>Learn more about {trip.location}</h2>
//         <div>fetch Text from wikipedia</div>
//       </div>
//     </>
//   );
// }

// export default TripCard;

import { memo } from "react";
import { IActivity } from "../../interfaces/interfaces";

interface Props {
  activity: IActivity;
  deleteActivity: (activityIdToDelete: number) => void;
  editActivity: (activityIdToEdit: number) => void;
}

const TripCard = ({ activity, deleteActivity, editActivity }: Props) => {
  return (
    <div className="activity">
      <div className="content">
        <h2>{activity.name}</h2>
        <span>
          <strong>Datum:</strong> {activity.date}
        </span>
        <span>
          <strong>Plats:</strong> {activity.location}
        </span>
        <span>#{activity.type}</span>
      </div>

      <div className="buttons">
        <button
          className="delete-button"
          onClick={() => deleteActivity(activity.id)}
        >
          Radera 🗑️
        </button>
        <button
          className="edit-button"
          onClick={() => editActivity(activity.id)}
        >
          Redigera ✏️
        </button>
      </div>
    </div>
  );
};

export default ActivityItem;
