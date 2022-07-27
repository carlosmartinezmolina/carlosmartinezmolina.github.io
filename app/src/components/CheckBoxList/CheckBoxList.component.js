import React from "react";
import "./CheckBoxList.component.scss";

const CheckBoxList = ({ textList }) => {
  var index = 1;
  return (
    <div className="checkbox row">
      {textList.map((item) => {
        return (
          <label key={index++} className="label">
            <input style={{ marginRight: "1%" }} type="checkbox" />
            {item}
          </label>
        );
      })}
    </div>
  );
};

export default CheckBoxList;
