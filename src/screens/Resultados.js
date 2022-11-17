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
import ItemSeparador from "../components/ItemSeparador";
import CardFilme from "../components/CardFilme";

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
      <View style={styles.alinha}>
        <Text style={styles.text}>Resultados da busca para </Text>
        <Text style={styles.textResult}>{texto}</Text>
      </View>

      {loading && <Loading />}

      {!loading && (
        <View style={styles.viewFilmes}>
          <FlatList
            ItemSeparatorComponent={ItemSeparador}
            ListEmptyComponent={
              <View>
                <Text style={styles.semFilmes}>Não há filmes!</Text>
              </View>
            }
            data={resultados}
            renderItem={({ item }) => {
              return <CardFilme filme={item} />;
            }}
            keyExtractor={(item) => item.id}
          />
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
    justifyContent: "center",
    fontSize: 16,
  },
  textResult: {
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
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

  semFilmes: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 60,
  },
  alinha: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
});
