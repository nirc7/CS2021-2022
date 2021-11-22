import React from 'react';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';

export default function FCPersonsData(props) {
  return (
    <div>
      <div>id={props.id} name={props.name}
        <span
          style={{ margin: 5 }}
          onClick={() => props.deletePerson(props.id)}>
          <PersonRemoveOutlinedIcon oncli color='warning' />
        </span>
      </div>

    </div>
  )
}
