import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'

const Counter = ({ count, incrementare, decrementare }) => {
  const stil = {
    buton: {
      fontSize: '20px',
    },
    counter: {
      display: 'flex',
      alignItems: 'center',
    },
    paragraf: {
      fontSize: '20px',
      backgroundColor: 'rgba(20,0,0,0.1)',
      width: '30px',
      height: '30px',
      textAlign: 'center',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
  return (
    <div style={stil.counter}>
      <div style={stil.buton} onClick={() => decrementare(count)}>
        <FaIcons.FaMinusSquare />
      </div>
      <div style={stil.paragraf}>{count}</div>
      <div style={stil.buton} onClick={() => incrementare(count)}>
        <FaIcons.FaPlusSquare />
      </div>
    </div>
  )
}

export default Counter
