import Home from "./src/screens/Home.js";
import Favoritos from "./src/screens/Favoritos";
import Sobre from "./src/screens/Sobre.js";
import FormBusca from "./src/screens/FormBusca";
import Privacidade from "./src/screens/Privacidade.js";
import { StyleSheet, StatusBar } from "react-native";

const App = () => {
  return (
    <>
      <StatusBar />
      <Privacidade />
    </>
  );
};

export default App;

const estilos = StyleSheet.create({});
