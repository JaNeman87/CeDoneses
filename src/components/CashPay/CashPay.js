import React from "react";
import { Text, StyleSheet, View } from "react-native";

const cashPay = () => (
  <View style={styles.payWrapper}>
    <Text style={styles.payInfo}>Keš Plaćanje</Text>
  </View>
);
const styles = StyleSheet.create({
  payInfo: {
    color: "white"
  },
  payWrapper: {
    padding: 1,
    backgroundColor: "#ffa500",
    width: 85,
    borderRadius: 5
  }
});
export default cashPay;
