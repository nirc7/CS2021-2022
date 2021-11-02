import React from "react";

export default function FCPerson(props) {

    let num = 7;
    let myName = "no name";

    function addOne() {
        console.log(num);
        num++;
        console.log(num);
    }

    function txtCng(e) {
        console.log(e.target.value);
        myName = e.target.value;
    }

    return (
        <div style={{
            margin: 20, color: 'green',
            fontSize: 30,
            padding: 10,
            border: 'solid red 2px'
        }}>
            <div> ID: {props.id} </div>
            <div> Name: {props.name}</div>
            <div>num={num}</div>
            <input type="text" onChange={txtCng} /> {myName} <br />
            <button onClick={addOne} >Add One</button> <br />
            <button onClick={() => addOne()} >Add One</button>
        </div>
    );
}

