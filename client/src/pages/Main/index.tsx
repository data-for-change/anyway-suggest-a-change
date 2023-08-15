import { useState } from "react";
import PrimarySearchAppBar from "../../components/AppBar";
import StreetCard, { StreetCardProps } from "../../components/StreetCard";
import { Box } from "@mui/material";

function App() {
  const [cards, setCards] = useState<StreetCardProps[]>([
    { streetName: "בוגרשוב", city: "תל אביב" },
    { streetName: "בוגרשוב", city: "תל אביב" },
    { streetName: "בוגרשוב", city: "תל אביב" },
    { streetName: "בוגרשוב", city: "תל אביב" },
    { streetName: "בוגרשוב", city: "תל אביב" },
    { streetName: "בוגרשוב", city: "תל אביב" },
  ]);

  return (
    <>
      <PrimarySearchAppBar />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: '85%'
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: "24px",
            justifyContent: "center",
            overflow: "auto",
          }}
        >
          {cards.map((streetData) => (
            <StreetCard {...streetData} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default App;
