import React, { useState } from "react";
import { StyleSheet, Image, View, Alert } from "react-native";

import StartButton from "../components/StartButton";
import AppView from "../components/AppView";
import PlayerItem from "../components/PlayerItem";
import AddPlayerItem from "../components/AddPlayerItem";
import colors from "../config/colors";
import face from "../config/face";

function MenuScreen({ navigation }) {
  const [playersArray, setPlayersArray] = useState([]);

  const handleAddPlayer = () => {
    newId = playersArray.length;
    if (newId < 28) {
      const randomNumber = Math.floor(Math.random() * colors.playerPoll.length);
      const color = colors.playerPoll[randomNumber];
      const eyes = Math.floor(Math.random() * face.eyes.length);
      const mouth = Math.floor(Math.random() * face.mouth.length);
      const newPlayer = {
        id: newId,
        name: "",
        color: color,
        eyes: eyes,
        mouth: mouth,
      };

      setPlayersArray([...playersArray, newPlayer]);
    }
  };

  const handleDeletePlayer = (id) => {
    setPlayersArray(
      playersArray.filter((_, index) => {
        return index !== id;
      })
    );
  };

  const updateName = (id, text) => {
    const newArray = [...playersArray];
    newArray[id].name = text;
    setPlayersArray(newArray);
  };

  const startGame = () => {
    if (playersArray.length >= 4)
      navigation.navigate("Game", { players: playersArray });
    else
      Alert.alert("Not enough players", "You need minimum 4 players to start!");
  };

  return (
    <AppView>
      <Image source={require("../assets/LOGO.png")} style={styles.Logo} />
      <View style={styles.playersContainer}>
        {playersArray.map((player, index) => (
          <PlayerItem
            key={index}
            color={player.color}
            eyes={player.eyes}
            mouth={player.mouth}
            value={player.name}
            onChangeText={(text) => updateName(index, text)}
            deleteFunction={() => handleDeletePlayer(index)}
          />
        ))}
        <AddPlayerItem icon="diff-added" onPress={() => handleAddPlayer()} />
      </View>
      <StartButton style={styles.btn} onPress={() => startGame()} />
    </AppView>
  );
}

const styles = StyleSheet.create({
  Logo: {
    width: 400,
    height: 100,
    marginBottom: 20,
  },
  playersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: 160,
    height: 50,
  },
});

export default MenuScreen;
