import React from 'react';
import { useState, useEffect } from 'react';

export default function FCHPerson() {
  const [id, setId] = useState(0);
  const [name, setName] = useState(null);


  useEffect(() => {
    console.log(id);
    return () => {
      console.log('cleaned');
    }
  }, []);

  const btnAddId = () => {
    let newId = id+1;
    setId(newId);
  }

  return (
    <div>

      <div>FCH Person</div>
      id= {id} <br />
      <button onClick={btnAddId} >add++</button> <br />
      <button onClick={()=> setName('avi')} >add Name</button>
      name={name}
    </div>
  )
}
