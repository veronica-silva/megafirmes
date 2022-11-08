import Home from "./src/screens/Home.js";
import Favoritos from "./src/screens/Favoritos";
import Sobre from "./src/screens/Sobre.js";
import FormBusca from "./src/screens/FormBusca";
import Privacidade from "./src/screens/Privacidade.js";
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={Home}
            name="Home"
            options={{ headerShown: false }}
          />
          <Stack.Screen component={FormBusca} name="FormBusca" />
          <Stack.Screen component={Favoritos} name="Favoritos" />
          <Stack.Screen component={Privacidade} name="Privacidade" />
          <Stack.Screen component={Sobre} name="Sobre" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
