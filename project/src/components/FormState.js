import React, { useState } from 'react'

const FormState = () => {

    const [userName, setUserName] = useState("");

    const handleChange = (e) => {
        setUserName(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`You typed : ${userName}`);
    }
  return (
    <div>
        <h1>Form Demo</h1>
        <form onSubmit={handleSubmit}>
            <input type="text"  value={userName} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormState