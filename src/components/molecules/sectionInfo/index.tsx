import React, { FC } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

import { useFetch } from 'hooks/use-fetch';
import { Resolution } from 'models/WidgetData';
export interface SectionInfoProps {
    section: {};
}

const SectionInfo:FC<SectionInfoProps> = ({section}) => {
    const classes = useStyles();
    const { data } = useFetch(`/api/comments/${section}?`);
    
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
                    Comments
                {/* <comments> </comments> //TODO */}
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