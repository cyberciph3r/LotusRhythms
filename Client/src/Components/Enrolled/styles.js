import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    boxSizing: "border-box",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "4rem",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
    },
  },
  txt: {
    fontSize: "2rem",
    fontFamily: "Italiana",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
}));

export default useStyles;
