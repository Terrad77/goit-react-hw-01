// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/profile/Profile';
// import Profile from './components/profile/Profile';

// import userData from "../userData.json";
// import friends from "../friends.json";
// import transactions from "../transactions.json";

const userData = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
};

console.log(JSON.stringify(userData));



export const App = (userData) => {
  return (
    <>
      <Profile 
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      {/* <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
    </>
  );
};

