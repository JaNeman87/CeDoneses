import React, { Component } from "react";
import { View, StyleSheet, ScrollView, StatusBar } from "react-native";
import FoodPlace from "../../components/FoodPlace/FoodPlace";
import { Fonts } from "../../Utility/Fonts";
import { connect } from "react-redux";
import axios from "axios";

class ScreenOne extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  static navigatorStyle = {
    statusBarColor: "#2E8B57"
  };

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  // componentDidMount() {
  //   let uid = this.props.uid;

  //   axios
  //     .get(`https://deliveryapp-4951a.firebaseio.com/users/${uid}/info.json`)
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(err => console.log(err));
  // }

  // resCiraHandler = () => {
  //   this.props.navigator.showModal({
  //     screen: "potrcko.CiraScreen",
  //     title: "Restoran Ćira", // navigation bar title of the pushed screen (optional)
  //     // passProps: {}, // Object that will be passed as props to the pushed screen (optional)
  //     // animated: true, // za .push()
  //     // animationType: "slide-horizontal", // za .push()
  //     animationType: "slide-up", // za .showModal
  //     navigatorStyle: {
  //       navBarBackgroundColor: "#2E8B57",
  //       navBarTitleTextCentered: true,
  //       navBarTextColor: "#ffffff",
  //       statusBarColor: "#2E8B57",
  //       navBarButtonColor: "#ffffff",
  //       navBarTextFontFamily: Fonts.GloriaHallelujah
  //     }
  //   });
  // };

  colosseoHandler = () => {
    this.props.navigator.push({
      screen: "potrcko.ColosseoScreen",
      title: "Pizzeria Colosseo", // navigation bar title of the pushed screen (optional)
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
        navBarTextFontFamily: Fonts.GloriaHallelujah,
        tabBarHidden: true
      }
    });
  };

  // avlijaHandler = () => {
  //   this.props.navigator.showModal({
  //     screen: "potrcko.AvlijaScreen",
  //     title: "Restoran Avlija", // navigation bar title of the pushed screen (optional)
  //     // passProps: {}, // Object that will be passed as props to the pushed screen (optional)
  //     // animated: true, // za .push()
  //     // animationType: "slide-horizontal", // za .push()
  //     animationType: "slide-up", // za .showModal
  //     navigatorStyle: {
  //       navBarBackgroundColor: "#2E8B57",
  //       navBarTitleTextCentered: true,
  //       navBarTextColor: "#ffffff",
  //       statusBarColor: "#2E8B57",
  //       navBarButtonColor: "#ffffff",
  //       navBarTextFontFamily: Fonts.GloriaHallelujah
  //     }
  //   });
  // };
  // astoriaHandler = () => {
  //   this.props.navigator.showModal({
  //     screen: "potrcko.AstoriaScreen",
  //     title: "Astoria", // navigation bar title of the pushed screen (optional)
  //     // passProps: {}, // Object that will be passed as props to the pushed screen (optional)
  //     // animated: true, // za .push()
  //     // animationType: "slide-horizontal", // za .push()
  //     animationType: "slide-up", // za .showModal
  //     navigatorStyle: {
  //       navBarBackgroundColor: "#2E8B57",
  //       navBarTitleTextCentered: true,
  //       navBarTextColor: "#ffffff",
  //       statusBarColor: "#2E8B57",
  //       navBarButtonColor: "#ffffff",
  //       navBarTextFontFamily: Fonts.GloriaHallelujah
  //     }
  //   });
  // };
  // RiMHandler = () => {
  //   this.props.navigator.showModal({
  //     screen: "potrcko.RiMScreen",
  //     title: "Rakija i Meze", // navigation bar title of the pushed screen (optional)
  //     // passProps: {}, // Object that will be passed as props to the pushed screen (optional)
  //     // animated: true, // za .push()
  //     // animationType: "slide-horizontal", // za .push()
  //     animationType: "slide-up", // za .showModal
  //     navigatorStyle: {
  //       navBarBackgroundColor: "#2E8B57",
  //       navBarTitleTextCentered: true,
  //       navBarTextColor: "#ffffff",
  //       statusBarColor: "#2E8B57",
  //       navBarButtonColor: "#ffffff",
  //       navBarTextFontFamily: Fonts.GloriaHallelujah
  //     }
  //   });
  // };
  // harizmaHandler = () => {
  //   this.props.navigator.showModal({
  //     screen: "potrcko.HarizmaScreen",
  //     title: "Restoran Harizma", // navigation bar title of the pushed screen (optional)
  //     // passProps: {}, // Object that will be passed as props to the pushed screen (optional)
  //     // animated: true, // za .push()
  //     // animationType: "slide-horizontal", // za .push()
  //     animationType: "slide-up", // za .showModal
  //     navigatorStyle: {
  //       navBarBackgroundColor: "#2E8B57",
  //       navBarTitleTextCentered: true,
  //       navBarTextColor: "#ffffff",
  //       statusBarColor: "#2E8B57",
  //       navBarButtonColor: "#ffffff",
  //       navBarTextFontFamily: Fonts.GloriaHallelujah
  //     }
  //   });
  // };

  // topHandler = () => {
  //   this.props.navigator.showModal({
  //     screen: "potrcko.TopScreen",
  //     title: "Restoran Top", // navigation bar title of the pushed screen (optional)
  //     // passProps: {}, // Object that will be passed as props to the pushed screen (optional)
  //     // animated: true, // za .push()
  //     // animationType: "slide-horizontal", // za .push()
  //     animationType: "slide-up", // za .showModal
  //     navigatorStyle: {
  //       navBarBackgroundColor: "#2E8B57",
  //       navBarTitleTextCentered: true,
  //       navBarTextColor: "#ffffff",
  //       statusBarColor: "#2E8B57",
  //       navBarButtonColor: "#ffffff",
  //       navBarTextFontFamily: Fonts.GloriaHallelujah
  //     }
  //   });
  // };

  // SKHandler = () => {
  //   this.props.navigator.showModal({
  //     screen: "potrcko.SKScreen",
  //     title: "Srpska Kruna", // navigation bar title of the pushed screen (optional)
  //     // passProps: {}, // Object that will be passed as props to the pushed screen (optional)
  //     // animated: true, // za .push()
  //     // animationType: "slide-horizontal", // za .push()
  //     animationType: "slide-up", // za .showModal
  //     navigatorStyle: {
  //       navBarBackgroundColor: "#2E8B57",
  //       navBarTitleTextCentered: true,
  //       navBarTextColor: "#ffffff",
  //       statusBarColor: "#2E8B57",
  //       navBarButtonColor: "#ffffff",
  //       navBarTextFontFamily: Fonts.GloriaHallelujah
  //     }
  //   });
  // };

  // resJezerceHandler = () => {
  //   this.props.navigator.showModal({
  //     screen: "potrcko.ResJezerceScreen",
  //     title: "Restoran Jezerce", // navigation bar title of the pushed screen (optional)
  //     // passProps: {}, // Object that will be passed as props to the pushed screen (optional)
  //     // animated: true, // za .push()
  //     // animationType: "slide-horizontal", // za .push()
  //     animationType: "slide-up", // za .showModal
  //     navigatorStyle: {
  //       navBarBackgroundColor: "#2E8B57",
  //       navBarTitleTextCentered: true,
  //       navBarTextColor: "#ffffff",
  //       statusBarColor: "#2E8B57",
  //       navBarButtonColor: "#ffffff",
  //       navBarTextFontFamily: Fonts.GloriaHallelujah
  //     }
  //   });
  // };

  // PPHandler = () => {
  //   this.props.navigator.showModal({
  //     screen: "potrcko.PPScreen",
  //     title: "Pink Panter", // navigation bar title of the pushed screen (optional)
  //     // passProps: {}, // Object that will be passed as props to the pushed screen (optional)
  //     // animated: true, // za .push()
  //     // animationType: "slide-horizontal", // za .push()
  //     animationType: "slide-up", // za .showModal
  //     navigatorStyle: {
  //       navBarBackgroundColor: "#2E8B57",
  //       navBarTitleTextCentered: true,
  //       navBarTextColor: "#ffffff",
  //       statusBarColor: "#2E8B57",
  //       navBarButtonColor: "#ffffff",
  //       navBarTextFontFamily: Fonts.GloriaHallelujah
  //     }
  //   });
  // };

  // BajBajHandler = () => {
  //   this.props.navigator.showModal({
  //     screen: "potrcko.BajBajScreen",
  //     title: "Baj Baj", // navigation bar title of the pushed screen (optional)
  //     // passProps: {}, // Object that will be passed as props to the pushed screen (optional)
  //     // animated: true, // za .push()
  //     // animationType: "slide-horizontal", // za .push()
  //     animationType: "slide-up", // za .showModal
  //     navigatorStyle: {
  //       navBarBackgroundColor: "#2E8B57",
  //       navBarTitleTextCentered: true,
  //       navBarTextColor: "#ffffff",
  //       statusBarColor: "#2E8B57",
  //       navBarButtonColor: "#ffffff",
  //       navBarTextFontFamily: Fonts.GloriaHallelujah
  //     }
  //   });
  // };
  // bossHandler = () => {
  //   this.props.navigator.showModal({
  //     screen: "potrcko.BossScreen",
  //     title: "Boss", // navigation bar title of the pushed screen (optional)
  //     // passProps: {}, // Object that will be passed as props to the pushed screen (optional)
  //     // animated: true, // za .push()
  //     // animationType: "slide-horizontal", // za .push()
  //     animationType: "slide-up", // za .showModal
  //     navigatorStyle: {
  //       navBarBackgroundColor: "#2E8B57",
  //       navBarTitleTextCentered: true,
  //       navBarTextColor: "#ffffff",
  //       statusBarColor: "#2E8B57",
  //       navBarButtonColor: "#ffffff",
  //       navBarTextFontFamily: Fonts.GloriaHallelujah
  //     }
  //   });
  // };

  casperHandler = () => {
    this.props.navigator.push({
      screen: "potrcko.CasperScreen",
      title: "Casper Pizzeria", // navigation bar title of the pushed screen (optional)
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
        navBarTextFontFamily: Fonts.GloriaHallelujah,
        tabBarHidden: true
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <ScrollView>
            <FoodPlace
              image={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/deliveryapp-4951a.appspot.com/o/img%2Fcira%2FciraLogo%2Fcira.jpeg?alt=media&token=27b06fe7-8089-4bb2-a05b-44232df659fd"
              }}
              foodPlaceName="Restoran Ćira"
              detail="Roštilj, Srpska hrana, Domaći sastojci..."
              time="23:00"
              minBuy="500din"
              delivery="Besplatna dostava"
              onPress={this.resCiraHandler}
            />

            <FoodPlace
              image={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/deliveryapp-4951a.appspot.com/o/img%2Fcasper%2FcasperLogo%2FcasperLogo.jpg?alt=media&token=95935e96-83a8-46b4-a7b1-03dca2d665ae"
              }}
              foodPlaceName="Casper Caffe Pizzeria"
              detail="Italijanska kuhinja, Pasta, Dezerti..."
              time="23:00"
              minBuy="700din"
              delivery="Besplatna dostava"
              onPress={this.casperHandler}
            />

            <FoodPlace
              image={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/deliveryapp-4951a.appspot.com/o/img%2Fcolosseo%2FcolosseoLogo%2FpizzaSmall.jpg?alt=media&token=33afaca1-18f5-4b2d-b06e-f743ef9bc135"
              }}
              foodPlaceName="Pizzeria Colosseo"
              detail="Italijanska hrana, Pica, Paste..."
              time="00:00"
              minBuy="590din"
              delivery="Besplatna dostava"
              onlinePay="false"
              onPress={this.colosseoHandler}
            />
            <FoodPlace
              image={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/deliveryapp-4951a.appspot.com/o/img%2Favlija%2FavlijaLogo%2Favlija.jpeg?alt=media&token=a75a2267-19bf-4036-b544-4057d2521d62"
              }}
              foodPlaceName="Restoran Avlija"
              detail="Srpska hrana, Roštilj, Domaći sastojci..."
              time="00:00"
              minBuy="900din"
              delivery="Besplatna dostava"
              noDelivery
              onPress={this.avlijaHandler}
            />
            <FoodPlace
              image={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/deliveryapp-4951a.appspot.com/o/img%2Fastoria%2FastoriaLogo%2Fcrepes.jpg?alt=media&token=d7aee3ab-e89a-4634-a492-f2763f33a933"
              }}
              foodPlaceName="Astoria"
              detail="Italijanska hrana, Poslastičarnica..."
              time="00:00"
              minBuy="600din"
              delivery="Besplatna dostava"
              onPress={this.astoriaHandler}
            />

            <FoodPlace
              image={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/deliveryapp-4951a.appspot.com/o/img%2FrakijaImeze%2FRiMLogo%2Frakijaimeze.jpeg?alt=media&token=86166a77-5a5d-49ed-964c-7f31173bafe8"
              }}
              foodPlaceName="Rakija i Meze"
              detail="Srpska hrana, Roštilj, Domaći sastojci..."
              time="02:00"
              minBuy="900din"
              delivery="Besplatna dostava"
              onlinePay="false"
              noDelivery
              onPress={this.RiMHandler}
            />
            <FoodPlace
              image={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/deliveryapp-4951a.appspot.com/o/img%2Fharizma%2FharizmaLogo%2Fharizma.jpeg?alt=media&token=34169fc4-3b59-40be-b461-5714ed03ab08"
              }}
              foodPlaceName="Restoran Harizma"
              detail="Srpska hrana, Roštilj, Domaći sastojci..."
              time="02:00"
              minBuy="900din"
              delivery="Besplatna dostava"
              onPress={this.harizmaHandler}
            />
            <FoodPlace
              image={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/deliveryapp-4951a.appspot.com/o/img%2Ftop%2FtopLogo%2Ftop.jpg?alt=media&token=68c548e7-bbe9-4d28-a403-87f37ba09c6e"
              }}
              foodPlaceName="Restoran Top"
              detail="Srpska hrana, Roštilj, Domaći sastojci..."
              time="23:00"
              minBuy="1500din"
              delivery="Besplatna dostava"
              onlinePay="false"
              onPress={this.topHandler}
            />
            <FoodPlace
              image={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/deliveryapp-4951a.appspot.com/o/img%2FsrpskaKruna%2FsrpskaKrunaLogo%2Fsrpkruna.jpeg?alt=media&token=86c9766d-e1a9-4630-a97a-74bc0f8c5546"
              }}
              foodPlaceName="Srpska Kruna"
              detail="Srpska hrana, Roštilj, Domaći sastojci..."
              time="00:00"
              minBuy="1500din"
              delivery="Besplatna dostava"
              noDelivery
              onlinePay="false"
              onPress={this.SKHandler}
            />
            <FoodPlace
              image={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/deliveryapp-4951a.appspot.com/o/img%2Fjezerce%2FjezerceLogo%2Fetno.jpg?alt=media&token=178cf06a-d68d-4acf-8f81-79509e475841"
              }}
              foodPlaceName="Etno Restoran Jezerce"
              detail="Srpska hrana, Etno, Domaći sastojci..."
              time="22:00"
              minBuy="1500din"
              delivery="Besplatna dostava"
              noDelivery
              onPress={this.resJezerceHandler}
            />
            <FoodPlace
              image={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/deliveryapp-4951a.appspot.com/o/img%2FpinkPanter%2FpinkPanterLogo%2Fpink.jpg?alt=media&token=8c7dd6c3-bb0b-4750-bca7-6f4ecc909d9c"
              }}
              foodPlaceName="Pink Panter"
              detail="Roštilj"
              time="00:00"
              minBuy="350din"
              delivery="Besplatna dostava"
              onPress={this.PPHandler}
            />
            <FoodPlace
              image={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/deliveryapp-4951a.appspot.com/o/img%2Fbajbaj%2FbajbajLogo%2Fdownload.jpeg?alt=media&token=ec9b43bc-48d8-447b-af0d-9aeb24a0ba7a"
              }}
              foodPlaceName="Baj Baj"
              detail="Sendviči, Palačinke, Sokovi..."
              time="00:00"
              minBuy="400din"
              delivery="Besplatna dostava"
              onlinePay="false"
              onPress={this.BajBajHandler}
            />
            <FoodPlace
              image={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/deliveryapp-4951a.appspot.com/o/img%2Fboss%2FbossLogo%2Fboss.jpg?alt=media&token=0fdbe59e-25e2-49e3-a27f-657db92e923e"
              }}
              foodPlaceName="Boss"
              detail="Italijanska kuhinja, Pasta, Biftek..."
              time="23:00"
              minBuy="700din"
              delivery="Besplatna dostava"
              onPress={this.bossHandler}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2"
  }
});

const mapStateToProps = state => {
  return {
    uid: state.userUid
  };
};

export default connect(mapStateToProps)(ScreenOne);
