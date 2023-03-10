## Ejercicios sesiones 1, 2 y 3
Para este primer reto de programación en React vamos a poner en practica lo aprendido hasta ahora para crear dos componentes.

Cada uno de estos componentes tendrá sus propias características.

Componente A: Este componente va a tener disponer un Contacto(crea una clase para ello), que va a contar con las siguientes características:

Nombre: que será un String.

Apellido: también un String.

Email: de nuevo un String.

Conectado: será un booleano que nos indicará si la persona está conectada o no.

Componente B: Por otro lado, tenemos el componente B que va a recibir por props un contacto y va a poder cambiar su estado de conectado a desconectado y viceversa.

Si el contacto está conectado, se debe mostrar: Contacto En Línea

Si el contacto no está conectado, se debe mostrar: Contacto No Disponible

Renderizado de componentes en la solución:

El Componente A debe ser renderizado dentro del componenet App.js del proyecto.

El Componente B debe ser renderizado desde el componte A y recibir los props adecuadamente

Recordatorio: Haz uso de Proptypes adecuadamente

## Ejercicio 4, 5 y 6

Partiendo del siguiente componente de clase que contempla varios métodos de ciclo de vida, convertidlo en un componente funcional que realice exactamente lo mismo:

```
import React, { Component } from 'react'
import ‘../../styles/clock.scss’;

class Clock extends Component {
   constructor(props) {
      super(props);
      // Estado privado del component
      this.state = {
         // Se genera una fecha como estado inicial del componente
         fecha: new Date(),
         edad: 0,
         nombre: ‘Martín’,
         apellidos: ‘San José’
      };
   }
   componentDidMount(){
      this.timerID = setInterval (
         () => this.tick(), 1000
      );
   }
   componentWillUnmount() {
      clearInterval (this.timerID);
   }
   render() {
      return (
         <div>
         <h2>
         Hora Actual:
         {this.state.fecha.toLocaleTimeString()}
         </h2>
         <h3>{this.state.nombre} {this.state.apellidos}</h3>
         <h1>Edad: {this.state.edad}</h1>
         </div>
      )
   }
   tick(){
      this.setState((prevState) => {
         let edad = prevState.edad +1;
         return {
            ...prevState,
            fecha: new Date(),
            edad
         }
      });
   }
}
export default Clock;
```

## Ejercicios 7, 8, 9

En este ejercicio de React JS deberéis crear una lista, esta lista tendrá dentro distintos contactos y deberá cumplir con las siguientes funcionalidades:

- [x] Mostrar contacto.

- [x] Crear contacto.

- [x] Eliminar contacto.

- [x] Cambiar el estado del contacto entre Conectado y Desconectado.

## Ejercicios sesiones 13, 14 y 15

Partiendo del proyecto final, deberéis utilizar crear un formulario con el que crear tareas. Para hacer esto usaréis:

- [x] Formik para el formulario.
- [x] Yup para las validaciones.

## Ejercicio secciones 16, 17, 18
Crear el sistema de enrutado de la aplicación en React:

Permitir la navegación de Login a Registro y viceversa

No podremos acceder a Tareas a no ser que nos hayamos logeado primero.

## Ejercicios sesiones 26 y 27
Utiliza useReducer y useContext para poder gestionar tareas en un proyecto de React. El proyecto debe permitir:
- [x] Crear tareas
- [x] Borrar tareas
- [x] Filtrar tareas

Repo para uso de useReducer y useContext: https://gitlab.com/masajo/ob-react-usereducer