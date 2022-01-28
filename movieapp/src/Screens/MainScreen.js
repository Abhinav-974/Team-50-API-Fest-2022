import React from 'react'
import './MainScreen.css'
import data1 from '../Data/movies'
import data2 from '../Data/shows'
import { Col, Row } from 'react-bootstrap'
import MovieCard from '../Components/MovieCard'
import { Link } from 'react-router-dom'
const MainScreen = () => {
  return (
    <>
      <Row>
        <Col md={3}>
          <div className='reviewsSection'>reviews</div>
        </Col>
        <Col className='p-0'>
          <div className='moviesSection'>
            <div className='title'>Movies</div>
            <Row className='py-5'>
              {data1.map((movie) => (
                <Col
                  className='d-flex justify-content-center'
                  key={movie.movie_id}
                >
                  <Link
                    to={`/movies/${movie.movie_id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <MovieCard movie={movie} />
                  </Link>
                </Col>
              ))}
            </Row>
            <div className='title'>Shows</div>
            <Row className='py-5'>
              {data2.map((show) => (
                <Col
                  className='d-flex justify-content-center'
                  key={show.show_id}
                >
                  <Link
                    to={`/shows/${show.show_id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <MovieCard movie={show} />
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default MainScreen
