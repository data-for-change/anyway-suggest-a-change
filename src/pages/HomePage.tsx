import React, { useState } from 'react';
import { Box, makeStyles, Theme } from '@material-ui/core';
import { observer } from 'mobx-react-lite';

import StreetCard, { StreetCardProps } from 'components/StreetCard';
import ResponsiveDrawer from 'components/molecules/infoDrawer/Drawer';
import SectionInfo from 'components/molecules/sectionInfo';

const HomePage = () => {
  const classes = useStyles();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState({});

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };


  const [cards, setCards] = useState<StreetCardProps[]>([
    { streetName: 'בוגרשוב', city: 'תל אביב', handleClick: handleDrawerToggle },
    { streetName: 'בוגרשוב', city: 'תל אביב', handleClick: handleDrawerToggle },
    { streetName: 'בוגרשוב', city: 'תל אביב', handleClick: handleDrawerToggle },
    { streetName: 'בוגרשוב', city: 'תל אביב', handleClick: handleDrawerToggle },
    { streetName: 'בוגרשוב', city: 'תל אביב', handleClick: handleDrawerToggle },
    { streetName: 'בוגרשוב', city: 'תל אביב', handleClick: handleDrawerToggle },
    { streetName: 'בוגרשוב', city: 'תל אביב', handleClick: handleDrawerToggle },
    { streetName: 'בוגרשוב', city: 'תל אביב', handleClick: handleDrawerToggle },
    { streetName: 'בוגרשוב', city: 'תל אביב', handleClick: handleDrawerToggle },
  ]);

  return (
    <Box className={classes.container}>
      <Box className={classes.columnContainer}>
        {cards.map((streetData, index) => (
          <StreetCard key={index} {...streetData} />
        ))}
      </Box>
      <Box className={classes.columnContainer}>
          <SectionInfo section={selectedSection}/>
      </Box>
      {/* <ResponsiveDrawer isDrawerOpen={isDrawerOpen}>

      </ResponsiveDrawer> */}
    </Box>
  );
}

export default observer(HomePage);

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100%',
    margin: '16px',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
  },
  columnContainer: {
    height: '100%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
  }
}));