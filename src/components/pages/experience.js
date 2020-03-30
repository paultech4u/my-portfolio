import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
//   makeStyles,
//   ListItem,
//   List,
//   ListItemIcon,
//   ListItemText,
//   Grid,
//   Typography,
  BottomNavigation,
  BottomNavigationAction
} from "@material-ui/core";

// const skillIcons = [
//   { name: "html5", color: "red" },
//   { name: "js", color: "yellow" },
//   { name: "css3", color: "blue" },
//   { name: "react", color: "darkblue" },
//   { name: "python", color: "lightblue" },
//   { name: "git-alt", color: "red" },
//   { name: "github", color: "black" },
//   { name: "npm", color: "red" }
// ];

export default function Experience(props) {
  return (
    <div style={{ height: "100vh" }}>
      {/* <Grid item xs={12} sm={6}>
        <div>
          <Typography variant='h1'>Skills</Typography>
          <Typography variant='caption'>
            PROGRAMMING LANGUAGE AND TOOLS
          </Typography>
          <List>
            <ListItem>
              {skillIcons.map(({ name, color }) => (
                <ListItemIcon key={`${name}${color}`}>
                  <FontAwesomeIcon
                    size='3x'
                    color={color}
                    icon={{ prefix: "fab", iconName: name }}
                  />
                </ListItemIcon>
              ))}
            </ListItem>
          </List>
        </div>
      </Grid> */}
      <BottomNavigation style={{width: 400}}>
         <BottomNavigationAction icon={<FontAwesomeIcon icon="user"/>}/>
      </BottomNavigation>
    </div>
  );
}
