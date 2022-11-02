import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'

const DateRangePicker = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  handleFilterAfterDate,
  handleFilterRapoarte,
  page,
}) => {
  const stil = {
    form: {
      display: 'flex',
      alignItems: 'end',
      justifyContent: 'center',
      marginBottom: '30px',
    },
  }

  return (
    <div>
      <Form
        style={stil.form}
        onSubmit={page === '1' ? handleFilterAfterDate : handleFilterRapoarte}
      >
        <Form.Group controlId="dob">
          <Form.Label>Incepand cu:</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            placeholder="Data"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value)
            }}
          />
        </Form.Group>
        <Form.Group controlId="dob">
          <Form.Label>Pana la :</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            placeholder="Data"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value)
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Go
        </Button>
      </Form>
    </div>
  )
}

export default DateRangePicker
