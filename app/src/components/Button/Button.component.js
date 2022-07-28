import React from "react";

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
}) => {
  return (
    <button
      type="button"
      className={boostrapClass}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : null,
        borderRadius: "6px",
        justifyContent: "space-between",
        opacity: opacity,
        color: featherColor,
        fontWeight: fontWeight,
        fontStyle: "sans-serif",
      }}
      disabled={disabled}
      onClick={title != "Add" ? buttonClick : buttonAdd}
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
