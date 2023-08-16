import React, { useState } from 'react';
import { Box, Button, makeStyles, Theme, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import MapDialog from 'components/molecules/MapDialog';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IPoint } from 'models/Point';
import RootStore from 'store/root.store';
import { useStore } from 'store/storeConfig';

import StreetCard, { StreetCardProps } from 'components/StreetCard';
import ResponsiveDrawer from 'components/molecules/infoDrawer/Drawer';
import SectionInfo from 'components/molecules/sectionInfo';

const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const store: RootStore = useStore();

  const { settingsStore } = store;

  const [open, setOpen] = useState(false);

  const [currentLocation, setCurrentLocation] = useState<string>('תל אביב, אלנבי')

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

  const roadSegmentLocation = store.gpsLocationData;

  const onLocationChange = useCallback(
    (location: IPoint) => {
      store.fetchGpsLocation(location);
    },
    [store],
  );

  const onLocationSearch = () => {
    if (roadSegmentLocation) {
      //navigate(`${settingsStore.currentLanguageRouteString}/location/${roadSegmentLocation?.road_segment_id}`);
      setCurrentLocation(roadSegmentLocation?.road_segment_id.toString())
      setOpen(false);
      store.setGpsLocationData(null);
    }
  };

  const onStreetAndCitySearch = (street?: string, city?: string) => {
    // change to constant values until backend issues are fixed
    console.log('city is', city);
    console.log('street is', street);
    //navigate(`${settingsStore.currentLanguageRouteString}/cityAndStreet/${street}/${city}`);
    setCurrentLocation(`${street},${city}`)
    setOpen(false);
  };


  return (
    <Box className={classes.container}>
      <Box className={classes.columnContainer}>
        {cards.map((streetData, index) => (
      </Typography>
      {cards.map((streetData: StreetCardProps, index: number) => (
          <StreetCard key={index} {...streetData} />
        ))}

      <MapDialog
        open={open}
        section={roadSegmentLocation?.road_segment_name}
        roadNumber={roadSegmentLocation?.road1}
        onLocationChange={onLocationChange}
        onClose={() => {
          setOpen(false);
          store.setGpsLocationData(null);
        }}
        onSearch={onLocationSearch}
        onStreetAndCitySearch={onStreetAndCitySearch}
      />
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