import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  View,
  Image,
} from "react-native";

const Detalhes = ({ route }) => {
  const { filme } = route.params;
  console.log(filme);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <ImageBackground
          style={styles.imagem}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${filme.poster_path}`,
          }}
        >
          <Text style={styles.titulo}>{filme.title}</Text>
        </ImageBackground>
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
});
