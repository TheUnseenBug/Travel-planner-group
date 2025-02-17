import {
  Description,
  Field,
  Fieldset,
  Legend,
} from "@headlessui/react";
import clsx from "clsx";
import { FC, useEffect, useState, useRef } from "react";
import Button from "../button";
import { RootState, Trip } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { addTrip, editTrip } from "../../helpers/trip";
import NotificationBox from "../notification-box";
import { showNotification } from "../../helpers/notif";
import DestinationInput from "./DestinationInput";
import DateInput from "./DateInput";
import ActivitiesInput from "./ActivitiesInput";

interface props {
  trip?: Trip | undefined;
  type: "edit" | "add";
  setOpenEdit?: (e: boolean) => void;
}

//props för att kontrollera när modal ska öppnas och hantera Trip i store
const Forms: FC<props> = ({ trip, type, setOpenEdit }) => {
  const [destination, setDestination] = useState(trip?.city || "");
  const [date, setDate] = useState(trip?.date || "");
  const [fields, setFields] = useState<string[]>(trip?.activities || [""]);
  const dispatch = useDispatch();

  const notification = useSelector(
    (state: RootState) => state.notif?.notification
  );

  //Funktioner för att lägga till aktiviteter
  const handleAddField = () => {
    setFields([...fields, ""]);
  };

  //Funktion för att ta bort aktiviteter
  const handleRemoveField = (index: number) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  //Om Trip finns så uppdaterar vi formuläret med data
  type === "edit"
    ? useEffect(() => {
        setDestination(trip?.city || "");
        setDate(trip?.date || "");
        setFields(trip?.activities || [""]);
      }, [trip])
    : null;

  //Funktion för att spara eller redigera Trip
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (destination && date && fields.length > 0) {
      const newTrip = {
        id: trip ? trip.id : Math.floor(Math.random() * 10000).toString(),
        city: destination,
        date: date,
        activities: fields,
      };

      if (type === "add") {
        dispatch(
          showNotification({ message: "Resan är sparad!", visible: true })
        );
        dispatch(addTrip(newTrip));
      } else if (type === "edit" && setOpenEdit) {
        dispatch(
          showNotification({
            visible: true,
            message: "Vacation plan edited",
          })
        );
        dispatch(editTrip(newTrip));
        setOpenEdit(false);
      }
    } else {
      console.log("Fyll i alla fält!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-auto  px-4 bg-gray-400 shadow rounded-2xl
 p-5 mb-4 border-2 border-white z-10"
    >
      {notification ? (
        <NotificationBox
          message={notification.message}
          visible={notification.visible}
        />
      ) : null}
      <Fieldset className="p-6 space-y-6 rounded-xl bg-white/5 sm:p-10">
        <Legend className="font-semibold text-white text-base/7">
          {trip ? "Redigera" : "Lägg till"} planer för din nästa resa.
        </Legend>
        <DestinationInput
          destination={destination}
          setDestination={setDestination}
        />
        <DateInput date={date} setDate={setDate} />
        <ActivitiesInput
          fields={fields}
          setFields={setFields}
          handleAddField={handleAddField}
          handleRemoveField={handleRemoveField}
        />
        <section className="flex justify-end gap-4">
          <Button text={trip ? "Redigera" : "Spara resan"} type="submit" />
        </section>
      </Fieldset>
    </form>
  );
};
export default Forms;
