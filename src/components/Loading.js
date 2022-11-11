import { StyleSheet, ActivityIndicator, View } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View style={styles.horizontal}>
      <ActivityIndicator size="large" color="#5451a6" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  horizontal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
