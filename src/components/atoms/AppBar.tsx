import React, { FC } from 'react';
import MatAppBar from '@material-ui/core/AppBar';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      flexGrow: 1,
      backgroundColor: '#2081c3',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: '2vw',
      paddingRight: '2vw',
      color: 'inherit',
    },
  }),
);

interface AppBarProps {
  children: React.ReactNode;
}

const AppBar: FC<AppBarProps> = ({ children }) => {
  const classes = useStyles();

  return <MatAppBar className={classes.root}>{children}</MatAppBar>;
};

export default AppBar;
