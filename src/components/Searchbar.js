import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'

const stil = {
  searchbar: {
    marginBottom: '30px',
    width: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    marginRight: '10px',
  },
}

const Searchbar = ({
  searchTerm,
  searchHandler,
  setSearchTerm,
  dateConcerte,
}) => {
  return (
    <Container style={stil.searchbar}>
      <input
        type="text"
        placeholder="Search"
        style={stil.input}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value)
          searchHandler(searchTerm, dateConcerte)
        }}
      />
      <BsSearch />
    </Container>
  )
}

export default Searchbar
