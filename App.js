import React from "react";
import { StyleSheet, Text, View,StatusBar } from "react-native";

import SlideShow from "./components/SlideShow.js";

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar hidden/>
      <SlideShow />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
  }
});
