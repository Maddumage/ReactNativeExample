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
  state = {
    isConnected: true
  };

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
    }
  };
  render() {
    if (!this.state.isConnected) {
      return <MiniOfflineSign />;
    }
    return null;
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
    top: "0rem",
    elevation: 1
  },
  offlineText: {
    color: "#fff"
  }
});

export {OfflineNotice};
