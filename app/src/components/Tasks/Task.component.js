import React, { useState } from "react";
import "./Task.component.scss";
import {
  PlusSquare,
  Calendar,
  Unlock,
  Maximize2,
  Sun,
  Disc,
} from "react-feather";
import Card from "../Card/Card.component";
import Button from "../Button/Button.component";

const Task = () => {
  const [state, setState] = useState({
    writeTask: false,
  });

  const writeClick = (event) => {
    setState({
      writeTask: !state.writeTask,
    });
  };

  const InputObject = (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="input">
        <PlusSquare color="blue" onClick={writeClick} />
        <input
          style={{
            border: "0",
          }}
          //disabled={true}
          onClick={writeClick}
          type="text"
          placeholder="Type to add new task"
        />
      </div>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        className="rounded-circle image"
        style={{ width: "2%", height: "2%", margin: "0.5%" }}
        alt="Avatar"
      />
    </div>
  );

  const ButtonsObject = (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="buttons">
        <Button ObjectName={Maximize2} title={"Open"} disabled={true} />
        <Button
          ObjectName={Calendar}
          title={"Today"}
          marginLeft={"8%"}
          disabled={true}
          opacity={"0.6"}
        />
        <Button
          ObjectName={Unlock}
          title={"Public"}
          marginLeft={"2%"}
          disabled={true}
          opacity={"0.6"}
        />
        <Button
          ObjectName={Sun}
          title={"Normal"}
          marginLeft={"2%"}
          disabled={true}
          opacity={"0.6"}
        />
        <Button
          ObjectName={Disc}
          title={"Estimation"}
          marginLeft={"2%"}
          disabled={true}
          opacity={"0.6"}
        />
      </div>
      <div className="buttons">
        <Button
          title={"Cancel"}
          marginRight={"5%"}
          writeClick={writeClick}
          boostrapClass={"btn btn-secondary"}
        />
        <Button title={"Ok"} boostrapClass={"btn btn-primary"} />
      </div>
    </div>
  );

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
    </div>
  );
};

export default Task;
