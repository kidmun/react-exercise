import React from "react";
import './DisplayUser.css';
import Card from "../UI/Card";
const DisplayUser = (props) => { 
    return <Card>
    <table>
        <tr>
            <th>Full Name</th>
            <th>Email</th>       
        </tr>
        {props.users.map(user => <tr>
            <td>{user.FullName}</td>
            <td>{user.Email}</td>
        </tr>)}
        
        </table>
        </Card>
};

export default DisplayUser