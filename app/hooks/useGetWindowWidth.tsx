import { useLayoutEffect, useRef, useState } from 'react';

const useGetWindowWidth = () => {
  const windowWidth = useRef(window.innerWidth) as {current: number};
  const [width, setWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : +windowWidth.current,
  );

  useLayoutEffect(() => {
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
