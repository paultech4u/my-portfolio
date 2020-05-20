import { makeStyles } from "@material-ui/core/styles";

export const useLayout = makeStyles((theme) => ({
  "@global": {
    body: {
      margin: "0",
      height: "100%",
      overflow: "hidden",
      width: "100%",
    },
  },
  switch_wrapper: {
    display: "flex",
    alignItems: "flex-end",
    paddingRight: "10px",
    paddingTop: theme.spacing(2),
    justifyContent: "flex-end",
  },
  layout: {
    height: "100vh",
    overflowY: "auto",
    overflowX: "hidden",
    backgroundColor: theme.palette.background.default,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  rating: {
    width: theme.spacing(34),
    height: theme.spacing(20),
  },
}));

export const useProfile = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
  mail: {
    borderBottom: `2px solid orange`,
    "&:hover": {
      transition: "ease-out .2s",
      backgroundColor: "orange",
    },
  },
  icon_link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  intro: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
  },
  intro_tag: {
    padding: "5px",
    fontSize: "1.2rem",
    [theme.breakpoints.up("lg")]: {
      fontSize: "2em",
      fontWeight: "300",
      boxSizing: "border-box",
    },
  },
  intro_tagline: {
    padding: "20px",
    boxSizing: "border-box",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "700px",
      display: "block",
      paddingLeft: "50px",
      paddingRight: "50px",
    },
  },
  caption: {
    fontSize: "1.3rem",
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      marginTop: "0",
      fontSize: "4rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.25rem",
    },
  },
  intro_name: {
    fontSize: "1.5rem",
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  intro_label: {
    fontSize: "1.0rem",
    fontStyle: "italic",
    color: theme.palette.text.primary,
  },
  large_avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    position: "relative",
    left: "100px",
    top: "50px",
    [theme.breakpoints.up("lg")]: {
      marginTop: "20px",
      left: "0",
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  },
  detail_list: {
    paddingRight: "30px",
  },
  avatar: {
    order: 2,
    [theme.breakpoints.up("lg")]: {
      order: 3,
    },
  },
  about_me: {
    order: 1,
    color: theme.palette.text.primary,
  },
  details: {
    order: 3,
    marginTop: "40px",
  },
}));

export const useEducation = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: theme.spacing(35),
    height: theme.spacing(35),
    borderRadius: "20px",
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(1),
      width: theme.spacing(42),
      height: theme.spacing(40),
      borderRadius: "20px",
    },
  },
  header: {
    marginTop: "10px",
    marginBottom: "10px",
    paddingLeft: theme.spacing(1),
  },
  edu_list: {
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    width: "100%",
    msOverflowStyle: "none",
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "row",
      overflowX: "scroll",
      width: "100%",
      msOverflowStyle: "none",
      paddingBottom: theme.spacing(10),
    },
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  sch_name: {
    paddingBottom: "20px",
  },
  date: {
    color: "orange",
  },
  media: {
    height: 100,
    backgroundColor: "orange",
    [theme.breakpoints.up("lg")]: {
      height: 140,
    },
  },
}));

export const useExperience = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: theme.spacing(42),
    height: theme.spacing(62),
    borderRadius: "20px",
  },
  exp_list: {
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    width: "100%",
    msOverflowStyle: "none",
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(3),
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "row",
      overflowX: "scroll",
      width: "100%",
      msOverflowStyle: "none",
      paddingBottom: theme.spacing(10),
    },
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  header: {
    marginTop: "10px",
    marginBottom: "10px",
    paddingLeft: theme.spacing(2),
  },
  skill_header: {
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    color: theme.palette.text.primary,
  },
  skills: {
    color: theme.palette.text.primary,
    display: "flex",
    height: theme.spacing(30),
    maxWidth: theme.spacing(15),
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.spacing(50),
    },
  },
  workflow: {
    height: theme.spacing(40),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  media: {
    height: 160,
  },
  footer: {
    width: "100%",
    backgroundColor: theme.palette.primary.dark,
    position: "relative",
    bottom: 0,
    [theme.breakpoints.up("lg")]: {
      bottom: 0,
    },
  },
}));


