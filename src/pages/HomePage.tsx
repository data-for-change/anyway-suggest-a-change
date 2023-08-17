import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button, makeStyles, Theme, Typography } from '@material-ui/core';
import { LocationOn } from '@material-ui/icons';
import { observer } from 'mobx-react-lite';
import Comments from 'components/Comments';
import { width } from '@material-ui/system';
import MapDialog from 'components/molecules/MapDialog';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IPoint } from 'models/Point';
import RootStore from 'store/root.store';
import { useStore } from 'store/storeConfig';

import StreetCard, { StreetCardProps } from 'components/StreetCard';
import SectionInfo from 'components/molecules/sectionInfo';
import { LocationButton } from 'components/atoms/LocationButton';
import { Resolution } from 'models/WidgetData';
import { IRouteProps } from 'models/Route';

export type Location = {
  resolution: Resolution,
  city?: string,
  street?: string,
  segmentId?: number,
  roadSegmentName?: string
}

const HomePage = () => {
  const classes = useStyles();
  const store: RootStore = useStore();
  const navigate = useNavigate();
  const { newsFlashStore, widgetsStore, settingsStore } = store;
  const { gpsId, newsId, lng, city, street } = useParams<IRouteProps>();
  const loading = widgetsStore.widgetBoxLoading;

  useEffect(() => {
    navigate('/cityAndStreet/תל%20אביב%20-יפו/בוגרשוב/')
  }, [])

  useEffect(() => {
    if (city && street) {
      newsFlashStore.selectNewsFlashByCityAndStreet(city, street);
    }
    if (newsId) {
      newsFlashStore.selectNewsFlash(parseInt(newsId));
    }
    if (gpsId) {
      newsFlashStore.selectLocationId(parseInt(gpsId));
    }
  }, [newsId, newsFlashStore, gpsId, city, street]);  

  const [open, setOpen] = useState(false);

  const [currentLocation, setCurrentLocation] = useState<Location>({ city: 'תל אביב', resolution: Resolution.STREET, street: "בוגרשוב" })

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
      setCurrentLocation({ resolution: Resolution.SUBURBAN_ROAD, segmentId: roadSegmentLocation.road_segment_id, roadSegmentName: roadSegmentLocation.road_segment_name })
      setOpen(false);
      store.setGpsLocationData(null);
      navigate(`/he/location/${roadSegmentLocation.road_segment_id}`)
    }
  };

  const onStreetAndCitySearch = (street?: string, city?: string) => {
    // change to constant values until backend issues are fixed
    console.log('city is', city);
    console.log('street is', street);
    setCurrentLocation({ resolution: Resolution.STREET, street, city })
    setOpen(false);
    navigate(`/cityAndStreet/${street}/${city}/`)
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.columnContainer}>
        {
          currentLocation && <LocationButton currentLocation={currentLocation} setOpen={setOpen}></LocationButton>
        }
        <Box className={classes.rightContainer}>
          {
            cards.map((streetData: StreetCardProps, index: number) => (
              <StreetCard key={index} {...streetData} />
            ))
          }
        </Box>

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
      {
        currentLocation && <SectionInfo location={currentLocation} />
      }
    </Box>
  );
}

export default observer(HomePage);

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
  cardsWrapper: {
    width: '80%',
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
  },
  rightContainer: {
    height: '100%',
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    'align-items': 'flex-start',
    overflow: 'hidden auto',
    direction: 'ltr'
  },
  locationContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardsContainer: {
    overflow: 'auto',
    direction: 'rtl',
    marginRight: '20px',
  },
  mainBox: {
    height: 'inherit',
  },
  widgetBox: {
    height: 'inherit',
    overflow: 'auto'
    }
  }
));