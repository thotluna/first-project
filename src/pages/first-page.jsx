import React from 'react'
import ComponentA from '../components/first/ComponentA'
import ContainerGeneral from '../layouts/ContainerGeneral'

export default function FirstPage() {
  return (
    <ContainerGeneral>
      <h1>FirstPage Ejercicio 1, 2, 3</h1>
      <ComponentA />
    </ContainerGeneral>
  )
}
