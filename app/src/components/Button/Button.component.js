import React from "react";
import {
  PlusSquare,
  Calendar,
  Unlock,
  Maximize2,
  Sun,
  Disc,
  Trash2,
  X,
  Save,
  Plus,
} from "react-feather";

const Button = ({
  ObjectName,
  title,
  backgroundColor,
  featherColor = "gray",
  featherWidth = "20px",
  disabled,
  buttonClick,
  boostrapClass,
  opacity = "1",
  fontWeight = "550",
  buttonAdd,
  border = "",
}) => {
  const resolveCall = () => {
    if (title == "Add") return buttonAdd;
    else if (title != "") return buttonClick;
    else if (title == "") {
      if (ObjectName == X || ObjectName == Trash2) return buttonClick;
      return buttonAdd;
    }
  };
  return (
    <button
      type="button"
      className={boostrapClass}
      style={{
        border: border,
        backgroundColor: backgroundColor ? backgroundColor : null,
        borderRadius: "6px",
        justifyContent: "space-between",
        opacity: opacity,
        color: featherColor,
        fontWeight: fontWeight,
        fontStyle: "sans-serif",
      }}
      disabled={disabled}
      onClick={resolveCall()}
    >
      {ObjectName && (
        <ObjectName
          className={"ms-1 me-1 mt-1 mb-1"}
          width={featherWidth}
          color={featherColor}
          style={{ display: "flex" }}
        />
      )}
      {title}
    </button>
  );
};

export default Button;
