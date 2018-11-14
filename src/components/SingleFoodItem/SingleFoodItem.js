import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ToastAndroid
} from "react-native";

class SingleFoodItem extends Component {
  onPressHandler = () => {
    this.props.onPress();
    ToastAndroid.show(
      this.props.ToastAndroid ? this.props.ToastAndroid : "Dodato u korpu",
      ToastAndroid.SHORT
    );
  };
  render() {
    return (
      <TouchableOpacity onPress={this.onPressHandler}>
        <View style={styles.singleFoodItem}>
          <View style={styles.img}>
            <Image
              source={this.props.image}
              resizeMethod="resize"
              style={{ width: 80, height: 80, borderRadius: 10 }}
            />
          </View>
          <View style={styles.singleFoodInfo}>
            <View style={styles.foodInfo}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "black" }}
              >
                {this.props.foodName}
              </Text>
            </View>
            <View style={styles.foodInfo}>
              <Text>{this.props.weight}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center"
              }}
            >
              <View style={styles.foodInfoAdd}>
                <Text style={{ textAlign: "center" }}>
                  {this.props.foodInfo}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ justifyContent: "center" }}>
            <View style={styles.cena}>
              <View>
                <Text>{this.props.foodPrice}</Text>
              </View>
              <View>
                <Text>RSD</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "#d6d6c2",
            borderBottomWidth: 1
          }}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10
  },
  singleFoodItem: {
    flexDirection: "row",
    height: 90,
    width: "100%",

    justifyContent: "space-between"
  },
  singleFoodInfo: {
    flexDirection: "column",
    justifyContent: "center"
  },
  cena: {
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    height: "80%",
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "#d9d9d9"
  },
  foodInfo: { flexDirection: "row", justifyContent: "center" },
  foodInfoAdd: {
    justifyContent: "center",
    width: 250,
    alignContent: "center",
    flexDirection: "row"
  }
});

export default SingleFoodItem;
