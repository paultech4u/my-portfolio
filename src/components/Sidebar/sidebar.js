import React from "react";
import { Link } from "react-router-dom";
import classes from "./sidebar.module.css";

function Sidebar(props) {
  return (
    <div className={classes.sidenav}>
      <div className={classes.sidenav_label}>
        <Link to='/'>
          <div className={classes.label}>
            <span className={classes.labelname}>About</span>
          </div>
        </Link>
        <Link to='/portfolio'>
          <div className={classes.label}>
            <span className={classes.labelname}>Portfolio</span>
          </div>
        </Link>
        <Link to='/'>
          <div className={classes.label}>
            <span className={classes.labelname}>Blog</span>
          </div>
        </Link>
        <Link to='/'>
          <div className={classes.label}>
            <span className={classes.labelname}>Contact</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
