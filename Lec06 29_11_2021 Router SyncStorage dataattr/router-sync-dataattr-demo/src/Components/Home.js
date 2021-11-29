import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();
    let num = 7;

    const btngo2SP = () => {
        const userObj = {
            userId: 1,
            userName: 'avi'
        };

        navigate('secondP', { state: userObj });
    }

    return (
        <div style={{ border: 'solid green 2px', margin: 15, padding: 10, fontSize: 25 }}>
            Home <br />
            <Link to={`/menu/${num}`} >Menu User</Link>  <br />
            <button onClick={btngo2SP}>Go 2 Second Page</button>
        </div>
    )
}
