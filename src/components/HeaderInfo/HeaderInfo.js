import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import OnlinePay from "../OnlinePay/OnlinePay";
import Icon from "react-native-vector-icons/Ionicons";
import CashPay from "../CashPay/CashPay";
import { Fonts } from "../../Utility/Fonts";

class HeaderInfo extends Component {
  state = {};
  render() {
    let onlineOrCash = null;
    let delivery = null;

    if (this.props.online === "true") {
      onlineOrCash = <OnlinePay />;
    } else {
      onlineOrCash = <CashPay />;
    }

    if (this.props.noDelivery) {
      delivery = (
        <Text
          style={{
            textDecorationLine: "line-through",
            textDecorationStyle: "solid",
            fontFamily: Fonts.GloriaHallelujah
          }}
        >
          {" "}
          {this.props.delivery}
        </Text>
      );
    } else {
      delivery = (
        <Text style={{ fontFamily: Fonts.GloriaHallelujah }}>
          {" "}
          {this.props.delivery}
        </Text>
      );
    }
    return (
      <View style={styles.restaurant}>
        <View style={styles.img}>
          <Image
            source={this.props.image}
            resizeMethod="resize"
            style={{ width: 120, height: 120, borderRadius: 10 }}
          />
        </View>
        <View style={styles.infoText}>
          <View style={styles.info}>
            <Text style={styles.resName}>{this.props.resName} </Text>
            {onlineOrCash}
            <Text>{this.props.adress}</Text>

            <View
              style={{
                flexDirection: "row"
              }}
            >
              <View style={styles.header}>
                <Icon size={18} name="ios-timer" color="#2E8B57" />
                <Text> {this.props.time} </Text>
              </View>
              <View style={styles.header}>
                <Icon size={18} name="ios-cash" color="#2E8B57" />
                <Text> {this.props.minPay} </Text>
              </View>
            </View>
            <View style={styles.header}>
              <Icon
                style={{ marginTop: 5 }}
                size={18}
                name="ios-car"
                color="#2E8B57"
              />
              <Text> {delivery} </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  restaurant: {
    flexDirection: "row",
    height: 150,
    width: "100%"
    // borderWidth: 1,
    // borderColor: "gray"
  },
  info: {
    marginLeft: 20,
    marginTop: 5
  },
  infoText: {
    flexDirection: "column",
    justifyContent: "center"
  },
  img: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 5
  },
  resName: {
    fontSize: 30,
    color: "black"
  },
  header: {
    flexDirection: "row"
  }
});

export default HeaderInfo;
