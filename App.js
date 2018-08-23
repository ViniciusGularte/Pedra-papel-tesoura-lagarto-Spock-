import React from 'react';
import { StyleSheet,Button, Text, View } from 'react-native';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {escolhaUsuario: '',escolhaComputador:'',resultado:''}

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
   var resultado ="";
    if(escolhaComputador == "Pedra"){
       if(escolhaUsuario == "Pedra"){
         resultado= "Empate" ;
       }
       if(escolhaUsuario == "Papel"){
         resultado = "Usuario Ganhou";
       }
       if(escolhaUsuario == "Tesoura"){
         resultado = "Computador Ganhou";
       }
       if(escolhaUsuario == "Spock"){
         resultado = "Usuario Ganhou";
       }
       if(escolhaUsuario == "Lagarto"){
         resultado = "Computador Ganhou";
       }
    }
    if(escolhaComputador == "Papel"){
      if(escolhaUsuario == "Pedra"){
        resultado = "Computador Ganhou";
      }
      if(escolhaUsuario == "Papel"){
        resultado = "Empate";
      }
      if(escolhaUsuario == "Tesoura"){
        resultado = "Usuario Ganhou";
      }
      if(escolhaUsuario == "Spock"){
        resultado = "Computador Ganhou";
      }
      if(escolhaUsuario == "Lagarto"){
        resultado = "Usuario Ganhou";
      }
    }
    if(escolhaComputador == "Tesoura"){
      if(escolhaUsuario == "Pedra"){
        resultado = "Usuario Ganhou";
      }
      if(escolhaUsuario == "Papel"){
        resultado = "Computador Ganhou";
      }
      if(escolhaUsuario == "Tesoura"){
        resultado = "Empate";
      }
      if(escolhaUsuario == "Spock"){
        resultado = "Computador Ganhou";
      }
      if(escolhaUsuario == "Lagarto"){
        resultado = "Usuario Ganhou";
      }
    }
    if(escolhaComputador == "Spock"){
      if(escolhaUsuario == "Pedra"){
        resultado = "Usuario Ganhou";
      }
      if(escolhaUsuario == "Papel"){
        resultado = "Computador Ganhou";
      }
      if(escolhaUsuario == "Tesoura"){
        resultado = "Usuario Ganhou";
      }
      if(escolhaUsuario == "Spock"){
        resultado = "Empate";
      }
      if(escolhaUsuario == "Lagarto"){
        resultado = "Computador Ganhou";
      }
    }
    if(escolhaComputador == "Lagarto"){
      if(escolhaUsuario == "Pedra"){
        resultado = "Usuario Ganhou";
      }
      if(escolhaUsuario == "Papel"){
        resultado = "Computador Ganhou";
      }
      if(escolhaUsuario == "Tesoura"){
        resultado = "Usuario Ganhou";
      }
      if(escolhaUsuario == "Spock"){
        resultado = "Computador Ganhou";
      }
      if(escolhaUsuario == "Lagarto"){
        resultado = "Empate";
      }
    }

   this.setState({escolhaUsuario : escolhaUsuario,escolhaComputador : escolhaComputador,resultado: resultado});
  }
  render() {
    return (
      <View style={styles.container}>
         <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
         <Text>Escolha do Usuario {this.state.escolhaUsuario}</Text>
         <Text>Resultado {this.state.resultado}</Text>
         <Button onPress={() => {this.jokenpo('Pedra')}} title='pedra'/>
         <Button onPress={() => {this.jokenpo('Papel')}} title='papel'/>
         <Button onPress={() => {this.jokenpo('Tesoura')}} title='tesoura'/>
         <Button onPress={() => {this.jokenpo('Spock')}} title='spock'/>
         <Button onPress={() => {this.jokenpo('Lagarto')}} title='lagarto'/>

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
