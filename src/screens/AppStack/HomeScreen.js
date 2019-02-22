//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  FlatList,
  NetInfo,
  TouchableOpacity
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { BallIndicator } from "react-native-indicators";
import {OfflineNotice} from "../../components/OfflineNotice";

const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

// create a component
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: false,
      isConnected: true,
      dataSource: null,
      timer: null
    };
    this.timer = this.timer.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  componentWillMount() {
    NetInfo.getConnectionInfo().then(connectionInfo => {
      this.setState({ isConnected: connectionInfo.type !== "none" });
    });
  }

  componentDidMount() {
    let timer = setInterval(this.timer, 10);
    this.setState({ timer });
    // this.loadData()
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  timer() {
    const { isConnected } = this.state;
    if (isConnected) {
      const re = this.loadData();
      console.log(re);
      clearInterval(this.state.timer);
    } else {
      console.log("No Internet");
      this.setState({ isConnected: false, isLoading: false, error: true });
      NetInfo.getConnectionInfo().then(connectionInfo => {
        this.setState({ isConnected: connectionInfo.type !== "none" });
      });
    }
  }

  loadData = async () => {
    try {
      const response = await fetch(
        "https://facebook.github.io/react-native/movies.json"
      );
      const data = await response.json();
      console.log(data);
      this.setState({
        isLoading: false,
        dataSource: data.movies,
        error: false
      });
      console.log(this.state.dataSource);
    } catch (e) {
      console.log(e);
      this.setState({ loading: false, error: true });
    }
  };

  // async fetchData() {
  //   if (this.state.isConnected) {
  //     try {
  //       const response = await fetch(
  //         "https://facebook.github.io/react-native/movies.json"
  //       );
  //       const responseJson = await response.json();
  //       this.setState(
  //         {
  //           isLoading: false,
  //           dataSource: responseJson.movies
  //         },
  //         function() {}
  //       );
  //     } catch (error) {
  //       console.error(error);
  //       this.setState({ loading: false, error: true });
  //     }
  //   }
  // }

  render() {
    const { isLoading, error } = this.state;
    if (isLoading) {
      return (
        <View style={styles.mainContainer}>
          <BallIndicator color="red" />
        </View>
      );
    }
    if (error) {
      return (
        <View style={styles.mainContainer}>
          <Text>Failed to load information!</Text>
          <Text style={styles.errorText}>Please check your internet connection</Text>
          <TouchableOpacity style={styles.refreshBtn} onPress={this.loadData}>
            <Text style={styles.refreshText}>Refresh</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.mainContainer}>
        <OfflineNotice />
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
          keyExtractor={({ id }, index) => id}
        />
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
  },
  errorText: {
    color: "red",
    fontSize: "16rem",
    fontWeight: "normal"
  },
  refreshBtn: {
    width: entireScreenWidth - 60,
    height: "50rem",
    backgroundColor: "blue",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4rem',
    marginVertical:'16rem'
  },
  refreshText: {
    color: "#ffffff",
    fontSize: "16rem",
    fontWeight: "bold"
  }
});

export default HomeScreen;
