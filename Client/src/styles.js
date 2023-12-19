import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f0e6dc",
    color: "black",
  },
  appBarLogo: {
    height: "2.2rem",
    padding: "1rem",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      height: "1.3rem",
    },
  },
  // appBarBtn: {
  //   backgroundColor: "#CB9274",
  //   color: "white",
  //   borderRadius: "50px",
  //   textTransform: "none",
  //   fontFamily: "Poppins",
  //   letterSpacing: "1px",
  //   paddingLeft: "0.8rem",
  //   paddingRight: "0.8rem",
  //   "&:hover": {
  //     backgroundColor: "black",
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     fontSize: "0.6rem",
  //   },
  // },
  main: {
    boxSizing: "border-box",
    width: "100%",
  },
  home: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    background:
      "linear-gradient( rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65) ), url('Images/21.jpg')",
    backgroundPositionY: "-10rem",
    backgroundSize: "cover",
    padding: "4rem",
    color: "#F6F4F2",
    [theme.breakpoints.down("sm")]: {
      height: "75vh",
      backgroundSize: "cover",
      backgroundPositionY: "35rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "100vh",
      background:
        "linear-gradient( rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65) ), url('Images/51.jpg')",
      backgroundPositionX: "-5rem",
      backgroundSize: "cover",
      padding: "1.2rem",
    },
  },
  title: {
    fontSize: "8rem",
    fontFamily: "Fraunces",
    letterSpacing: "5px",
    color: "#F6F4F2",
    [theme.breakpoints.down("sm")]: {
      fontSize: "5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.7rem",
    },
  },
  subtitle: {
    fontSize: "2rem",
    fontFamily: "Italiana",
    letterSpacing: "3px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.6rem",
    },
  },
  homeBtn: {
    marginTop: "1rem",
    fontSize: "1.1rem",
    backgroundColor: "#CB9274",
    color: "white",
    borderRadius: "50px",
    textTransform: "none",
    fontFamily: "Italiana",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    letterSpacing: "2px",
    "&:hover": {
      backgroundColor: "black",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.6rem",
    },
  },
  formDiv: {
    padding: "2rem",
    backgroundColor: "#F0E6DC",
    boxSizing: "border-box",
    overflow: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      padding: "0.8rem",
    },
  },
  desc: {
    padding: "1rem",
    [theme.breakpoints.down("xs")]: {
      padding: "0.8rem",
    },
  },
  yDiv: {
    fontFamily: "Fraunces",
    fontWeight: "100",
    fontSize: "2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
    },
  },
  ySpan: {
    fontSize: "1.5rem",
    paddingBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  ul: {
    fontFamily: "roboto",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1rem",
    },
  },
  li: {
    padding: "1.5rem",
    paddingLeft: "0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      padding: "1rem",
      paddingLeft: "0",
    },
  },
  pricingHeading: {
    fontFamily: "Fraunces",
    fontWeight: "100",
    fontSize: "1.2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  priceSpan: {
    fontSize: "5rem",
    fontWeight: "400",
    fontFamily: "Italiana",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4rem",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    color: "white",
    borderRadius: "5px",
    gap: "20px",
    backgroundColor: "#cb9274",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: "0.5rem",
      margin: "0.5rem",
    },
  },

  input: {
    padding: "1rem",
    width: "100%",
    outline: "none",
    fontSize: "1rem",
    borderRadius: "3px",
    border: "none",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      padding: "0.6rem",
    },
  },
  twoColDiv: {
    width: "100%",
    display: "flex",
    gap: "20px",
  },
  labelGender: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.6rem",
    },
  },
  footer: {
    backgroundColor: "black",
    color: "white",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
  },
  select: {
    padding: "1rem",
    border: "none",
    outline: "none",
    borderRadius: "5px",
    [theme.breakpoints.down("xs")]: {
      padding: "0.5rem",
    },
  },
  submitBtn: {
    background: "black",
    color: "white",
    textTransform: "none",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "green",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
  footerTxt: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.6rem",
    },
  },
}));

export default useStyles;
