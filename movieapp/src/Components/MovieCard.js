import React from 'react'
import { Card } from 'react-bootstrap'
import './MovieCard.css'
const MovieCard = ({ movie }) => {
  return (
    <>
      <div className='cardContainer'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={movie.image_url} />
          <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <p className='movieCardPara'>{movie.description}</p>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default MovieCard
