import React from 'react'
import './Concert.css'
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Concert = ({
  id,
  src,
  artist,
  nume_concert,
  data_concert,
  ora,
  locatie,
  pret_bilet,
  nr_total_bilete,
  bilete_vandute,
  sterge,
  editeaza,
}) => {
  const updateBileteDisponibile = () => {
    const bileteDisponibile = nr_total_bilete - bilete_vandute
    return bileteDisponibile
  }
  return (
    <Card className="cardConcert">
      <Card.Img className="cardImage" variant="top" src={src} />
      <NavLink className="concertLink" id={id} to={`/cumparabilet/${id}`}>
        BILETE
      </NavLink>
      <Card.Body className="cardText">
        <Card.Title className="cardTitle">{nume_concert}</Card.Title>
        <Card.Text>-{artist}-</Card.Text>
        <Card.Text>{locatie}</Card.Text>
        <Card.Text>
          {data_concert} , {ora}
        </Card.Text>
        <Card.Text>Pret bilet : {pret_bilet} </Card.Text>
        <Card.Text>Nr total de bilete : {nr_total_bilete}</Card.Text>
        <Card.Text>Bilete disponibile: {updateBileteDisponibile()} </Card.Text>
        <Card.Text>Bilete vandute: {bilete_vandute}</Card.Text>
      </Card.Body>
      <Button variant="info" id={id} onClick={() => sterge(id)}>
        Sterge
      </Button>
      <Button id={id} onClick={() => editeaza(id)}>
        Editeaza
      </Button>
    </Card>
  )
}

export default Concert
