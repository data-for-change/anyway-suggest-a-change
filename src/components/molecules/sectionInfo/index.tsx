import React, { FC } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

import { useFetch } from 'hooks/use-fetch';
import { Resolution } from 'models/WidgetData';
import Comments from 'components/Comments';
import { Location } from 'pages/HomePage'
import { Outlet } from 'react-router';

export interface SectionInfoProps {
    location: Location

}

const SectionInfo: FC<SectionInfoProps> = ({ location }) => {
    const classes = useStyles();

    return (
        <Box flexGrow={5} className={classes.widgetBox} position="relative">
            <Box className={classes.titleContainer}>
                <Typography className={classes.title} variant={'h4'}>
                    Section Info
                </Typography>
            </Box>           
             <Outlet />
            <Box className={classes.commentsContainer}>
                <Comments location={location} />
            </Box>
        </Box>
    );
};

export default SectionInfo;

const useStyles = makeStyles(() => ({
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'top'
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
        // height: '60%',
    },
    title: {

    },
    widgetBox: {
        height: 'inherit',
        overflow: 'auto',
      }
}));