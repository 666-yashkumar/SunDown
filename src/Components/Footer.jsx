import React from 'react'

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full -z-10   bg-black text-white  ">

      <div className="w-full h-[10vh] md:h-[20vh] bg-[#ff0000] relative blur"></div>
      <div className='circle flex justify-between relative z-10 -mt-[400px]'>
      
        <div className="circle1 h-[500px] w-[500px] bg-[#ff0000] rounded-full blur" >
            <div className="circ h-[300px] w-[300px] bg-[#ff0000] rounded-full blur"></div>
        </div>
        <div className="circle2 h-[500px] w-[500px] bg-[#ff0000] rounded-full blur">
        <div className="cir2 h-[500px] w-[500px] bg-[#ff0000] rounded-full blur"></div>
        </div>
        
        
      </div>
      <h1 className="text-[22vw] px-2 md:px-9 text-white underline ">Sundown</h1>
         

   
  </div>
  )
}

export default Footer

