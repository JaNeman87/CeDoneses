import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from "react-native";
import { connect } from "react-redux";
import AnimatedForm from "react-native-animated-form";
const AnimatedInput = Animated.createAnimatedComponent(TextInput);
import { Fonts } from "../../Utility/Fonts";
import {
  deliveryInfo,
  isThereAnAddress
} from "../../Store/actions/actionTypes";
import axios from "axios";

class AddressScreen extends Component {
  state = {
    usersNickOrName: "",
    usersAddress: "",
    usersPhoneNumber: ""
  };

  componentDidUpdate(nextProps, nextState) {
    this.props.deliveryInfo(
      this.state.usersNickOrName,
      this.state.usersAddress,
      this.state.usersPhoneNumber
    );
  }

  onPressHandler = () => {
    let uid = this.props.uid;

    axios.post(
      `https://deliveryapp-4951a.firebaseio.com/users/${uid}/info.json`,
      {
        nameOrNick: this.props.name,
        address: this.props.address,
        phoneNum: this.props.phoneNum
      }
    );
    this.props.navigator.pop();
  };

  componentWillUnmount() {
    let uid = this.props.uid;

    axios
      .get(`https://deliveryapp-4951a.firebaseio.com/users/${uid}/info.json`)
      .then(response => {
        const fetchedAddress = [];
        for (let key in response.data) {
          fetchedAddress.push({
            ...response.data[key],
            id: key
          });
        }
        fetchedAddress.map(info => {
          console.log(info.address);
          this.props.isThereAnAddress(info.address);
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <AnimatedForm delay={100} distance={70}>
            <AnimatedInput
              placeholder="Vaše ime ili nick"
              placeholderTextColor="white"
              selectionColor="white"
              underlineColorAndroid="transparent"
              style={styles.text}
              onChangeText={text => {
                this.setState({ usersNickOrName: text });
              }}
            />
            <AnimatedInput
              placeholder="Adresa isporuke"
              placeholderTextColor="white"
              selectionColor="white"
              underlineColorAndroid="transparent"
              style={styles.text}
              onChangeText={text => {
                this.setState({ usersAddress: text });
              }}
            />
            <AnimatedInput
              placeholder="Broj telefona za ne daj bože"
              placeholderTextColor="white"
              selectionColor="white"
              underlineColorAndroid="transparent"
              style={styles.text}
              onChangeText={text => {
                this.setState({ usersPhoneNumber: text });
              }}
            />

            <Animated.View style={styles.buttonView}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.onPressHandler}
              >
                <Text style={{ color: "#fff" }}>Dodaj Info</Text>
              </TouchableOpacity>
            </Animated.View>
          </AnimatedForm>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2E8B57"
  },
  text: {
    width: 250,
    height: 35,
    padding: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#FFF",
    color: "#ffffff",
    backgroundColor: "#2E8B57",
    fontFamily: Fonts.GloriaHallelujah
  },
  buttonView: {
    height: 40,
    marginTop: 10,
    backgroundColor: "#2E8B57",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 1
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => {
  return {
    name: state.usersNickOrName,
    address: state.usersAddress,
    phoneNum: state.usersPhoneNumber,
    uid: state.userUid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deliveryInfo: (usersName, usersAddress, phoneNum) =>
      dispatch(deliveryInfo(usersName, usersAddress, phoneNum)),
    isThereAnAddress: address => dispatch(isThereAnAddress(address))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressScreen);
