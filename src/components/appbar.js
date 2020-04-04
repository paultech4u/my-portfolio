import React, { useState } from "react";

import { makeStyles, AppBar, Tab, Tabs, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import ModeSwitch from "./themeSwitch";
import TemporaryDrawer from "./drawer";

const useStyles = makeStyles((theme) => ({
  Appbar: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  switch_wrapper: {
    display: "flex",
    alignItems: "center",
    paddingRight: "10px",
    [theme.breakpoints.down("sm")]: {}
  },
  menu_button: {
    visibility: "visible",
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    [theme.breakpoints.up("lg")]: {
      display: "none"
    }
  },
  tabs: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    [theme.breakpoints.down("md")]: {
      visibility: "visible"
    },
    [theme.breakpoints.up("md")]: {
      visibility: "visible"
    }
  }
}));

function LinkTab(props) {
  return (
    <Tab
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

function Appbar(props) {
  const [value, setValue] = useState(0);
  const [drawer, setDrawer] = React.useState(false);

 
  const { toggle, theme } = props;
  const styles = useStyles();

  const toggleDrawer = () => {
    setDrawer(true);
  };

  const toggleDrawerClose = () => {
    setDrawer(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar position='relative' color='primary' className={styles.Appbar}>
      <div className={styles.menu_button}>
        <IconButton color='secondary' onClick={toggleDrawer}>
          <Menu />
        </IconButton>
      </div>
      <TemporaryDrawer
        open={drawer}
        openDrawer={toggleDrawer}
        closeDrawer={toggleDrawerClose}
      />
      <div className={styles.tabs}>
        <Tabs
          centered
          onChange={handleChange}
          value={value}
          style={{ flexGrow: "2" }}>
          <LinkTab 
          label='Profile' 
          href='profile' 
          alt='profile'
           {...tabProps(0)} />
          <LinkTab
            label='Education'
            href='education'
            alt='education'
            {...tabProps(1)}
          />
          <LinkTab
            label='Experience'
            href='experience'
            alt='experience'
            {...tabProps(2)}
          />
        </Tabs>
      </div>
      <div className={styles.switch_wrapper}>
        <ModeSwitch theme={theme} toggleTheme={toggle} />
      </div>
    </AppBar>
  );
}

export default Appbar;
