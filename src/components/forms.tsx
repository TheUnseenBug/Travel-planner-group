import {
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
} from "@headlessui/react";
import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import Button from "./button";
//Oklar error?
import { Trip } from "../types/trip";
import { useDispatch } from "react-redux";
import { addTrip } from "../helpers/trip";

interface props {
  trip?: Trip | undefined;
}
//props för att kontrollera när modal ska öppnas och hantera Trip i store
const Forms: FC<props> = ({ trip }) => {
  const [destination, setDestination] = useState(trip?.city || "");
  const [date, setDate] = useState(trip?.date || "");
  const [fields, setFields] = useState<string[]>(trip?.activities || [""]);
  const dispatch = useDispatch();

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
  useEffect(() => {
    setDestination(trip?.city || "");
    setDate(trip?.date || "");
    setFields(trip?.activities || [""]);
  }, [trip]);

  //Funktion för att spara eller redigera Trip
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (destination && date && fields.length > 0) {
      const newTrip = {
        id: trip ? trip.id : Math.random().toString(),
        city: destination,
        date: date,
        activities: fields,
      };

      if (addTrip) {
        dispatch(addTrip(newTrip));
      }
    } else {
      console.log("Please fill in all fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg px-4 bg-slate-700">
      <Fieldset className="p-6 space-y-6 rounded-xl bg-white/5 sm:p-10">
        <Legend className="font-semibold text-white text-base/7">
          {trip ? "Edit" : "Add"} travel plans for your next trip
        </Legend>
        <Field>
          <Label className="font-medium text-white text-sm/6">
            Destination
          </Label>
          <Input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "Please enter a destination"
              )
            }
            onInput={(e) =>
              (e.target as HTMLInputElement).setCustomValidity("")
            }
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
        </Field>
        <Field>
          <Label className="font-medium text-white text-sm/6">Date</Label>

          <div className="relative">
            <Input
              value={date}
              type="date"
              onChange={(e) => setDate(e.target.value)}
              required
              onInvalid={(e) =>
                (e.target as HTMLInputElement).setCustomValidity(
                  "Please enter a date"
                )
              }
              onInput={(e) =>
                (e.target as HTMLInputElement).setCustomValidity("")
              }
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
            />
          </div>
        </Field>
        <Field>
          <Label className="font-medium text-white text-sm/6">Activities</Label>
          <Description className="text-sm/6 text-white/50">
            If you have more than one activity, press add more activities.
          </Description>
          <Button onClick={handleAddField} text="Add more activities" />
          {fields.map((activity, index) => (
            <div key={index} className="relative py-3">
              <Label className="font-medium text-white text-sm/6">
                Activity
              </Label>
              <Input
                value={activity}
                onChange={(e) => {
                  const updatedFields = [...fields];
                  updatedFields[index] = e.target.value;
                  setFields(updatedFields);
                }}
                required
                onInvalid={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity(
                    "Please enter an activity"
                  )
                }
                onInput={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity("")
                }
                className={clsx(
                  "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
              />
              <Button onClick={() => handleRemoveField(index)} text="Remove" />
            </div>
          ))}
        </Field>
        <section className="flex justify-end gap-4">
          <Button text={trip ? "Edit" : "Add"} type="submit" />
        </section>
      </Fieldset>
    </form>
  );
};
export default Forms;
