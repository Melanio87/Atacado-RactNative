import React, {Component} from 'react';
import { StyleSheet, View, Text, Platform,TextInput,Alert,} from 'react-native';
import AppTitle from '../components/AppTitle';

import AppButton from "../components/AppButton";

import { NavigationActions } from 'react-navigation';

export default class ScComentario extends Component {

	static navigationOptions = {
		title: 'Atacado Games'
	};

	constructor(props)
	 {
	   super(props);

	   this.state = {
      		starCountAten: 1.5,
      		nome: '',
      		fone: '',
      		email: '',
    	};

    	this.onShowModal = this.onShowModal.bind(this);

	 }

	 onStarRatingPressAten(rating) {
	    this.setState({
	      starCountAten: rating
	    });
	  }


	 recomendar() {

		const navigateAction = NavigationActions.navigate({
			routeName: 'Start'
		});
		this.props.navigation.dispatch(navigateAction);
	}

	onChangeTextNome(text){
	     console.log(text)
	    this.setState({
	      nome: text
	    });
	 }

	 onChangeTextFone(text){
	     console.log(text)
	    this.setState({
	      fone: text
	    });
	 }

	onShowModal(){
	      setTimeout(() => {
	        Alert.alert('Obrigado!');
	      }, 200);

	      this.recomendar();
	}

	render () {

		let { nome } = this.state;
		let { fone } = this.state;
		let { email } = this.state;

		return (
			  <View style={styles.MainContainer}>

				  <Text style={styles.labelText}>{'Espaço para comentários:'} </Text>
			          <View style={styles.textAreaContainer} >
			            <TextInput
			              style={styles.textArea}
			              underlineColorAndroid="transparent"
			              placeholder={"Comentários"}
			              placeholderTextColor={"grey"}
			              numberOfLines={4}
			              multiline={true}
			            />
			            </View>

		            <Text style={styles.labelText}>{'Nome:'} </Text>
			            <TextInput
			            style={{padding:7}}
			            editable = {true}
			            maxLength = {200}
			            placeholder="Seu Nome"
			            onChangeText= { (nome) => this.onChangeTextNome(nome) }
			            value={nome}/>

			        <Text style={styles.labelText}>{'Telefone:'} </Text>
			            <TextInput
			            style={{padding:7}}
			            editable = {true}
			            maxLength = {200}
			            placeholder="Telefone"
			            onChangeText= { (fone) => this.onChangeTextFone(fone) }
			            value={fone}
			            keyboardType={'phone-pad'}/>

			        <Text style={styles.labelText}>{'Email:'} </Text>
			            <TextInput
			            style={{padding:7,paddingBottom:12}}
			            editable = {true}
			            maxLength = {40}
			            placeholder="Email"
			            keyboardType={'email-address'}/>


						<AppButton
							bgColor="#ccccb3"
							title="Finalizar"
							action={this.onShowModal.bind(this)}
							iconName="check-circle"
							iconSize={30}
							iconColor="#fff"
						/>

			     
			</View>
		);
	}
}

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
  textAreaContainer: {
    borderColor: '#efefef',
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    height: 100,
    justifyContent: "flex-start"
  },

});