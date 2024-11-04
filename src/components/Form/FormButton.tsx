import { ComponentPropsWithoutRef } from "react";
import Loader from "../Loader";

interface Button extends ComponentPropsWithoutRef<"button"> {
  bgColor?: string;
  full_width?: boolean;
  border?: string;
  loading?: boolean;
}

const FormButton = ({
  type = "button",
  value,
  onClick,
  full_width,
  className,
  disabled = false,
  loading = false
}: Button) => {
  return (
    <button
      className={className}
      style={{
        backgroundColor: disabled ? "#eafbff" : undefined,
        border: `1px solid`,
        width: full_width ? "100%" : "auto",
        display: full_width ? "block" : "inline-block",
        color: disabled ? "#03131e" : undefined
      }}
      type={type}
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
    >
      {loading ? <Loader /> : value}
    </button>
  );
};

export default FormButton;
