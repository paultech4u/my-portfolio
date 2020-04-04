import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

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
        backgroundColor: theme.palette.background.default,
        opacity: 1,
        border: "none"
      }
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      padding: 3
    }
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    backgroundColor: "#303030",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"])
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
      <Switch
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

const ModeSwitch = ({ toggleTheme, theme }) => {

  return (
    <React.Fragment>
      <FormControlLabel
        style={{ marginRight: "0" }}
        control={
          <IOSSwitch
            checked={theme === 'light' ? false : true} // checked when true and unchecked when false
            onClick={toggleTheme}
          />
        }
      />
    </React.Fragment>
  );
};

export default ModeSwitch;
