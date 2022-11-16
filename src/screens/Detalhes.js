import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  View,
  Image,
  ScrollView,
} from "react-native";

const Detalhes = ({ route }) => {
  const { filme } = route.params;
  console.log(filme);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.coluna1}>
          <ImageBackground
            style={styles.imagem}
            source={{
              uri: `https://image.tmdb.org/t/p/original/${filme.poster_path}`,
            }}
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
  },
  imagem: {
    height: 200,
    width: 300,
  },
  titulo: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  conteudo: {
    flex: 1 /* necessário para o scrollview funcionar */,
    padding: 16,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 8,
  },
});
