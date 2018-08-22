import React from 'react';
import { StyleSheet,Button, Text, View } from 'react-native';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {escolhaUsuario: ''}

  }
  jokenpo(escolhaUsuario){
   this.setState({escolhaUsuario : escolhaUsuario});
  }
  render() {
    return (
      <View style={styles.container}>
         <Text>Escolha do computador</Text>
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
