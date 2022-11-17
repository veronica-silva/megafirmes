import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  View,
  Image,
  ScrollView,
} from "react-native";

import fundoAlternativo from "../../assets/images/fundoAlternativo.jpg";

const Detalhes = ({ route }) => {
  const { filme } = route.params;
  console.log(filme);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.coluna1}>
          <ImageBackground
            style={styles.imagem}
            source={
              filme.backdrop_path
                ? {
                    uri: `https://image.tmdb.org/t/p/original/${filme.poster_path}`,
                  }
                : fundoAlternativo
            }
          >
            <Text style={styles.titulo}>{filme.title}</Text>
          </ImageBackground>
        </View>

        <View style={styles.conteudo}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text>
              Avaliação: {filme.vote_average} | Lançamento: {filme.release_date}
            </Text>
            <Text style={styles.descricao}>
              {filme.overview || "Sem descrição"}
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detalhes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  subContainer: {
    padding: 8,
    flex: 1,
    alignItems: "center",
  },
  imagem: {
    height: 300,
    width: 400,
  },
  titulo: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 56,
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    marginTop: 200,
  },
  conteudo: {
    flex: 1 /* necessário para o scrollview funcionar */,
    padding: 8,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 8,
  },
});
