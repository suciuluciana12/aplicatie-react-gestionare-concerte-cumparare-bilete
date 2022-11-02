import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import Counter from './Counter'

const CumparaBilet = ({ dateConcerte, adaugaVanzare }) => {
  const { id } = useParams()
  const activ = dateConcerte.find((item) => {
    return parseInt(item.id, 10) === parseInt(id, 10)
  })
  const [count, setCount] = useState(0)
  const decrementare = (count) => {
    if (count > 0) {
      count = count - 1
      setCount(count)
    }
  }

  const incrementare = (count) => {
    count = count + 1
    setCount(count)
  }

  //Formularul :
  const [email, setEmail] = useState('')
  const [nume, setNume] = useState('')
  const [nr_card, setNr_card] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const vanzare = {
      email: email,
      nume: nume,
      nr_card: nr_card,
      nr_bilete: count,
      id_concert: id,
    }

    adaugaVanzare(vanzare)
  }
  const stil = {
    modalBody: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  }

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{activ.nume_concert}</Modal.Title>
        </Modal.Header>

        <Modal.Body style={stil.modalBody}>
          <div>Pret bilet: {activ.pret_bilet}</div>
          <div>Bilete cumparate:</div>
          <div style={stil.modalBody}>
            Nr.bilete :{' '}
            <Counter
              count={count}
              incrementare={incrementare}
              decrementare={decrementare}
            />
          </div>
        </Modal.Body>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Detinator card</Form.Label>
              <Form.Control
                type="text"
                placeholder="Numele posesorului de card"
                onChange={(event) => {
                  setNume(event.target.value)
                }}
              />
              <Form.Group className="mb-3">
                <Form.Label>Nr card</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nr card"
                  onChange={(event) => {
                    setNr_card(event.target.value)
                  }}
                />
              </Form.Group>
            </Form.Group>

            <Button variant="primary" type="submit">
              Cumpara
            </Button>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  )
}

export default CumparaBilet
