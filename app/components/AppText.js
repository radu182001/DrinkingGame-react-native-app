import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Courier New",
    color: colors.accent,
    fontWeight: "700",
  },
});

export default AppText;
