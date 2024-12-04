import React, { useState } from 'react'
import googleicon_img from '../../assets/google.png'
import login_img from '../../assets/login.jpg'
import { GoEyeClosed } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const Login = () => {
    const auth = getAuth();

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const [emailErr , setEmailErr] = useState("")
    const [passwordErr , setPasswordErr] = useState("")

    const [showpassword , setShowpassword] = useState(false)

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailErr("")
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPasswordErr("")
    }

    const handleSubmit = () => {
        if(!email){
            setEmailErr('Enter Your Email Address');
        }else{
            if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
                setEmailErr("Enter a Valid Email Address")
            }
        }

        if(!password){
            setPasswordErr("Please Enter a Password");
        }
        
        if (email) {
          signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            toast.success("Login Successfully Done");
          })
          .catch((error) => {
              const errorCode = error.code;
              if(errorCode.includes("auth/invalid-credential")){
                toast.error("Please Enter Your Right Email or Password");
            }
          });
        }
    }

  return (
    <div className='flex'>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition:Bounce
        />
        <div className='w-1/2 flex justify-end items-center mr-[175px]'>
            <div className='pl-[100px] '>
                <h2 className='font-nunito font-bold text-[34.4px] text-[#11175D] pb-[30px]'>Login to your account!</h2>
                <div className='w-[221px] flex items-center gap-x-[10px] py-[23px] pl-[30px] border-2 border-#03014C rounded-[8.34px] mb-[32.7px] cursor-pointer'>
                    <img className='h-5 w-5' src={googleicon_img} alt="#ggl-icon" />
                    <p className='font-opensans font-semibold text-[13.34px] text-[#03014C]'>Login with Google</p>
                </div>
                <div>
                    <p className='font-opensans text-[13.34px] text-[#8180A5]'>Email Address</p>
                    <input onChange={handleEmail} value={email} type="email" placeholder='Youraddres@email.com' className='w-[372px] py-[16px]  bg-transparent text-[#03014C] font-opensans font-semibold text-[20px] border-b-2 border-[#CDCCDB] focus:border-[#03014C] focus:outline-none placeholder:text-[#03014C]' />
                    <p className='w-[368px] flex justify-center mt-[5px] font-nunito font-semibold text-[13.76px] text-[#ff2c2c] '> {emailErr} </p>
                </div>
                <div className='mt-[30px] relative'>
                    {showpassword ? (<FaEye onClick={ () => setShowpassword(!showpassword) } className='text-[#03014C] text-[20px] absolute top-[40px] right-[55px] cursor-pointer'></FaEye>
                    ) : (
                    <GoEyeClosed onClick={ () => setShowpassword(!showpassword) }  className='text-[#03014C] text-[20px] absolute top-[40px] right-[55px] cursor-pointer'></GoEyeClosed>)
                    }

                    <p className='font-opensans text-[13.34px] text-[#8180A5]'>Password</p>
                    <input onChange={handlePassword} value={password} type={`${showpassword ? "text" : "password"}`} placeholder='Enter your password' className='w-[372px] py-[16px]  bg-transparent text-[#03014C] font-opensans font-semibold text-[20px] border-b-2 border-[#CDCCDB] focus:border-[#03014C] focus:outline-none placeholder:text-[#03014C]'/>
                    <p className='w-[368px] flex justify-center mt-[5px] font-nunito font-semibold text-[13.76px] text-[#ff2c2c] '> {passwordErr} </p>
                </div>
                <button onClick={handleSubmit} className='w-[424px] bg-[#5F35F5] text-white text-[20.9px] font-opensans font-semibold rounded-[8.71px] py-[26px] flex justify-center mt-[30px] shadow-[0px_4px_10px_0px_rgba(95,52,245,0.5)]'>Login to Continue</button>
                <p className='mt-[15px] font-nunito font-semibold text-base cursor-pointer text-[#ff2c2c] '><Link to="/forgotpassword">Forgot Password ?</Link></p>
                <p className='w-[368px] mt-[34px] flex justify-center font-opensans text-[13.34px] text-[#03014C]'>Don’t have an account ?<span className='pl-2 font-bold text-[#EA6C00]'><Link to="/registration">Sign Up</Link></span> </p>
            </div>
        </div>
        <div className='w-1/2'>
            <img className='w-full h-screen object-cover' src={login_img} alt="#login_img" />
        </div>
    </div>
  )
}

export default Login