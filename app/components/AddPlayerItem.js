import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { Octicons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";

function PlayerItem({ icon, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.Container}>
        <Octicons style={styles.Icon} name={icon} size={50} />
        <AppText>Add player</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    marginHorizontal: 5,
  },
  Icon: {
    color: colors.accent,
    marginBottom: 10,
  },
});

export default PlayerItem;
