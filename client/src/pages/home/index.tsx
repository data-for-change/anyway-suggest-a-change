import { useState } from "react";
import StreetCard, { StreetCardProps } from "../../components/StreetCard";
import { Box } from "@mui/material";

function HomePage() {
  const [cards, setCards] = useState<StreetCardProps[]>([
    { streetName: "בוגרשוב", city: "תל אביב" },
    { streetName: "בוגרשוב", city: "תל אביב" },
    { streetName: "בוגרשוב", city: "תל אביב" },
    { streetName: "בוגרשוב", city: "תל אביב" },
    { streetName: "בוגרשוב", city: "תל אביב" },
    { streetName: "בוגרשוב", city: "תל אביב" },
    { streetName: "בוגרשוב", city: "תל אביב" },
    { streetName: "בוגרשוב", city: "תל אביב" },
    { streetName: "בוגרשוב", city: "תל אביב" },
    { streetName: "בוגרשוב", city: "תל אביב" },
    { streetName: "בוגרשוב", city: "תל אביב" },
    { streetName: "בוגרשוב", city: "תל אביב" },
  ]);

  return (
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
        {cards.map((streetData, index) => (
          <StreetCard key={index} {...streetData} />
        ))}
      </Box>  
  );
}

export default HomePage;
