import React, { useState } from "react";

import { makeStyles, AppBar, Tab, Tabs, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import ModeSwitch from "./modeSwitch";

const useStyles = makeStyles((theme) => ({
  Appbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {}
  },
  switch_wrapper: {
    display: "flex",
    alignItems: "center",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {
    }
  },
  menuButton: {
    visibility: "visible",
    [theme.breakpoints.up("md")]: {
      visibility: "hidden"
    },
    [theme.breakpoints.up("lg")]: {
      visibility: "hidden"
    }
  },
  tabs: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    [theme.breakpoints.down("md")]: {
       visibility: "visible"
    }
  }
}));

function LinkTab(props) {
  return (
    <Tab
      component='a'
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function tabProps(index) {
  return {
    id: `nav-tab-${index}`
  };
}

function Navbar(props) {
  const { toggle, theme } = props;
  const styles = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar position='fixed' color="primary" className={styles.Appbar}>
      <div className={styles.menuButton}>
        <IconButton color="secondary" >
          <Menu />
        </IconButton>
      </div>
      <div className={styles.tabs}>
        <Tabs
          centered
          onChange={handleChange}
          value={value}
          style={{ flexGrow: "2" }}>
          <LinkTab label='About' href='./about' alt='about' {...tabProps(0)} />
          <LinkTab
            label='Education'
            href='./education'
            alt='education'
            {...tabProps(1)}
          />
          <LinkTab
            label='Experience'
            href='./experience'
            alt='experience'
            {...tabProps(2)}
          />
        </Tabs>
      </div>
      <div className={styles.switch_wrapper}>
        <ModeSwitch theme={theme} toggleTheme={toggle}/>
      </div>
    </AppBar>
  );
}

export default Navbar;
