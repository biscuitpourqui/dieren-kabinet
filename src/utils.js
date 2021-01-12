import React, { useState, useEffect } from 'react';

const debounce = (func, delay) => {
  let inDebounce;
  return function() {
    
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func(), delay)
  }
}

export function useWindowSize(delay) {
   
    const [windowSize, setWindowSize] = useState({
      width: innerWidth,
      height: innerHeight,
    });
  
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", debounce(handleResize, delay));
      
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
  
    return windowSize;
  }

  export function randomNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }