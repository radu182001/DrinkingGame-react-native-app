import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

function AppView({ children }) {
  return (
    <ImageBackground
      resizeMode="strech"
      style={styles.screen}
      source={require("../assets/background.png")}
    >
      {children}
    </ImageBackground>
  );
}

export default AppView;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
