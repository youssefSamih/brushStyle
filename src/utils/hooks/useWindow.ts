import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

// Hook
interface WindowSize {
  width?: number;
  height?: number;
}

export const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/

  const initialState: WindowSize = {
    width: undefined,
    height: undefined,
  };
  const [windowSize, setWindowSize] = useState(initialState);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
};

export const isMaxWidth = (
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  // | Partial<['xs', 'sm', 'md', 'lg', 'xl']>
) => {
  const windowSize = useWindowSize();
  const theme = useTheme();
  return (
    windowSize.width && windowSize.width <= parseInt(theme.breakpoints[size])
  );
};
