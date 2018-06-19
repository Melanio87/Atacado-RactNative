import React, { Component } from 'react';
import { Text,StyleSheet } from 'react-native';

/*
Componente de text para los Titulos de las ventanas 
*/

export default class AppTitle extends Component {
	render () {
		//Variable que sera utilizado para cargar el valor al texto
		const {children} = this.props;
		return (
			//Objeto que retornara el elemento
			<Text style={styles.headline}>
				{children}
			</Text>
		)
	}
}

{/*Variable que se encargara del estilo del titulo*/}
const styles = StyleSheet.create({

 headline: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: '#3cbe49',
    color: 'white',
    padding:20,
    borderRadius:7,
    margin: 5
  }

});