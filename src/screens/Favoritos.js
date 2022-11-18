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

  const excluirUm = async () => {
    await AsyncStorage.removeItem("@favoritos");
    setListaFavoritos([]);
    Alert.alert("Favoritos", "Favoritos excluídos!");
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.quantidade}>
              Você tem {listaFavoritos.length} favorito(s)
            </Text>

            {listaFavoritos.map((filmeFavorito) => {
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
                    {filmeFavorito.title}{" "}
                  </Text>

                  <Pressable style={styles.botaoExcluir} onPress={excluirUm}>
                    <Ionicons name="trash-outline" size={24} color="white" />
                  </Pressable>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
        <Button title="Limpar favoritos" onPress={excluirTodos} />
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
    borderColor: "#5451a6",
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: "dashed",
  },
  tituloFilme: {
    flex: 1,
    textAlign: "center",
  },
  mainContainer: {
    padding: 8,
    marginBottom: 20,
  },
  botaoExcluir: {
    backgroundColor: "red",
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
