import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import { Octicons } from "@expo/vector-icons";
import colors from "../config/colors";
import face from "../config/face";

function PlayerItem({
  color,
  value,
  onPress,
  onChangeText,
  deleteFunction,
  eyes,
  mouth,
}) {
  const [deleting, setDeleting] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onLongPress={() => {
        setDeleting(!deleting);
      }}
    >
      <View style={styles.Container}>
        <View style={dynamicStyles(color).Player}>
          <Image style={styles.eyes} source={face.eyes[eyes]} />
          <Image style={styles.mouth} source={face.mouth[mouth]} />
        </View>
        <TextInput
          onChangeText={onChangeText}
          placeholder="Name"
          textAlign="center"
          value={value}
          style={styles.input}
        />
        {deleting && (
          <>
            <TouchableWithoutFeedback onPress={deleteFunction}>
              <Octicons style={styles.x} name="x-circle" size={20} />
            </TouchableWithoutFeedback>
          </>
        )}
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
  eyes: {
    width: "100%",
    height: "50%",
  },
  mouth: {
    width: "100%",
    height: "50%",
  },
  input: { height: 20 },
  x: {
    position: "absolute",
    top: -5,
    right: -5,
    color: colors.primary,
  },
});

const dynamicStyles = (color) =>
  StyleSheet.create({
    Player: {
      aspectRatio: 1,
      width: 45,
      borderRadius: 5,
      backgroundColor: color,
      marginBottom: 10,
      borderColor: colors.accent,
      borderWidth: 2,
      alignItems: "center",
      justifyContent: "center",
      padding: 5,
    },
  });

export default PlayerItem;
