import React, {useState} from 'react'

const ObjectState = () => {

    const [movie, setMovie] = useState({
        title: "SpiderMan 3",
        ratings: 7.7,
    });

    const changeRating = () => {
        const copyMovie = {
            ...movie,
            ratings: 5.9,
        }
        setMovie(copyMovie);
    }

  return (
    <div>
        <h1>{movie.title}</h1>
        <h3>{movie.ratings}</h3>
        <button onClick={changeRating}>Change Rating</button>
    </div>
  )
}

export default ObjectState