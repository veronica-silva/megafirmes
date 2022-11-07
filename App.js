import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import logo from "./assets/images/logo.png";

const App = () => {
  const [loaded] = useFonts({
    monoton: require("./assets/fonts/Monoton-Regular.ttf"),
  });
  if (!loaded) {
    return <Text> carregando... </Text>;
  }
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Image style={estilos.logo} source={logo} />
        <Text style={estilos.tituloApp}>Megafirmes</Text>
      </View>

      <View style={estilos.viewBotoes}>
        <Button title="Buscar Filmes" />
        <Button title="Favoritos" />
      </View>

      <View style={estilos.viewRodape}>
        <Button title="Privacidade" />
        <Button title="Sobre o App" />
      </View>
    </SafeAreaView>
  );
};

export default App;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 128,
    height: 128,
  },
  viewLogo: {
    flex: 3,
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  tituloApp: {
    fontSize: 32,
    color: "#141414",
    fontFamily: "monoton",
  },
  viewBotoes: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
    alignItems: "flex-start",
  },
  viewRodape: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "80%",
  },
});
