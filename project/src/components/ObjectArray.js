import React, {useState} from 'react'

const ObjectArray = () => {

    const [movies, setMovies] = useState([
    {
        id: 1,
        title: "SpiderMan 3",
        ratings: 7.7,
    }, 
    {
        id:2,
        title: "SuperMan",
        ratings: 6.7,
    },
    {
        id:3,
        title: "Da Vinci Code",
        ratings: 8.7,
    }
    
]);

const handleClick = () => {
    setMovies(
        movies.map((m) => (m.id === 1 ? {...m, title: "Interceptor"} : m))
        )
}

  return (
    <>
        {movies.map((movie) => (
            <li key={Math.random()}>
                {movie.title}
            </li>
        ))}

        <button onClick={handleClick}>Change Movie Name</button>
    </>
  )
}

export default ObjectArray
