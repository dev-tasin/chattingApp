import React from 'react'
import sidebarProfile from "../../assets/sidebar_profile.png";
import { AiOutlineHome , AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { ImExit } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';



const Sidebar = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        setTimeout(() => {
            console.log("Toast Triggered"); 
            toast("LogOut Done");
            navigate("/login")
        }, 2000);
    }
  return (
    <div className='mr-[43px] h-[954px] w-[186px] flex flex-col items-center px-[43px] pt-[35px] bg-primary rounded-[20px] my-5 border'>
        <ToastContainer
            style={{ zIndex: 9999 }}
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
        <div className='mb-[78px] w-[100px] h-[100px] rounded-full overflow-hidden object-cover'>
            <img src={sidebarProfile} alt="#profile_pic" />
        </div>
        <ul >
            <li className='pb-[83px]'>
                <AiOutlineHome className='text-[46px] text-white'/>
            </li>
            <li className='pb-[83px]'>
                <AiOutlineMessage className='text-[46px] text-white'/>
            </li>
            <li className='pb-[83px]'>
                <IoIosNotificationsOutline className='text-[46px] text-white'/>
            </li>
            <li className='pb-[83px]'>
                <CiSettings className='text-[46px] text-white'/>
            </li>
            <li className='pt-[104px] pb-[47px] '>
                <ImExit onClick={handleLogin} className='text-[46px] text-white cursor-pointer'/>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar