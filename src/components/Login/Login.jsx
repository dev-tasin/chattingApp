import React from 'react'
import googleicon_img from '../../assets/google.png'
import login_img from '../../assets/login.jpg'
import { GoEyeClosed } from "react-icons/go";


const Login = () => {
  return (
    <div className='flex mt-[100px]'>
        <div className='w-1/2'>
            <div className='pl-[180px] pt-[221px]'>
                <h2 className='font-nunito font-bold text-[34.4px] text-[#11175D] pb-[30px]'>Login to your account!</h2>
                <div className='w-[221px] flex items-center gap-x-[10px] py-[23px] pl-[30px] border-2 border-#03014C rounded-[8.34px] mb-[32.7px] cursor-pointer'>
                    <img className='h-5 w-5' src={googleicon_img} alt="#ggl-icon" />
                    <p className='font-opensans font-semibold text-[13.34px] text-[#03014C]'>Login with Google</p>
                </div>
                <div>
                    <p className='font-opensans text-[13.34px] text-[#8180A5]'>Email Address</p>
                    <input type="text" placeholder='Youraddres@email.com' className='w-[368px] py-[16px]  bg-transparent text-[#03014C] font-opensans font-semibold text-[20px] border-b-2 border-[#CDCCDB] focus:border-[#03014C] focus:outline-none placeholder:text-[#03014C]' />
                </div>
                <div className='mt-[60.85px] relative'>
                    <p className='font-opensans text-[13.34px] text-[#8180A5]'>Password</p>
                    <input type="password" placeholder='Enter your password' className='w-[368px] py-[16px]  bg-transparent text-[#03014C] font-opensans font-semibold text-[20px] border-b-2 border-[#CDCCDB] focus:border-[#03014C] focus:outline-none placeholder:text-[#03014C]'/>
                    {/* <GoEyeClosed className='text-[#03014C] text-[26px] absolute top-[40px] right-[250px] cursor-pointer'></GoEyeClosed> */}
                </div>
                <button className='w-[368px] bg-[#5F35F5] text-white text-[20.9px] font-opensans font-semibold rounded-[8.71px] py-[26px] flex justify-center mt-[55.63px] shadow-[0px_4px_10px_0px_rgba(95,52,245,0.5)]'>Login to Continue</button>
                <p className='w-[368px] mt-[44px] flex justify-center font-opensans text-[13.34px] text-[#03014C]'>Don’t have an account ?<span className='pl-2 font-bold text-[#EA6C00]'><a href="#">Sign Up</a></span> </p>
            </div>
        </div>
        <div className='w-1/2'>
            <img className='w-full h-[1024px] object-cover' src={login_img} alt="#login_img" />
        </div>
    </div>
  )
}

export default Login