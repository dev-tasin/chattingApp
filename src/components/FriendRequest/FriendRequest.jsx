import React, { useEffect, useState } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import userOne from "../../assets/user_one.png";
import userTwo from "../../assets/user_two.png";
import userThree from "../../assets/user_three.png";
import userFour from "../../assets/user_four.png";
import userFive from "../../assets/user_five.png";
import { getDatabase, onValue, ref } from 'firebase/database';
import { useSelector } from 'react-redux';

const FriendRequest = () => {
    const data = useSelector((selector) => selector.userDetails.userInfo)
    const db = getDatabase();

    const [friendRequestList, setFriendRequestList] = useState([]);
        useEffect(() => {
            const userRef = ref(db, 'friendRequest/');
            onValue(userRef, (snapshot) => {
                let arr = [];
                snapshot.forEach((item) => {
                    console.log(item.val(), "item");
                    if(data.uid == item.val().receiverid){
                        arr.push(item.val())
                    }
                });
                setFriendRequestList(arr);
            });
        }, []);
        console.log(friendRequestList);
        

  return (
    <div className='w-[427px] h-[462px] overflow-hidden px-5 py-3 rounded-[20px] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25)] '>
        <div className='flex justify-between items-center pb-[17px]'>
            <h4 className='font-poppins font-semibold text-[20px] text-black'>Friend  Request</h4>
            <HiOutlineDotsVertical className='text-[19px] text-primary cursor-pointer'/>
        </div>
        {
        friendRequestList.map((item) => (
        <div className='flex gap-x-5 justify-between items-center border-b-[2px] pb-[15px] mt-4'>
            <div className='flex items-center gap-x-3'>
                <div className='w-[70px] h-[70px] rounded-full overflow-hidden object-cover'>
                    <img className='h-[70px] w-[70px]' src={userOne} alt="user_pic" />
                </div>
                <div>
                    <h4 className='font-poppins font-semibold text-[18px] text-black'>
                        {item.sendername}
                    </h4>
                    <p className='font-poppins font-medium text-[14px] text-[#4D4D4D]'>Dinner?</p>
                </div>
            </div>
            <div className='px-3 py-1 bg-primary rounded-[5px] text-center'>
                <p className='font-poppins font-semibold text-[20px] text-white cursor-pointer'>Accept</p>
            </div>
        </div>
        ))
        }
    </div>
  )
}

export default FriendRequest