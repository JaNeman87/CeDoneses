import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Fonts } from "../../Utility/Fonts";

const pizzaToggle = props => (
  <View>
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ justifyContent: "center", flexDirection: "row" }}>
        <View
          style={
            !props.stateToggle
              ? styles.foodTypeContainerSmall
              : styles.foodTypeContainerSmall1
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
      {props.output}
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  foodTypeContainerSmall: {
    borderWidth: 1,
    borderColor: "#2E8B57",
    height: 50,
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 5
  },
  foodTypeContainerSmall1: {
    borderWidth: 1,
    borderColor: "#2E8B57",
    height: 50,
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    marginTop: 5
  }
});

export default pizzaToggle;
