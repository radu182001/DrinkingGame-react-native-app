import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({ children, onPress, style, withPenalty }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, style]}>
        <AppText style={styles.text}>{children}</AppText>
        {withPenalty === true ? (
          <AppText style={styles.flip}>{"Flip the card >>"}</AppText>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 550,
    height: 300,
    backgroundColor: colors.light,
    borderRadius: 30,
    borderColor: colors.accent,
    borderWidth: 4,
    padding: 30,
    elevation: 10,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
  },
  flip: {
    position: "absolute",
    bottom: 10,
    right: 30,
    opacity: 0.6,
  },
});
