import React, { FC } from "react";
import { Button, Box, Typography, makeStyles } from '@material-ui/core';
import { LocationOn, KeyboardArrowDown } from '@material-ui/icons';
import { Location } from 'pages/HomePage';

export interface LocationButtonProps {
    currentLocation: Location;
    setOpen: (x: boolean) => void;
}

export const LocationButton: FC<LocationButtonProps> = ({ currentLocation, setOpen }) => {
    const classes = useStyles();
    const {city, street, roadSegmentName} = currentLocation;
    
    return (
        <Button className={classes.container} onClick={() => setOpen(true)}>
            <Box className={classes.locationContainer}>
                <Box className={classes.iconContainer}>
                    <LocationOn className={classes.icon}></LocationOn>
                </Box>
                <Box>
                    <Typography>
                        מציג את
                    </Typography>
                    <Typography className={classes.locationText}>
                        {roadSegmentName || `${city}, ${street}`}
                    </Typography>
                </Box>
                <Box className={classes.iconContainer}>
                    <KeyboardArrowDown className={classes.icon}></KeyboardArrowDown>
                </Box>
            </Box>
        </Button>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        width: 'fit-content',
        marginRight: '12px'
    },
    locationContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
    },
    iconContainer: {
        backgroundColor: 'rgba(0, 157, 224, 0.08)',
        marginLeft: '15px',
        marginRight: '15px',
        borderRadius: '50%',
        width: '2.5rem',
        height: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: 'rgb(0, 157, 224)',
    },
    locationText: {
        fontWeight: 'bold',
        color: 'rgb(0, 157, 224)',
    }
}));