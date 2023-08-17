import { SxProps } from '@mui/system';

export const container: SxProps = {
  width: 1,
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
};

export const slide: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0.5, 
  transition: 'opacity 2s ease-in-out',
  transform: 'scale(0.95)'
};

export const activeSlide: SxProps = {
  opacity: 1,
  transform: 'scale(1)', 
};

export const controlButton: SxProps = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
};

export const prevButton: SxProps = {
  left: 0,
};

export const nextButton: SxProps = {
  right: 0,
};

const styles = {
  container,
  slide,
  activeSlide,
  controlButton,
  prevButton,
  nextButton,
};

export default styles;