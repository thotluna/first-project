import React from 'react'
import Clock from '../components/exercise456/Exercise456'
import Exercise4562 from '../components/exercise456/Exercise456-2'
import ContainerGeneral from '../layouts/ContainerGeneral'

export default function SecondPage() {
  return (
    <ContainerGeneral>
      <h1>SecondPage Ejercicio 4, 5, 6</h1>
      <h2>Componente con clase</h2>
      <Clock />
      <h2>Componente con funcion</h2>
      <Exercise4562 />
    </ContainerGeneral>
  )
}
