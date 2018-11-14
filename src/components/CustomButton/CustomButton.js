import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CustomButton = props => {
  const content = (
    <View
      style={[
        styles.button,
        {
          backgroundColor: props.color,
          width: props.width,
          borderColor: props.borderColor
        },
        props.disabled ? styles.disabled : null
      ]}
    >
      <Text
        style={[
          { color: "white" },
          props.disabled ? styles.disabledText : null,
          {
            fontFamily: props.font,
            fontSize: props.fontSize
          }
        ]}
      >
        {props.children}
      </Text>
    </View>
  );

  if (props.disabled) {
    return content;
  }

  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    // borderColor: "white",
    borderWidth: 1
  },
  disabled: {
    backgroundColor: "#c6ecd6",
    borderColor: "#ffffff"
  },
  disabledText: {
    color: "white"
  }
});
export default CustomButton;
