import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Vibration,
  ToastAndroid
} from "react-native";
import { connect } from "react-redux";
import SingleFoodItem from "../../components/SingleFoodItem/SingleFoodItem";
import {
  deleteArticleFromCart,
  orderCompleted,
  isThereAnAddress
} from "../../Store/actions/actionTypes";
import CustomButton from "../../components/CustomButton/CustomButton";
import axios from "axios";
import { Fonts } from "../../Utility/Fonts";
import AwesomeAlert from "react-native-awesome-alerts";

class Cart extends Component {
  state = {
    showAlert: false
  };
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  componentWillMount() {
    let uid = this.props.uid;
    axios
      .get(`https://deliveryapp-4951a.firebaseio.com/users/${uid}/info.json`)
      .then(response => {
        console.log(response.data);
        if (response.data === null) {
          console.log("Screen Two");
          this.props.isThereAnAddress("No address");
        } else {
          const fetchedAddress = [];
          for (let key in response.data) {
            fetchedAddress.push({
              ...response.data[key],
              id: key
            });
          }
          fetchedAddress.map(info => {
            // address.address;
            console.log(info.address);
            this.props.isThereAnAddress(info.address);
          });
        }
      })
      .catch(err => console.log(err));
  }

  orderHandler = () => {
    console.log(this.props.address);
    // console.log(this.props.uid);
    if (this.props.address !== "" && this.props.address !== "No address") {
      // console.log("Hello Nele");
      const DURATION = 500;
      Vibration.vibrate(DURATION);
      this.props.orderCompleted();
      this.showAlert();
      let email = this.props.email;
      let uid = this.props.uid;
      // console.log(email);
      this.props.addedToCart.map((article, i) =>
        //"https://deliveryapp-4951a.firebaseio.com/orders/" + uid + ".json"
        axios
          .post(
            `https://deliveryapp-4951a.firebaseio.com/users/${uid}/orders.json`,
            {
              articleName: article.name,
              articleWeight: article.weight,
              articleInfo: article.info,
              articlePrice: article.price,
              time: new Date().toLocaleString()
            }
          )
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          })
      );
    } else {
      // console.log("Nele Hello");
      this.props.navigator.push({
        screen: "potrcko.AddressScreen",
        title: "Gde da donesem?", // navigation bar title of the pushed screen (optional)
        // passProps: {}, // Object that will be passed as props to the pushed screen (optional)
        animated: true, // za .push()
        animationType: "slide-horizontal", // za .push()
        // animationType: "slide-up", // za .showModal
        navigatorStyle: {
          navBarBackgroundColor: "#2E8B57",
          navBarTitleTextCentered: true,
          navBarTextColor: "#ffffff",
          statusBarColor: "#2E8B57",
          navBarButtonColor: "#ffffff",
          navBarTextFontFamily: Fonts.GloriaHallelujah
        }
      });
    }
    // console.log(this.props.address);
  };

  onDeleteHandler = i => {
    this.props.deleteArticle(i);
    ToastAndroid.show("Obrisano iz korpe", ToastAndroid.SHORT);
    // let email = this.props.email;
    // console.log(email);
  };

  render() {
    let finalOutput = null;
    let daDonesem = null;
    let yourBill = null;
    const { showAlert } = this.state;

    let articleOutput = this.props.addedToCart.map((article, i) => (
      <SingleFoodItem
        key={i}
        onPress={() => this.onDeleteHandler(i)}
        image={article.image}
        foodName={article.name}
        weight={article.weight}
        foodInfo={article.info}
        foodPrice={article.price}
        ToastAndroid="Obrisano iz korpe"
      />
    ));

    if (this.props.totalCartSum.length < 1) {
      yourBill = (
        <View style={styles.totalSumNicht}>
          <View>
            <Text style={styles.yourBillNicht}>Vaš Račun Iznosi:</Text>
          </View>
          <View>
            <Text style={{ fontSize: 50, color: "#2E8B57" }}>
              {this.props.totalCartSum.reduce((a, b) => a + b, 0)}
            </Text>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 15, color: "#2E8B57" }}>RSD</Text>
          </View>
        </View>
      );
    } else {
      yourBill = (
        <View style={styles.totalSum}>
          <View>
            <Text style={styles.yourBill}>Vaš Račun Iznosi:</Text>
          </View>
          <View>
            <Text style={{ fontSize: 50, color: "#ffffff" }}>
              {this.props.totalCartSum.reduce((a, b) => a + b, 0)}
            </Text>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 15, color: "#ffffff" }}>RSD</Text>
          </View>
        </View>
      );
    }

    if (!this.props.totalCartSum.length < 1) {
      daDonesem = (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#f2f2f2"
          }}
        >
          <CustomButton
            onPress={this.orderHandler}
            borderColor="#ffffff"
            width="100%"
            color="#2E8B57"
            font={Fonts.GloriaHallelujah}
            fontSize={20}
          >
            Će Doneseš?
          </CustomButton>
        </View>
      );
    }

    if (this.props.totalCartSum.length < 1) {
      finalOutput = (
        <View
          style={{
            flex: 1,

            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <View style={styles.emptyCart}>
            <Text style={styles.emptyCartText}>Vaša</Text>
            <Text style={styles.emptyCartText}>Korpa</Text>
            <Text style={styles.emptyCartText}>Je</Text>
            <Text style={styles.emptyCartText}>Prazna</Text>
          </View>
        </View>
      );
    } else {
      finalOutput = <ScrollView>{articleOutput}</ScrollView>;
    }
    return (
      <View style={styles.container}>
        {yourBill}
        {finalOutput}
        {daDonesem}
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Uspešno ste naručili"
          message={`Biće dostavljeno na adresu: ${this.props.address}!`}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="OK?"
          confirmButtonColor="#2E8B57"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#f2f2f2"
  },
  totalSum: {
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: "red",
    borderRadius: 100,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#2E8B57",
    marginLeft: 5,
    marginRight: 5
  },
  totalSumNicht: {
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: "red",
    borderRadius: 100,
    marginTop: 10,
    marginBottom: 10,
    // backgroundColor: "#2E8B57",
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 2,
    borderColor: "#2E8B57"
  },
  yourBill: {
    fontSize: 20,
    color: "#ffffff",
    fontFamily: Fonts.GloriaHallelujah
  },
  yourBillNicht: {
    fontSize: 20,
    color: "#2E8B57",
    fontFamily: Fonts.GloriaHallelujah
  },
  emptyCart: {
    borderRadius: 30,
    marginLeft: 5,
    marginRight: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  emptyCartText: {
    color: "#2E8B57",
    fontSize: 25,
    fontFamily: Fonts.GloriaHallelujah
  }
});

const mapStateToProps = state => {
  return {
    addedToCart: state.addedToCart,
    totalCartSum: state.cartTotalSum,
    email: state.userEmail,
    uid: state.userUid,
    address: state.fetchedUsersAddress
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteArticle: id => dispatch(deleteArticleFromCart(id)),
    orderCompleted: () => dispatch(orderCompleted()),
    isThereAnAddress: address => dispatch(isThereAnAddress(address))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
