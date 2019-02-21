import React, { Component } from "react";
import { View, Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

class SplashScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.text}>Splash screen</Text>
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

export default SplashScreen;
