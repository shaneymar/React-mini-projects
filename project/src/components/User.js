

const User = ({name, age, children}) => {
  return (
    <div className="card">
        <h2>{name}</h2>
        <h2>{age}</h2>
        {children}
    </div>
  )
}

export default User