import React from "react";

const DisplayUser = (props) => { 
    return <table>
        <tr>
            <th>Full Name</th>
            <th>Email</th>       
        </tr>
        {props.users.map(user => <tr>
            <td>{user.FullName}</td>
            <td>{user.Email}</td>
        </tr>)}
        
    </table>
};

export default DisplayUser