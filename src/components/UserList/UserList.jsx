import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import userOne from "../../assets/user_one.png";
import userTwo from "../../assets/user_two.png";
import userThree from "../../assets/user_three.png";
import userFour from "../../assets/user_four.png";
import userFive from "../../assets/user_five.png";

const UserList = () => {
  return (
    <div className='w-[344px] mt-[33px] h-[451px] overflow-hidden p-5 rounded-[20px] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25)] '>
        <div className='flex justify-between items-center pb-[29px]'>
            <h4 className='font-poppins font-semibold text-[20px] text-black'>User List</h4>
            <HiOutlineDotsVertical className='text-[19px] text-primary cursor-pointer'/>
        </div>

        <div className='flex items-center gap-x-[10px] border-b-[1px] pb-[10px] '>
            <div className='w-[52px] h-[52px] rounded-full overflow-hidden object-cover'> 
                <img src={userOne} alt="#Group_Img" />
            </div>
            <div className='w-full flex justify-between '>
                <div>
                    <h4 className='font-poppins font-semibold text-[14px] text-black'>Raghav</h4>
                    <p className='font-poppins font-medium text-[12px] text-[#00000080]'>Today, 8:56pm?</p>
                </div>
                <div className='px-[8px] py-[3px] bg-primary rounded-[5px] text-center'>
                    <p className='font-poppins font-semibold text-[20px] text-white cursor-pointer'>+</p>
                </div>
            </div>
        </div>
        <div className='mt-[15px] flex items-center gap-x-[10px] border-b-[1px] pb-[10px] '>
            <div className='w-[52px] h-[52px] rounded-full overflow-hidden object-cover'> 
                <img src={userTwo} alt="#Group_Img" />
            </div>
            <div className='w-full flex justify-between '>
                <div>
                    <h4 className='font-poppins font-semibold text-[14px] text-black'>Swathi</h4>
                    <p className='font-poppins font-medium text-[12px] text-[#00000080]'>Today, 2:31pm</p>
                </div>
                <div className='px-[8px] py-[3px] bg-primary rounded-[5px] text-center'>
                    <p className='font-poppins font-semibold text-[20px] text-white cursor-pointer'>+</p>
                </div>
            </div>
        </div>
        <div className='mt-[13px] flex items-center gap-x-[10px] border-b-[1px] pb-[10px] '>
            <div className='w-[52px] h-[52px] rounded-full overflow-hidden object-cover'> 
                <img src={userThree} alt="#Group_Img" />
            </div>
            <div className='w-full flex justify-between '>
                <div>
                    <h4 className='font-poppins font-semibold text-[14px] text-black'>Kiran</h4>
                    <p className='font-poppins font-medium text-[12px] text-[#00000080]'>Yesterday, 6:22pm</p>
                </div>
                <div className='px-[8px] py-[3px] bg-primary rounded-[5px] text-center'>
                    <p className='font-poppins font-semibold text-[20px] text-white cursor-pointer'>+</p>
                </div>
            </div>
        </div>
        <div className='mt=[11px] flex items-center gap-x-[10px] border-b-[1px] pb-[10px] '>
            <div className='w-[52px] h-[52px] rounded-full overflow-hidden object-cover'> 
                <img src={userFour} alt="#Group_Img" />
            </div>
            <div className='w-full flex justify-between '>
                <div>
                    <h4 className='font-poppins font-semibold text-[14px] text-black'>Tejeshwini C</h4>
                    <p className='font-poppins font-medium text-[12px] text-[#00000080]'>Today, 12:22pm</p>
                </div>
                <div className='px-[8px] py-[3px] bg-primary rounded-[5px] text-center'>
                    <p className='font-poppins font-semibold text-[20px] text-white cursor-pointer'>+</p>
                </div>
            </div>
        </div>
        <div className='mt-[8px] flex items-center gap-x-[10px] border-b-[1px] pb-[10px] '>
            <div className='w-[52px] h-[52px] rounded-full overflow-hidden object-cover'> 
                <img src={userFive} alt="#Group_Img" />
            </div>
            <div className='w-full flex justify-between '>
                <div>
                    <h4 className='font-poppins font-semibold text-[14px] text-black'>Marvin McKinney</h4>
                    <p className='font-poppins font-medium text-[12px] text-[#00000080]'>Today, 8:56pm</p>
                </div>
                <div className='px-[8px] py-[3px] bg-primary rounded-[5px] text-center'>
                    <p className='font-poppins font-semibold text-[20px] text-white cursor-pointer'>+</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserList