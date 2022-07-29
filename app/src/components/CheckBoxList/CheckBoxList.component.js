import React, { useEffect, useState } from "react";
import "./CheckBoxList.component.scss";
import Card from "../Card/Card.component";
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
import Button from "../Button/Button.component";

const CheckBoxList = ({ textList, modifyText, state, setState }) => {
  const [list, setList] = useState({
    showList: [],
    focusId: null,
    modificationText: "",
  });
  useEffect(() => {
    (async () => {
      var temp = [];
      for (var i = 0; i < textList.length; i++) {
        temp.push(false);
      }
      setList({
        ...list,
        showList: temp,
      });
    })();
  }, [textList]);

  const buttonClick = (event) => {
    const temp = list.showList;
    temp[list.focusId] = false;
    console.log("pepe");
    event.target.value = list.modificationText;
    modifyText(event, list.focusId);
    setList({
      ...list,
      showList: temp,
      focusId: null,
    });
  };

  const buttonAdd = (event) => {
    const temp = list.showList;
    temp[list.focusId] = false;
    setList({
      ...list,
      showList: temp,
      focusId: null,
    });
    setState({
      ...state,
      buttonOpacity: "0.6",
      buttonAcceptName: "Ok",
      buttonDisabledProp: true,
      featherAdd: X,
    });
  };

  const ButtonsObject = (
    <div
      className={
        state.displayWidth >= 1230
          ? "d-flex flex-wrap justify-content-between"
          : "d-flex flex-wrap justify-content-between"
      }
    >
      <div
        className={
          state.displayWidth >= 1230
            ? "d-flex my-auto ms-2 mt-1 mb-2"
            : "d-flex my-auto ms-1 mt-1 mb-1"
        }
      >
        <Button
          ObjectName={Maximize2}
          title={state.displayWidth >= 1230 ? "Open" : ""}
          disabled={state.buttonDisabledProp}
          opacity={state.buttonOpacity}
          featherColor="black"
          fontWeight="550"
          backgroundColor={"#adb5bd"}
          boostrapClass={"btn-xs d-flex"}
          featherWidth={state.displayWidth >= 1230 ? "30px" : "20px"}
          border={state.displayWidth >= 1230 ? "" : "none"}
        />
        <Button
          ObjectName={Calendar}
          title={state.displayWidth >= 1230 ? "Today" : ""}
          disabled={state.buttonDisabledProp}
          opacity={state.buttonOpacity}
          boostrapClass={
            state.displayWidth >= 1230
              ? "ms-5 btn-xs d-flex"
              : "ms-1 btn-xs d-flex"
          }
          featherWidth={state.displayWidth >= 1230 ? "30px" : "20px"}
          border={state.displayWidth >= 1230 ? "" : "none"}
        />
        <Button
          ObjectName={Unlock}
          title={state.displayWidth >= 1230 ? "Public" : ""}
          disabled={state.buttonDisabledProp}
          opacity={state.buttonOpacity}
          boostrapClass={
            state.displayWidth >= 1230
              ? "ms-2 btn-xs d-flex"
              : "ms-1 btn-xs d-flex"
          }
          featherWidth={state.displayWidth >= 1230 ? "30px" : "20px"}
          border={state.displayWidth >= 1230 ? "" : "none"}
        />
        <Button
          ObjectName={Sun}
          title={state.displayWidth >= 1230 ? "Normal" : ""}
          disabled={state.buttonDisabledProp}
          opacity={state.buttonOpacity}
          boostrapClass={
            state.displayWidth >= 1230
              ? "ms-2 btn-xs d-flex"
              : "ms-1 btn-xs d-flex"
          }
          featherWidth={state.displayWidth >= 1230 ? "30px" : "20px"}
          border={state.displayWidth >= 1230 ? "" : "none"}
        />
        <Button
          ObjectName={Disc}
          title={state.displayWidth >= 1230 ? "Estimation" : ""}
          disabled={state.buttonDisabledProp}
          opacity={state.buttonOpacity}
          boostrapClass={
            state.displayWidth >= 1230
              ? "ms-2 btn-xs d-flex"
              : "ms-1 btn-xs d-flex"
          }
          featherWidth={state.displayWidth >= 1230 ? "30px" : "20px"}
          border={state.displayWidth >= 1230 ? "" : "none"}
        />
        {state.displayWidth < 1230 && (
          <Button
            ObjectName={Trash2}
            title={state.displayWidth >= 1230 ? "Cancel" : ""}
            buttonClick={buttonClick}
            boostrapClass={"ms-1 btn-xs d-flex"}
            disabled={state.buttonDisabledProp}
            opacity={state.buttonOpacity}
            featherWidth={state.displayWidth >= 1230 ? "30px" : "20px"}
            border={state.displayWidth >= 1230 ? "" : "none"}
          />
        )}
      </div>
      <div
        className={
          state.displayWidth >= 1230
            ? "d-flex my-auto ms-2 mt-1 mb-2"
            : "d-flex my-auto ms-2 mt-1 mb-2"
        }
      >
        {state.displayWidth >= 1230 && (
          <Button
            title={state.displayWidth >= 1230 ? "Cancel" : ""}
            buttonClick={buttonClick}
            boostrapClass={"d-flex btn-xs btn btn-secondary"}
            featherColor="white"
          />
        )}
        <Button
          ObjectName={state.displayWidth >= 1230 ? null : state.featherAdd}
          buttonClick={buttonClick}
          title={state.displayWidth >= 1230 ? state.buttonAcceptName : ""}
          buttonAdd={buttonAdd}
          boostrapClass={
            state.displayWidth >= 1230
              ? "ms-2 me-2 d-flex btn-xs btn btn-primary"
              : "ms-1 me-1 d-flex btn-xs"
          }
          featherColor="white"
          backgroundColor={state.displayWidth >= 1230 ? "" : "rgb(12, 98, 225)"}
          featherWidth={state.displayWidth >= 1230 ? "30px" : "20px"}
        />
      </div>
    </div>
  );

  var index = 0;
  const handleChange = (event) => {
    modifyText(event, list.focusId);
  };

  const handleFocus = (event) => {
    const temp = list.showList;
    for (var i = 0; i < temp.length; i++) {
      temp[i] = false;
    }
    temp[event.target.id] = true;
    setList({
      ...list,
      showList: temp,
      focusId: event.target.id,
      modificationText: textList[event.target.id],
    });
  };

  const checkBox = (item, index) => (
    <div key={index} className="ms-2 mt-2 mb-2">
      <input type="checkbox" />
      <input
        id={index - 1}
        className="task_input"
        style={{
          border: "0",
        }}
        type="text"
        onChange={handleChange}
        onFocus={handleFocus}
        value={item}
      />
    </div>
  );

  return (
    <div className="checkbox row ms-1 mt-1 me-1">
      {textList.map((item) => {
        index++;
        const temp = checkBox(item, index);
        return (
          <>
            <Card
              keyValue={index}
              height={"auto"}
              width={"auto"}
              Object={temp}
            />
            {list.showList[index - 1] && (
              <Card
                height={"auto"}
                width={"auto"}
                Object={ButtonsObject}
                backgroundColor={"#e6ecec"}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default CheckBoxList;
