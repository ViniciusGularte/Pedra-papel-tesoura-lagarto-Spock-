import React from 'react';
import {Image, View } from 'react-native';
const imagem = require('../../imgs/wallpaper.png');

class Topo extends App{
  render() {
    return (
        <View style={styles.topo}><Image source={imagem}/></View>
     );
    }
}
export default Topo;
