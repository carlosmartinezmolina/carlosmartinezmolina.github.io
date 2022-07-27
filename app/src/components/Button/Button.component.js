import React from "react";
import "./Button.component.scss";

const Button = ({
  ObjectName,
  title,
  backgroundColor,
  width,
  marginLeft = "0%",
  marginRight = "0%",
  disabled,
  writeClick,
  boostrapClass,
  opacity = "1",
}) => {
  //   let rootElement = document.documentElement;
  //   rootElement.style.setProperty("--buttonWidth", width);
  //   rootElement.style.setProperty("--buttonBackgroundColor", backgroundColor);
  console.log(ObjectName);
  return (
    <button
      type="button"
      className={boostrapClass}
      style={{
        display: "flex",
        //backgroundColor: backgroundColor,
        width: width,
        borderRadius: "6px",
        marginLeft: marginLeft,
        marginRight: marginRight,
        justifyContent: "space-between",
        opacity: opacity,
      }}
      disabled={disabled}
      onClick={writeClick}
    >
      {ObjectName && (
        <ObjectName
          style={{
            marginRight: "5px",
            marginLeft: "5px",
            display: "flex",
          }}
          color="gray"
        />
      )}
      {title}
    </button>
  );
};

export default Button;
