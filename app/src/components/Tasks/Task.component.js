import React, { useState } from "react";
import "./Task.component.scss";
import {
  PlusSquare,
  Calendar,
  Unlock,
  Maximize2,
  Sun,
  Disc,
  Bluetooth,
  ChevronDown,
} from "react-feather";
import Card from "../Card/Card.component";
import Button from "../Button/Button.component";
import CheckBoxList from "../CheckBoxList/CheckBoxList.component";

const Task = () => {
  const [state, setState] = useState({
    writeTask: false,
    writeInput: true,
    buttonAcceptName: "Ok",
    buttonDisabledProp: true,
    buttonOpacity: ".6",
    textColor: "blue",
    textList: [],
    currentText: "",
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
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="input">
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
        className="rounded-circle"
        style={{
          width: "2%",
          height: "2%",
          margin: "0.5%",
          opacity: state.buttonOpacity,
        }}
        alt="Avatar"
      />
    </div>
  );

  const ButtonsObject = (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="buttons">
        <Button
          ObjectName={Maximize2}
          title={"Open"}
          disabled={state.buttonDisabledProp}
          opacity={state.buttonOpacity}
          featherColor="black"
          fontWeight="550"
          backgroundColor={"#adb5bd"}
        />
        <Button
          ObjectName={Calendar}
          title={"Today"}
          marginLeft={"8%"}
          disabled={state.buttonDisabledProp}
          opacity={state.buttonOpacity}
        />
        <Button
          ObjectName={Unlock}
          title={"Public"}
          marginLeft={"2%"}
          disabled={state.buttonDisabledProp}
          opacity={state.buttonOpacity}
        />
        <Button
          ObjectName={Sun}
          title={"Normal"}
          marginLeft={"2%"}
          disabled={state.buttonDisabledProp}
          opacity={state.buttonOpacity}
        />
        <Button
          ObjectName={Disc}
          title={"Estimation"}
          marginLeft={"2%"}
          disabled={state.buttonDisabledProp}
          opacity={state.buttonOpacity}
        />
      </div>
      <div className="buttons">
        <Button
          title={"Cancel"}
          marginRight={"5%"}
          buttonClick={buttonClick}
          boostrapClass={"btn btn-secondary"}
          featherColor="white"
        />
        <Button
          buttonClick={buttonClick}
          title={state.buttonAcceptName}
          buttonAdd={buttonAdd}
          boostrapClass={"btn btn-primary"}
          featherColor="white"
        />
      </div>
    </div>
  );

  const CheckBoxListObject = <CheckBoxList textList={state.textList} />;

  return (
    <div className="task">
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
