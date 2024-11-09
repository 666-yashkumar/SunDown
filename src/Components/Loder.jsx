import React, { useEffect } from 'react';

const Loder = ({ setIsLoading }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false); // Hide the loader after 4 seconds
      }, 2000);
  
      return () => clearTimeout(timer); // Clean up on unmount
    }, [setIsLoading]);
  
    return (
      <div className="h-[100vh] w-full bg-black flex items-center justify-center">
        <h1 className="text-white comp text-[100px] ">Welcome </h1>
      </div>
    );
  };
  
  export default Loder;