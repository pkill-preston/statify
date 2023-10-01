import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native';

const AppBar = (props) => {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assets/logo.png')}/>
        <Text style={styles.title} >{props.title}</Text>
      </View >
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#1ED760",
    padding: 16,
    direction: "ltr",
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  image:{
    width: 45,
    height: 45,
  },
  title:{
    fontSize: 25
  }
})

export default AppBar;