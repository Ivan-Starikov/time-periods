import { useEffect, useState } from 'react';

const useScreenSize = () => {
  const isClient = typeof window === 'object';

  const getSize = () => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  });

  const [screenSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    if (!isClient) return () => {};

    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  return { ...screenSize, isMobile: screenSize?.width && screenSize.width <= 840 };
};

export default useScreenSize;
