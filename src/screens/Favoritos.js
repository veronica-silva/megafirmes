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
import { useNavigation } from "@react-navigation/native";

const Favoritos = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);
  const navigation = useNavigation();

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

  const detalhes = (filmeSelecionado) => {
    navigation.navigate("Detalhes", { filme: filmeSelecionado });
  };

  const excluirTodos = async () => {
    Alert.alert(
      "Excluir Todos?",
      "Ao clicar você removerá TODOS os favpritos",
      [
        {
          text: "cancelar",
          onPress: () => {
            return false;
          },
          style: "cancel",
        },
        {
          text: "excluir mesmo assim",
          onPress: async () => {
            await AsyncStorage.removeItem("@favoritos");
            setListaFavoritos([]);
          },
          style: "destructive",
        },
      ]
    );
  };

  const excluirUm = async (indice) => {
    listaFavoritos.splice(indice, 1);
    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaFavoritos));
    const listaDeFilmes = JSON.parse(await AsyncStorage.getItem("@favoritos"));
    setListaFavoritos(listaDeFilmes);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.cabecalho}>
          <Text style={styles.quantidade}>
            Você tem {listaFavoritos.length} favorito(s)
          </Text>
        </View>

        <View style={styles.meio}>
          <ScrollView style={styles.containerScroll}>
            {listaFavoritos.map((filmeFavorito, indice) => {
              return (
                <Pressable
                  key={filmeFavorito.id}
                  style={styles.itemFilme}
                  onPress={detalhes.bind(this, filmeFavorito)}
                >
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
                  <Text style={styles.tituloFilme}> {filmeFavorito.title}</Text>

                  <Pressable
                    style={styles.botaoExcluir}
                    // onPress={() => excluirUm(indice)}
                    onPress={excluirUm.bind(this, indice)}
                  >
                    <Ionicons name="trash-outline" size={24} color="white" />
                  </Pressable>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <View style={styles.rodape}>
        <Pressable onPress={excluirTodos} style={styles.excluirTudo}>
          <Text style={styles.excluirTudoTexto}>
            <Ionicons name="trash-outline" size={24} color="red" /> Remover
            todos
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
  },
  mainContainer: {
    flex: 1,
    marginVertical: 8,
    paddingHorizontal: 8,
  },

  meio: { marginVertical: 8 },

  rodape: { borderRadius: 4, paddingHorizontal: 8 },

  quantidade: {
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
    padding: 2,
  },
  excluirTudo: {
    backgroundColor: "white",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 4,
  },
  excluirTudoTexto: {
    textAlign: "center",
    fontSize: 24,
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
