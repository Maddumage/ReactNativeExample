//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

// create a component
class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.text}>Home screen</Text>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue"
  },
  text: {
    color: "white",
    fontSize: "16rem",
    fontWeight: "bold"
  }
});

export default HomeScreen;
