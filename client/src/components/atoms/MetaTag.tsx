import React, { FC } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: import.meta.env.VITE_SHOW_META_TAGS === "true" ? "block" : "none",
    position: "absolute",
    top: 0,
    left: 0,
  },
});

const MetaTag: FC = ({ children }) => {
  const styles = useStyles();
  return <div className={styles.root}>{children}</div>;
};

export default MetaTag;
