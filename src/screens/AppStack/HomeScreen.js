//import liraries
import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

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
    backgroundColor: "white"
  },
  text: {
    color: "#4a148c",
    fontSize: "16rem",
    fontWeight: "bold"
  }
});

export default HomeScreen;
