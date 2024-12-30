import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import groupOne from "../../assets/group_one.png";
import groupTwo from "../../assets/group_two.png";
import groupThree from "../../assets/group_three.png";

const GroupList = () => {
  return (
    <div className='w-[427px] h-[347px] overflow-hidden px-5 py-3 rounded-[20px] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25)] '>
        <div className='flex justify-between items-center pb-[17px]'>
            <h4 className='font-poppins font-semibold text-[20px] text-black'>Groups List</h4>
            <HiOutlineDotsVertical className='text-[19px] text-primary cursor-pointer'/>
        </div>
        <div className='flex items-center justify-between border-b-[2px] pb-[14px] '>
            <div className='w-[70px] h-[70px] rounded-full overflow-hidden object-cover'> 
                <img src={groupOne} alt="#Group_Img" />
            </div>
            <div>
                <h4 className='font-poppins font-semibold text-[18px] text-black'>Friends Reunion</h4>
                <p className='font-poppins font-medium text-[14px] text-[#4D4D4D]'>Hi Guys, Wassup!</p>
            </div>
            <div className='w-[87px] bg-primary rounded-[5px] text-center'>
                <p className='font-poppins font-semibold text-[20px] text-white cursor-pointer'>Join</p>
            </div>
        </div>
        <div className='flex items-center justify-between border-b-[2px] pb-[10px] my-[15px] '>
            <div>
                <img src={groupTwo} alt="#Group_Img" />
            </div>
            <div>
                <h4 className='font-poppins font-semibold text-[18px] text-black'>Friends Reunion</h4>
                <p className='font-poppins font-medium text-[14px] text-[#4D4D4D]'>Hi Guys, Wassup!</p>
            </div>
            <div className='w-[87px] bg-primary rounded-[5px] text-center'>
                <p className='font-poppins font-semibold text-[20px] text-white cursor-pointer'>Join</p>
            </div>
        </div>
        <div className='flex items-center justify-between pb-[14px]'>
            <div>
                <img src={groupThree} alt="#Group_Img" />
            </div>
            <div>
                <h4 className='font-poppins font-semibold text-[18px] text-black'>Friends Reunion</h4>
                <p className='font-poppins font-medium text-[14px] text-[#4D4D4D]'>Hi Guys, Wassup!</p>
            </div>
            <div className='w-[87px] bg-primary rounded-[5px] text-center'>
                <p className='font-poppins font-semibold text-[20px] text-white cursor-pointer'>Join</p>
            </div>
        </div>
    </div>
  )
}

export default GroupList