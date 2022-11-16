import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CardFilme = ({ filme }) => {
  const { title, poster_path } = filme;
  return (
    <View style={styles.card}>
      <View style={styles.coluna1}>
        <Text style={styles.titulo}>{title}</Text>
        <Image
          style={styles.imagem}
          source={{ uri: `https://image.tmdb.org/t/p/original/${poster_path}` }}
        />
      </View>
      <View style={styles.corpo}>
        <View style={styles.botoes}>
          <Pressable style={styles.botao}>
            <Text style={styles.textBotao}>
              <Ionicons size={16} color="#5451a6" name="book" />
              Leia Mais
            </Text>
          </Pressable>
          <Pressable style={styles.botao}>
            <Text style={styles.textBotao}>
              <Ionicons size={16} color="#5451a6" name="save" />
              Salvar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CardFilme;

const styles = StyleSheet.create({
  card: {
    marginVertical: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  imagem: {
    height: 300,
    width: 200,
  },
  coluna1: {
    alignItems: "center",
  },
  corpo: {},
  titulo: {
    backgroundColor: "#5451a6",
    width: 200,
    color: "white",
    fontSize: 16,
    paddingVertical: 8,
    textAlign: "center",
  },
  botoes: {
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  botao: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#5451a6",
    justifyContent: "space-between",
    width: "48%",
    alignContent: "center",
  },
  textBotao: {
    color: "#5451a6",
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  Ionicons: {
    paddingRight: 8,
  },
});
