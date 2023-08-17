import { Children, ReactNode, useState, useEffect, useRef } from 'react';
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
  const autoPlayRef = useRef<any>(null); // Ref for controlling autoplay

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      handleStepChange(activeStep + 1);
    }, 5000);

    return () => {
      clearInterval(autoPlayRef.current);
    };
  }, [activeStep]);

  const handleStepChange = (step: number) => {
    if (step >= 0 && step < numSlides - 1) {
      setActiveStep(step);
    } else {
      setActiveStep(0);
    }
  };

  return (
    <Box sx={styles.container}>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={9999999} // Set a large interval to avoid overlapping with manual navigation
      >
        {Children.map(children.slice(0, numSlides - 1), (child, index) => (
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
        disabled={activeStep === numSlides - 2}
      >
        <NavigateNext />
      </IconButton>
    </Box>
  );
};

export default CarouselInfographicContainer;
