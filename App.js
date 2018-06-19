import React from 'react';
//Clase de Navegación
import GuestNavigation from './src/navigations/guest';

export default class App extends React.Component {

  constructor() {
    super();
  
    this.state = {
      isLogged:false,
      loaded:false
    };
  }




  render() {
      return (<GuestNavigation />);
  }
}