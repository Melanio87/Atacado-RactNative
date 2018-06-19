import React from 'react';
import { createStackNavigator } from 'react-navigation';
import RecomendarScreen from "../screens/ScRecomendar";
import AvalieScreen from "../screens/ScAvalie";
import ConheceuScreen from "../screens/ScConheceu";
import EncontrouScreen from "../screens/ScEncontrou";
import ComentarioScreen from "../screens/ScComentario";

/*Componente que se encarga de las navegaciones entre las ventanas*/

export default createStackNavigator(
	{
		Start: {
			//Ventana de Inicio, Primera Ventana de recomendar.
			screen: RecomendarScreen
		},
		ScAvalie: {
			//Segunda ventana de avalie.
			screen: AvalieScreen
		},
		ScConheceu: {
			//Tercera ventana de Como conheceu
			screen: ConheceuScreen
		},
		ScEncontrou: {
			//Cuarta ventana de Encontrou
			screen: EncontrouScreen
		},
		ScComentario: {
			//Quinta Ventana de Comentario
			screen: ComentarioScreen
		}
	},
	{
		//Propiedades donde se asigna cual ventana sera el de Inicio, y el estilo de la barra de titulo.
		initialRouteName: 'Start',
		navigationOptions: {
			headerStyle: {
				backgroundColor: '#0066ff'
			},
			headerTitleStyle: {
				textAlign: 'center',
				alignSelf: 'center',
				fontSize: 20,
				color: '#fff',
				fontWeight: 'bold'
			}
		}
	}
)