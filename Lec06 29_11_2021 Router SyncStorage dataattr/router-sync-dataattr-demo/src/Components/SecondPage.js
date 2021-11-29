import React from 'react';
import { useLocation } from 'react-router-dom';


export default function SecondPage() {
    const { state } = useLocation();
    let userObj = state;
    console.log(userObj.userId);

    return (
        <div style={{ border: 'solid purple 2px', margin: 15, padding: 10, fontSize: 25 }}>
            Second Page <br />
            UserId = {userObj.userId} <br />
            userName = {userObj.userName}
        </div>
    )
}
