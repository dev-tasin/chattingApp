import React, { useState } from 'react';
import reg_img from "../../assets/registration.png";
import { GoEyeClosed } from "react-icons/go";
import { FaEye } from "react-icons/fa";


const Registration = () => {
    const [email , setEmail] = useState("")
    const [fullName , setFullName] = useState("")
    const [pass , setPass] = useState("")

    const [emailErr , setEmailErr] = useState("")
    const [fullNameErr , setfullNameErr] = useState("")
    const [passErr , setPassErr] = useState("")

    const [showPass , setShowPass] = useState(false)

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailErr("")
    }
    const handleFullName = (e) => {
        setFullName(e.target.value);
        setfullNameErr("")
    }
    const handlePass = (e) => {
        setPass(e.target.value);
        setPassErr("")
    }

    const handleSubmit = () => {
        if(!email){
            setEmailErr('Enter Your Email Address');
        }else{
            if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
                setEmailErr("Enter a Valid Email Address")
            }
        }

        if(!fullName){
            setfullNameErr("Please Enter Your Full Name")
        }

        if(!pass){
            setPassErr("Please Enter a Password");
        }else{
            if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pass)){
                setPassErr("Please Enter a Strong Password")
            }
        }
    }

  return (
    <div className='flex'>
        <div className='w-1/2 flex justify-end mr-[70px] items-center'>
            <div className='pl-[100px]'>
                <h2 className='font-nunito font-bold text-[34.4px] text-[#11175D] pb-3'>Get started with easily register</h2>
                <p className='font-nunito text-[20.84px] text-[#808080]'>Free register and you can enjoy it</p>
                <div className='mt-[30px]'>
                    <div className='relative'>
                        <input onChange={handleEmail} value={email} type="email" placeholder='ahmedtasin94@gmail.com' className='py-[26.5px] px-[53px] w-[368px]  bg-transparent text-[#11175D] font-nunito font-semibold text-[20px] border-2 border-[#B8B9CE] focus:border-[#11175D] focus:outline-none rounded-[8.6px] placeholder:text-[#B8B9CE]'/> 
                        <div className='w-[136px] py-[13px] flex justify-center absolute -top-[24px] left-[34px] bg-white'>
                            <p className='font-nunito font-semibold text-[13.76px] text-[#11175D]'>Email Address</p>
                        </div>
                        <p className='w-[368px] flex justify-center mt-[5px] font-nunito font-semibold text-[13.76px] text-[#ff2c2c] '> {emailErr} </p>
                    </div>
                    <div className='relative my-[30px]'>
                        <input onChange={handleFullName} value={fullName} type="text" placeholder='MD Tasin Ahmed' className='py-[26.5px] px-[53px] w-[368px]  bg-transparent text-[#11175D] font-nunito font-semibold text-[20px] border-2 border-[#B8B9CE] focus:border-[#11175D] focus:outline-none rounded-[8.6px] placeholder:text-[#B8B9CE]'/> 
                        <div className='w-[136px] py-[13px] flex justify-center absolute -top-[24px] left-[34px] bg-white'>
                            <p className='font-nunito font-semibold text-[13.76px] text-[#11175D]'>Full Name</p>
                        </div>
                        <p className='w-[368px] flex justify-center mt-[5px] font-nunito font-semibold text-[13.76px] text-[#ff2c2c] '> {fullNameErr} </p>
                    </div>
                    <div className='relative'>
                        {showPass ? (<FaEye onClick={ () => setShowPass(!showPass) } className='text-[#03014C] text-[20px] absolute top-[35px] right-[150px] cursor-pointer'></FaEye>
                        ) : (
                        <GoEyeClosed onClick={ () => setShowPass(!showPass) }  className='text-[#03014C] text-[20px] absolute top-[35px] right-[150px] cursor-pointer'></GoEyeClosed>)
                        }

                        <input onChange={handlePass} value={pass} type={`${showPass ? "text" : "password"}`} placeholder='••••••••' className='py-[26.5px] px-[53px] w-[368px]  bg-transparent text-[#11175D] font-nunito font-semibold text-[20px] border-2 border-[#B8B9CE] focus:border-[#11175D] focus:outline-none rounded-[8.6px] placeholder:text-[#B8B9CE]'/> 
                        <div className='w-[136px] py-[13px] flex justify-center absolute -top-[24px] left-[34px] bg-white'>
                            <p className='font-nunito font-semibold text-[13.76px] text-[#11175D]'>Password</p>
                        </div>
                        <p className='w-[368px] flex justify-center mt-[5px] font-nunito font-semibold text-[13.76px] text-[#ff2c2c] '> {passErr} </p>
                    </div>
                    <button onClick={handleSubmit} className='w-[368px] bg-[#5F35F5] text-white text-[20.64px] font-nunito font-semibold rounded-[86px] py-[20px] flex justify-center mt-[30px]'>Sign Up</button>
                    <p className='w-[368px] mt-[10px] cursor-pointer flex justify-center font-opensans text-[13.34px] text-[#03014C]'>Already  have an account ? <span className='pl-2 font-bold text-[#EA6C00]'><a href="#">Sign In</a></span> </p>
                </div>
            </div>
        </div>
        <div className='w-1/2'>
            <img className='w-full h-screen object-cover' src={reg_img} alt="#reg_img"  />
        </div>
    </div>
  )
}

export default Registration