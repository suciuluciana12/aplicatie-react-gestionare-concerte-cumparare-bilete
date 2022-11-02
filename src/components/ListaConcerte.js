import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import DateRangePicker from './DateRangePicker'
import Searchbar from './Searchbar'
import Concert from './Concert'

const ListaConcerte = ({
  dateConcerte,
  sterge,
  editeaza,
  setSearchTerm,
  searchTerm,
  searchHandler,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  handleFilterAfterDate,
}) => {
  console.log(dateConcerte)
  console.log(startDate)
  return (
    <Container
      style={{
        backgroundColor: '#eeeeee',
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        padding: '20px',
      }}
    >
      <Searchbar
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        searchHandler={searchHandler}
        dateConcerte={dateConcerte}
      />
      <DateRangePicker
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        handleFilterAfterDate={handleFilterAfterDate}
        page={'1'}
      />

      <Row xs="auto" className=" justify-content-sm-center ">
        {dateConcerte.map((item) => {
          return (
            <Col key={item.id}>
              <Concert
                id={item.id}
                src={item.src}
                artist={item.artist}
                nume_concert={item.nume_concert}
                ora={item.ora}
                data_concert={item.data_concert}
                locatie={item.locatie}
                pret_bilet={item.pret_bilet}
                nr_total_bilete={item.nr_total_bilete}
                bilete_vandute={item.bilete_vandute}
                sterge={sterge}
                editeaza={editeaza}
              />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default ListaConcerte
