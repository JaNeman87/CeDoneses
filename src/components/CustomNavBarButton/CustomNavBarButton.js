import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Navigation } from "react-native-navigation";

// Our custom component we want as a button in the nav bar
class NavBarCustomButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.touch, { backgroundColor: "#2E8B57" }]}
        onPress={() => Navigation.handleDeepLink({ link: "potrcko.ScreenTwo" })}
      >
        <View style={styles.button}>
          <Text style={{ color: "white" }}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 30,
    borderRadius: 25,
    borderColor: "#ffffff",
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center"
  },
  touch: {
    height: "100%",
    justifyContent: "center",
    borderWidth: 0,
    paddingRight: 65
  }
});

export default NavBarCustomButton;
