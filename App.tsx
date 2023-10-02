import {StyleSheet} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './src/Screens/LandingPage/LandingPage.jsx';
import StatusPage from "./src/Screens/StatusPage/StatusPage.jsx";

const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  drawer:{
    backgroundColor: "#1ED760",
    color: "black"
  }
})
const navigatorOptions = {
        headerTintColor: 'black',
        headerStyle: {
          backgroundColor: '#1ED760',
        }
}

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ navigatorOptions}>
        <Stack.Screen name='Landing' options={{title: "Statify"}} component={LandingPage}/>
        <Stack.Screen name='Status' component={StatusPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}