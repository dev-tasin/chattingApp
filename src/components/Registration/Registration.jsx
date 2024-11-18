import React from 'react';
import reg_img from "../../assets/registration.png";

const Registration = () => {
  return (
    <div className='flex'>
        <div className='w-1/2'>
            <div className='pl-[190px] pt-[225px]'>
                <h2 className='font-nunito font-bold text-[34.4px] text-[#11175D] pb-3'>Get started with easily register</h2>
                <p className='font-nunito text-[20.84px] text-[#808080]'>Free register and you can enjoy it</p>
                <div className='mt-[61.5px]'>
                    <div className='relative'>
                        <form action="#">
                            <input type="text" placeholder='ahmedtasin94@gmail.com' className='py-[26.5px] px-[53px] w-[368px]  bg-transparent text-[#11175D] font-nunito font-semibold text-[20px] border-2 border-[#B8B9CE] focus:border-[#11175D] focus:outline-none rounded-[8.6px] placeholder:text-[#B8B9CE]'/> 
                        </form>
                        <div className='w-[136px] py-[13px] flex justify-center absolute -top-[24px] left-[34px] bg-white'>
                            <p className='font-nunito font-semibold text-[13.76px] text-[#11175D]'>Email Address</p>
                        </div>
                    </div>
                    <div className='relative my-[56.76px]'>
                        <form action="#">
                            <input type="text" placeholder='MD Tasin Ahmed' className='py-[26.5px] px-[53px] w-[368px]  bg-transparent text-[#11175D] font-nunito font-semibold text-[20px] border-2 border-[#B8B9CE] focus:border-[#11175D] focus:outline-none rounded-[8.6px] placeholder:text-[#B8B9CE]'/> 
                        </form>
                        <div className='w-[136px] py-[13px] flex justify-center absolute -top-[24px] left-[34px] bg-white'>
                            <p className='font-nunito font-semibold text-[13.76px] text-[#11175D]'>Full Name</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <form action="#">
                            <input type="password" placeholder='••••••••' className='py-[26.5px] px-[53px] w-[368px]  bg-transparent text-[#11175D] font-nunito font-semibold text-[20px] border-2 border-[#B8B9CE] focus:border-[#11175D] focus:outline-none rounded-[8.6px] placeholder:text-[#B8B9CE]'/> 
                        </form>
                        <div className='w-[136px] py-[13px] flex justify-center absolute -top-[24px] left-[34px] bg-white'>
                            <p className='font-nunito font-semibold text-[13.76px] text-[#11175D]'>Password</p>
                        </div>
                    </div>
                    <button className='w-[368px] bg-[#5F35F5] text-white text-[20.64px] font-nunito font-semibold rounded-[86px] py-[20px] flex justify-center mt-[51.86px]'>Sign Up</button>
                    <p className='w-[368px] mt-[35px] flex justify-center font-opensans text-[13.34px] text-[#03014C]'>Already  have an account ? <span className='pl-2 font-bold text-[#EA6C00]'><a href="#">Sign In</a></span> </p>
                </div>
            </div>
        </div>
        <div className='w-1/2'>
            <img className='w-full h-[1024px] object-cover' src={reg_img} alt="#reg_img"  />
        </div>
    </div>
  )
}

export default Registration