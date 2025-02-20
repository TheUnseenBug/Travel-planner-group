import Map from "../components/map/MapComponent.tsx";
import { useParams } from "react-router-dom";
import { RootState, Trip } from "../types/types.ts";
import { useSelector } from "react-redux";
import Button from "../components/button.tsx";
import Modal from "../components/modal.tsx";
import Delete from "../components/delete.tsx";
import { useState } from "react";

import Forms from "../components/Form/forms.tsx";
import ImageCarousel from "../components/image-carousel.tsx";
import NotificationBox from "../components/notification-box.tsx";

const TripDetails: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  // Hämta ut id:t från URL-parametrarna
  const { id } = useParams<{ id: string }>();

  // Hämta trip-datan från Redux-staten baserat på id:t
  const trip = useSelector((state: RootState) =>
    state.trip.trips.find((trip: Trip) => trip.id.toString() === id)
  );

  const notification = useSelector(
    (state: RootState) => state.notif?.notification
  );

  if (!trip) {
    return <div className="text-white p-4">Resan kunde inte hittas</div>;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center flex-wrap">
      {notification ? (
        <NotificationBox
          message={notification.message}
          visible={notification.visible}
        />
      ) : null}
      <div className="container  justify-center content-center text-black w-96">
        <section className="m-2  bg-gray-100 w-full p-3 text-opacity-100 rounded-sm">
          <h2 className="text-2xl font-bold mb-2">
            Din resa till {trip.city.split(",")[0]}
          </h2>
          <ImageCarousel trip={trip} />
          {/* <div className="w-full h-48 relative">
            <img
              className="rounded-2xl mb-2 w-full h-full object-cover"
              src={trip.images?.[0]}
              alt="Bild från ditt resmål"
            />
          </div> */}

          <p className="mb-2">{trip.date}</p>
          <section className="flex justify-start gap-3">
            <Button
              text="Radera"
              className="bg-red-600 hover:bg-red-400"
              onClick={() => setOpen(true)}
            />
            <Button text="Redigera" onClick={() => setOpenEdit(true)} />
          </section>

          <Modal open={open} setOpen={setOpen}>
            <Delete setOpen={setOpen} trip={trip} />
          </Modal>
          <Modal open={openEdit} setOpen={setOpenEdit}>
            <Forms trip={trip} type="edit" setOpenEdit={setOpenEdit} />
          </Modal>
          {trip.activities && trip.activities.length > 0 && (
            <div className="mt-2">
              <p className="font-semibold">Aktiviteter:</p>
              <ul className="list-disc list-inside">
                {trip.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
        <Map city={trip.city} />
      </div>
    </div>
  );
};

export default TripDetails;
