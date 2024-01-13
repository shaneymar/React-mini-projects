import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = ({name}) => {
    console.log(name)
  return (
    <div>
        <ComponentC name={name} />
    </div>
  )
}

export default ComponentB