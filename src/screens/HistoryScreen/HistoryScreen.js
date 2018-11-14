import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import axios from "axios";
import { Fonts } from "../../Utility/Fonts";
import { BallIndicator } from "react-native-indicators";

class HistoryScreen extends Component {
  state = {
    orders: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    let uid = this.props.uid;
    axios
      .get(`https://deliveryapp-4951a.firebaseio.com/users/${uid}/orders.json`)
      .then(response => {
        const fetchedOrders = [];
        for (let key in response.data) {
          console.log(response.data[key].time);
          fetchedOrders.push({
            ...response.data[key],
            id: key
          });
        }
        this.setState({ loading: false, orders: fetchedOrders });
        console.log(this.state.orders);
      });
  }

  deleteSingleItemHandler = id => {
    let uid = this.props.uid;
    axios
      .delete(
        `https://deliveryapp-4951a.firebaseio.com/users/${uid}/orders/${id}.json`
      )
      .then(response => {
        console.log(response);
      });

    const newArray = [...this.state.orders];
    newArray.splice(newArray.findIndex(o => o.id === id), 1);

    this.setState({ orders: newArray });
  };

  render() {
    let output = null;
    let orders = this.state.orders;

    // const dataByTime = orders.reduce((acc, el) => {
    //   if (Array.isArray(acc[el.time])) {
    //     acc[el.time].push(el.articleName);
    //   } else {
    //     acc[el.time] = [el.articleName];
    //   }
    //   return acc;
    // }, {});
    if (this.state.loading) {
      output = <BallIndicator color="green" />;
    } else {
      output = (
        <ScrollView>
          <View style={styles.completeOrder}>
            {/* {Object.keys(dataByTime).map((time) =>{ {time}
            <View>
              {dataByTime[time].map(food => (
                <Text>{food}</Text>
              ))}
            </View>
            })} */}

            {this.state.orders.map(order => {
              console.log(order);

              return (
                <TouchableOpacity
                  key={order.id}
                  onPress={() => this.deleteSingleItemHandler(order.id)}
                >
                  <View style={styles.singleItem}>
                    <View style={styles.orderItem}>
                      <View style={{ flex: 1, marginLeft: 5 }}>
                        <Text style={{ fontFamily: Fonts.GloriaHallelujah }}>
                          {order.articleName}
                        </Text>
                      </View>

                      <View
                        style={{
                          flex: 1,
                          justifyContent: "flex-end",
                          flexDirection: "row",
                          marginRight: 5
                        }}
                      >
                        <Text>{order.articlePrice}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      );
    }
    return <View style={styles.container}>{output}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2"
  },
  orderItemWraper: {
    flexDirection: "row",
    justifyContent: "center"
  },
  orderItem: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    padding: 10
  },
  singleItem: {
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 15,
    margin: 5
  }
});

const mapStateToProps = state => {
  return {
    uid: state.userUid
  };
};

export default connect(mapStateToProps)(HistoryScreen);
