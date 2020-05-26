import React from 'react'
import { Container, Column, Row } from '../../components/styles'

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Column grid="8">GRID 5</Column>
        <Column grid="4">GRID 5</Column>
      </Row>
    </Container>
  )
}

export default HomePage
