import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
const corPrimaria = "#5451a6";
const Sobre = () => {
  return (
    <SafeAreaView>
      <Text style={styles.titulo}>Sobre o app MEGAFIRMES</Text>
      <Text style={styles.texto}>
        O <Text style={styles.nomeApp}>MEGAFIRMES</Text> é um aplicativo que
        permite a busca por informações sobre filmes existentes na base de dados
        pública disponibilizada pelo site The Movie Database (TMDb).
      </Text>
      <Text style={styles.texto}>
        Ao localizar um filme, o usuário visualiza informações como título, data
        de lançamento, nota média de avaliação e uma breve descrição sobre o
        filme e salva estas informações em uma lista no próprio aplicativo para
        visualização posterior.
      </Text>

      <Text style={styles.texto}>
        O aplicativo pode receber novos recursos conforme o feedback e demanda
        dos usuários.
      </Text>

      <Text style={styles.texto}>MEGAFIRMES &copy; 2022</Text>
    </SafeAreaView>
  );
};

export default Sobre;

const styles = StyleSheet.create({
  titulo: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 8,
  },
  texto: {
    marginVertical: 8,
  },
  nomeApp: {
    color: corPrimaria,
  },
});
