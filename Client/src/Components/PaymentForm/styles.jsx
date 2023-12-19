import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    boxSizing: "border-box",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    background:
      "radial-gradient(50% 123.47% at 50% 50%, #00ff94 0%, #720059 100%),linear-gradient(121.28deg, #669600 0%, #ff0000 100%),linear-gradient(360deg, #0029ff 0%, #8fff00 100%),radial-gradient(100% 164.72% at 100% 100%, #6100ff 0%, #00ff57 100%),radial-gradient(100% 148.07% at 0% 0%, #fff500 0%, #51d500 100%)",
    backgroundBlendMode: "screen, color-dodge, overlay, difference, normal",
  },
  amountDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "5px",
    margin: "1rem",
    gap: "1rem",
    boxSizing: "border-box",
  },
  twoColDiv: {
    width: "100%",
    display: "flex",
    gap: "20px",
  },
  total: {
    fontWeight: "bolder",
  },
  payBtn: {
    backgroundColor: "blue",
    color: "white",
    "&:hover": {
      backgroundColor: "green",
    },
  },
}));

export default useStyles;
