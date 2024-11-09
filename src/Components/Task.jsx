import React, { useState } from 'react'
import Img1 from './Stock/Img1.jpg'
import Img2 from './Stock/Img2.jpg'
import Img3 from './Stock/Img3.jpg'
import Img4 from './Stock/Img4.jpg'
import Img5 from './Stock/Img5.jpg'
import Img6 from './Stock/Img6.jpg'

const items = [
    { text: 'Makers Studio HOI', image: Img1 },
    { text: '50th Anniversary', image: Img2 },
    { text: 'NYFW Popup', image: Img3 },
    { text: 'SOHO NYC', image: Img4 },
    { text: 'Play New Kidvision', image: Img5 },
    { text: 'SOHO 2023', image: Img6 },
         
       
  ];


const Task = () => {

    const [isHovered, setIsHovered] = useState(false);


  return (
    <div className='py-[50px] bg-pink-100'>

         <div> 

         <ul className='font2 text-3xl' style={{ listStyleType: 'none' }}>
                {items.map((item, index) => (
                    <li 
                        key={index}
                        className='border py-5 font-bold border-t-black border-b-black hover:bg-orange-400 duration-300 relative'
                        onMouseEnter={() => setIsHovered(index)}
                        onMouseLeave={() => setIsHovered(null)}
                    >
                        {item.text}

                        {isHovered === index && (
                            <img
                                src={item.image}
                                alt="Hovered icon"
                                className="w-[150px] h-[200px] md:w-[300px] md:h-[380px] ml-4 absolute right-[100px] top-1/2 transform -translate-y-1/2 transition-opacity duration-300 rounded-lg"
                            />
                        )}
                    </li>
                ))}
            </ul>    
            
         </div>

    </div>
  )
}

export default Task