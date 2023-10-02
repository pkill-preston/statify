import React from "react";
import { Text, View, Image, Platform, TouchableOpacity, StyleSheet } from "react-native";
import StatusPage from "../StatusPage/StatusPage";
const LandingPage = (props) => {
  return (
    <View style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Please Log in to use Statify</Text>
        <TouchableOpacity style={styles.likeButton} onPress={switchTo}>
          <View style={styles.buttonContainer}>
            <Image style={{ width: 25, height: 25 }} source={require('../../../assets/logo.svg')}></Image>
            <Text style={{ color: "white" }}>Here</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
  function switchTo() {
    const navigation = props.navigation
    navigation.navigate("Status")
  }
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16
  },
  likeButton: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#1ED760",
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2
  },
  title: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center'
  },
  image: {
    width: 30,
    height: 30,
  },
  button: {
    flexDirection: 'row'
  },
})

export default LandingPage;