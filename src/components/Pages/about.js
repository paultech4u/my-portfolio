import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Twemoji } from 'react-emoji-render';
import { Brightness3, ToggleOff, ToggleOn, WbSunny } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  // night: {
  //   color: "white",
  //   backgroundColor: "rgb(179,171,171)"
  // },
  switch_wrapper: {
    position: "absolute",
    right: "30px",
    top: "20px",
    display: "flex"
  }
}));

function About(props) {
  const [Background, setBackground] = useState(false);
  const toggleOnHandler = () => {
    setBackground(true);
  };
  const toggleOffHandler = () => {
    setBackground(false);
  };
  const style = useStyles();
  return (
    <div
      style={{
        height: "100vh",
        position: "absolute",
        width: "1071px",
        fontFamily: 'Aclonica',
        color: Background ? "white" : "black",
        background: Background ? "rgb(179,171,171)" : "rgb(0,0,0,0)"
      }}
      className={style.night}>
      <div style={{ position: "absolute", left: "50px", display: 'flex' }}>
        <h1 style={{fontSize: '2rem'}}>Hello!</h1>
        <Twemoji text=':wave:'/>
      </div>
      <div className={style.switch_wrapper}>
        <div>
          <span>
            <WbSunny fontSize='large' color={Background ? 'black' : 'white'} />
          </span>
        </div>
        <div onClick={Background ? toggleOffHandler : toggleOnHandler}>
          <span>
            {Background ? (
              <ToggleOn fontSize='large' color='secondary' />
            ) : (
              <ToggleOff fontSize='large' color='primary' />
            )}
          </span>
        </div>
        <div>
          <span>
            <Brightness3 fontSize='large' color={Background ? 'black' : 'white'} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
