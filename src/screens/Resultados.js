import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  AppRegistry,
  View,
  Image,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from "react-native";
import api from "../services/api";
import { apikey } from "../../apikey.js";
import Loading from "../components/Loading";

const Resultados = ({ route }) => {
  const { texto } = route.params;
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);

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

        setInterval(() => {
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.log("Deu ruim ao conectar na api: " + error.message);
      }
    }
    buscarFilmes();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Resultados da busca para: </Text>
      <Text style={styles.textResult}>{texto}</Text>

      {loading && <Loading />}
      <ScrollView
        style={styles.ScrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {!loading && (
          <View style={styles.viewFilmes}>
            {resultados.map((resultado) => {
              return (
                <View key={resultado.id}>
                  <Image
                    style={styles.imagem}
                    source={{
                      uri: `https://image.tmdb.org/t/p/original/${resultado.poster_path}`,
                    }}
                  />
                  <Text style={styles.titulo}>{resultado.title}</Text>
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
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
  titulo: { width: 100, textAlign: "center" },
  imagem: {
    height: 150,
    width: 100,
  },
  ScrollView: {},
});
