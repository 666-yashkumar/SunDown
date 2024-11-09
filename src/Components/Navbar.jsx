import React, { useState } from 'react'
import Logo from './Stock/Logo.png'
import { TiThMenuOutline } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {

    const [Menu, setMenu] = useState(false)

    const nav = ["Work","Studio","Contact"];
  return (
    <div className='  px-2  md:bg-white bg-orange-200  '>

    <div className='Navbar flex justify-between items-center'>

      <div className="left-0 w-[100px]   ">
        <img className='' src={Logo} alt='' />
      </div>

       
      
      <div className="right   mr-4"> 
        { Menu ?
        
        <IoCloseSharp  onClick={()=>setMenu(!Menu)} className='text-black text-xl md:hidden block'/>
        :
        <TiThMenuOutline onClick={()=>setMenu(!Menu)} className='text-black text-xl md:hidden block'/>

        }

        
        <li className='text-black hidden md:flex gap-3' style={{ listStyleType: 'none' }}>
           {nav.map((item)=>(
            <ul className='font-bold text-[20px] border border-gray-500 rounded-3xl py-1 px-4 hover:bg-black hover:text-white duration-300 ease-in-out' key={item}>
              {item}
            </ul>
           ))}
        </li>

        <li className={`text-black md:hidden duration-300 w-full h-screen bg-black fixed py-2 text-center ${Menu ? 'left-[0]' : 'left-[-100%]'} top-[100px]`}
        style={{ listStyleType: 'none' }}>
           {nav.map((item)=>(
            <ul className='font-bold text-[30px] border  text-white border-white rounded-3xl py-1 my-3 hover:bg-white hover:text-black hover:scale-110 duration-300 ' key={item}>
              {item}
            </ul>
           ))}
        </li>

      </div>

    </div>



   </div>
  )
}

export default Navbar