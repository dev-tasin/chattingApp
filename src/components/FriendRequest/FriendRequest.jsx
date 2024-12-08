import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import userOne from "../../assets/user_one.png";
import userTwo from "../../assets/user_two.png";
import userThree from "../../assets/user_three.png";
import userFour from "../../assets/user_four.png";
import userFive from "../../assets/user_five.png";

const FriendRequest = () => {
  return (
    <div className='w-[427px] h-[462px] overflow-hidden px-5 py-3 rounded-[20px] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25)] '>
        <div className='flex justify-between items-center pb-[17px]'>
            <h4 className='font-poppins font-semibold text-[20px] text-black'>Friend  Request</h4>
            <HiOutlineDotsVertical className='text-[19px] text-primary cursor-pointer'/>
        </div>
        <div className='flex gap-x-5 justify-between items-center border-b-[2px] pb-[15px]'>
            <div className='w-[70px] h-[70px] rounded-full overflow-hidden object-cover'>
                <img className='h-[70px] w-[70px]' src={userOne} alt="#user_pic" />
            </div>
            <div className='-ml-[90px]'>
                <h4 className='font-poppins font-semibold text-[18px] text-black'>Raghav</h4>
                <p className='font-poppins font-medium text-[14px] text-[#4D4D4D]'>Dinner?</p>
            </div>
            <div className='mr-[40px] px-[8px] bg-primary rounded-[5px] text-center'>
                <p className='font-poppins font-semibold text-[20px] text-white cursor-pointer'>Accept</p>
            </div>
        </div>
        <div className='mt-[21px] flex gap-x-5 justify-between items-center border-b-[2px] pb-[15px]'>
            <div className='w-[70px] h-[70px] rounded-full overflow-hidden object-cover'>
                <img className='h-[70px] w-[70px]' src={userTwo} alt="#user_pic" />
            </div>
            <div className='-ml-[100px]'>
                <h4 className='font-poppins font-semibold text-[18px] text-black'>Swathi</h4>
                <p className='font-poppins font-medium text-[14px] text-[#4D4D4D]'>Sure!</p>
            </div>
            <div className='mr-[40px] px-[8px] bg-primary rounded-[5px] text-center'>
                <p className='font-poppins font-semibold text-[20px] text-white cursor-pointer'>Accept</p>
            </div>
        </div>
        <div className='mt-[18px] flex gap-x-5 justify-between items-center border-b-[2px] pb-[15px]'>
            <div className='w-[70px] h-[70px] rounded-full overflow-hidden object-cover'>
                <img className='h-[70px] w-[70px]' src={userThree} alt="#user_pic" />
            </div>
            <div className='-ml-[100px]'>
                <h4 className='font-poppins font-semibold text-[18px] text-black'>Kiran</h4>
                <p className='font-poppins font-medium text-[14px] text-[#4D4D4D]'>Hi.....</p>
            </div>
            <div className='mr-[40px] px-[8px] bg-primary rounded-[5px] text-center'>
                <p className='font-poppins font-semibold text-[20px] text-white cursor-pointer'>Accept</p>
            </div>
        </div>
        <div className='mt-[15px] flex gap-x-5 justify-between items-center border-b-[2px] pb-[15px]'>
            <div className='w-[70px] h-[70px] rounded-full overflow-hidden object-cover'>
                <img className='h-[70px] w-[70px]' src={userFour} alt="#user_pic" />
            </div>
            <div className='-ml-[10px]'>
                <h4 className='font-poppins font-semibold text-[18px] text-black'>Tejeshwini C</h4>
                <p className='font-poppins font-medium text-[14px] text-[#4D4D4D]'>I will call him today.?</p>
            </div>
            <div className='mr-[40px] px-[8px] bg-primary rounded-[5px] text-center'>
                <p className='font-poppins font-semibold text-[20px] text-white cursor-pointer'>Accept</p>
            </div>
        </div>
    </div>
  )
}

export default FriendRequest