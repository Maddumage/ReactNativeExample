import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = () => {
    setTimeout(() => {
      this.props.navigation.navigate("App");
    }, 2000);
  };
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
    backgroundColor: "#4a148c"
  },
  text: {
    color: "white",
    fontSize: "16rem",
    fontWeight: "bold"
  }
});

export default SplashScreen;
