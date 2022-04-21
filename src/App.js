import React, { useState } from 'react';
import './App.css';
import UserForm from './components/Users/UserForm';

function App() {

  const [userList, setUserList] = useState([])
  
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
    
      <UserForm onAddUser={userListHandler}/>   
    </div>
  );
}

export default App;
