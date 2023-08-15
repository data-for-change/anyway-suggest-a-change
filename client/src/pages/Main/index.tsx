import { FC, useCallback, useEffect, useState } from "react";
import PrimarySearchAppBar from "components/AppBar";
import StreetCard, { StreetCardProps } from "components/StreetCard";
import { Box, Button } from "@mui/material";
import { useStore } from "store/storeConfig";
import RootStore from "store/root.store";
import { FEATURE_FLAGS } from "utils/env.utils";
import MapDialog from "components/molecules/MapDialog";
import { IPoint } from "models/Point";

const App = () => {
  const [cards, setCards] = useState<StreetCardProps[]>([
    { streetName: "בוגרשוב", city: "תל אביב" },
  ]);
  const [open, setOpen] = useState(false);
  const [street, setStreet] = useState<string | undefined>("");
  const [city, setCity] = useState<string | undefined>("");

  const store: RootStore = useStore();
  const { userStore, settingsStore } = store;

  const isUserDetailsRequired: boolean =
    !userStore.userInfo?.meta.isCompleteRegistration;
  const roadSegmentLocation = store.gpsLocationData;

  const onLocationChange = useCallback(
    (location: IPoint) => {
      store.fetchGpsLocation(location);
    },
    [store]
  );

  const onLocationSearch = () => {
    if (roadSegmentLocation) {
      navigate(
        `${settingsStore.currentLanguageRouteString}/location/${roadSegmentLocation?.road_segment_id}`
      );
      setOpen(false);
      store.setGpsLocationData(null);
    }
  };

  const onStreetAndCitySearch = (street?: string, city?: string) => {
    // change to constant values until backend issues are fixed
    console.log("city is", city);
    console.log("street is", street);
    setStreet(street);
    setCity(city);
    setOpen(false);
  };

  return (
    <>
      <PrimarySearchAppBar />
      <Button onClick={() => setOpen(true)}>שנה מיקום</Button>
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
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: "fit-content",
            width: "90%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: "24px",
            justifyContent: "center",
          }}
        >
          {cards.map((streetData) => (
            <StreetCard {...streetData} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default App;
