import React from "react";

import {
  makeStyles,
  ListItemText,
  List,
  ListItem,
  ListItemIcon,
  SwipeableDrawer,
  Paper,
  Typography
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: 200
  },
  caption: {
    fontSize: "1.5rem",
    marginTop: theme.spacing(4)
  },
  header: {
    height: theme.spacing(6)
  }
}));

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const { closeDrawer, open, openDrawer } = props;
  const Links = (
    <div
      className={[classes.list, classes.fullList].join(" ")}
      role='presentation'
      onClick={closeDrawer}
      onKeyDown={closeDrawer}>
      <Paper className={classes.header}>
        <Typography variant="h3" align="center" className={classes.caption}>Paulsimon</Typography>
      </Paper>
      <List>
        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon="user-alt"/>
          </ListItemIcon>
          <ListItemText primary='Profile' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon="book"/>
          </ListItemIcon>
          <ListItemText primary='Education' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon="book-reader"/>
          </ListItemIcon>
          <ListItemText primary='Experience' />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor={"left"}
          open={open}
          onOpen={openDrawer}
          onClose={closeDrawer}
        >
          {Links}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
