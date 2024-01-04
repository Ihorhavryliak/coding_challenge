import { useEffect, useRef, useState } from 'react';

const useGetWindowWidth = () => {
  const isSSR = typeof window === 'undefined'; // Check if running on the server
  const windowWidth = useRef(isSSR ? 0 : window.innerWidth) as {
    current: number;
  };

  const [width, setWidth] = useState(930);

  useEffect(() => {
    setWidth(+windowWidth.current);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};

export default useGetWindowWidth;
