import React from 'react';
import { useParams } from 'react-router-dom';

export default function MenuUser() {
    const params =  useParams();
    const { userId} =  useParams();
    let id = useParams().userId;

    return (
        <div style={{border:'solid red 2px', margin:15, padding:10, fontSize:25}}>
            Menu User <br />
            userId= {params.userId} <br />
            id={id} <br />
            userId2 = {userId} 
        </div>
    )
}
