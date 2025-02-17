import { FC } from "react";
import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

interface DateInputProps {
  date: string;
  setDate: (date: string) => void;
}

const DateInput: FC<DateInputProps> = ({ date, setDate }) => {
  return (
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
          onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
          className={clsx(
            "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
        />
      </div>
    </Field>
  );
};

export default DateInput;
