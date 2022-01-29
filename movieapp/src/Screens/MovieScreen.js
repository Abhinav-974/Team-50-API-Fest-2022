import React from 'react'
import data1 from '../Data/movies'
import { Row, Col, Image, Button } from 'react-bootstrap'
import './MovieScreen.css'
import { Link } from 'react-router-dom'
const MovieScreen = ({ match }) => {
  const data = data1.filter((movie) => movie.movie_id == match.params.movieid)
  console.log(data)
  return (
    <div className='movieContainer'>
      <Row>
        <Col md={6}>
          <Image src={data[0].image_url} fluid thumbnail />
        </Col>
        <Col md={6}>
          <Row>
            <Col md={6}>
              <h3>{data[0].name}</h3>
              <p>{data[0].description}</p>
              <p>{data[0].release_date}</p>
              <p>{data[0].certification}</p>
              <p>
                <strong>Cast:</strong> {data[0].cast.map((c) => c.name)}
              </p>
              <h4>Reviews:</h4>
              {data[0].review.map((r) => (
                <p>
                  {r.stars_out_of_5}⭐ {r.description}
                </p>
              ))}
              <Button className='btn btn-warning'>Add Review</Button>
            </Col>
            <Col md={6}>
              <p>
                <strong>Languages:</strong>{' '}
                {data[0].languages_available.map((l) => l.name)}
              </p>
              <p>
                <strong>Genres:</strong> {data[0].genre.map((g) => g.name)}
              </p>
              <p>
                <strong>Services:</strong>{' '}
                {data[0].services_available.map((s) => s.name)}
              </p>
              <p>
                <strong>Soundtracks:</strong>{' '}
                <a href={data[0].soundtrack_link.map((s) => s.name)}>
                  {data[0].soundtrack_link.map((s) => s.name)}
                </a>
              </p>
              <h4>Quotes:</h4>{' '}
              {data[0].quotes.map((q) => (
                <p>"{q.quote}"</p>
              ))}
              <Button className='btn btn-warning'>Add Quote</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default MovieScreen
