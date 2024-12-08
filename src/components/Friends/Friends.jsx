import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import userOne from "../../assets/user_one.png";
import userTwo from "../../assets/user_two.png";
import userThree from "../../assets/user_three.png";
import userFour from "../../assets/user_four.png";

const Friends = () => {
  return (
    <div className='w-[344px] mt-[33px] h-[451px] overflow-hidden p-5 rounded-[20px] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25)] '>
        <div className='flex justify-between items-center pb-[34px]'>
            <h4 className='font-poppins font-semibold text-[20px] text-black'>Friends</h4>
            <HiOutlineDotsVertical className='text-[19px] text-primary cursor-pointer'/>
        </div>

        <div className='flex items-center gap-x-[10px] border-b-[1px] pb-[10px] '>
            <div className='w-[52px] h-[52px] rounded-full overflow-hidden object-cover'> 
                <img src={userOne} alt="#Group_Img" />
            </div>
            <div className='w-full flex justify-between '>
                <div>
                    <h4 className='font-poppins font-semibold text-[14px] text-black'>Raghav</h4>
                    <p className='font-poppins font-medium text-[12px] text-[#4D4D4D]'>Dinner?</p>
                </div>
                <div>
                    <p className='font-poppins font-medium text-[10px] text-[#00000080]'>Today, 8:56pm</p>
                </div>
            </div>
        </div>
        <div className='flex items-center gap-x-[10px] border-b-[1px] mt-[16px] pb-[10px] '>
            <div className='w-[52px] h-[52px] rounded-full overflow-hidden object-cover'> 
                <img src={userTwo} alt="#Group_Img" />
            </div>
            <div className='w-full flex justify-between '>
                <div>
                    <h4 className='font-poppins font-semibold text-[14px] text-black'>Swathi</h4>
                    <p className='font-poppins font-medium text-[12px] text-[#4D4D4D]'>Sure!</p>
                </div>
                <div>
                    <p className='font-poppins font-medium text-[10px] text-[#00000080]'>Today, 2:31pm</p>
                </div>
            </div>
        </div>
        <div className='flex items-center gap-x-[10px] border-b-[1px] mt-[14px] pb-[10px] '>
            <div className='w-[52px] h-[52px] rounded-full overflow-hidden object-cover'> 
                <img src={userThree} alt="#Group_Img" />
            </div>
            <div className='w-full flex justify-between '>
                <div>
                    <h4 className='font-poppins font-semibold text-[14px] text-black'>Kiran</h4>
                    <p className='font-poppins font-medium text-[12px] text-[#4D4D4D]'>Hi.....</p>
                </div>
                <div>
                    <p className='font-poppins font-medium text-[10px] text-[#00000080]'>Yesterday, 6:22pm</p>
                </div>
            </div>
        </div>
        <div className='flex items-center gap-x-[10px] border-b-[1px] mt-[12px] pb-[10px] '>
            <div className='w-[52px] h-[52px] rounded-full overflow-hidden object-cover'> 
                <img src={userFour} alt="#Group_Img" />
            </div>
            <div className='w-full flex justify-between '>
                <div>
                    <h4 className='font-poppins font-semibold text-[14px] text-black'>Tejeshwini C</h4>
                    <p className='font-poppins font-medium text-[12px] text-[#4D4D4D]'>I will call him today.</p>
                </div>
                <div>
                    <p className='font-poppins font-medium text-[10px] text-[#00000080]'>Today, 12:22pm</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Friends