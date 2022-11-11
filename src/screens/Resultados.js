import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  AppRegistry,
  View,
  Image,
} from "react-native";
import api from "../services/api";
import { apikey } from "../../apikey.js";
const Resultados = ({ route }) => {
  const { texto } = route.params;
  const [resultados, setResultados] = useState([]);
  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await api.get("/search/movie", {
          params: {
            api_key: apikey,
            language: "pt-BR",
            query: texto,
            include_adult: false,
          },
        });
        setResultados(resposta.data.results);
      } catch (error) {
        console.log("Deu ruim ao conectar na api: " + error.message);
      }
    }
    buscarFilmes();
  }, []);
  console.log(resultados);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Resultados da busca para: </Text>
      <Text style={styles.textResult}>{texto}</Text>
      <View style={styles.viewFilmes}>
        {resultados.map((resultado) => {
          return <Text key={resultado.id}>{resultado.title}</Text>;
        })}
      </View>
    </SafeAreaView>
  );
};

export default Resultados;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginVertical: 10,
  },
  text: {
    padding: 2,
    justifyContent: "center",
    fontSize: 18,
    marginVertical: 5,
  },
  textResult: {
    padding: 2,
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  viewFilmes: {
    marginVertical: 8,
  },
});
