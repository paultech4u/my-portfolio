import React, { useState } from "react";
import ToggleSwitch from "./toggle";

import { makeStyles, AppBar, Tab, Tabs } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  Appbar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',  
  },
  switch_wrapper: {
    display: "flex",
    alignItems: "center",
    paddingRight: "10px"
  }
}));

function LinkTab(props) {
  return (
    <Tab
      component="a"
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
  const { toggle, dark } = props;
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };  
  const styles = useStyles();
  return (
    <AppBar position='fixed' className={styles.Appbar}>
      <Tabs centered onChange={handleChange} value={value} style={{flexGrow: '2'}}>
        <LinkTab 
        label='About'
        href="./about" 
         alt='about' 
         {...tabProps(0)} />
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
      <div className={styles.switch_wrapper}>
        <ToggleSwitch className={dark} onclick={toggle} />
      </div>
    </AppBar>
  );
}

export default Navbar;
