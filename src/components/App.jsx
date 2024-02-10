// import { useState } from 'react'
import './App.css'

import userData from "../userData.json";
import { Profile } from './profile/Profile';
import { FriendList } from './friend_list/FriendList';
import friends from "../friends.json";

// import transactions from "../transactions.json";

// створіть у папці src файл userData.json, перенесіть туди дані користувача, відформатуйте їх у формат JSON
// console.log(JSON.stringify(friends));



export const App = () => {
  return (
    <>
      <Profile 
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      {/* <TransactionHistory items={transactions} /> */}
    </>
  );
};

