import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { BallIndicator } from "react-native-indicators";

const spinner = ({ size }) => (
  <View style={styles.spinnerStyle}>
    <BallIndicator size={25} color="white" />
  </View>
);

const styles = StyleSheet.create({
  spinnerStyle: {
    alignItems: "center",
    justifyContent: "center"
  }
});
export default spinner;
