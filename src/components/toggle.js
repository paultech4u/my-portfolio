import React, { useState } from "react";
import {
  WbSunnyOutlined,
  ToggleOff,
  ToggleOn,
  Brightness2Outlined
} from "@material-ui/icons";

const ToggleSwitch = (props) => {
  const [Color, setColor] = useState(false);
  const { onclick } = props;
  const toggleOnHandler = () => {
    setColor(true);
  };
  const toggleOffHandler = () => {
    setColor(false);
  };
  return (
    <React.Fragment>
      <div>
        <span>
          <WbSunnyOutlined
            fontSize='small'
            style={{ color: Color ? "white" : "black" }}
          />
        </span>
      </div>
      <div onClick={onclick}>
        <div onClick={Color ? toggleOffHandler : toggleOnHandler}>
          <span style={{ marginLeft: "5px" }}>
            {Color ? (
              <ToggleOn fontSize='small' style={{ color: "lightgreen" }} />
            ) : (
              <ToggleOff fontSize='small' style={{ color: "white" }} />
            )}
          </span>
        </div>
      </div>
      <div>
        <span>
          <Brightness2Outlined
            fontSize='small'
            style={{ color: Color ? "white" : "black" }}
          />
        </span>
      </div>
    </React.Fragment>
  );
};

export default ToggleSwitch;
