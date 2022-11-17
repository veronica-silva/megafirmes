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

  const excluir = async () => {
    await AsyncStorage.clear("@favoritos");
    setListaFavoritos([]);
    Alert.alert("Favoritos", "Favoritos excluídos!");
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.quantidade}>
            Você tem {listaFavoritos.length} favorito/s
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
                <Text> {filmeFavorito.title} </Text>

                <Pressable style={styles.botaoExcluir}>
                  <Ionicons name="trash" size={24} color="white" />
                </Pressable>
              </Pressable>
            );
          })}

          <Button title="Limpar favoritos" onPress={excluir} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favoritos;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 8,
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
  botaoExcluir: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 4,
  },
  imagem: {
    height: 80,
    width: 60,
  },
});
