import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StatusBar
} from "react-native";
import firebase from "@firebase/app";
import "@firebase/auth";
import { connect } from "react-redux";
import startMainTabs from "../MainTabs/startMainTabs";
import Input from "../../components/Input/Input";
import validate from "../../Utility/Validation";
import CustomButton from "../../components/CustomButton/CustomButton";
import Spinner from "../../components/Spinner/Spinner";
import { Fonts } from "../../Utility/Fonts";
import { BallIndicator } from "react-native-indicators";
import { userInfo, isThereAnAddress } from "../../Store/actions/actionTypes";
import axios from "axios";

class AuthScreen extends Component {
  state = {
    adress: [],
    authMode: "login",
    error: "",
    loading: false,
    loggedIn: null,
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        },
        touched: false
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 8
        },
        touched: false
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: "password"
        },
        touched: false
      }
    }
  };

  componentWillMount() {
    !firebase.apps.length
      ? firebase.initializeApp({
          apiKey: "AIzaSyC9sJLd-CDARcp11VWtMKopW3yO9T5rb8Q",
          authDomain: "deliveryapp-4951a.firebaseapp.com",
          databaseURL: "https://deliveryapp-4951a.firebaseio.com",
          projectId: "deliveryapp-4951a",
          storageBucket: "deliveryapp-4951a.appspot.com",
          messagingSenderId: "276275890472"
        })
      : firebase.app();

    firebase.auth().onAuthStateChanged(user => {
      user
        ? this.setState({ loggedIn: true })
        : this.setState({ loggedIn: false });

      console.log(this.state.loggedIn);
    });
    console.log(this.state.loggedIn);

    let uid = null;
    let email = null;

    firebase.auth().onAuthStateChanged(user => {
      user ? ((email = user.email), (uid = user.uid)) : null;
      console.log(email, uid);
      this.props.userInfo(email, uid);
    });
  }

  componentWillUnmount() {
    let uid = this.props.uid;
    console.log(uid);
    console.log(this.props.address);
    axios
      .get(`https://deliveryapp-4951a.firebaseio.com/users/${uid}/info.json`)
      .then(response => {
        console.log(response.data);
        if (response.data === null) {
          console.log("Hello World");
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

  static navigatorStyle = {
    navBarHidden: true
  };

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return {
        authMode: prevState.authMode === "login" ? "signup" : "login"
      };
    });
  };
  loggedInHandler = () => {
    const email = this.state.controls.email.value;
    const password = this.state.controls.password.value;
    this.setState({ error: "", loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLogginSuccess.bind(this))
      .catch(this.onLogginFail.bind(this));
  };
  signUpHandler = () => {
    const email = this.state.controls.email.value;
    const password = this.state.controls.password.value;
    this.setState({ error: "", loading: true });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(this.onLogginSuccess.bind(this))
      .catch(this.onLogginFail.bind(this));
  };

  onLogginFail = () => {
    this.setState({
      error: "Greska!!! Pokusajte ponovo!",
      loading: false
    });
  };
  onLogginSuccess = () => {
    this.setState({
      controls: {
        email: {
          value: "",
          valid: false,
          validationRules: {
            isEmail: true
          },
          touched: false
        },
        password: {
          value: "",
          valid: false,
          validationRules: {
            minLength: 8
          },
          touched: false
        },
        confirmPassword: {
          value: "",
          valid: false,
          validationRules: {
            equalTo: "password"
          },
          touched: false
        }
      },
      loading: false,
      error: ""
    });
  };
  updateInputStateHandler = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalCtrl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalCtrl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === "password") {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
              key === "password"
                ? validate(
                    prevState.controls.confirmPassword.value,
                    prevState.controls.confirmPassword.validationRules,
                    connectedValue
                  )
                : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(
              value,
              prevState.controls[key].validationRules,
              connectedValue
            ),
            touched: true
          }
        }
      };
    });
  };

  goTostartMainTabs = () => {
    switch (this.state.loggedIn) {
      case true:
        return startMainTabs();
        break;
      case false:
        return;
        break;

      default:
        return <Spinner />;
        break;
    }
  };

  // loggedInHandler = () => {
  //   startMainTabs();
  // };
  render() {
    let confirmPasswordControl = null;
    let buttonOrSpinner = null;
    if (this.state.authMode === "signup") {
      confirmPasswordControl = (
        <Input
          placeholder="Potvrdi Šifru"
          placeholderTextColor="white"
          style={styles.input}
          value={this.state.controls.confirmPassword.value}
          onChangeText={val =>
            this.updateInputStateHandler("confirmPassword", val)
          }
          valid={this.state.controls.confirmPassword.valid}
          touched={this.state.controls.confirmPassword.touched}
          secureTextEntry
          fontFamily={Fonts.GloriaHallelujah}
        />
      );
    }

    if (this.state.loading) {
      buttonOrSpinner = (
        <View style={{ height: 30 }}>
          <Spinner size="small" />
        </View>
      );
    } else {
      buttonOrSpinner = (
        <CustomButton
          color="#2E8B57"
          // width={"40%"}
          borderColor="white"
          font={Fonts.GloriaHallelujah}
          onPress={
            this.state.authMode === "login"
              ? this.loggedInHandler
              : this.signUpHandler
          }
          disabled={
            this.state.authMode === "login"
              ? !this.state.controls.password.valid ||
                !this.state.controls.email.valid
              : !this.state.controls.confirmPassword.valid ||
                !this.state.controls.password.valid ||
                !this.state.controls.email.valid
          }
        >
          {this.state.authMode === "login" ? "Login" : "SignUp"}
        </CustomButton>
      );
    }
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, backgroundColor: "#2E8B57" }}>
          <StatusBar backgroundColor="#2E8B57" barStyle="light-content" />
          <View style={styles.switch}>
            <CustomButton
              color="#2E8B57"
              width={"20%"}
              borderColor="#ffffff"
              font={Fonts.GloriaHallelujah}
              onPress={this.switchAuthModeHandler}
            >
              {this.state.authMode === "login" ? "SignUp" : "Login"}
            </CustomButton>
          </View>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Input
                placeholder="E-Mail"
                placeholderTextColor="white"
                style={styles.input}
                value={this.state.controls.email.value}
                onChangeText={val => this.updateInputStateHandler("email", val)}
                valid={this.state.controls.email.valid}
                touched={this.state.controls.email.touched}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                fontFamily={Fonts.GloriaHallelujah}
              />
              <Input
                placeholder="Šifra"
                placeholderTextColor="white"
                style={styles.input}
                value={this.state.controls.password.value}
                onChangeText={val =>
                  this.updateInputStateHandler("password", val)
                }
                valid={this.state.controls.password.valid}
                touched={this.state.controls.password.touched}
                secureTextEntry
                fontFamily={Fonts.GloriaHallelujah}
              />
              {confirmPasswordControl}
            </View>
            <View style={{ height: 30 }}>{this.goTostartMainTabs()}</View>
            <Text style={styles.errorTextStyle}>{this.state.error}</Text>
            {buttonOrSpinner}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  switch: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  container: {
    flex: 9,
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  textHeading: {
    fontSize: 28,
    fontWeight: "bold"
  },
  input: {
    backgroundColor: "#2E8B57",
    borderColor: "white"
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
});

const mapStateToProps = state => {
  return {
    uid: state.userUid,
    address: state.fetchedUsersAddress
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userInfo: (email, uid) => dispatch(userInfo(email, uid)),
    isThereAnAddress: address => dispatch(isThereAnAddress(address))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthScreen);
