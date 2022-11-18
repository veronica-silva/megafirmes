import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import fundoAlternativo from "../../assets/images/fundoAlternativo.jpg";

const Favoritos = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);

  useEffect(() => {
    async function carregarFavoritos() {
      try {
        const dados = await AsyncStorage.getItem("@favoritos");
        const filmes = JSON.parse(dados);
        if (dados != null) {
          setListaFavoritos(filmes);
        }
      } catch (error) {
        console.log("erro ao carregar " + error.message);
      }
    }
    carregarFavoritos();
  }, []);

  const excluirTodos = async () => {
    await AsyncStorage.removeItem("@favoritos");
    setListaFavoritos([]);
    Alert.alert("Favoritos", "Favoritos excluídos!");
  };

  const excluirUm = (indice) => {
    Alert.alert(`o filme de íncice ${indice} foi excluído`);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.mainContainer}>
        <ScrollView>
          <Text style={styles.quantidade}>
            Você tem {listaFavoritos.length} favorito(s)
          </Text>
          <View style={styles.container}>
            {listaFavoritos.map((filmeFavorito, indice) => {
              return (
                <Pressable key={filmeFavorito.id} style={styles.itemFilme}>
                  <Image
                    style={styles.imagem}
                    source={
                      filmeFavorito.backdrop_path
                        ? {
                            uri: `https://image.tmdb.org/t/p/original/${filmeFavorito.poster_path}`,
                          }
                        : fundoAlternativo
                    }
                  />
                  <Text style={styles.tituloFilme}>
                    {" "}
                    {filmeFavorito.title} {indice}
                  </Text>

                  <Pressable
                    style={styles.botaoExcluir}
                    onPress={() => excluirUm(indice)}
                  >
                    <Ionicons name="trash-outline" size={24} color="white" />
                  </Pressable>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
        <Pressable onPress={excluirTodos} style={styles.excluirTudo}>
          <Text style={styles.excluirTudoTexto}>
            <Ionicons name="trash-outline" size={24} color="red" /> Limpar
            favoritos
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Favoritos;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    padding: 8,
  },
  container: {
    flex: 1,
  },
  quantidade: {
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  itemFilme: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ccc",
    marginVertical: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  tituloFilme: {
    flex: 1,
    textAlign: "center",
  },
  mainContainer: {
    padding: 8,
    marginBottom: 20,
  },
  excluirTudo: {
    backgroundColor: "white",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 2,
    borderStyle: "dashed",
  },
  excluirTudoTexto: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    paddingVertical: 2,
  },
  botaoExcluir: {
    backgroundColor: "rgba(255, 0, 0, 0.6)",
    padding: 8,
    borderRadius: 4,
  },
  imagem: {
    borderColor: "#5451a6",
    borderRadius: 4,
    borderWidth: 2,
    borderStyle: "dashed",
    height: 80,
    width: 60,
  },
});
