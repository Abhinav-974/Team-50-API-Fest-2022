import React from 'react'
import data1 from '../Data/movies'

const MovieScreen = ({ match }) => {
  const data = data1.filter((movie) => movie.movie_id == match.params.movieid)
  console.log(data)
  return <div>movie screen bolte</div>
}

export default MovieScreen
