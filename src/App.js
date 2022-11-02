import React, { useState, useEffect } from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import Nav from './components/Nav'
import { Routes, Route, useNavigate } from 'react-router-dom'
import CumparaBilet from './components/CumparaBilet'
import ListaConcerte from './components/ListaConcerte'
import Formular from './components/Formular'
import dayjs from 'dayjs'
import NuExista from './components/NuExista'
import RapoarteAsociatie from './components/RapoarteAsociatie'

const App = () => {
  const [dateConcerte, setDateConcerte] = useState([])
  const [modif, setModif] = useState(false)
  const navigate = useNavigate()
  const [obedit, setObedit] = useState({
    id: 0,
    src: '',
    artist: '',
    nume_concert: '',
    data_concert: '',
    ora: '',
    locatie: '',
    pret_bilet: '',
    nr_total_bilete: '',
  })

  useEffect(() => {
    fetch('http://localhost:80/proiect_integrator_react/evenimente.php')
      .then((rezultat) => rezultat.json())
      .then((dateConcerte) => setDateConcerte(dateConcerte))
  }, [modif])

  //---------------------------Stergerea unui concert---------------------------------
  const sterge = (id) => {
    const dateScript = JSON.stringify({ id: parseInt(id, 10) })
    const config = {
      method: 'DELETE',
      // headers: { 'Content-Type': 'application/json' },
      body: dateScript,
    }
    fetch(
      'http://localhost:80/proiect_integrator_react/evenimente.php',
      config,
    ).then(() => {
      setModif(!modif)
    })
  }

  //-------------------------Adaugarea in baza de date-----------------------
  const adaug = (concert) => {
    const dateScript = JSON.stringify(concert)
    const config = {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      body: dateScript,
    }

    fetch(
      'http://localhost:80/proiect_integrator_react/evenimente.php',
      config,
    ).then(() => {
      setModif(!modif)

      navigate('/')
    })
  }

  //----------------------------Editarea unui concert-------------------------
  const editeaza = (id) => {
    const obiect = dateConcerte.find((item) => {
      return parseInt(item.id, 10) === parseInt(id, 10)
    })

    if (obiect) {
      setObedit({
        id: obiect.id,
        src: obiect.src,
        artist: obiect.artist,
        nume_concert: obiect.nume_concert,
        data_concert: obiect.data_concert,
        ora: obiect.ora,
        locatie: obiect.locatie,
        pret_bilet: obiect.pret_bilet,
        nr_total_bilete: obiect.nr_total_bilete,
      })

      navigate('/formular')
    }
  }

  const editActiv = (elm) => {
    const dateScript = JSON.stringify(elm)
    const config = {
      method: 'PUT',
      // headers: { 'Content-Type': 'application/json' },
      body: dateScript,
    }
    fetch(
      'http://localhost:80/proiect_integrator_react/evenimente.php',
      config,
    ).then(() => {
      setModif(!modif)
    })

    setObedit({
      id: 0,
      src: '',
      artist: '',
      nume_concert: '',
      data_concert: '',
      ora: '',
      locatie: '',
      pret_bilet: '',
      nr_total_bilete: '',
    })

    navigate('/')
  }

  //------------------Adaugarea unei vanzari in baza de date :--------------------
  const adaugaVanzare = (vanzare) => {
    const dateScript = JSON.stringify(vanzare)
    const config = {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      body: dateScript,
    }

    fetch(
      'http://localhost:80/proiect_integrator_react/evenimente_vanzari_bilete.php',
      config,
    )
      .then((rez) => {
        return rez.text()
      })
      .then(() => {
        alert('Ati cumparat cu succes  ' + vanzare.nr_bilete + '  bilete')
        setModif(!modif)
        navigate('/')
      })
  }
  //------------------Search Bar--------------------:
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const searchHandler = (searchTerm, dateConcerte) => {
    if (searchTerm !== '') {
      const newListaConcerte = dateConcerte.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchTerm)
      })
      console.log(newListaConcerte)
      setSearchResult(newListaConcerte)
    } else setSearchResult(dateConcerte)
  }

  //----------------------DateRangePicker Lista Concerte----------------------

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [concerteFiltrateDupaData, setConcerteFiltrateDupaData] = useState([])

  const handleFilterAfterDate = (event) => {
    const isBetween = require('dayjs/plugin/isBetween')
    dayjs.extend(isBetween)
    event.preventDefault()

    const concerteFiltrate = dateConcerte.filter((item) => {
      if (dayjs(item.data_concert).isBetween(startDate, dayjs(endDate)))
        return item
    })

    setStartDate('')
    setEndDate('')

    if (concerteFiltrate.length > 0) {
      setConcerteFiltrateDupaData(concerteFiltrate)
      navigate('/filtrare')
    } else navigate('/nuexista')
  }
  // ----------------------DateRangePicker Rapoarte----------------------
  const [modifRapoarte, setModifRapoarte] = useState(false)
  const [nr_concerte, setNr_concerte] = useState(0)
  const [concerteRapoarte, setConcerteRapoarte] = useState([])
  const [startDateCopy, setStartDateCopy] = useState('')
  const [endDateCopy, setEndDateCopy] = useState('')

  useEffect(() => {
    setConcerteRapoarte([])
  }, [modifRapoarte])

  const [apasatButonCautare, setApasatButonCautare] = useState(false) //functie de el se afiseaza sau nu nr de concerte dintr=o perioada

  const handleFilterRapoarte = (event) => {
    const isBetween = require('dayjs/plugin/isBetween')
    dayjs.extend(isBetween)
    event.preventDefault()

    const concerteFiltrateRapoarte = dateConcerte.filter((item) => {
      if (dayjs(item.data_concert).isBetween(startDate, dayjs(endDate)))
        return item
    })
    setStartDateCopy(startDate)
    setEndDateCopy(endDate)
    setStartDate('')
    setEndDate('')

    if (concerteFiltrateRapoarte.length > 0) {
      setConcerteRapoarte(concerteFiltrateRapoarte)
      setApasatButonCautare(true)
      navigate('/filtrare_rapoarte_asociatie')
    } else navigate('/nuexista')

    setNr_concerte(concerteFiltrateRapoarte.length)
  }

  return (
    <>
      <Nav modifRapoarte={modifRapoarte} setModifRapoarte={setModifRapoarte} />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <ListaConcerte
                dateConcerte={
                  searchTerm.length < 1 ? dateConcerte : searchResult
                }
                sterge={sterge}
                editeaza={editeaza}
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
                searchHandler={searchHandler}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                handleFilterAfterDate={handleFilterAfterDate}
              />
            }
          />
          <Route
            path="/filtrare"
            element={
              <ListaConcerte
                // dateConcerte={concerteFiltrateDupaData}
                dateConcerte={
                  searchTerm.length < 1
                    ? concerteFiltrateDupaData
                    : searchResult
                }
                sterge={sterge}
                editeaza={editeaza}
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
                searchHandler={searchHandler}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                handleFilterAfterDate={handleFilterAfterDate}
              />
            }
          />
          <Route
            path="/formular"
            element={
              <Formular adaug={adaug} editActiv={editActiv} obedit={obedit} />
            }
          />
          <Route
            path="/cumparabilet/:id"
            element={
              <CumparaBilet
                dateConcerte={dateConcerte}
                adaugaVanzare={adaugaVanzare}
              />
            }
          />
          <Route
            path="/rapoarte_asociatie"
            element={
              <RapoarteAsociatie
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                handleFilterRapoarte={handleFilterRapoarte}
                dateConcerte={concerteRapoarte}
                sterge={sterge}
                editeaza={editeaza}
                apasatButonCautare={apasatButonCautare}
              />
            }
          />
          <Route
            path="filtrare_rapoarte_asociatie"
            element={
              <RapoarteAsociatie
                dateConcerte={concerteRapoarte}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                handleFilterRapoarte={handleFilterRapoarte}
                sterge={sterge}
                editeaza={editeaza}
                apasatButonCautare={apasatButonCautare}
                nr_concerte={nr_concerte}
                startDateCopy={startDateCopy}
                endDateCopy={endDateCopy}
              />
            }
          />
          <Route path="/nuexista" element={<NuExista />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
