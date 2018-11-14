import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import OnlinePay from "../../components/OnlinePay/OnlinePay";
import CashPay from "../../components/CashPay/CashPay";
import { Fonts } from "../../Utility/Fonts";

class FoodPlace extends Component {
  render() {
    pay = null;
    delivery = null;
    if (this.props.onlinePay === "false") {
      pay = <CashPay />;
    } else {
      pay = <OnlinePay />;
    }

    if (this.props.noDelivery) {
      delivery = (
        <Text
          style={{
            textDecorationLine: "line-through",
            textDecorationStyle: "solid"
          }}
        >
          {" "}
          {this.props.delivery}
        </Text>
      );
    } else {
      delivery = <Text> {this.props.delivery}</Text>;
    }
    return (
      <View>
        <TouchableOpacity onPress={this.props.onPress}>
          <View style={styles.restaurant}>
            <View style={styles.img}>
              <Image
                source={this.props.image}
                resizeMethod="resize"
                style={{ width: 80, height: 80, borderRadius: 10 }}
              />
            </View>
            <View style={styles.info}>
              <Text style={styles.resName}>{this.props.foodPlaceName} </Text>
              {pay}
              <Text style={{ fontFamily: Fonts.GloriaHallelujah }}>
                {this.props.detail}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Icon size={18} name="ios-timer" color="#2E8B57" />
                <Text> {this.props.time} </Text>
                <Icon size={18} name="ios-cash" color="#2E8B57" />
                <Text> {this.props.minBuy} </Text>
                <Icon size={18} name="ios-car" color="#2E8B57" />
                {delivery}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  restaurant: {
    flexDirection: "row",
    height: 110,
    width: "100%"
    // borderWidth: 1,
    // borderColor: "gray"
  },
  info: {
    marginLeft: 20,
    marginTop: 5
  },
  img: {
    // marginTop: 8,
    marginLeft: 5,
    justifyContent: "center",
    alignContent: "center"
  },
  resName: {
    fontSize: 20,
    color: "black"
  }
});

export default FoodPlace;
