import React from "react";
import { Text, StyleSheet, View } from "react-native";

const onlinePay = () => (
  <View style={styles.payWrapper}>
    <Text style={styles.payInfo}>Online Plaćanje </Text>
  </View>
);
const styles = StyleSheet.create({
  payInfo: {
    color: "white"
  },
  payWrapper: {
    padding: 1,
    backgroundColor: "#2E8B57",
    width: 100,
    borderRadius: 5
  }
});
export default onlinePay;
