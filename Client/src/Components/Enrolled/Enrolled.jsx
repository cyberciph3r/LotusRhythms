import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";

const Enrolled = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Typography className={classes.txt}>
        Congratulations on taking the first step towards a healthier and more
        balanced you!
      </Typography>
    </div>
  );
};

export default Enrolled;
