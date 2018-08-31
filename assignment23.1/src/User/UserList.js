import React from "react";
// import the User component
import User from "./User";

function UserList(props){
    return(
        <div>
            {props.users.map(userobj=><User key={userobj.id} name={userobj.name} age={userobj.age} />)}
        </div>
    );
}

export default UserList;