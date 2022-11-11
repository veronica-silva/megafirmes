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

      {!loading && (
        <View style={styles.viewFilmes}>
          <FlatList
            data={resultados}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <View key={item.id} style={styles.filme}>
                  <Image
                    style={styles.imagem}
                    source={{
                      uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
                    }}
                  />
                  <Text style={styles.titulo}>{item.title}</Text>
                </View>
              );
            }}
          ></FlatList>
        </View>
      )}
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
    fontSize: 25,
    marginVertical: 5,
  },
  textResult: {
    padding: 2,
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },
  viewFilmes: {
    marginVertical: 8,
  },
  titulo: { width: 300, textAlign: "center", fontSize: 25, marginVertical: 16 },
  imagem: {
    height: 500,
    width: 300,
  },
  filme: { marginHorizontal: 10 },
});
