import React, { Component } from "react";
import {
  StyleSheet,
  View
} from "react-native";

import LoginScreen from "./LoginScreen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
     <LoginScreen /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
 
});
export default App;
