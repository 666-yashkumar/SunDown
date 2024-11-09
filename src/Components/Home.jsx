import React from 'react'
import Vid from './Stock/Vid.mp4'

const Home = () => {
  return (
    <div className='py-3 bg-pink-100 '>
       <div className="contain_top_part   w-full p-2   md:flex justify-between gap-2  ">
        
            <div className="left   flex items-end px-2">
                <p className='text-lg font-serif  leading-tight comp'>Sundown is a multi-disciplinary <br/> studio focused on creating unique, <br/> end-to-end experiences <br/> and environments.</p>
            </div>

            <div className="right   text-end">
                   <span className='md:text-[130px] text-[90px]  leading-[1] font2 font-bold tracking-tighter '> SPACES<br/>THAT<br/>INSPIRE</span>
            </div>
      
       </div>

       <div className="contain_bottom_part py-[40px]  h-[350px] md:h-[800px] bg-gray-200 relative overflow:hidden">

        <div className="circle relative    ">
            <div className="circle1 h-[200px]   md:h-[400px] w-[450px] bg-orange-400 rounded-full absolute left-[44%] md:left-[62%] cir1"></div>
            <div className="circle2 h-[200px]   md:h-[400px] w-[450px] bg-orange-700 rounded-l-full absolute left-[48%] md:left-[66%] cir1"></div>
        </div>

        <video width="100%" height="auto"    autoPlay loop muted className=' absolute   rounded-[10vh] px-5 '> 
        <source src={Vid} type="video/mp4"  />    
         </video>

       </div>

    </div>
  )
}

export default Home