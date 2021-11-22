import React from 'react'
import FCPersonsData from './FCPersonsData'

export default function FCPersonsList(props) {

  const getID2Delete = (pId) => {
    console.log('FCPersonsList = ', pId);
    props.sendID(pId);
  }

  let personsStr = props.persons.map(per =>
    <FCPersonsData key={per.id} id={per.id} name={per.name}
      deletePerson={getID2Delete} />);

  return (

    <div>
      {personsStr}
    </div>
  )
}
