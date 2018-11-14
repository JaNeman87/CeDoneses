import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import firebase from "@firebase/app";
import "@firebase/auth";
import Icon from "react-native-vector-icons/Ionicons";
import { Fonts } from "../../Utility/Fonts";
import App from "../../../App";
import { connect } from "react-redux";
import { orderCompleted } from "../../Store/actions/actionTypes";

class SideDrawer extends Component {
  state = {};
  historyHandler = () => {
    this.props.navigator.showModal({
      screen: "potrcko.HistoryScreen",
      title: "Prethodne narudžbine", // navigation bar title of the pushed screen (optional)
      // passProps: {}, // Object that will be passed as props to the pushed screen (optional)
      // animated: true, // za .push()
      // animationType: "slide-horizontal", // za .push()
      animationType: "slide-up", // za .showModal
      navigatorStyle: {
        navBarBackgroundColor: "#2E8B57",
        navBarTitleTextCentered: true,
        navBarTextColor: "#ffffff",
        statusBarColor: "#2E8B57",
        navBarButtonColor: "#ffffff",
        navBarTextFontFamily: Fonts.GloriaHallelujah
      }
    });
  };

  profilHandler = () => {
    this.props.navigator.showModal({
      screen: "potrcko.ProfilScreen",
      title: "Profil", // navigation bar title of the pushed screen (optional)
      // passProps: {}, // Object that will be passed as props to the pushed screen (optional)
      // animated: true, // za .push()
      // animationType: "slide-horizontal", // za .push()
      animationType: "slide-up", // za .showModal
      navigatorStyle: {
        navBarBackgroundColor: "#2E8B57",
        navBarTitleTextCentered: true,
        navBarTextColor: "#ffffff",
        statusBarColor: "#2E8B57",
        navBarButtonColor: "#ffffff",
        navBarTextFontFamily: Fonts.GloriaHallelujah
      }
    });
  };

  logOutHandler = () => {
    firebase.auth().signOut();
    App();
    this.props.orderCompleted();
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get("window").width * 0.7 }
        ]}
      >
        <TouchableOpacity>
          <View style={styles.drawerItemEmail}>
            {/* <Icon
              style={styles.drawerItemIcon}
              name="md-contact"
              size={30}
              color="#2E8B57"
            /> */}
            <Text style={styles.drawerText}>{this.props.email}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.logOutHandler}>
          <View style={styles.drawerItem}>
            <Icon
              style={styles.drawerItemIcon}
              name="md-log-out"
              size={30}
              color="#2E8B57"
            />
            <Text style={styles.drawerText}>Log Out</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.profilHandler}>
          <View style={styles.drawerItem}>
            <Icon
              style={styles.drawerItemIcon}
              name="md-contact"
              size={30}
              color="#2E8B57"
            />
            <Text style={styles.drawerText}>Profil</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.historyHandler}>
          <View style={styles.drawerItem}>
            <Icon
              style={styles.drawerItemIcon}
              name="ios-archive"
              size={30}
              color="#2E8B57"
            />
            <Text style={styles.drawerText}>Prethodne narudzbine</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: "#f2f2f2",
    flex: 1
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#2E8B57",
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 3,
    marginBottom: 5
  },
  drawerItemEmail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // padding: 10,

    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 3,
    marginBottom: 20
  },
  drawerItemIcon: {
    marginRight: 10
  },
  drawerText: {
    fontFamily: Fonts.GloriaHallelujah,
    color: "#2E8B57"
  }
});

const mapStateToProps = state => {
  return {
    email: state.userEmail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    orderCompleted: () => dispatch(orderCompleted())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideDrawer);
