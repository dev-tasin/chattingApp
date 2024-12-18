import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const ForgotPassword = () => {
    const auth = getAuth(); 

    const [email , setEmail] = useState("")
    const [emailErr , setEmailErr] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailErr("")
    }

    const handleSubmit = () => {
        if(!email){
            setEmailErr('Enter Your Email Address');
        }else{
            if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
                setEmailErr("Enter a Valid Email Address")
            }
        }

        if (email) {
            sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Please Check Your Email")
            })
            .catch((error) => {
                const errorCode = error.code;
                if(errorCode.includes("auth/invalid-credential")){
                    toast.error("This Email is Wrong");
                }
            });
        }
    }

  return (
    <div className='bg-primary h-screen flex justify-center items-center'>
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
        <div className='w-[500px] bg-white p-10'>
            <h3 className='text-center font-nunito font-bold text-black text-2xl'>Reset Your Password</h3>
            <div>
                <p className='mt-5 font-opensans text-[13.34px] text-[#8180A5]'>Email Address</p>
                <input onChange={handleEmail} value={email} type="email" placeholder='Enter Your Email Address' className='w-[372px] py-[16px]  bg-transparent text-[#03014C] font-opensans font-semibold text-[20px] border-b-2 border-[#CDCCDB] focus:border-[#03014C] focus:outline-none placeholder:text-[#03014C]' />
                <p className='w-[368px] flex justify-center mt-[5px] font-nunito font-semibold text-[13.76px] text-[#ff2c2c] '> {emailErr} </p>
            </div>
            <div className='flex gap-x-5'>
                <button 
                  onClick={handleSubmit}
                  className='bg-primary text-white text-base font-opensans font-semibold rounded px-3 py-2   flex justify-center mt-[30px] shadow-[0px_4px_10px_0px_rgba(95,52,245,0.5)]'>Reset Password
                </button>
                <button className='bg-primary text-white text-base font-opensans font-semibold rounded px-3 py-2 flex justify-center mt-[30px] shadow-[0px_4px_10px_0px_rgba(95,52,245,0.5)]'>
                    <Link to="/login">Back to Login</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword