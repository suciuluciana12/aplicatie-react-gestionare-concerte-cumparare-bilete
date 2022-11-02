import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Button, Container } from 'react-bootstrap'
// import 'react-datepicker/dist/react-datepicker.css'

const Formular = (props) => {
  const [id, setId] = useState(props.obedit.id)
  const [src, setSrc] = useState(props.obedit.src)
  const [artist, setArtist] = useState(props.obedit.artist)
  const [nume_concert, setNume_concert] = useState(props.obedit.nume_concert)
  const [data_concert, setData_concert] = useState(props.obedit.data_concert)
  const [ora, setOra] = useState(props.obedit.ora)
  const [locatie, setLocatie] = useState(props.obedit.locatie)
  const [pret_bilet, setPret_bilet] = useState(props.obedit.pret_bilet)
  const [nr_total_bilete, setNr_total_bilete] = useState(
    props.obedit.nr_total_bilete,
  )

  const handleSubmit = (event) => {
    event.preventDefault()

    const concert = {
      src: src,
      artist: artist,
      nume_concert: nume_concert,
      data_concert: data_concert,
      ora: ora,
      locatie: locatie,
      pret_bilet: pret_bilet,
      nr_total_bilete: nr_total_bilete,
    }

    if (id > 0) {
      concert.id = id
      props.editActiv(concert)
    } else {
      props.adaug(concert)
    }

    //Golesc controalele formularului
    setSrc('')
    setArtist('')
    setNume_concert('')
    setData_concert('')
    setOra('')
    setLocatie('')
    setPret_bilet('')
    setNr_total_bilete('')
  }

  return (
    <Container
      style={{
        marginTop: '30px',
        backgroundColor: '#eeeeee',
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        padding: '20px',
      }}
    >
      <h3 style={{ textAlign: 'center' }}>
        {id > 0 ? 'Editare concert' : 'Adauga concert'}
      </h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Denumire imagine</Form.Label>
          <Form.Control
            type="text"
            value={src}
            placeholder="Introduceti imaginea concertului"
            onChange={(event) => {
              setSrc(event.target.value)
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Artist</Form.Label>
          <Form.Control
            type="text"
            value={artist}
            placeholder="Introduceti artistul"
            onChange={(event) => {
              setArtist(event.target.value)
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Numele concertului</Form.Label>
          <Form.Control
            type="text"
            value={nume_concert}
            placeholder="Introduceti numele concertului"
            onChange={(event) => {
              setNume_concert(event.target.value)
            }}
          />
        </Form.Group>

        <Form.Group controlId="dob">
          <Form.Label>Selecteaza data</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            placeholder="Data"
            value={data_concert}
            onChange={(event) => {
              setData_concert(event.target.value)
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Ora concertului</Form.Label>
          <Form.Control
            type="text"
            value={ora}
            placeholder="Introduceti ora concertului"
            onChange={(event) => {
              setOra(event.target.value)
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Locatie</Form.Label>
          <Form.Control
            type="text"
            value={locatie}
            placeholder="Introduceti locatia concertului"
            onChange={(event) => {
              setLocatie(event.target.value)
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Pret bilet</Form.Label>
          <Form.Control
            type="text"
            value={pret_bilet}
            placeholder="Introduceti pretul biletului"
            onChange={(event) => {
              setPret_bilet(event.target.value)
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nr total de bilete</Form.Label>
          <Form.Control
            type="text"
            value={nr_total_bilete}
            placeholder="Introduceti Nr total de bilete"
            onChange={(event) => {
              setNr_total_bilete(event.target.value)
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Formular
