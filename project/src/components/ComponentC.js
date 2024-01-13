import React, { useContext } from 'react'
import { UserContext } from '../App';

const ComponentC = () => {

    const name= useContext(UserContext);

  return (
    <h1>I'm {name} working as Web Developer</h1>
  )
}

export default ComponentC