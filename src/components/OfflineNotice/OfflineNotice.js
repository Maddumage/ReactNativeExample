import React, { PureComponent } from "react";
import { View, Text, NetInfo, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const { width } = Dimensions.get("window");
EStyleSheet.build({ $rem: width / 380 });

function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
}

class OfflineNotice extends PureComponent {
  render() {
    return <MiniOfflineSign />;
  }
}

const styles = EStyleSheet.create({
  offlineContainer: {
    backgroundColor: "#b52424",
    height: "30rem",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width,
    position: "absolute",
    top: "30rem"
  },
  offlineText: {
    color: "#fff"
  }
});
export default OfflineNotice;
