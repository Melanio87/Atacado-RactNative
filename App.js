import React from 'react';
import { StyleSheet, Text, View, Image,TextInput, Button,ScrollView,Alert } from 'react-native';

{/*Barra de Evaluación*/}
import StarRating from 'react-native-star-rating';

{/*Venta de Dialogo*/}
import PopupDialog,{DialogTitle,DialogButton,SlideAnimation,ScaleAnimation,FadeAnimation,} from 'react-native-popup-dialog';

export default class App extends React.Component {

  

  constructor(props) {
    super(props);

    this.state = {
      starCountAC: 1.5,
      starCountVP: 1.5,
      starCountACaja: 1.5,
      starCountSP: 1.5,
      dialogShow: false,
      email: '',
    };


  }

  onStarRatingPressAC(rating) {
    this.setState({
      starCountAC: rating
    });
  }

  onStarRatingPressVP(rating) {

    this.setState({
      starCountVP: rating
    });
  }

  onStarRatingPressACaja(rating) {
    this.setState({
      starCountACaja: rating
    });
  }

  onStarRatingPressSP(rating) {
    this.setState({
      starCountSP: rating
    });
  }

  showScaleAnimationDialog = () => {
    this.scaleAnimationDialog.show();
  }

  onChangeTextEmail(text){
     //Alert.alert(text);
     console.log(text)
    this.setState({
      email: text
    });
  }



  render() {
    let { email } = this.state;
    return (
     
      <View style={styles.container}>
         {/* Logo de la empresa */}
        <Image source={require('./images/logo.png')} style={styles.imageTitle} />

        <Text style={styles.title}>{'Encuesta de Satisfacción!'.toUpperCase()} </Text>
        
        <ScrollView style={styles.scrollView}  contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.body}>
        
          <Text style={styles.labelText}>{'Email'} </Text>

          <TextInput
            style={{padding:7}}
            editable = {true}
            maxLength = {200}
            placeholder="Your Em@il! or Phone Number"
            onChangeText= { (phone) => this.onChangeTextEmail(phone) }
            value={email}/>

          <Text style={styles.title}>{'Cómo calificarías:'} </Text>

          <Text style={styles.labelText}>{'Atención al cliente?'} </Text>
          <StarRating
            disabled={false}
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
            halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            maxStars={5}
            rating={this.state.starCountAC}
            selectedStar={(rating) => this.onStarRatingPressAC(rating)}
            fullStarColor={'red'}
          />

          <Text style={styles.labelText}>{'Variedad de productos?'} </Text>
          <StarRating
            disabled={false}
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
            halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            maxStars={5}
            rating={this.state.starCountVP}
            selectedStar={(rating) => this.onStarRatingPressVP(rating)}
            fullStarColor={'green'}
          />

          <Text style={styles.labelText}>{'Atención en la caja?'} </Text>
          <StarRating
            disabled={false}
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
            halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            maxStars={5}
            rating={this.state.starCountACaja}
            selectedStar={(rating) => this.onStarRatingPressACaja(rating)}
            fullStarColor={'red'}
          />

          <Text style={styles.labelText}>{'Servicio en el pacote?'} </Text>
          <StarRating
            disabled={false}
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
            halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            maxStars={5}
            rating={this.state.starCountSP}
            selectedStar={(rating) => this.onStarRatingPressSP(rating)}
            fullStarColor={'green'}
          />

          <Text style={styles.labelText}>{'Alguna sugerencia para mejorar:'} </Text>
          <View style={styles.textAreaContainer} >
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder={"Sugerencia"}
              placeholderTextColor={"grey"}
              numberOfLines={4}
              multiline={true}
            />
          </View>

          <Text style={styles.labelText}>{'Alguna queja o inquietud:'} </Text>
          <View style={styles.textAreaContainer} >
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder={"Queja"}
              placeholderTextColor={"grey"}
              numberOfLines={4}
              multiline={true}
            />
          </View>

        <View style={{paddingVertical:30,}}>
          <Button
            title="Enviar"
            onPress={this.showScaleAnimationDialog}
          />
        </View>

        </View>
        </ScrollView>
        <PopupDialog
          ref={(popupDialog) => {
            this.scaleAnimationDialog = popupDialog;
          }}
          dialogAnimation={scaleAnimation}
          dialogTitle={<DialogTitle title="Atención!" />}
          actions={[
             <Button
              title="Aceptar"
              onPress={() =>{this.scaleAnimationDialog.dismiss();}}
               key="button-1"
            />,
          ]}
        >
          <View style={styles.dialogContentView}>
            <Text>Evaluación Enviada!</Text>
            <Text>GRACIAS POR SU PREFERENCIA!</Text>
          </View>
        </PopupDialog>
        <View style={styles.footer}>
          <Text style={styles.footerText}>www.atacadogames.com</Text>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  scrollView:{
    flex:1,
    width:'90%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color:'green',
    fontFamily: 'sans-serif',
  },
  imageTitle: {
    //width: 320,
    //height: 240,
    resizeMode: Image.resizeMode.contain,
  },
  footer: {
    position: 'absolute',
    flex:1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor:'green',
    //flexDirection:'row',
    height:40,
    alignItems:'center',
  },
    footerText: {
    color:'white',
    fontWeight:'bold',
    
    fontSize:18,
  },
    body:{
     position:'relative',
     width:'100%',
     backgroundColor: '#fff',
        //alignItems: 'flex-start',
     padding:20,
  },
    labelText:{
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
    dialogContentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationBar: {
    borderBottomColor: '#b5b5b5',
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff',
  },
  navigationTitle: {
    padding: 10,
  },
  navigationButton: {
    padding: 10,
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40,
  },
  navigator: {
    flex: 1,
    // backgroundColor: '#000000',
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

const scaleAnimation = new ScaleAnimation();
