import React from "react";
import "./Button.css";

const Button = ({
  text,
  onClick,
  type = "primary",
  color = "var(--primary-color)",
  size = "M",
}) => {
  var buttonType = type.toLowerCase();
  var buttonSize = size.toUpperCase();

  if (
    !["PRIMARY", "SECONDARY", "TERTIARY", "GHOST"].includes(
      buttonType.toUpperCase()
    )
  ) {
    buttonType = "primary";
  }

  if (!["XS", "S", "M", "L", "XL"].includes(buttonSize)) {
    buttonSize = "M";
  }

  return (
    <button
      className={`button ${buttonType} size-${buttonSize}`}
      onClick={onClick}
      style={{ "--button-color": color }}
    >
      {text}
    </button>
  );
};

export default Button;
