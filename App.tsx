import { StyleSheet, Text, View, Platform, Image, TouchableOpacity} from 'react-native';
import { Button, Icon } from 'native-base';
import AppBar from "./src/Components/AppBar/AppBar.js";
import { color } from 'native-base/lib/typescript/theme/styled-system.js';

export default function App() {
  return (
      <View style={styles.safe}>
          <AppBar title="Statify"/>
          <View style={styles.container}>
            <Text style={styles.title}>Please Log in to use Statify</Text>
            <TouchableOpacity style={styles.likeButton}>
              <View style={styles.buttonContainer}>
                <Image style={{width: 25, height: 25}} source={require('./assets/logo.svg')}></Image>
                <Text style={{color: "white"}}>Here</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  safe:{
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
  likeButton:{
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#1ED760",
  },
  buttonContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2
  },
  title:{
    color: 'white',
    fontSize: 28,
    textAlign: 'center'
  },
  image:{
    width: 30,
    height: 30,
  },
  button:{
    flexDirection: 'row'
  },

});
