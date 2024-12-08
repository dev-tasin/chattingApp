import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Searchbar from '../../components/Searchbar/Searchbar'
import GroupList from '../../components/GroupList/GroupList'
import Friends from '../../components/Friends/Friends'
import UserList from '../../components/UserList/UserList'
import FriendRequest from '../../components/FriendRequest/FriendRequest'
import MyGroups from '../../components/MyGroups/MyGroups'
import BlockedUsers from '../../components/BlockedUsers/BlockedUsers'

const Home = () => {
  return (
    <div className='max-w-container mx-auto flex'>
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
    </div>
  )
}

export default Home