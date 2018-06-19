import React, {Component} from 'react';
import { StyleSheet, View, Text, Platform,FlatList,Alert} from 'react-native';
import AppTitle from '../components/AppTitle';

import { NavigationActions } from 'react-navigation';

export default class ScConheceu extends Component {

	static navigationOptions = {
		title: 'Atacado Games'
	};

	encontrou () {
		const navigateAction = NavigationActions.navigate({
			routeName: 'ScEncontrou'
		});
		this.props.navigation.dispatch(navigateAction);
	}

	constructor(props)
	 {
	   super(props);

	   this.state = { GridViewItems: [
	     {key: '1',detail: 'Redes Sociais'},
	     {key: '2',detail: 'Indicação de amigos'},
	     {key: '3',detail: 'Google'},
	     {key: '4',detail: 'Panfleto'},
	     {key: '5',detail: 'Outdoor'},
	     {key: '6',detail: 'Outros'}
	   ]}
	 }

	 GetGridViewItem (item) {

		 this.encontrou();

	}


	render () {

		return (
			  <View style={styles.MainContainer}>

			  	<AppTitle>
			  	Como você conheceu a atacado Games?
			  	</AppTitle>
 
			      <FlatList
			      
			         data={ this.state.GridViewItems }
			 
			         renderItem={({item}) =><View style={styles.GridViewBlockStyle}>
			 
			            <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.detail} </Text>
			            
			            </View>}
			         numColumns={1}
			        />
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
   
 }

});