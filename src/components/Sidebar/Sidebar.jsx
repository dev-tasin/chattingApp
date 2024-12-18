import React, { createRef, useState } from 'react';
import sidebarProfile from "../../assets/sidebar_profile.png";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { ImExit } from "react-icons/im";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCloudUploadAlt } from "react-icons/fa";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { ImCross } from "react-icons/im";
import uploadImage from "../../assets/uploadImage.jpg"



const Sidebar = () => {
    const navigate = useNavigate();
    const [show , setShow] = useState(false)
    const [image, setImage] = useState();
    const [cropData, setCropData] = useState("");
    const cropperRef = createRef();

    const handleUpload = () =>{
        setShow(true)
    }

    const handleLogout = () => {
        setTimeout(() => {
            console.log("Toast Triggered"); 
            toast("LogOut Done");
            navigate("/login");
        }, 2000);
    };
    const handleCross = () => {
        setShow(false)
    };

    const onChange = (e) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
          files = e.dataTransfer.files;
        } else if (e.target) {
          files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
      };

    return (
      <section>
        <div className='mr-[43px] h-[954px] w-[186px] flex flex-col items-center px-[43px] pt-[35px] bg-primary rounded-[20px] my-5 border'>
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
                transition={Bounce}
            />
            <div className='relative group mb-[78px] w-[100px] h-[100px] rounded-full object-cover bg-black'>
                <img src={sidebarProfile} alt="#profile_pic" />
                <div className='w-[100px] h-[100px] group-hover:opacity-[0.6] bg-black absolute top-0 left-0 rounded-full opacity-0 duration-200 cursor-pointer flex justify-center items-center'>
                    <FaCloudUploadAlt onClick={handleUpload} className='text-white text-2xl'/>
                </div>
            </div>
            <ul>
                <li className='pb-[83px]'>
                    <AiOutlineHome className='text-[46px] text-white cursor-pointer' />
                </li>
                <li className='pb-[83px]'>
                    <AiOutlineMessage className='text-[46px] text-white cursor-pointer' />
                </li>
                <li className='pb-[83px]'>
                    <IoIosNotificationsOutline className='text-[46px] text-white cursor-pointer' />
                </li>
                <li className='pb-[83px]'>
                    <CiSettings className='text-[46px] text-white cursor-pointer' />
                </li>
                <li className='pt-[104px] pb-[47px]'>
                    <ImExit onClick={handleLogout} className='text-[46px] text-white cursor-pointer' />
                </li>
            </ul>
        </div>
        {show &&(
            <div className="fixed inset-0 flex items-center justify-center z-[99999]">
                <div className="relative bg-black w-[600px] p-5 bg-opacity-[0.9] overflow-hidden rounded-[20px]">
                    <ImCross onClick={handleCross} className='text-white text-2xl absolute top-5 right-5'/>
                    <h3 className='pb-1 text-center font-nunito font-bold text-white text-2xl'>Image Upload</h3>
                    <div className='overflow-hidden mx-auto w-[100px] h-[100px] rounded-full mb-2'>
                        <div className="img-preview w-[100px] h-[100px]"></div>
                    </div>
                    {
                        image ? (
                        <Cropper
                        ref={cropperRef}
                        style={{ height: 300, width: "100%" }}
                        zoomTo={0.5}
                        initialAspectRatio={1}
                        preview=".img-preview"
                        src={image}
                        viewMode={1}
                        minCropBoxHeight={10}
                        minCropBoxWidth={10}
                        background={false}
                        responsive={true}
                        autoCropArea={1}
                        checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                        guides={true}
                        />
                        ) : (
                            <div className='mx-auto w-[100px] h-[100px] mb-[100px]'>
                                <img src={uploadImage} alt="profile" />
                            </div>
                        )}
                    
                    <div className='mt-5'>
                     <input type="file" onChange={onChange} />
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-white text-black text-base font-opensans font-semibold rounded px-3 py-2   flex justify-center mt-2'>Upload
                        </button>
                    </div>
                </div>
            </div>
        )}
      </section>
    );
};

export default Sidebar;
