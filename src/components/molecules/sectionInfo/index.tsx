import React, { FC } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

import { useFetch } from 'hooks/use-fetch';
import { Resolution } from 'models/WidgetData';
import Comments from 'components/Comments';
import { Location } from 'pages/HomePage'

export interface SectionInfoProps {
    location: Location
    
}

const SectionInfo:FC<SectionInfoProps> = ({location}) => {
    const classes = useStyles();
    
    return (
        <>
            <Box className={classes.titleContainer}>
                <Typography className={classes.title} variant={'h4'}>
                    Section Info
                </Typography>
            </Box>
            <Box className={classes.infoGraphicsContainer}>
                    InfoGraphics
                {/* <InfoGraphics> </InfoGraphics> //TODO */}
            </Box>
            <Box className={classes.commentsContainer}>
                <Comments location={location} />
            </Box>
        </>
    );
};

export default SectionInfo;

const useStyles = makeStyles(() => ({
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'top',
        height: '10%',
    },
    infoGraphicsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'top',
        height: '30%',
    },
    commentsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'top',
        height: '60%',
    },
    title: {

    }
}));