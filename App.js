import React from 'react';
import { StyleSheet,Button, Text, View } from 'react-native';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {escolhaUsuario: '',escolhaComputador:''}

  }
  jokenpo(escolhaUsuario){
   var escolhaComputador="";
   var nAleatorio = Math.floor(Math.random() * 5);
   switch (nAleatorio) {
     case 0:
     escolhaComputador = "Spock";break;
     case 1:
     escolhaComputador = "Lagarto";break;
     case 2:
     escolhaComputador = "Papel";break;
     case 3:
     escolhaComputador = "Pedra";break;
     case 4:
     escolhaComputador = "Tesoura";break;
     default:"Error";break;

   }

   this.setState({escolhaUsuario : escolhaUsuario,escolhaComputador : escolhaComputador});
  }
  render() {
    return (
      <View style={styles.container}>
         <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
         <Text>Escolha do Usuario {this.state.escolhaUsuario}</Text>
         <Text>Resultado</Text>
         <Button onPress={() => {this.jokenpo('pedra')}} title='pedra'/>
         <Button onPress={() => {this.jokenpo('papel')}} title='papel'/>
         <Button onPress={() => {this.jokenpo('tesoura')}} title='tesoura'/>
         <Button onPress={() => {this.jokenpo('spock')}} title='spock'/>
         <Button onPress={() => {this.jokenpo('lagarto')}} title='lagarto'/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
