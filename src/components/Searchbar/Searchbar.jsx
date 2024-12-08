import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";


const Searchbar = () => {
  return (
    <div className='pt-[35px] pb-[43px]'>
        <div className='relative'>
            <input type="text" placeholder='Search' className='py-5 px-[78px] w-[427px] h-[59px]  rounded-[20px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] text-base font-poppins font-medium placeholder:font-poppins placeholder:font-medium outline-none'/>
            <IoIosSearch className='text-[19px] absolute top-[20px] left-[23px]'/>
            <HiOutlineDotsVertical className='text-[19px] absolute top-[20px] right-[23px] cursor-pointer'/>
        </div>
    </div>
  )
}

export default Searchbar