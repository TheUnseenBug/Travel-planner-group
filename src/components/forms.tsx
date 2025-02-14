import {
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
} from "@headlessui/react";
import clsx from "clsx";
import { FC, useEffect, useState, useRef } from "react";
import Button from "./button";
import { RootState, Trip } from "../types/types";
import { useDispatch } from "react-redux";
import { addTrip } from "../helpers/trip";
import NotificationBox from "./notification-box";
import { showNotification } from "../helpers/notif";
import { useSelector } from "react-redux";

interface props {
  trip?: Trip | undefined;
}

interface AutocompleteResult {
  display_name: string;
}

//props för att kontrollera när modal ska öppnas och hantera Trip i store
const Forms: FC<props> = ({ trip }) => {
  const [destination, setDestination] = useState(trip?.city || "");
  const [date, setDate] = useState(trip?.date || "");
  const [fields, setFields] = useState<string[]>(trip?.activities || [""]);
  const [autocompleteResults, setAutocompleteResults] = useState<
    AutocompleteResult[]
  >([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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
  useEffect(() => {
    setDestination(trip?.city || "");
    setDate(trip?.date || "");
    setFields(trip?.activities || [""]);
  }, [trip]);

  const fetchAutocompleteResults = async (value: string) => {
    if (value.length > 2) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${value}&format=json&limit=5`
        );
        const data: AutocompleteResult[] = await response.json();
        setAutocompleteResults(data);
      } catch (error) {
        console.error("Error fetching autocomplete suggestions:", error);
        setAutocompleteResults([]);
      }
    } else {
      setAutocompleteResults([]);
    }
  };

  function extractFirstPart(str: string) {
    const commaIndex = str.indexOf(",");
    if (commaIndex === -1) {
      // If there's no comma, return the whole string
      return str;
    } else {
      return str.substring(0, commaIndex);
    }
  }

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDestination(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      fetchAutocompleteResults(value);
    }, 200);
  };

  const handleSelectDestination = (selectedDestination: string) => {
    setDestination(selectedDestination);
    setAutocompleteResults([]);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  //Funktion för att spara eller redigera Trip
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (destination && date && fields.length > 0) {
      const newTrip = {
        id: trip ? trip.id : Math.floor(Math.random() * 10000).toString(),
        city: extractFirstPart(destination),
        date: date,
        activities: fields,
      };

      if (addTrip) {
        dispatch(
          showNotification({ message: "Resan är sparad!", visible: true })
        );
        dispatch(addTrip(newTrip));
      }
    } else {
      console.log("Fyll i alla fält!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-auto h-full px-4 bg-gray-400 shadow rounded-2xl
 p-5 mb-4 border-2 border-white"
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
        <Field>
          <Label className="font-medium text-white text-sm/6">
            Destination
          </Label>
          <Input
            ref={inputRef}
            value={destination}
            onChange={handleDestinationChange}
            required
            onInvalid={(e) =>
              (e.target as HTMLInputElement).setCustomValidity(
                "Ange en destination."
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
          {autocompleteResults.length > 0 && (
            <div className="absolute z-10">
              <ul className="mt-1 w-max bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                {autocompleteResults.map((result, index) => (
                  <li
                    key={index}
                    className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectDestination(result.display_name)}
                  >
                    {result.display_name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Field>
        <Field>
          <Label className="font-medium text-white text-sm/6">Datum</Label>

          <div className="relative">
            <Input
              value={date}
              type="date"
              onChange={(e) => setDate(e.target.value)}
              required
              onInvalid={(e) =>
                (e.target as HTMLInputElement).setCustomValidity(
                  "Ange datum för avfärd."
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
          <Label className="font-medium text-white text-sm/6">
            Aktiviteter
          </Label>
          <Description className="text-sm/6 text-white/50">
            Här lägger du till dina aktiviteter för resan.
          </Description>

          {fields.map((activity, index) => (
            <div key={index} className="relative py-3">
              <Label className="font-medium text-white text-sm/6">
                Aktivitet
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
                    "Ange en aktivitet."
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
              <Button onClick={() => handleRemoveField(index)} text="Ta bort" />
            </div>
          ))}
        </Field>
        <Button
          onClick={handleAddField}
          text="Lägg till ytterligare en aktivitet"
        />
        <section className="flex justify-end gap-4">
          <Button text={trip ? "Redigera" : "Spara resan"} type="submit" />
        </section>
      </Fieldset>
    </form>
  );
};
export default Forms;
