import React, { useState, useEffect } from 'react'; // Import useState here
import Lenis from '@studio-freight/lenis';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Moving from './Components/Moving';
import About from './Components/About';
import Task from './Components/Task';
import Slider from './Components/Slider';
import Footer from './Components/Footer';
import Trans from './Components/Trans';
import Loder from './Components/Loder'; // Make sure it's `Loder` (consistent naming)

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Manage loading state

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Cleanup on unmount
  }, []);

  return (
    <> 
      {isLoading ? (
        <Loder setIsLoading={setIsLoading} /> // Show loader until isLoading is false
      ) : (
        <div className="w-full overflow-hidden">
          <Navbar />
          <Home />
          <Moving />
          <About />
          <Task />
          <Slider />
          <Footer />
          <Trans />
        </div>
      )}
    </>
  );
}

export default App;







//  import React,{ useEffect } from 'react'
//  import Lenis from '@studio-freight/lenis';
// import Navbar from './Components/Navbar'
// import Home from './Components/Home'
// import Moving from './Components/Moving'
// import About from './Components/About'
// import Task from './Components/Task'
// import Slider from './Components/Slider'
// import Footer from './Components/Footer'
// import Trans from './Components/Trans'
// import Loader from './Components/Loder'

 
//  const App = () => {

//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smooth: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     return () => lenis.destroy(); // Cleanup on unmount
//   }, []);

//   const [isLoading, setIsLoading] = useState(true);

  
//    return (
//     <> 

// {isLoading ? (
//         <Loder setIsLoading={setIsLoading} />
//       ) : (

//      <div className=' w-full overflow-hidden'>
//       <Loader/>
//       <Navbar/>
//       <Home/>
//       <Moving/>
//       <About/>
//       <Task/>
//       <Slider/>
//       <Footer/>
//       <Trans/>
      
//      </div>
     
//     )}
//      </>
//    )
//  }
 
//  export default App