import React from 'react';
import { StyleSheet,Button,Image, Text, View } from 'react-native';

import from './src/components/topo';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {escolhaUsuario: '',escolhaComputador:'',resultado:''}

  }
  jokenpo(escolhaUsuario){
   var escolhaComputador="";
   const nAleatorio = Math.floor(Math.random() * 5);
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

   this.setState({escolhaUsuario,escolhaComputador,resultado});
  }
  render() {
    return (
      <View>
         <Topo/>
         <View style={styles.btnForm}>
           <View style={styles.btn} ><Button onPress={() => {this.jokenpo('Pedra')}} title='pedra'/></View>
           <View style={styles.btn}><Button onPress={() => {this.jokenpo('Papel')}} title='papel'/></View>
           <View style={styles.btn}><Button onPress={() => {this.jokenpo('Tesoura')}} title='tesoura'/></View>
           <View style={styles.btn}><Button onPress={() => {this.jokenpo('Spock')}} title='spock'/></View>
           <View style={styles.btn}><Button onPress={() => {this.jokenpo('Lagarto')}} title='lagarto'/></View>
         </View>
         <View style={styles.principal}>
         <Text style={styles.textResultado}>{this.state.resultado}</Text>
         <Text>Escolha do Computador: {this.state.escolhaComputador}</Text>
         <Text>Escolha do Usuario: {this.state.escolhaUsuario}</Text>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topo: {
    alignItems:'center',
    marginBottom: 10,
    justifyContent:'center',
  },
  principal: {
    alignItems:'center',

  },
  btnForm:{
    marginBottom: 10,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  btn: {
   alignSelf: 'flex-start',
  },
  textResultado:{
    fontSize:30,
    color:'rgb(162, 30, 30)',
    fontWeight:'bold',
  }
});
