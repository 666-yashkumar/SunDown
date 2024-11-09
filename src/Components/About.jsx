import React from 'react'
import Pic from './Stock/Pic.jpg'

const About = () => {
  return (
    <div className='py-[20px] bg-pink-100 '> 

        <div className='md:flex p-4 justify-between md:gap-4 relative'> 

       

            <div className="left  w-full md:w-full   text-[45px] z-10 ">
                <p className='comp leading-[0.9] text-[33px] md:text-[55px] p-4 font-bold'>We are a group of design- <br/>driven, goal-focused creators, producers, and designers who <br/> believe that the details make  <br/> all the difference.</p>
            </div>
            <div className="right     flex flex-col items-center gap-4 p-2  ">
                <img src={Pic} alt="" className=' h-[30vh] w-[300px] md:w-[409px]    rounded-lg z-10' />
                <p className='text-[15px] w-[300px] md:w-[409px] leading-[0.9]'>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.</p>
            </div>

            <div className="circle absolute   border border-black z-0 top-1   ">
            <div className="circle1 h-[100px]   md:h-[200px] w-[250px] bg-orange-500 rounded-full absolute    cir2 left-[250px]  top-[250px] "></div>
            <div className="circle2 h-[100px]   md:h-[200px] w-[250px] bg-orange-500 rounded-full absolute    cir2 left-[370px]  top-[250px]"></div>
            <div className="circle2 h-[200px]   md:h-[350px] w-[350px] bg-orange-500 rounded-full absolute    cir3 left-[250px] top-[250px]"></div>
        </div>

            

        
        </div>
       

    </div>
  )
}

export default About