import classNames from "classnames";
import { FC } from "react";

interface props {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}
//props för att kontrollera text, vad som händer onClick och typen av knapp
const Button: FC<props> = ({ text, onClick, type, className }) => {
  return (
    <button
      type={type ? type : "button"}
      onClick={onClick}
      className={classNames(
        `px-2 py-1 text-xs font-semibold text-white rounded-sm shadow-xs bg-amber-600 hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 z-40 focus-visible:outline-amber-600, ${className}`
      )}
    >
      {text}
    </button>
  );
};

export default Button;
