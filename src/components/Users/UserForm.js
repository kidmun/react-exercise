import React from "react";

const UserForm = (props) => { 
      
    return <div>
        <form>
            <div>
            <label>Full Name:</label>
            <input type="text" />
            </div>
            <div>
            <label>Email:</label>
            <input type="email" />
            </div>
            <div>
            <label>Password:</label>
            <input type="password" />
            </div>
            <button type="submit">submit</button>

    </form>
</div>

};

export default UserForm