import { FC, useRef, useState } from "react";
import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

interface DestinationInputProps {
  destination: string;
  setDestination: (destination: string) => void;
}

interface AutocompleteResult {
  display_name: string;
}

const DestinationInput: FC<DestinationInputProps> = ({
  destination,
  setDestination,
}) => {
  const [autocompleteResults, setAutocompleteResults] = useState<
    AutocompleteResult[]
  >([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  return (
    <Field>
      <Label className="font-medium text-white text-sm/6">Destination</Label>
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
        onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
        className={clsx(
          "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        )}
      />
      {autocompleteResults.length > 0 && (
        <div className="absolute z-5">
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
  );
};

export default DestinationInput;
