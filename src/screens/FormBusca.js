import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const FormBusca = ({ navigation }) => {
  const [texto, setTexto] = useState("");

  const inputTexto = (valor) => {
    setTexto(valor);
  };

  const buttonAlert = () => {
    if (!texto) {
      Alert.alert("Ops!", "Você deve digitar o nome de um filme", [
        { texto: "OK" },
      ]);
      return;
    }
    navigation.navigate("Resultados", { texto });
  };

  return (
    <SafeAreaView style={styles.area}>
      <Text style={styles.text}>
        Star Trek? O Poderoso Chefão? A trilogia do Senhor dos Anéis?
      </Text>
      <Text style={styles.text}>
        Localize um filme que você viu ou gostaria de ver!
      </Text>
      <View style={styles.caixa}>
        <Ionicons name="film" size={40} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Filme..."
          onChangeText={inputTexto}
        />
      </View>
      <View style={styles.caixaBotao}>
        <Button title="buscar" onPress={buttonAlert} color="#5451a6" />
      </View>
    </SafeAreaView>
  );
};

export default FormBusca;

const styles = StyleSheet.create({
  area: {
    padding: 16,
    marginVertical: 10,
  },
  text: {
    padding: 2,
    justifyContent: "center",
    fontSize: 18,
    marginVertical: 5,
  },
  caixa: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
    justifyContent: "space-between",
  },

  input: {
    flex: 1,
    height: 35,
    borderWidth: 1,
    padding: 10,
  },
});
