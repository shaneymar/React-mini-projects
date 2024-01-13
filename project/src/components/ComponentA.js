import React from 'react'
import ComponentB from './ComponentB';

const ComponentA = ({name}) => {
    console.log(name);
  return (
    <div>
        <ComponentB name={name} />
    </div>
  )
}

export default ComponentA