import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'

function Movies() {
  const movies = useSelector(selectMovies);
  console.log("This is movies", movies);

  return (
    <Container>
        <Title>Recommended for you</Title>
        <Content>
          { movies && movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
  padding: 20px;
`

const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  justify-content: center;
`
const Title = styled.h4`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
`

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 0.3s ease-in-out;
  max-width: 500px; /* Empêche les images de devenir trop grandes */
  margin: auto;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`
