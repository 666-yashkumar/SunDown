import React from 'react'
const det = ["CONTENT", "ENVIRONMENTS","EXPERIENCES",]

const Moving = () => {
  return (
    <div className='py-[10px] bg-pink-100 '>

    <div className='flex'>
    <div className='  move flex items-center '>
            {det.map((item, index)=>(
                <span key={index} className='px-4 text-[75px] font-bold  md:text-[150px] flex items-center'>
                    <div className='gola w-[60px]  h-[60px] rounded-full bg-[#fe320a]  mx-2'></div>
                    {item}
                </span>
            ))}
             
            
        </div>
        <div className='  move flex items-center '>
            {det.map((item, index)=>(
                <span key={index} className='px-4 text-[150px] font-bold flex items-center'>
                    <div className='gola w-[60px]  h-[60px] rounded-full bg-[#fe320a]  mx-2'></div>
                    {item}
                </span>
            ))}
             
            
        </div>
        <div className='  move flex items-center '>
            {det.map((item, index)=>(
                <span key={index} className='px-4 text-[150px] font-bold  flex items-center'>
                    <div className='gola w-[60px]  h-[60px] rounded-full bg-[#fe320a]  mx-2'></div>
                    {item}
                </span>
            ))}
             
            
        </div>
    </div>
        
    </div>
  )
}

export default Moving