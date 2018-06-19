
/*
Componente de boton para las ventanas 
*/

import React, {Component} from 'react';

//Elemento Button
import { Button } from 'react-native-elements';
//Elemento Icon para el Boton
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';

export default class AppButton extends Component {
	render () {
		//Creanto variables para las propiedades y acciones del bot{on.}
		const {action, iconName, iconColor, title, bgColor} = this.props;
		//Variable que ajusta el boton a la pantalla
		const {width} = Dimensions.get('window');
		return (
			//Formato del Boton que sera retornada en este componente.
			<Button
				onPress={action}
				buttonStyle={{
					backgroundColor: bgColor,
					height: 45,
					borderColor: "transparent",
					borderWidth: 0,
					borderRadius: 5,
					marginBottom: 5,
					width: width
				}}
				title={title}
				icon={
					<Icon
						name={iconName}
						size={15}
						color={iconColor}
					/>
				}
				text={title}
				iconRight={true}
			>
			</Button>
		);
	}
}