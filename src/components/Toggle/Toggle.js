import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Fonts } from "../../Utility/Fonts";

const toggle = props => (
  <View>
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ justifyContent: "center", flexDirection: "row" }}>
        <View
          style={
            !props.stateToggle
              ? styles.foodTypeContainer
              : styles.foodTypeContainer1
          }
        >
          <Text
            style={{
              color: "#2E8B57",
              // fontWeight: "bold",
              fontFamily: Fonts.GloriaHallelujah,
              fontSize: 20
            }}
          >
            {props.text}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  foodTypeContainer: {
    borderWidth: 1,
    borderColor: "#2E8B57",
    height: 60,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 5
  },
  foodTypeContainer1: {
    borderWidth: 1,
    borderColor: "#2E8B57",
    height: 60,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    marginTop: 5
  }
});

export default toggle;
