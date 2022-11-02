import React from 'react'
import { Container } from 'react-bootstrap'

const NuExista = () => {
  const stil = {
    wrap: {
      textAlign: 'center',
      height: '50px',
      fontSize: '30px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 lightblue',
    },
  }
  return <Container style={stil.wrap}>Concertele cautate nu exista !</Container>
}

export default NuExista
