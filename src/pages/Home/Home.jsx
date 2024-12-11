import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Searchbar from '../../components/Searchbar/Searchbar'
import GroupList from '../../components/GroupList/GroupList'
import Friends from '../../components/Friends/Friends'
import UserList from '../../components/UserList/UserList'
import FriendRequest from '../../components/FriendRequest/FriendRequest'
import MyGroups from '../../components/MyGroups/MyGroups'
import BlockedUsers from '../../components/BlockedUsers/BlockedUsers'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Home = () => {
    const auth = getAuth();

    const data = useSelector((state) => state.userDetails.userInfo);
    const navigate = useNavigate()
    const [verify , setVerify] = useState(false) 

    useEffect(() => {
        if (!data) {
            navigate("/login");
        }
    })

    onAuthStateChanged(auth, (user) => {
        if (user.emailVerified) {
            setVerify(true);
        } else {
            setVerify(false);
        }
      });

  return (
    <div className='max-w-container mx-auto flex'>
        {
            verify ? (
                <>
                <Sidebar/>
                <div className='flex flex-wrap gap-x-5'>
                    <div>
                        <Searchbar/>
                        <GroupList/>
                    </div>
                    <div>
                        <Friends/>
                    </div>
                    <div>
                        <UserList/>
                    </div>
                    <div>
                        <FriendRequest/>
                    </div>
                    <div>
                        <MyGroups/>
                    </div>
                    <div>
                        <BlockedUsers/>
                    </div>
                </div>
                </>
            ) : (
                <>
                <div className='bg-primary h-screen w-full flex flex-col justify-center items-center'>
                    <h4 className='font-poppins text-[30px] font-medium text-white
                    pb-2'>Please Verify Your Email First</h4>
                    <p className='font-poppins text-base text-white font-semibold'>Check Your Mail-Box</p>
                    <button className='bg-white text-primary text-xl font-nunito font-bold rounded px-3 py-2 flex justify-center mt-[30px] shadow-[0px_4px_10px_0px_rgba(95,52,245,0.5)]'>
                    <Link to="/login">Back to Login</Link>
                    </button>
                </div>
                </>
            )
        }
    </div>
  )
}

export default Home