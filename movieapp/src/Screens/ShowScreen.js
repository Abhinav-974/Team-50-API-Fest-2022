import React from 'react'
import data2 from '../Data/shows'
import { Row, Col, Image } from 'react-bootstrap'

const ShowScreen = ({ match }) => {
  const data = data2.filter((movie) => movie.movie_id == match.params.movieid)
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
              <p>{data[0].pilot_air_date}</p>
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

export default ShowScreen
