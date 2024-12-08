import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(false);
    }, 500);

    return () => clearTimeout(timer); // Cleanup timer if component unmounts
  }, []);

  return (
    <>
      {loaded && (
        <div className="fixed left-0 top-0 z-[999999] flex h-screen w-screen items-center justify-center bg-white dark:bg-black">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
        </div>
      )}
    </>
  );
};

export default Loader;
