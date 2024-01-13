import { useState } from "react"

const ArraysState = () => {

 const [friends, setFriends] = useState(["Alex", "Warner", "Kohli"])

  const addOne =() => {
    setFriends([...friends, "Shankar"]);
  }

  const removeOne = () => {
    setFriends(friends.filter(f => f!== "Alex"));
  }

  const updateOne = () => {
    setFriends(friends.map( f => f === "Alex" ? "Alex Carey" : f))
  }
  return (
    <div> 
      {
        friends.map((friend) => (
          <li key={Math.random() * 10}>
            {friend}
          </li>
        ))
      }
      <button onClick={addOne}>Add One</button>
      <button onClick={removeOne}>Remove One</button>
      <button onClick={updateOne}>Update One</button> 
    </div>
  )
}

export default ArraysState