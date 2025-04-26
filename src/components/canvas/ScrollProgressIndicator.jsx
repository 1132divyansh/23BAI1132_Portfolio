import React, { useState, useEffect } from 'react';

const ScrollProgressIndicator = ({ 
  position = 'top', 
  height = '4px', 
  color = '#3b82f6', 
  backgroundColor = 'transparent',
  zIndex = 1000,
  showPercentage = false,
  percentagePosition = 'right',
  percentageStyle = {}
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      // Calculate how far the user has scrolled down the page
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      
      // Calculate percentage (between 0 and 100)
      const percentage = scrollableHeight > 0 
        ? (scrollTop / scrollableHeight) * 100 
        : 0;
      
      setScrollProgress(percentage);
    };

    // Add scroll event listener
    window.addEventListener('scroll', calculateScrollProgress);
    
    // Initial calculation
    calculateScrollProgress();
    
    // Cleanup
    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []);

  // Position styles for the container
  const getContainerStyles = () => {
    const baseStyles = {
      position: 'fixed',
      left: 0,
      right: 0,
      height,
      backgroundColor,
      zIndex,
    };

    if (position === 'top') {
      return { ...baseStyles, top: 0 };
    } else if (position === 'bottom') {
      return { ...baseStyles, bottom: 0 };
    }

    return { ...baseStyles, top: 0 };
  };

  // Percentage indicator styles
  const getPercentageStyles = () => {
    const baseStyles = {
      position: 'fixed',
      padding: '4px 8px',
      backgroundColor: color,
      color: '#fff',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: 'bold',
      zIndex: zIndex + 1,
      ...percentageStyle
    };

    if (position === 'top') {
      baseStyles.top = parseInt(height) + 8 + 'px';
    } else if (position === 'bottom') {
      baseStyles.bottom = parseInt(height) + 8 + 'px';
    }

    if (percentagePosition === 'right') {
      baseStyles.right = '16px';
    } else if (percentagePosition === 'left') {
      baseStyles.left = '16px';
    } else if (percentagePosition === 'center') {
      baseStyles.left = '50%';
      baseStyles.transform = 'translateX(-50%)';
    }

    return baseStyles;
  };

  return (
    <>
      <div style={getContainerStyles()}>
        <div 
          style={{
            height: '100%',
            width: `${scrollProgress}%`,
            backgroundColor: color,
            transition: 'width 0.2s ease-out'
          }}
        />
      </div>
      
      {showPercentage && (
        <div style={getPercentageStyles()}>
          {Math.round(scrollProgress)}%
        </div>
      )}
    </>
  );
};

export default ScrollProgressIndicator;