import React from 'react';
import {Image, View } from 'react-native';


class Topo extends App{
  render() {
    return (
        <View style={styles.topo}><Image source={require('../../imgs/wallpaper.png')}/></View>
     );
    }
}
export default Topo;
