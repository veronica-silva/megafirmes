import Home from "./src/screens/Home.js";
import Favoritos from "./src/screens/Favoritos";
import Sobre from "./src/screens/Sobre.js";
import FormBusca from "./src/screens/FormBusca";
import Privacidade from "./src/screens/Privacidade.js";
import Resultados from "./src/screens/Resultados.js";
import Detalhes from "./src/screens/Detalhes.js";

import { StyleSheet, StatusBar, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#5451a6" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            component={Home}
            name="Home"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={FormBusca}
            name="FormBusca"
            options={{ title: "Buscar Filmes" }}
          />
          <Stack.Screen component={Favoritos} name="Favoritos" />
          <Stack.Screen component={Privacidade} name="Privacidade" />
          <Stack.Screen component={Sobre} name="Sobre" />
          <Stack.Screen component={Resultados} name="Resultados" />
          <Stack.Screen
            component={Detalhes}
            name="Detalhes"
            options={({ navigation }) => {
              return {
                headerRight: () => (
                  <Button
                    title="Home"
                    onPress={() => navigation.navigate("Home")}
                    color="black"
                  />
                ),
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
