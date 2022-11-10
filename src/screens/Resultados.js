import { StyleSheet, Text, SafeAreaView } from "react-native";

const Resultados = ({ route }) => {
  const { texto } = route.params;
  console.log(texto);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Resultados da busca para: </Text>
      <Text style={styles.textResult}>{texto}</Text>
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
    fontSize: 18,
    marginVertical: 5,
  },
  textResult: {
    padding: 2,
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
