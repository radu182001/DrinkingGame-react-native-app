import React, { useState } from "react";
import { StyleSheet } from "react-native";

import AppView from "../components/AppView";
import Card from "../components/Card";
import Questions from "../Database/Questions.json";
import colors from "../config/colors";

function GameplayScreen({ route }) {
  const [questions, setQuestions] = useState(Questions);
  const [cardData, setCardData] = useState({
    action: "Tap to play",
    penalty: "",
  });
  const [actionSeen, setActionSeen] = useState(true);

  const getRandomPlayers = (number) => {
    var players = route.params.players;
    var max = players.length;
    var chosenPlayers = [];

    for (var i = 0; i < number; i++) {
      var randomNumber = Math.floor(Math.random() * max);
      const name = players[randomNumber].name;
      chosenPlayers = [...chosenPlayers, name];
      players = players.filter((p) => {
        return p.name !== name;
      });
      max = players.length;
    }

    return chosenPlayers;
  };

  const buildQuestion = (index) => {
    const people = questions[index].people;
    var action = questions[index].action;
    var penalty = questions[index].penalty;

    const players = getRandomPlayers(people);

    for (var i = 0; i < people; i++) {
      action = action.replace("_", players[i]);
      penalty = penalty.replace("_", players[i]);
    }

    setCardData({ action: action, penalty: penalty });
  };

  const generateQuestion = () => {
    if (questions.length > 0) {
      const max = questions.length;
      var randomNumber = Math.floor(Math.random() * max);
      const newQ = questions[randomNumber];
      setQuestions(
        questions.filter((q) => {
          return q !== newQ;
        })
      );

      buildQuestion(randomNumber);
    } else {
      setActionSeen(true);
      setCardData({ action: "End", penalty: "" });
    }
  };

  return (
    <AppView>
      {actionSeen && (
        <Card
          withPenalty={cardData.penalty !== ""}
          onPress={() => {
            if (cardData.penalty === "") generateQuestion();
            else setActionSeen(!actionSeen);
          }}
        >
          {cardData.action}
        </Card>
      )}
      {!actionSeen && (
        <Card
          style={styles.penalty}
          onPress={() => {
            generateQuestion();
            setActionSeen(!actionSeen);
          }}
        >
          {cardData.penalty}
        </Card>
      )}
    </AppView>
  );
}

const styles = StyleSheet.create({
  penalty: {
    backgroundColor: colors.primary,
  },
});

export default GameplayScreen;
