import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";


const UserForm = (props) => { 
    const [enteredFullName, setEnteredFullName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [error, setError] = useState();

    const formHandler = (event) => { 
        event.preventDefault();

        if (enteredFullName.trim().length === 0 || enteredEmail.trim().length === 0 || enteredPassword.trim().length === 0) {
            setError(
                {
                    title: 'something is wrong',
                    message: 'please enter all requirements!'
                })
            return;  
        };
        props.onAddUser(enteredFullName, enteredEmail, enteredPassword)
        setEnteredFullName('')
        setEnteredEmail('')
        setEnteredPassword('')
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
    const errorHandler = () => { 
        setError(null)
    }


        
      
    return <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
       
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
            <Button type="submit">submit</Button>

            </form>
            
</div>

};

export default UserForm