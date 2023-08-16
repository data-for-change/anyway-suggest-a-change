import React from 'react';
import { IconButton, Typography, CardMedia, CardContent, CardActions, Card, SvgIconTypeMap } from '@material-ui/core';
import { ErrorRounded, Chat } from '@material-ui/icons';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

export interface StreetCardProps {
  city: string;
  streetName: string;
}

export interface CardIconProps {
  className?: string;
  ariaLabel: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}

const useStyles = makeStyles((theme: Theme) => ({
  cardIconButton: {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  streetCard: {
    height: 'fit-content',
    width: 345,
    marginRight: '12px',
    marginBottom: '24px',
    position: 'relative',
    borderRadius: '20px',
  },
  streetCardActions: {
    bottom: 50,
    position: 'absolute',
    width: '90%',
    justifyContent: 'flex-end',
  },
}));

const CardIcon: React.FC<CardIconProps> = ({ ariaLabel, Icon, className }) => {
  return (
    <IconButton className={className} aria-label={ariaLabel}>
      <Icon fontSize="medium" />
    </IconButton>
  );
};

const StreetCard: React.FC<StreetCardProps> = ({ streetName, city }) => {
  const classes = useStyles();
  return (
    <Card className={classes.streetCard}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="280"
        image="https://upload.wikimedia.org/wikipedia/commons/a/a9/Long_and_Loop_Street_map.svg"
      />
      <CardActions className={classes.streetCardActions}>
        <CardIcon Icon={ErrorRounded} ariaLabel="report" />
        <CardIcon Icon={Chat} ariaLabel="comments" />
      </CardActions>
      <CardContent>
        <Typography variant="h5" component="div" style={{ fontWeight: 'bold' }}>
          {city}, {streetName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StreetCard;
