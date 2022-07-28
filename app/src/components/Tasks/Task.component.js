import React, { useState } from "react";
import "./Task.component.scss";
import {
  PlusSquare,
  Calendar,
  Unlock,
  Maximize2,
  Sun,
  Disc,
  Trash2,
  X,
} from "react-feather";
import Card from "../Card/Card.component";
import Button from "../Button/Button.component";
import CheckBoxList from "../CheckBoxList/CheckBoxList.component";
import ScreenSizeDetector from "screen-size-detector";

const Task = () => {
  const size = new ScreenSizeDetector();
  const [state, setState] = useState({
    writeTask: false,
    writeInput: true,
    buttonAcceptName: "Ok",
    buttonDisabledProp: true,
    buttonOpacity: ".6",
    textColor: "blue",
    textList: [],
    currentText: "",
    displayWidth: size.width,
    imageSize: size.width >= 1230 ? "2%" : "8%",
  });

  const writeClick = (event) => {
    if (!state.writeTask) {
      setState({
        ...state,
        writeInput: !state.writeInput,
        writeTask: !state.writeTask,
      });
    }
  };

  const buttonClick = (event) => {
    const input = document.getElementById("InputId");
    input.value = "";
    setState({
      ...state,
      writeInput: true,
      writeTask: false,
      buttonOpacity: "0.6",
    });
  };

  const buttonAdd = (event) => {
    var temp = state.textList;
    temp.push(state.currentText);
    const input = document.getElementById("InputId");
    input.value = "";
    setState({
      ...state,
      textList: temp,
      writeInput: true,
      writeTask: false,
      currentText: "",
      buttonOpacity: "0.6",
      buttonAcceptName: "Ok",
    });
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    if (event.target.value) {
      setState({
        ...state,
        currentText: event.target.value,
        buttonAcceptName: "Add",
        buttonDisabledProp: false,
        buttonOpacity: "0.8",
      });
    } else {
      setState({
        ...state,
        currentText: event.target.value,
        buttonAcceptName: "Ok",
        buttonDisabledProp: true,
        buttonOpacity: "0.6",
      });
    }
  };

  const InputObject = (
    <div className="d-flex flex-wrap justify-content-between">
      <div className="my-auto ms-2 mt-1 mb-2">
        <PlusSquare color="blue" onClick={writeClick} />
        <input
          id="InputId"
          className="task_input"
          style={{
            border: "0",
          }}
          disabled={state.writeInput}
          onChange={handleChange}
          type="text"
          placeholder="Type to add new task"
        />
      </div>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        className="rounded-circle my-auto ms-2 mt-1 mb-2"
        style={{
          width: state.imageSize,
          height: state.imageSize,
          // margin: "0.5%",
          opacity: state.buttonOpacity,
        }}
        alt="Avatar"
      />
    </div>
  );

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
          ObjectName={state.displayWidth >= 1230 ? null : X}
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

  const CheckBoxListObject = <CheckBoxList textList={state.textList} />;

  return (
    <div className="ms-2 mt-2">
      <Card height={"auto"} width={"auto"} Object={InputObject} />
      {state.writeTask && (
        <Card
          height={"auto"}
          width={"auto"}
          Object={ButtonsObject}
          backgroundColor={"#e6ecec"}
        />
      )}
      {state.textList.length > 0 && (
        <Card height={"auto"} width={"auto"} Object={CheckBoxListObject} />
      )}
    </div>
  );
};

export default Task;
