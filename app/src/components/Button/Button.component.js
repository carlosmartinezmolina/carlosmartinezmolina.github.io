import React from "react";
import "./Button.component.scss";

const Button = ({
  ObjectName,
  title,
  backgroundColor,
  featherColor = "gray",
  width,
  marginLeft = "0%",
  marginRight = "0%",
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
        display: "flex",
        backgroundColor: backgroundColor ? backgroundColor : null,
        width: width,
        borderRadius: "6px",
        marginLeft: marginLeft,
        marginRight: marginRight,
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
          style={{
            marginRight: "5px",
            marginLeft: "5px",
            display: "flex",
          }}
          color={featherColor}
        />
      )}
      {title}
    </button>
  );
};

export default Button;
