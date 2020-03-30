import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 52,
    height: 28,
    padding: 0,
    margin: theme.spacing(1)
  },
  switchBase: {
    padding: 2,
    "&$checked": {
      transform: "translateX(23px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#303030",
        opacity: 1,
        border: "none"
      }
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      padding: 3
    },
  },
  thumb: {
    width: 24,
    height: 24
  },
  track: {
    borderRadius: 26 / 2,
    // backgroundColor: theme.palette.grey[200],
     backgroundColor: "#303030",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"])
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      // checkedIcon={<FontAwesomeIcon className={classes.moon} size="sm" icon={["fas", "moon"]} />}
      // icon={<FontAwesomeIcon  size="sm" icon={["fas", "sun"]} />}
      focusVisibleClassName={classes.focusVisible}
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});

const ModeSwitch = (props) => {
  const { toggle } = props;
  const [state, setState] = useState({
    chackedA: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  return (
    <React.Fragment>
      <FormControlLabel
        style={{ marginRight: "0" }}
        control={
          <IOSSwitch
            checked={state.chackedA}
            onClick={toggle}
            onChange={handleChange}
            name='chackedA'
          />
        }
      />

      {/* <div>
        <span>
          <WbSunnyOutlined
            fontSize='small'
            style={{ color: state.change ? "white" : "black" }}
          />
        </span>
      </div>
      <div onClick={toggle}>
        <div onClick={handleToggleSwitch}>
          <span style={{ marginLeft: "5px" }}>
            {state ? (
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
            style={{ color: state.change ? "white" : "black" }}
          />
        </span>
      </div> */}
    </React.Fragment>
  );
};

export default ModeSwitch;
