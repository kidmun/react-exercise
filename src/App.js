import React, { useState } from 'react';
import './App.css';
import UserForm from './components/Users/UserForm';
import DisplayUser from './components/Users/DisplayUser';

const prev = {
  FullName: "kidussssssss",
  Email: "email",
  Password: "password"
};

function App() {

  const [userList, setUserList] = useState([prev])
  
  const userListHandler = (fullName, email, password) => { 
    console.log(fullName, email, password)
    const newUser = {
      FullName: fullName,
      Email: email,
      Password: password
    };
    console.log(newUser)
    setUserList((prevUserList) => {
      return [...prevUserList,newUser]
    })

  }; 
  return (
    <div className="App">
      <h1>Welcome to registration</h1>
    
      <UserForm onAddUser={userListHandler} /> 
      <br/>
      <DisplayUser users={userList}/>
    </div>
  );
}

export default App;
