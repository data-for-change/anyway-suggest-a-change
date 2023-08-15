import React, { FC } from "react";
import MatAppBar from "@mui/material/AppBar";
import { createStyles, makeStyles } from "@mui/styles";
import { smokeWhiteColor } from "style";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      flexGrow: 1,
      backgroundColor: smokeWhiteColor,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: "2vw",
      paddingRight: "2vw",
      color: "inherit",
    },
  })
);

const AppBar: FC = ({ children }) => {
  const classes = useStyles();

  return <MatAppBar className={classes.root}>{children}</MatAppBar>;
};

export default AppBar;
