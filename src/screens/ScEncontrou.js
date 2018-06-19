import React, {Component} from 'react';
import { StyleSheet, View, Text, Platform,FlatList,Alert} from 'react-native';
import AppTitle from '../components/AppTitle';

import { NavigationActions } from 'react-navigation';

export default class ScEncontrou extends Component {

	static navigationOptions = {
		title: 'Atacado Games'
	};

	comentario () {
		const navigateAction = NavigationActions.navigate({
			routeName: 'ScComentario'
		});
		this.props.navigation.dispatch(navigateAction);
	}

	constructor(props)
	 {
	   super(props);

	   this.state = { GridViewItems: [
	     {key: '1',detail: 'Sim'},
	     {key: '2',detail: 'Não'},
	   ]}
	 }

	 GetGridViewItem (item) {
	 	
		 this.comentario();

	}


	render () {

		return (
			  <View style={styles.MainContainer}>

			  	<AppTitle>
			  	Encontrou tudo o que procurava?
			  	</AppTitle>

			  	<View style={styles.body}>
 
			      <FlatList
			      
			         data={ this.state.GridViewItems }
			 
			         renderItem={({item}) =><View style={styles.GridViewBlockStyle}>
			 
			            <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.detail} </Text>
			            
			            </View>}
			         numColumns={1}
			        />
			    </View>
			</View>
		);
	}
}

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
   
 },

 body:{
     //width:'100%',
     flex:1,
     backgroundColor: '#fff',
     //alignItems: 'center',
     padding:20,
     justifyContent: 'center',
 }
     

});