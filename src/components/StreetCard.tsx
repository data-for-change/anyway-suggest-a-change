import React, { FC } from 'react';
import { IconButton, Typography, CardMedia, CardContent, CardActions, Card, SvgIconTypeMap, CardHeader, Box } from '@material-ui/core';
import { ErrorRounded, Chat } from '@material-ui/icons';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

export interface StreetCardProps {
  city: string;
  streetName: string;
  handleClick: () => void;
}

export interface CardIconProps {
  className?: string;
  ariaLabel: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}

const CardIcon: FC<CardIconProps> = ({ ariaLabel, Icon, className }) => {
  return (
    <IconButton className={className} aria-label={ariaLabel}>
      <Icon />
    </IconButton>
  );
};

const StreetCard: FC<StreetCardProps> = ({ streetName, city, handleClick }) => {
  const classes = useStyles();

  return (
    <Card className={classes.streetCard} onClick={handleClick}>
      <CardHeader className={classes.cardHeader} title={`${city}, ${streetName}`}></CardHeader>
      <CardMedia
        component="img"
        alt="green iguana"
        height="340"
        image="https://upload.wikimedia.org/wikipedia/commons/a/a9/Long_and_Loop_Street_map.svg"
      />
      <Box className={classes.streetCardActions}>
        <CardIcon className={classes.cardIconButton} Icon={ErrorRounded} ariaLabel="report" />
        <CardIcon className={classes.cardIconButton} Icon={Chat} ariaLabel="comments" />
      </Box>
    </Card>
  );
};

export default StreetCard;

const useStyles = makeStyles((theme: Theme) => ({
  cardIconButton: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    '& svg': {
      fontSize: '2rem',
      color: 'white',
    },
    margin: 8,
    borderRadius: '20%',
  },
  streetCard: {
    height: 'fit-content',
    width: '600px',
    marginRight: '12px',
    marginBottom: '24px',
    position: 'relative',
    borderRadius: '16px',
    flexShrink: 0
  },
  streetCardActions: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  cardHeader: {
    '& span': {
      fontSize: '2vh',
      fontWeight: 'bold',
    },
  },
}));
