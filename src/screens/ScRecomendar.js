/*Primera ventana de la aplicación, que tiene una lista de 1 al 10*/

import React, {Component} from 'react';
import { StyleSheet, View, Text, Platform,FlatList,Alert} from 'react-native';

import AppTitle from '../components/AppTitle';

import { NavigationActions } from 'react-navigation';

export default class ScRecomendar extends Component {

	/*static navigationOptions = {
		title: 'Atacado Games'
	};*/

	//Funcion utilizado para la navegación, el que llama la siguiente pantalla asignada.
	avalie () {
		const navigateAction = NavigationActions.navigate({
			routeName: 'ScAvalie'
		});
		this.props.navigation.dispatch(navigateAction);
	}

	//Contructor donde se inicilializa todas las bariables a utilizar
	constructor(props)
	 {
	   super(props);

	   this.state = { GridViewItems: [
	     {key: 10,detail: 'Extremamente provavel'},
	     {key: 9,detail: ''},
	     {key: 8,detail: ''},
	     {key: 7,detail: ''},
	     {key: 6,detail: ''},
	     {key: 5,detail: ''},
	     {key: 4,detail: ''},
	     {key: 3,detail: ''},
	     {key: 2,detail: ''},
	     {key: 1,detail: ''},
	     {key: 0,detail:'Nada provável'}
	   ]}
	 }

	 //Funcion utilizado cuando es seleccionado un item de la lista.
	 GetGridViewItem (item) {
 
		 //Alert.alert(item.toString());
		 //console.log(item.toString());
		 this.avalie();

	}


	render () {

		return (
			  <View style={styles.MainContainer}>

			  	{/*Componete donde se asigna el titulo de la ventana.*/}
			  	<AppTitle>
			  	Qual a probabilidade de você recomendar a Atacado Games a um amigo?
			  	</AppTitle>
			  	
 					
 				{/*Un componente de react native, semejante al GridView de android, que permite crear lista
 				con varias columnas y personalizables.*/}
			      <FlatList
			      
			         data={ this.state.GridViewItems }
			 
			         renderItem={({item}) =><View style={styles.GridViewBlockStyle}>
			 
			            <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
			            <Text style={styles.GridViewInsideTextDetailStyle}  > {item.detail} </Text>
			            
			            </View>}
			         numColumns={2}
			        />
			</View>
		);
	}
}

{/*Una variable const que contendra los estilos utilizados en las ventanas*/}
const styles = StyleSheet.create({

MainContainer :{

justifyContent: 'center',
flex:1,
margin: 10,
paddingTop: (Platform.OS) === 'ios' ? 20 : 0

},

GridViewBlockStyle: {

  justifyContent: 'center',
  flex:1,
  alignItems: 'center',
  height: 100,
  margin: 5,
  backgroundColor: '#00BCD4'

}
,

GridViewInsideTextItemStyle: {

   color: '#fff',
   padding: 10,
   fontSize: 40,
   justifyContent: 'center',
   
 },

 GridViewInsideTextDetailStyle: {

   color: '#fff',
   padding: 10,
   fontSize: 18,
   justifyContent: 'flex-end',
   
 }

});