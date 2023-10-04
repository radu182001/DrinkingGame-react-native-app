import React from "react";
import { ImageBackground, StyleSheet, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function StartButton({ onPress, style }) {
  return (
    <TouchableHighlight style={[styles.button, style]} onPress={onPress}>
      <ImageBackground
        resizeMode="stretch"
        style={[styles.button, style]}
        source={require("../assets/button.png")}
      >
        <AppText style={styles.text}>START</AppText>
      </ImageBackground>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
  },
  text: {
    color: colors.light,
    fontSize: 20,
  },
});

export default StartButton;
