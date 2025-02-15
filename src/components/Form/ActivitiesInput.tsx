import { FC } from "react";
import { Field, Input, Label, Description } from "@headlessui/react";
import clsx from "clsx";
import Button from "../button";

interface ActivitiesInputProps {
  fields: string[];
  setFields: (fields: string[]) => void;
  handleAddField: () => void;
  handleRemoveField: (index: number) => void;
}

const ActivitiesInput: FC<ActivitiesInputProps> = ({
  fields,
  setFields,
  handleAddField,
  handleRemoveField,
}) => {
  return (
    <Field>
      <Label className="font-medium text-white text-sm/6">Aktiviteter</Label>
      <Description className="text-sm/6 text-white/50">
        Här lägger du till dina aktiviteter för resan.
      </Description>
      {fields.map((activity, index) => (
        <div key={index} className="relative py-3">
          <Label className="font-medium text-white text-sm/6">Aktivitet</Label>
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
            onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
            className={clsx(
              "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
          <Button onClick={() => handleRemoveField(index)} text="Ta bort" />
        </div>
      ))}
      <Button onClick={handleAddField} text="Lägg till ytterligare en aktivitet" />
    </Field>
  );
};

export default ActivitiesInput;
