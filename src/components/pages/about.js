import React from "react";
// import LocationStatus from "../locationStatus";
import {
  makeStyles,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Grid
} from "@material-ui/core";
import { PhoneOutlined, MailOutline } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles(() => ({
  "@global": {
       a: {
          textDecoration: 'none'
       }
  },
  about: {
    paddingTop: '50px',
    overflow: 'hidden',
    height: '100vh'
  },
  mail: {
    borderBottom: '2px solid rgb(124, 255, 124)',
    "&:hover": {
      transition: 'ease-out .7s',
      backgroundColor: 'rgb(124, 255, 124)',
   }
  },
  icon_link: {
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
  },
  intro: {
    display: "flex",
    flexDirection: "column",
    fontWeight: 300,
    paddingLeft: "18px"
  },
  intro_tagline: {
    maxWidth: "700px",
    paddingLeft: "50px",
    paddingRight: "50px"
  },
  intro_tag: {
    fontSize: "1.25em",
    fontWeight: "300"
  }
}));

const Icons = [
  <a href='https://github.com/speak2donsimon'>
    <FontAwesomeIcon size='lg' icon={["fab", "github"]} />
  </a>,
  <a href='./twitter'>
    <FontAwesomeIcon size='lg' icon={["fab", "twitter"]} />
  </a>,
  <a href='./medium'>
    <FontAwesomeIcon size='lg' icon={["fab", "medium"]} />
  </a>
];



const skillIcons = [
  {name: 'html5', color: 'red'},
  {name: 'js', color: 'yellow'},
  {name: 'css3', color: 'blue'},
  {name: 'react', color: 'darkblue'},
  {name: 'python', color: 'lightblue'},
  {name: 'git-alt', color: 'red'},
  {name: 'github', color: 'black'},
  {name: 'npm', color: 'red'},
]

export default function About() {
  const styles = useStyles();
  return (
    <div className={styles.about}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <div className={styles.intro_tagline}>
              <h1 style={{ marginTop: "0" }}>Hello</h1>
              <p className={styles.intro_tag}>
                I am a Software engineer, who is experienced in Software
                development and method, I am a Software engineer, who is
                experienced in Software development and method, I am a Software
                engineer, who is experienced in Software development and method
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={styles.intro}>
              <span style={{ fontSize: "2rem" }}>Paulsimon Edache</span>
              <span>Software Developer</span>
            </div>
            <List>
              <ListItem>
                <ListItemIcon>
                  <MailOutline />
                </ListItemIcon>
                <a
                  className={styles.mail}
                  href='mailto:speak2donsimon@gmail.com'>
                  <ListItemText primary='speak2donsimon@gmail.com' />
                </a>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneOutlined />
                </ListItemIcon>
                <ListItemText primary='+234805412415' />
              </ListItem>
              <ListItem style={{ paddingLeft: "20px" }}>
                {Icons.map((icon, id) => (
                  <ListItemIcon key={id}>{icon}</ListItemIcon>
                ))}
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.intro_tagline}>
            <h1 style={{ marginTop: "0" }}>Skills</h1>
            <span>PROGRAMMING LANGUAGE AND TOOLS</span>
            <List>
              <ListItem>
                {skillIcons.map(({name, color}) => (
                  <ListItemIcon key={`${name}${color}`}>
                    <FontAwesomeIcon size='3x' color={color} icon={{prefix: 'fab', iconName: name}} />
                  </ListItemIcon>
                ))}
              </ListItem>
            </List>
          </div>
        </Grid>
    </div>
  );
}
