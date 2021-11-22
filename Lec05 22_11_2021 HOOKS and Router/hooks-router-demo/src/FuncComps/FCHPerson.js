import React from 'react';
import { useState } from 'react';

export default function FCHPerson() {
  const [id, setId] = useState(0);

  const btnAddId = () => {
    setId(7);
  }

  return (
    <div>

      <div>FCH Person</div>
      id= {id} <br />
      <button onClick={btnAddId} >add</button>
    </div>
  )
}
