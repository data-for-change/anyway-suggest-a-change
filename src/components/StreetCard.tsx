import React, { FC } from 'react';
import { IconButton, Typography, CardMedia, CardContent, CardActions, Card, SvgIconTypeMap, CardHeader, Box } from '@material-ui/core';
import { BookmarkBorder, Chat } from '@material-ui/icons';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

export interface StreetCardProps {
  yishuv_name?: string;
  street?: string;
  road?: number;
  road_segment_id?: number;
  road_segment_name?: string;
  //handleClick?: ({ street, road_segment_name }: StreetCardProps, yishuv_name: string) => void;
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

const StreetCard: FC<StreetCardProps> = ({ street, yishuv_name, road, road_segment_id, road_segment_name }, handleClick) => {
  const classes = useStyles();
  const title = street ? `${yishuv_name}, ${street}` : `כביש ${road}, ${road_segment_name}`;

  return (
    <Card className={classes.streetCard} onClick={handleClick}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image="https://upload.wikimedia.org/wikipedia/commons/a/a9/Long_and_Loop_Street_map.svg"
      />
      <Box className={classes.streetCardActions}>
        <CardIcon className={classes.cardIconButton} Icon={BookmarkBorder} ariaLabel="report" />
        <CardIcon className={classes.cardIconButton} Icon={Chat} ariaLabel="comments" />
      </Box>
      <CardHeader className={classes.cardHeader} title={title}></CardHeader>
    </Card>
  );
};

export default StreetCard;

const useStyles = makeStyles((theme: Theme) => ({
  cardIconButton: {
    backgroundColor: 'rgb(0, 157, 224)',
    '&:hover': {
      backgroundColor: 'rgb(0, 157, 224)',
    },
    '& svg': {
      fontSize: '2rem',
      color: 'white',
    },
    margin: 8,
    borderRadius: '100%',
  },
  streetCard: {
    height: 'fit-content',
    width: '350px',
    maxHeight: '350px',
    marginRight: '45px',
    marginBottom: '24px',
    position: 'relative',
    borderRadius: '16px',
    flexShrink: 0,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    },
    direction: 'rtl'
  },
  streetCardActions: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    left: 10,
    borderRadius: '100%',
  },
  cardHeader: {
    '& span': {
      fontSize: '2.5vh',
      fontWeight: 'bold',
    },
    backgroundColor: 'white',
    color: 'black'
  },
}));
