import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { Chase } from "react-native-animated-spinkit";

export function LoadingSpinner() {
  return (
    <SafeAreaView style={styles.container}>
      <Chase size={60} color="#f00808" />
      <Text style={styles.content}>Loading...</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    paddingTop: 10,
    fontSize: 25,
    fontWeight: "600",
  },
});
