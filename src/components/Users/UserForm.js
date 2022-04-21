import React, { useState } from "react";

const UserForm = (props) => { 
    const [enteredFullName, setEnteredFullName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const formHandler = (event) => { 
        event.preventDefault();
        props.onAddUser(enteredFullName, enteredEmail, enteredPassword)
    };

    const nameHandler = (event) => { 
        setEnteredFullName(event.target.value);

    };
    const emailHandler = (event) => { 
        setEnteredEmail(event.target.value);
        
    };
    const passwordHandler = (event) => { 

        setEnteredPassword(event.target.value);
        
    };


        
      
    return <div>
        <form onSubmit={formHandler}>
            <div>
            <label htmlFor="fullname">Full Name:</label>
                <input id="fullname" type="text" value={enteredFullName} onChange={nameHandler}/>
            </div>
            <div>
            <label htmlFor="email" >Email:</label>
                <input id="email" type="email" value={enteredEmail} onChange={emailHandler}/>
            </div>
            <div>
            <label htmlFor="password">Password:</label>
                <input id="password" type="password" value={enteredPassword} onChange={passwordHandler}/>
            </div>
            <button type="submit">submit</button>

    </form>
</div>

};

export default UserForm