import React from 'react'
import DateRangePicker from './DateRangePicker'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import Concert from './Concert'

const ContainerRapoarte = styled(Container)`
  background-color: #eeeeee;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const FilterWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`

const RapoarteAsociatie = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  handleFilterRapoarte,
  dateConcerte,
  sterge,
  editeaza,
  apasatButonCautare,
  nr_concerte,
  startDateCopy,
  endDateCopy,
}) => {
  return (
    <ContainerRapoarte>
      <FilterWrap>
        <div className="fs-4">Selectati perioada raportului : </div>
        <DateRangePicker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          handleFilterRapoarte={handleFilterRapoarte}
          page={'2'}
        />
      </FilterWrap>
      {apasatButonCautare && (
        <Row className="fs-4 justify-content-center mb-4">
          Numarul concertelor din perioada {startDateCopy} - {endDateCopy} este:{' '}
          {nr_concerte}
        </Row>
      )}
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
    </ContainerRapoarte>
  )
}

export default RapoarteAsociatie
