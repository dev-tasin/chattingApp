import React, { useEffect, useState } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import userOne from "../../assets/user_one.png";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useSelector } from 'react-redux';

const UserList = () => {
    const data = useSelector((selector) => selector.userDetails.userInfo)
    console.log(data);

    const db = getDatabase();

    const [userList, setUserList] = useState([]);
    useEffect(() => {
        const userRef = ref(db, 'users/');
        onValue(userRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                console.log(item.key, "item");
                if(data.uid != item.key){
                    arr.push({...item.val(), userid: item.key});
                }
            });
            setUserList(arr);
        });
    }, []);
    console.log(userList);

    const handleFriendRequest = (item) => {
        console.log("sdfsf" , item);
        set(push(ref(db, "friendRequest/")), {
            sendername: data.displayName,
            senderid: data.uid,
            receivername: item.username,
            receiverid: item.userid,
          });
    }

    return (
        <div className='w-[344px] mt-[33px] h-[451px] overflow-hidden p-5 rounded-[20px] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25)] '>
            <div className='flex justify-between items-center pb-[29px]'>
                <h4 className='font-poppins font-semibold text-[20px] text-black'>User List</h4>
                <HiOutlineDotsVertical className='text-[19px] text-primary cursor-pointer' />
            </div>
            {
                userList.map((item) => (
                    <div className='flex items-center gap-x-[10px] border-b-[1px] pb-[10px] mb-[15px]'>
                        <div className='w-[52px] rounded-full overflow-hidden object-cover'>
                            <img src={userOne} alt="#Group_Img" />
                        </div>
                        <div className='w-full flex justify-between '>
                            <div>
                                <h4 className='font-poppins font-semibold text-[14px] text-black'>
                                    {item.username}
                                </h4>
                                <p className='font-poppins font-medium text-[12px] text-[#00000080]'>
                                    {item.email}
                                </p>
                            </div>
                            <div className='px-2 bg-primary rounded-[5px] flex justify-center items-center'>
                                <p onClick={()=>handleFriendRequest(item)} className='font-poppins font-semibold text-[20px] text-white cursor-pointer'>+</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default UserList