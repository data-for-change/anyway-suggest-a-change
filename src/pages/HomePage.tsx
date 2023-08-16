import { useState } from 'react';
import StreetCard, { StreetCardProps } from 'components/StreetCard';
import { Box, makeStyles, Theme } from '@material-ui/core';
import { observer } from 'mobx-react-lite';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100%',
    margin: '16px',
    overflow: 'auto',
  },
}));

function HomePage() {
  const classes = useStyles();

  const [cards, setCards] = useState<StreetCardProps[]>([
    { streetName: 'בוגרשוב', city: 'תל אביב' },
    { streetName: 'בוגרשוב', city: 'תל אביב' },
    { streetName: 'בוגרשוב', city: 'תל אביב' },
    { streetName: 'בוגרשוב', city: 'תל אביב' },
    { streetName: 'בוגרשוב', city: 'תל אביב' },
    { streetName: 'בוגרשוב', city: 'תל אביב' },
    { streetName: 'בוגרשוב', city: 'תל אביב' },
    { streetName: 'בוגרשוב', city: 'תל אביב' },
    { streetName: 'בוגרשוב', city: 'תל אביב' },
    { streetName: 'בוגרשוב', city: 'תל אביב' },
    { streetName: 'בוגרשוב', city: 'תל אביב' },
    { streetName: 'בוגרשוב', city: 'תל אביב' },
  ]);

  return (
    <Box className={classes.container}>
      {cards.map((streetData, index) => (
        <StreetCard key={index} {...streetData} />
      ))}
    </Box>
  );
}

export default observer(HomePage);
