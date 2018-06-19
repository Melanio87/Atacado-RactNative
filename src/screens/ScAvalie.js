/*Venta de Evaluación*/

import React, {Component} from 'react';
import { StyleSheet, View, Text, Platform,Button,Alert} from 'react-native';
import AppTitle from '../components/AppTitle';

{/*Componente Barra de Evaluación*/}
import StarRating from 'react-native-star-rating';

import AppButton from "../components/AppButton";

import { NavigationActions } from 'react-navigation';


export default class ScAvalie extends Component {

	//Habilitando la barra de titulo en la Ventana
	static navigationOptions = {
		title: 'Atacado Games'
	};


	//Contructor, asignando las variables a utilizar.
	constructor(props)
	 {
	   super(props);

	   //Funcion para capturar el estado de la barra de puntuación
	   this.state = {
      		starCountAten: 1.5,
    	};

    	//Variable que captura el evento de la accion avancar
    	this.avancar = this.avancar.bind(this);

	 }

	 //Funcion que se ejecuta cuando se cambia el valor del Rating bar.
	 onStarRatingPressAten(rating) {
	    this.setState({
	      starCountAten: rating
	    });
	  }

	  //Funcion de navegacion a la siguiente ventana
	 avancar() {

		const navigateAction = NavigationActions.navigate({
			routeName: 'ScConheceu'
		});
		this.props.navigation.dispatch(navigateAction);
	}

	render () {

		return (
			  <View style={styles.MainContainer}>
			  	//Titulo de la ventana
			  	<AppTitle>
			  	Por favor, avalie os itens abaixo:
			  	</AppTitle>

			  {/*Vista de los componente de la ventana*/}

			  	<View style={styles.body}>
				  <Text style={styles.labelText}>{'Atendimento'} </Text>
		          <StarRating
		            disabled={false}
		            emptyStar={'ios-star-outline'}
		            fullStar={'ios-star'}
		            halfStar={'ios-star-half'}
		            iconSet={'Ionicons'}
		            maxStars={5}
		            rating={this.state.starCountAten}
		            selectedStar={(rating) => this.onStarRatingPressAten(rating)}
		            fullStarColor={'#3cbe49'}
		            />

		            <Text style={styles.labelText}>{'Qualidades dos productos'} </Text>
			          <StarRating
			            disabled={false}
			            emptyStar={'ios-star-outline'}
			            fullStar={'ios-star'}
			            halfStar={'ios-star-half'}
			            iconSet={'Ionicons'}
			            maxStars={5}
			            rating={this.state.starCountAten}
			            selectedStar={(rating) => this.onStarRatingPressAten(rating)}
			            fullStarColor={'#3cbe49'}
			          />

			          <Text style={styles.labelText}>{'Variedade dos productos'} </Text>
			          <StarRating
			            disabled={false}
			            emptyStar={'ios-star-outline'}
			            fullStar={'ios-star'}
			            halfStar={'ios-star-half'}
			            iconSet={'Ionicons'}
			            maxStars={5}
			            rating={this.state.starCountAten}
			            selectedStar={(rating) => this.onStarRatingPressAten(rating)}
			            fullStarColor={'#3cbe49'}
			          />

			          <Text style={styles.labelText}>{'Pacote de entregas'} </Text>
			          <StarRating
			            disabled={false}
			            emptyStar={'ios-star-outline'}
			            fullStar={'ios-star'}
			            halfStar={'ios-star-half'}
			            iconSet={'Ionicons'}
			            maxStars={5}
			            rating={this.state.starCountAten}
			            selectedStar={(rating) => this.onStarRatingPressAten(rating)}
			            fullStarColor={'#3cbe49'}
			          />

			          <Text style={styles.labelText}>{'Preço'} </Text>
			          <StarRating
			            disabled={false}
			            emptyStar={'ios-star-outline'}
			            fullStar={'ios-star'}
			            halfStar={'ios-star-half'}
			            iconSet={'Ionicons'}
			            maxStars={5}
			            rating={this.state.starCountAten}
			            selectedStar={(rating) => this.onStarRatingPressAten(rating)}
			            fullStarColor={'#3cbe49'}
			          />

			          <Text style={styles.labelText}>{'Variedade dos productos'} </Text>
			          <StarRating
			            disabled={false}
			            emptyStar={'ios-star-outline'}
			            fullStar={'ios-star'}
			            halfStar={'ios-star-half'}
			            iconSet={'Ionicons'}
			            maxStars={5}
			            rating={this.state.starCountAten}
			            selectedStar={(rating) => this.onStarRatingPressAten(rating)}
			            fullStarColor={'#3cbe49'}
			          />

			          

          	</View>
          				{/*Componente Button Creado anteriormente*/}
						<AppButton
							bgColor="#ccccb3"
							title="Avançar"
							action={this.avancar.bind(this)}
							iconName="arrow-right"
							iconSize={30}
							iconColor="#fff"
						/>

			     
			</View>
		);
	}
}

{/*Estilos utilizados en la ventana*/}
const styles = StyleSheet.create({

MainContainer :{

//justifyContent: 'center',
flex:1,
margin: 10,
paddingTop: (Platform.OS) === 'ios' ? 20 : 0

},
body:{
     //width:'100%',
     flex:1,
     backgroundColor: '#fff',
     //alignItems: 'center',
     padding:20,
     justifyContent: 'center',
     margin: 10,
  },
    labelText:{
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    justifyContent: 'center',
    //alignItems: 'center'
  },

});