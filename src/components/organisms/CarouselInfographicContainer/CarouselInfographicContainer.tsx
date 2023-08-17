import { Children, ReactNode, useState } from 'react';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { IconButton, Box } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import styles from './styles'; 

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface CoverflowCarouselProps {
  children: ReactNode;
}

const CarouselInfographicContainer = ({ children }: CoverflowCarouselProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const numSlides = Children.count(children);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={styles.container}>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={5000}
      >
        {Children.map(children, (child, index) => (
          <Box
            key={index}
            sx={{ ...styles.slide, ...(index === activeStep && styles.activeSlide) }}>
            {child}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <IconButton
        onClick={() => handleStepChange(activeStep - 1)}
        sx={{ ...styles.controlButton, ...styles.prevButton }}
        disabled={activeStep === 0}
      >
        <NavigateBefore />
      </IconButton>
      <IconButton
        onClick={() => handleStepChange(activeStep + 1)}
        sx={{ ...styles.controlButton, ...styles.nextButton }}
        disabled={activeStep === numSlides - 1}
      >
        <NavigateNext />
      </IconButton>
    </Box>
  );
}

export default CarouselInfographicContainer;