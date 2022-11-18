import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { useFonts } from "expo-font";
import logo from "../../assets/images/logo.png";
import { Ionicons } from "@expo/vector-icons";

const corPrimaria = "#5451a6";
const Home = ({ navigation }) => {
  const [loaded] = useFonts({
    monoton: require("../../assets/fonts/Monoton-Regular.ttf"),
  });
  if (!loaded) {
    return <Text> carregando... </Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewLogo}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.tituloApp}>Megafirmes</Text>
      </View>

      <View style={styles.viewBotoes}>
        <Pressable
          style={styles.botaoInicial}
          onPress={() => {
            navigation.navigate("FormBusca");
          }}
        >
          <Text style={styles.textoBotao}>
            <Ionicons name="md-search" size={16} color="white" /> Buscar filmes
          </Text>
        </Pressable>

        <Pressable
          style={styles.botaoInicial}
          onPress={() => {
            navigation.navigate("Favoritos");
          }}
        >
          <Text style={styles.textoBotao}>
            <Ionicons name="md-star" size={16} color="white" /> Favoritos
          </Text>
        </Pressable>
      </View>

      <View style={styles.viewRodape}>
        <Pressable
          style={styles.botaoRodape}
          onPress={() => {
            navigation.navigate("Privacidade");
          }}
        >
          <Text style={styles.textoBotao}>
            <Ionicons name="lock-closed" size={16} color="white" /> Privacidade
          </Text>
        </Pressable>

        <Pressable
          style={styles.botaoRodape}
          onPress={() => {
            navigation.navigate("Sobre");
          }}
        >
          <Text style={styles.textoBotao}>
            <Ionicons name="information-circle" size={16} color="white" /> Sobre
            o App
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
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
  botaoInicial: {
    borderStyle: "solid",
    borderWidth: 2,
    padding: 10,
    backgroundColor: corPrimaria,
  },
  textoBotao: {
    color: "white",
  },
  viewRodape: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: corPrimaria,
  },
  botaoRodape: {
    padding: 16,
  },
});
