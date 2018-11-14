import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import SingleFoodItem from "../../components/SingleFoodItem/SingleFoodItem";
import HeaderInfo from "../../components/HeaderInfo/HeaderInfo";
import { connect } from "react-redux";
import { addToCart } from "../../Store/actions/actionTypes";
import { Fonts } from "../../Utility/Fonts";

class BossScreen extends Component {
  state = {
    jelovnik: true,
    popularno: false,
    rostiljToggle: false,
    kuvanaJelaToggle: false,
    corbeToggle: false,
    salateToggle: false,
    moreToggle: false,
    desertToggle: false,
    sokoviToggle: false,
    alkoholToggle: false,
    pivoToggle: false
  };

  static navigatorButtons = {
    rightButtons: [
      {
        // title: "Korpa", // for a textual button, provide the button title (label)
        id: "korpa", // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        component: "potrcko.NavBarCustomButton", // This line loads our component as a nav bar button item
        passProps: {
          text: "Korpa"
        }
      }
    ]
  };
  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == "DeepLink") {
      //when you press the button, it will be called here
      // alert("button pressed");
      this.props.navigator.showModal({
        screen: "potrcko.ScreenTwo",
        title: "Gebajzla",
        // animated: true, // za .push()
        // animationType: "slide-horizontal", // za .push()
        animationType: "slide-up",
        navigatorStyle: {
          navBarBackgroundColor: "#2E8B57",
          navBarTitleTextCentered: true,
          navBarTextColor: "#ffffff",
          statusBarColor: "#2E8B57",
          navBarButtonColor: "#ffffff",
          navBarTextFontFamily: Fonts.GloriaHallelujah,
          navBarTextFontSize: 25
        }
      });
    }
  }

  jelovnikHandler = () => {
    this.setState({ jelovnik: true, popularno: false });
  };
  popularnoHandler = () => {
    this.setState({ popularno: true, jelovnik: false });
  };
  rostiljToggleHandler = () => {
    const newState = !this.state.rostiljToggle;
    this.setState({ rostiljToggle: newState });
  };
  kuvanaJelaToggleHandler = () => {
    const newState = !this.state.kuvanaJelaToggle;
    this.setState({ kuvanaJelaToggle: newState });
  };
  corbeToggleHandler = () => {
    const newState = !this.state.corbeToggle;
    this.setState({ corbeToggle: newState });
  };
  salateToggleHandler = () => {
    const newState = !this.state.salateToggle;
    this.setState({ salateToggle: newState });
  };
  moreToggleHandler = () => {
    const newState = !this.state.moreToggle;
    this.setState({ moreToggle: newState });
  };

  desertToggleHandler = () => {
    const newState = !this.state.desertToggle;
    this.setState({ desertToggle: newState });
  };
  sokoviToggleHandler = () => {
    const newState = !this.state.sokoviToggle;
    this.setState({ sokoviToggle: newState });
  };
  alkoholToggleHandler = () => {
    const newState = !this.state.alkoholToggle;
    this.setState({ alkoholToggle: newState });
  };
  pivoToggleHandler = () => {
    const newState = !this.state.pivoToggle;
    this.setState({ pivoToggle: newState });
  };
  minestroneHandler = () => {
    this.props.addToCart(
      this.props.minestroneName,
      this.props.minestroneWeight,
      this.props.minestroneInfo,
      this.props.minestronePrice,
      this.props.minestroneImage
    );
    console.log(this.props.addedToCart);
  };

  paradajzCorbaHandler = () => {
    this.props.addToCart(
      this.props.paradajzCorbaName,
      this.props.paradajzCorbaWeight,
      this.props.paradajzCorbaInfo,
      this.props.paradajzCorbaPrice,
      this.props.paradajzCorbaImage
    );
  };
  telecaCorbaHandler = () => {
    this.props.addToCart(
      this.props.telecaCorbaName,
      this.props.telecaCorbaWeight,
      this.props.telecaCorbaInfo,
      this.props.telecaCorbaPrice,
      this.props.telecaCorbaImage
    );
  };
  pilecaCorbaHandler = () => {
    this.props.addToCart(
      this.props.pilecaCorbaName,
      this.props.pilecaCorbaWeight,
      this.props.pilecaCorbaInfo,
      this.props.pilecaCorbaPrice,
      this.props.pilecaCorbaImage
    );
  };
  cezarHandler = () => {
    this.props.addToCart(
      this.props.cezarName,
      this.props.cezarWeight,
      this.props.cezarInfo,
      this.props.cezarPrice,
      this.props.cezarImage
    );
  };
  sopskaHandler = () => {
    this.props.addToCart(
      this.props.sopskaName,
      this.props.sopskaWeight,
      this.props.sopskaInfo,
      this.props.sopskaPrice,
      this.props.sopskaImage
    );
  };
  grckaHandler = () => {
    this.props.addToCart(
      this.props.grckaName,
      this.props.grckaWeight,
      this.props.grckaInfo,
      this.props.grckaPrice,
      this.props.grckaImage
    );
  };
  kupusHandler = () => {
    this.props.addToCart(
      this.props.kupusName,
      this.props.kupusWeight,
      this.props.kupusInfo,
      this.props.kupusPrice,
      this.props.kupusImage
    );
  };
  krompirHandler = () => {
    this.props.addToCart(
      this.props.krompirName,
      this.props.krompirWeight,
      this.props.krompirInfo,
      this.props.krompirPrice,
      this.props.krompirImage
    );
  };
  kaprezeHandler = () => {
    this.props.addToCart(
      this.props.kaprezeName,
      this.props.kaprezeWeight,
      this.props.kaprezeInfo,
      this.props.kaprezePrice,
      this.props.kaprezeImage
    );
  };
  musakaHandler = () => {
    this.props.addToCart(
      this.props.musakaName,
      this.props.musakaWeight,
      this.props.musakaInfo,
      this.props.musakaPrice,
      this.props.musakaImage
    );
  };
  cufteHandler = () => {
    this.props.addToCart(
      this.props.cufteName,
      this.props.cufteWeight,
      this.props.cufteInfo,
      this.props.cuftePrice,
      this.props.cufteImage
    );
  };
  gulasHandler = () => {
    this.props.addToCart(
      this.props.gulasName,
      this.props.gulasWeight,
      this.props.gulasInfo,
      this.props.gulasPrice,
      this.props.gulasImage
    );
  };
  punjenePaprikeHandler = () => {
    this.props.addToCart(
      this.props.punjenePaprikeName,
      this.props.punjenePaprikeWeight,
      this.props.punjenePaprikeInfo,
      this.props.punjenePaprikePrice,
      this.props.punjenePaprikeImage
    );
  };
  suljpaHandler = () => {
    this.props.addToCart(
      this.props.suljpaName,
      this.props.suljpaWeight,
      this.props.suljpaInfo,
      this.props.suljpaPrice,
      this.props.suljpaImage
    );
  };
  sarmeHandler = () => {
    this.props.addToCart(
      this.props.sarmeName,
      this.props.sarmeWeight,
      this.props.sarmeInfo,
      this.props.sarmePrice,
      this.props.sarmeImage
    );
  };
  boranijaHandler = () => {
    this.props.addToCart(
      this.props.boranijeName,
      this.props.boranijeWeight,
      this.props.boranijeInfo,
      this.props.boranijePrice,
      this.props.boranijeImage
    );
  };

  mesanoHandler = () => {
    this.props.addToCart(
      this.props.mesanoName,
      this.props.mesanoWeight,
      this.props.mesanoInfo,
      this.props.mesanoPrice,
      this.props.mesanoImage
    );
  };
  dimVesHandler = () => {
    this.props.addToCart(
      this.props.dimVesName,
      this.props.dimVesWeight,
      this.props.dimVesInfo,
      this.props.dimVesPrice,
      this.props.dimVesImage
    );
  };
  pecurkeHandler = () => {
    this.props.addToCart(
      this.props.pecurkeName,
      this.props.pecurkeWeight,
      this.props.pecurkeInfo,
      this.props.pecurkePrice,
      this.props.pecurkeImage
    );
  };
  pileciBatakHandler = () => {
    this.props.addToCart(
      this.props.pileciBatakName,
      this.props.pileciBatakWeight,
      this.props.pileciBatakInfo,
      this.props.pileciBatakPrice,
      this.props.pileciBatakImage
    );
  };
  rolCevapiHandler = () => {
    this.props.addToCart(
      this.props.rolCevapiName,
      this.props.rolCevapiWeight,
      this.props.rolCevapiInfo,
      this.props.rolCevapiPrice,
      this.props.rolCevapiImage
    );
  };
  pljeskaHandler = () => {
    this.props.addToCart(
      this.props.pljeskaName,
      this.props.pljeskaWeight,
      this.props.pljeskaInfo,
      this.props.pljeskaPrice,
      this.props.pljeskaImage
    );
  };
  punjenoBeloHandler = () => {
    this.props.addToCart(
      this.props.punjenoBeloName,
      this.props.punjenoBeloWeight,
      this.props.punjenoBeloInfo,
      this.props.punjenoBeloPrice,
      this.props.punjenoBeloImage
    );
  };
  skarpinaHandler = () => {
    this.props.addToCart(
      this.props.skarpinaName,
      this.props.skarpinaWeight,
      this.props.skarpinaInfo,
      this.props.skarpinaPrice,
      this.props.skarpinaImage
    );
  };
  pastrmkaHandler = () => {
    this.props.addToCart(
      this.props.pastrmkaName,
      this.props.pastrmkaWeight,
      this.props.pastrmkaInfo,
      this.props.pastrmkaPrice,
      this.props.pastrmkaImage
    );
  };
  jastogHandler = () => {
    this.props.addToCart(
      this.props.jastogName,
      this.props.jastogWeight,
      this.props.jastogInfo,
      this.props.jastogPrice,
      this.props.jastogImage
    );
  };
  saranHandler = () => {
    this.props.addToCart(
      this.props.saranName,
      this.props.saranWeight,
      this.props.saranInfo,
      this.props.saranPrice,
      this.props.saranImage
    );
  };
  lignjeHandler = () => {
    this.props.addToCart(
      this.props.lignjeName,
      this.props.lignjeWeight,
      this.props.lignjeInfo,
      this.props.lignjePrice,
      this.props.lignjeImage
    );
  };
  lososHandler = () => {
    this.props.addToCart(
      this.props.lososName,
      this.props.lososWeight,
      this.props.lososInfo,
      this.props.lososPrice,
      this.props.lososImage
    );
  };
  nutellaHandler = () => {
    this.props.addToCart(
      this.props.palacinkenutellabananaName,
      this.props.palacinkenutellabananaWeight,
      this.props.palacinkenutellabananaInfo,
      this.props.palacinkenutellabananaPrice,
      this.props.palacinkenutellabananaImage
    );
  };
  palSatoHandler = () => {
    this.props.addToCart(
      this.props.palSatoName,
      this.props.palSatoWeight,
      this.props.palSatoInfo,
      this.props.palSatoPrice,
      this.props.palSatoImage
    );
  };
  princesVisnjaHandler = () => {
    this.props.addToCart(
      this.props.princesVisnjaName,
      this.props.princesVisnjaWeight,
      this.props.princesVisnjaInfo,
      this.props.princesVisnjaPrice,
      this.props.princesVisnjaImage
    );
  };
  tulumbeHandler = () => {
    this.props.addToCart(
      this.props.tulumbeName,
      this.props.tulumbeWeight,
      this.props.tulumbeInfo,
      this.props.tulumbePrice,
      this.props.tulumbeImage
    );
  };
  cokoKolacHandler = () => {
    this.props.addToCart(
      this.props.cokoKolacName,
      this.props.cokoKolacWeight,
      this.props.cokoKolacInfo,
      this.props.cokoKolacPrice,
      this.props.cokoKolacImage
    );
  };
  ruskeKapeHandler = () => {
    this.props.addToCart(
      this.props.ruskeKapeName,
      this.props.ruskeKapeWeight,
      this.props.ruskeKapeInfo,
      this.props.ruskeKapePrice,
      this.props.ruskeKapeImage
    );
  };
  cheesecakeHandler = () => {
    this.props.addToCart(
      this.props.cheesecakeName,
      this.props.cheesecakeWeight,
      this.props.cheesecakeInfo,
      this.props.cheesecakePrice,
      this.props.cheesecakeImage
    );
  };
  cocacolaHandler = () => {
    this.props.addToCart(
      this.props.cocacolaName,
      this.props.cocacolaWeight,
      this.props.cocacolaInfo,
      this.props.cocacolaPrice,
      this.props.cocacolaImage
    );
  };
  pepsiHandler = () => {
    this.props.addToCart(
      this.props.pepsiName,
      this.props.pepsiWeight,
      this.props.pepsiInfo,
      this.props.pepsiPrice,
      this.props.pepsiImage
    );
  };
  fantaHandler = () => {
    this.props.addToCart(
      this.props.fantaName,
      this.props.fantaWeight,
      this.props.fantaInfo,
      this.props.fantaPrice,
      this.props.fantaImage
    );
  };
  sevenUpHandler = () => {
    this.props.addToCart(
      this.props.sevenUpName,
      this.props.sevenUpWeight,
      this.props.sevenUpInfo,
      this.props.sevenUpPrice,
      this.props.sevenUpImage
    );
  };
  spriteHandler = () => {
    this.props.addToCart(
      this.props.spriteName,
      this.props.spriteWeight,
      this.props.spriteInfo,
      this.props.spritePrice,
      this.props.spriteImage
    );
  };
  domacaHandler = () => {
    this.props.addToCart(
      this.props.domacaName,
      this.props.domacaWeight,
      this.props.domacaInfo,
      this.props.domacaPrice,
      this.props.domacaImage
    );
  };
  jackHandler = () => {
    this.props.addToCart(
      this.props.jackName,
      this.props.jackWeight,
      this.props.jackInfo,
      this.props.jackPrice,
      this.props.jackImage
    );
  };
  teachersHandler = () => {
    this.props.addToCart(
      this.props.teachersName,
      this.props.teachersWeight,
      this.props.teachersInfo,
      this.props.teachersPrice,
      this.props.teachersImage
    );
  };
  beloHandler = () => {
    this.props.addToCart(
      this.props.beloName,
      this.props.beloWeight,
      this.props.beloInfo,
      this.props.beloPrice,
      this.props.beloImage
    );
  };
  crnoHandler = () => {
    this.props.addToCart(
      this.props.crnoName,
      this.props.crnoWeight,
      this.props.crnoInfo,
      this.props.crnoPrice,
      this.props.crnoImage
    );
  };
  rozeHandler = () => {
    this.props.addToCart(
      this.props.rozeName,
      this.props.rozeWeight,
      this.props.rozeInfo,
      this.props.rozePrice,
      this.props.rozeImage
    );
  };
  nele1Handler = () => {
    this.props.addToCart(
      this.props.nele1Name,
      this.props.nele1Weight,
      this.props.nele1Info,
      this.props.nele1Price,
      this.props.nele1Image
    );
  };
  nele2Handler = () => {
    this.props.addToCart(
      this.props.nele2Name,
      this.props.nele2Weight,
      this.props.nele2Info,
      this.props.nele2Price,
      this.props.nele2Image
    );
  };
  shofferHandler = () => {
    this.props.addToCart(
      this.props.shofferName,
      this.props.shofferWeight,
      this.props.shofferInfo,
      this.props.shofferPrice,
      this.props.shofferImage
    );
  };
  zajecaracHandler = () => {
    this.props.addToCart(
      this.props.zajecaracName,
      this.props.zajecaracWeight,
      this.props.zajecaracInfo,
      this.props.zajecaracPrice,
      this.props.zajecaracImage
    );
  };
  psenicnoHandler = () => {
    this.props.addToCart(
      this.props.psenicnoName,
      this.props.psenicnoWeight,
      this.props.psenicnoInfo,
      this.props.psenicnoPrice,
      this.props.psenicnoImage
    );
  };
  heinekenHandler = () => {
    this.props.addToCart(
      this.props.heinekenName,
      this.props.heinekenWeight,
      this.props.heinekenInfo,
      this.props.heinekenPrice,
      this.props.heinekenImage
    );
  };
  render() {
    let output = null;
    let RostiljToggle = null;
    let kuvanaJelaToggle = null;
    let corbeToggle = null;
    let salateToggle = null;
    let moreToggle = null;
    let desertToggle = null;
    let sokoviToggle = null;
    let alkoholToggle = null;
    let pivoToggle = null;

    if (this.state.pivoToggle) {
      pivoToggle = (
        <View>
          <SingleFoodItem
            image={this.props.nele1Image}
            foodName={this.props.nele1Name}
            weight={this.props.nele1Weight}
            foodInfo={this.props.nele1Info}
            foodPrice={this.props.nele1Price}
            onPress={this.nele1Handler}
          />
          <SingleFoodItem
            image={this.props.nele2Image}
            foodName={this.props.nele2Name}
            weight={this.props.nele2Weight}
            foodInfo={this.props.nele2Info}
            foodPrice={this.props.nele2Price}
            onPress={this.nele2Handler}
          />
          <SingleFoodItem
            image={this.props.shofferImage}
            foodName={this.props.shofferName}
            weight={this.props.shofferWeight}
            foodInfo={this.props.shofferInfo}
            foodPrice={this.props.shofferPrice}
            onPress={this.shofferHandler}
          />
          <SingleFoodItem
            image={this.props.zajecaracImage}
            foodName={this.props.zajecaracName}
            weight={this.props.zajecaracWeight}
            foodInfo={this.props.zajecaracInfo}
            foodPrice={this.props.zajecaracPrice}
            onPress={this.zajecaracHandler}
          />
          <SingleFoodItem
            image={this.props.psenicnoImage}
            foodName={this.props.psenicnoName}
            weight={this.props.psenicnoWeight}
            foodInfo={this.props.psenicnoInfo}
            foodPrice={this.props.psenicnoPrice}
            onPress={this.psenicnoHandler}
          />
          <SingleFoodItem
            image={this.props.heinekenImage}
            foodName={this.props.heinekenName}
            weight={this.props.heinekenWeight}
            foodInfo={this.props.heinekenInfo}
            foodPrice={this.props.heinekenPrice}
            onPress={this.heinekenHandler}
          />
        </View>
      );
    }

    if (this.state.alkoholToggle) {
      alkoholToggle = (
        <View>
          <SingleFoodItem
            image={this.props.domacaImage}
            foodName={this.props.domacaName}
            weight={this.props.domacaWeight}
            foodInfo={this.props.domacaInfo}
            foodPrice={this.props.domacaPrice}
            onPress={this.domacaHandler}
          />
          <SingleFoodItem
            image={this.props.jackImage}
            foodName={this.props.jackName}
            weight={this.props.jackWeight}
            foodInfo={this.props.jackInfo}
            foodPrice={this.props.jackPrice}
            onPress={this.jackHandler}
          />
          <SingleFoodItem
            image={this.props.teachersImage}
            foodName={this.props.teachersName}
            weight={this.props.teachersWeight}
            foodInfo={this.props.teachersInfo}
            foodPrice={this.props.teachersPrice}
            onPress={this.teachersHandler}
          />
          <SingleFoodItem
            image={this.props.beloImage}
            foodName={this.props.beloName}
            weight={this.props.beloWeight}
            foodInfo={this.props.beloInfo}
            foodPrice={this.props.beloPrice}
            onPress={this.beloHandler}
          />
          <SingleFoodItem
            image={this.props.crnoImage}
            foodName={this.props.crnoName}
            weight={this.props.crnoWeight}
            foodInfo={this.props.crnoInfo}
            foodPrice={this.props.crnoPrice}
            onPress={this.crnoHandler}
          />
          <SingleFoodItem
            image={this.props.rozeImage}
            foodName={this.props.rozeName}
            weight={this.props.rozeWeight}
            foodInfo={this.props.rozeInfo}
            foodPrice={this.props.rozePrice}
            onPress={this.rozeHandler}
          />
        </View>
      );
    }

    if (this.state.sokoviToggle) {
      sokoviToggle = (
        <View>
          <SingleFoodItem
            image={this.props.cocacolaImage}
            foodName={this.props.cocacolaName}
            weight={this.props.cocacolaWeight}
            foodInfo={this.props.cocacolaInfo}
            foodPrice={this.props.cocacolaPrice}
            onPress={this.cocacolaHandler}
          />
          <SingleFoodItem
            image={this.props.pepsiImage}
            foodName={this.props.pepsiName}
            weight={this.props.pepsiWeight}
            foodInfo={this.props.pepsiInfo}
            foodPrice={this.props.pepsiPrice}
            onPress={this.pepsiHandler}
          />
          <SingleFoodItem
            image={this.props.spriteImage}
            foodName={this.props.spriteName}
            weight={this.props.spriteWeight}
            foodInfo={this.props.spriteInfo}
            foodPrice={this.props.spritePrice}
            onPress={this.spriteHandler}
          />
          <SingleFoodItem
            image={this.props.sevenUpImage}
            foodName={this.props.sevenUpName}
            weight={this.props.sevenUpWeight}
            foodInfo={this.props.sevenUpInfo}
            foodPrice={this.props.sevenUpPrice}
            onPress={this.sevenUpHandler}
          />
          <SingleFoodItem
            image={this.props.fantaImage}
            foodName={this.props.fantaName}
            weight={this.props.fantaWeight}
            foodInfo={this.props.fantaInfo}
            foodPrice={this.props.fantaPrice}
            onPress={this.fantaHandler}
          />
        </View>
      );
    }

    if (this.state.desertToggle) {
      desertToggle = (
        <View>
          <SingleFoodItem
            image={this.props.palacinkenutellabananaImage}
            foodName={this.props.palacinkenutellabananaName}
            weight={this.props.palacinkenutellabananaWeight}
            foodInfo={this.props.palacinkenutellabananaInfo}
            foodPrice={this.props.palacinkenutellabananaPrice}
            onPress={this.nutellaHandler}
          />
          <SingleFoodItem
            image={this.props.palSatoImage}
            foodName={this.props.palSatoName}
            weight={this.props.palSatoWeight}
            foodInfo={this.props.palSatoInfo}
            foodPrice={this.props.palSatoPrice}
            onPress={this.palSatoHandler}
          />
          <SingleFoodItem
            image={this.props.princesVisnjaImage}
            foodName={this.props.princesVisnjaName}
            weight={this.props.princesVisnjaWeight}
            foodInfo={this.props.princesVisnjaInfo}
            foodPrice={this.props.princesVisnjaPrice}
            onPress={this.princesVisnjaHandler}
          />
          <SingleFoodItem
            image={this.props.tulumbeImage}
            foodName={this.props.tulumbeName}
            weight={this.props.tulumbeWeight}
            foodInfo={this.props.tulumbeInfo}
            foodPrice={this.props.tulumbePrice}
            onPress={this.tulumbeHandler}
          />
          <SingleFoodItem
            image={this.props.cokoKolacImage}
            foodName={this.props.cokoKolacName}
            weight={this.props.cokoKolacWeight}
            foodInfo={this.props.cokoKolacInfo}
            foodPrice={this.props.cokoKolacPrice}
            onPress={this.cokoKolacHandler}
          />
          <SingleFoodItem
            image={this.props.ruskeKapeImage}
            foodName={this.props.ruskeKapeName}
            weight={this.props.ruskeKapeWeight}
            foodInfo={this.props.ruskeKapeInfo}
            foodPrice={this.props.ruskeKapePrice}
            onPress={this.ruskeKapeHandler}
          />
          <SingleFoodItem
            image={this.props.cheesecakeImage}
            foodName={this.props.cheesecakeName}
            weight={this.props.cheesecakeWeight}
            foodInfo={this.props.cheesecakeInfo}
            foodPrice={this.props.cheesecakePrice}
            onPress={this.cheesecakeHandler}
          />
        </View>
      );
    }

    if (this.state.moreToggle) {
      moreToggle = (
        <View>
          <SingleFoodItem
            image={this.props.skarpinaImage}
            foodName={this.props.skarpinaName}
            weight={this.props.skarpinaWeight}
            foodInfo={this.props.skarpinaInfo}
            foodPrice={this.props.skarpinaPrice}
            onPress={this.skarpinaHandler}
          />
          <SingleFoodItem
            image={this.props.pastrmkaImage}
            foodName={this.props.pastrmkaName}
            weight={this.props.pastrmkaWeight}
            foodInfo={this.props.pastrmkaInfo}
            foodPrice={this.props.pastrmkaPrice}
            onPress={this.pastrmkaHandler}
          />
          <SingleFoodItem
            image={this.props.jastogImage}
            foodName={this.props.jastogName}
            weight={this.props.jastogWeight}
            foodInfo={this.props.jastogInfo}
            foodPrice={this.props.jastogPrice}
            onPress={this.jastogHandler}
          />
          <SingleFoodItem
            image={this.props.saranImage}
            foodName={this.props.saranName}
            weight={this.props.saranWeight}
            foodInfo={this.props.saranInfo}
            foodPrice={this.props.saranPrice}
            onPress={this.saranHandler}
          />
          <SingleFoodItem
            image={this.props.lignjeImage}
            foodName={this.props.lignjeName}
            weight={this.props.lignjeWeight}
            foodInfo={this.props.lignjeInfo}
            foodPrice={this.props.lignjePrice}
            onPress={this.lignjeHandler}
          />
          <SingleFoodItem
            image={this.props.lososImage}
            foodName={this.props.lososName}
            weight={this.props.lososWeight}
            foodInfo={this.props.lososInfo}
            foodPrice={this.props.lososPrice}
            onPress={this.lososHandler}
          />
        </View>
      );
    }

    if (this.state.salateToggle) {
      salateToggle = (
        <View>
          <SingleFoodItem
            image={this.props.cezarImage}
            foodName={this.props.cezarName}
            weight={this.props.cezarWeight}
            foodInfo={this.props.cezarInfo}
            foodPrice={this.props.cezarPrice}
            onPress={this.cezarHandler}
          />
          <SingleFoodItem
            image={this.props.sopskaImage}
            foodName={this.props.sopskaName}
            weight={this.props.sopskaWeight}
            foodInfo={this.props.sopskaInfo}
            foodPrice={this.props.sopskaPrice}
            onPress={this.sopskaHandler}
          />
          <SingleFoodItem
            image={this.props.grckaImage}
            foodName={this.props.grckaName}
            weight={this.props.grckaWeight}
            foodInfo={this.props.grckaInfo}
            foodPrice={this.props.grckaPrice}
            onPress={this.grckaHandler}
          />
          <SingleFoodItem
            image={this.props.kupusImage}
            foodName={this.props.kupusName}
            weight={this.props.kupusWeight}
            foodInfo={this.props.kupusInfo}
            foodPrice={this.props.kupusPrice}
            onPress={this.kupusHandler}
          />
          <SingleFoodItem
            image={this.props.krompirImage}
            foodName={this.props.krompirName}
            weight={this.props.krompirWeight}
            foodInfo={this.props.krompirInfo}
            foodPrice={this.props.krompirPrice}
            onPress={this.krompirHandler}
          />
          <SingleFoodItem
            image={this.props.kaprezeImage}
            foodName={this.props.kaprezeName}
            weight={this.props.kaprezeWeight}
            foodInfo={this.props.kaprezeInfo}
            foodPrice={this.props.kaprezePrice}
            onPress={this.kaprezeHandler}
          />
        </View>
      );
    }

    if (this.state.corbeToggle) {
      corbeToggle = (
        <View>
          <SingleFoodItem
            image={this.props.minestroneImage}
            foodName={this.props.minestroneName}
            weight={this.props.minestroneWeight}
            foodInfo={this.props.minestroneInfo}
            foodPrice={this.props.minestronePrice}
            onPress={this.minestroneHandler}
          />
          <SingleFoodItem
            image={this.props.paradajzCorbaImage}
            foodName={this.props.paradajzCorbaName}
            weight={this.props.paradajzCorbaWeight}
            foodInfo={this.props.paradajzCorbaInfo}
            foodPrice={this.props.paradajzCorbaPrice}
            onPress={this.paradajzCorbaHandler}
          />
          <SingleFoodItem
            image={this.props.telecaCorbaImage}
            foodName={this.props.telecaCorbaName}
            weight={this.props.telecaCorbaWeight}
            foodInfo={this.props.telecaCorbaInfo}
            foodPrice={this.props.telecaCorbaPrice}
            onPress={this.telecaCorbaHandler}
          />
          <SingleFoodItem
            image={this.props.pilecaCorbaImage}
            foodName={this.props.pilecaCorbaName}
            weight={this.props.pilecaCorbaWeight}
            foodInfo={this.props.pilecaCorbaInfo}
            foodPrice={this.props.pilecaCorbaPrice}
            onPress={this.pilecaCorbaHandler}
          />
        </View>
      );
    }

    if (this.state.kuvanaJelaToggle) {
      kuvanaJelaToggle = (
        <View>
          <SingleFoodItem
            image={this.props.musakaImage}
            foodName={this.props.musakaName}
            weight={this.props.musakaWeight}
            foodInfo={this.props.musakaInfo}
            foodPrice={this.props.musakaPrice}
            onPress={this.musakaHandler}
          />
          <SingleFoodItem
            image={this.props.cufteImage}
            foodName={this.props.cufteName}
            weight={this.props.cufteWeight}
            foodInfo={this.props.cufteInfo}
            foodPrice={this.props.cuftePrice}
            onPress={this.cufteHandler}
          />
          <SingleFoodItem
            image={this.props.gulasImage}
            foodName={this.props.gulasName}
            weight={this.props.gulasWeight}
            foodInfo={this.props.gulasInfo}
            foodPrice={this.props.gulasPrice}
            onPress={this.gulasHandler}
          />
          <SingleFoodItem
            image={this.props.punjenePaprikeImage}
            foodName={this.props.punjenePaprikeName}
            weight={this.props.punjenePaprikeWeight}
            foodInfo={this.props.punjenePaprikeInfo}
            foodPrice={this.props.punjenePaprikePrice}
            onPress={this.punjenePaprikeHandler}
          />
          <SingleFoodItem
            image={this.props.suljpaImage}
            foodName={this.props.suljpaName}
            weight={this.props.suljpaWeight}
            foodInfo={this.props.suljpaInfo}
            foodPrice={this.props.suljpaPrice}
            onPress={this.suljpaHandler}
          />
          <SingleFoodItem
            image={this.props.sarmeImage}
            foodName={this.props.sarmeName}
            weight={this.props.sarmeWeight}
            foodInfo={this.props.sarmeInfo}
            foodPrice={this.props.sarmePrice}
            onPress={this.sarmeHandler}
          />
          <SingleFoodItem
            image={this.props.boranijeImage}
            foodName={this.props.boranijeName}
            weight={this.props.boranijeWeight}
            foodInfo={this.props.boranijeInfo}
            foodPrice={this.props.boranijePrice}
            onPress={this.boranijaHandler}
          />
        </View>
      );
    }

    if (this.state.rostiljToggle) {
      RostiljToggle = (
        <View>
          <SingleFoodItem
            image={this.props.mesanoImage}
            foodName={this.props.mesanoName}
            weight={this.props.mesanoWeight}
            foodInfo={this.props.mesanoInfo}
            foodPrice={this.props.mesanoPrice}
            onPress={this.mesanoHandler}
          />
          <SingleFoodItem
            image={this.props.dimVesImage}
            foodName={this.props.dimVesName}
            weight={this.props.dimVesWeight}
            foodInfo={this.props.dimVesInfo}
            foodPrice={this.props.dimVesPrice}
            onPress={this.dimVesHandler}
          />
          <SingleFoodItem
            image={this.props.pecurkeImage}
            foodName={this.props.pecurkeName}
            weight={this.props.pecurkeWeight}
            foodInfo={this.props.pecurkeInfo}
            foodPrice={this.props.pecurkePrice}
            onPress={this.pecurkeHandler}
          />
          <SingleFoodItem
            image={this.props.pileciBatakImage}
            foodName={this.props.pileciBatakName}
            weight={this.props.pileciBatakWeight}
            foodInfo={this.props.pileciBatakInfo}
            foodPrice={this.props.pileciBatakPrice}
            onPress={this.pileciBatakHandler}
          />
          <SingleFoodItem
            image={this.props.rolCevapiImage}
            foodName={this.props.rolCevapiName}
            weight={this.props.rolCevapiWeight}
            foodInfo={this.props.rolCevapiInfo}
            foodPrice={this.props.rolCevapiPrice}
            onPress={this.rolCevapiHandler}
          />
          <SingleFoodItem
            image={this.props.pljeskaImage}
            foodName={this.props.pljeskaName}
            weight={this.props.pljeskaWeight}
            foodInfo={this.props.pljeskaInfo}
            foodPrice={this.props.pljeskaPrice}
            onPress={this.pljeskaHandler}
          />
          <SingleFoodItem
            image={this.props.punjenoBeloImage}
            foodName={this.props.punjenoBeloName}
            weight={this.props.punjenoBeloWeight}
            foodInfo={this.props.punjenoBeloInfo}
            foodPrice={this.props.punjenoBeloPrice}
            onPress={this.punjenoBeloHandler}
          />
        </View>
      );
    }

    if (this.state.jelovnik) {
      output = (
        <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
          <View>
            <HeaderInfo
              online="true"
              time="23:00"
              minPay="700din"
              image={require("../../assets/img/boss.jpg")}
              resName="Boss"
              adress="Ulica, Moše Pijade 82, Bor 19210"
              delivery="Besplatna Dostava"
            />
          </View>
          <View style={styles.jelPop}>
            <TouchableOpacity onPress={this.jelovnikHandler}>
              <View style={styles.jelPopLook}>
                <Text style={{ color: "white" }}>JELOVNIK</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.popularnoHandler}>
              <View style={styles.jelPopLook}>
                <Text style={{ color: "white" }}>POPULARNO</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <TouchableOpacity onPress={this.corbeToggleHandler}>
              <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <View
                  style={
                    !this.state.corbeToggle
                      ? styles.foodTypeContainer
                      : styles.foodTypeContainer1
                  }
                >
                  <Text>Čorbe</Text>
                </View>
              </View>
            </TouchableOpacity>
            {corbeToggle}
            <TouchableOpacity onPress={this.salateToggleHandler}>
              <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <View
                  style={
                    !this.state.salateToggle
                      ? styles.foodTypeContainer
                      : styles.foodTypeContainer1
                  }
                >
                  <Text>Salate</Text>
                </View>
              </View>
            </TouchableOpacity>
            {salateToggle}
            <TouchableOpacity onPress={this.kuvanaJelaToggleHandler}>
              <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <View
                  style={
                    !this.state.kuvanaJelaToggle
                      ? styles.foodTypeContainer
                      : styles.foodTypeContainer1
                  }
                >
                  <Text>Kuvana Jela</Text>
                </View>
              </View>
            </TouchableOpacity>
            {kuvanaJelaToggle}
            <TouchableOpacity onPress={this.rostiljToggleHandler}>
              <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <View
                  style={
                    !this.state.rostiljToggle
                      ? styles.foodTypeContainer
                      : styles.foodTypeContainer1
                  }
                >
                  <Text>Specijaliteti Sa Roštilja</Text>
                </View>
              </View>
            </TouchableOpacity>
            {RostiljToggle}
            <TouchableOpacity onPress={this.moreToggleHandler}>
              <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <View
                  style={
                    !this.state.moreToggle
                      ? styles.foodTypeContainer
                      : styles.foodTypeContainer1
                  }
                >
                  <Text>Specijaliteti od Morskih Plodova</Text>
                </View>
              </View>
            </TouchableOpacity>
            {moreToggle}
            <TouchableOpacity onPress={this.desertToggleHandler}>
              <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <View
                  style={
                    !this.state.desertToggle
                      ? styles.foodTypeContainer
                      : styles.foodTypeContainer1
                  }
                >
                  <Text>Dezerti</Text>
                </View>
              </View>
            </TouchableOpacity>
            {desertToggle}
            <TouchableOpacity onPress={this.sokoviToggleHandler}>
              <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <View
                  style={
                    !this.state.sokoviToggle
                      ? styles.foodTypeContainer
                      : styles.foodTypeContainer1
                  }
                >
                  <Text>Sokovi</Text>
                </View>
              </View>
            </TouchableOpacity>
            {sokoviToggle}
            <TouchableOpacity onPress={this.alkoholToggleHandler}>
              <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <View
                  style={
                    !this.state.alkoholToggle
                      ? styles.foodTypeContainer
                      : styles.foodTypeContainer1
                  }
                >
                  <Text>Alkoholna Pića</Text>
                </View>
              </View>
            </TouchableOpacity>
            {alkoholToggle}
            <TouchableOpacity onPress={this.pivoToggleHandler}>
              <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <View
                  style={
                    !this.state.pivoToggle
                      ? styles.foodTypeContainer
                      : styles.foodTypeContainer1
                  }
                >
                  <Text>Pivo</Text>
                </View>
              </View>
            </TouchableOpacity>
            {pivoToggle}
          </ScrollView>
        </View>
      );
    }

    if (this.state.popularno) {
      output = (
        <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
          <View>
            <HeaderInfo
              online="true"
              time="23:00"
              minPay="700din"
              image={require("../../assets/img/boss.jpg")}
              resName="Boss"
              adress="Ulica, Moše Pijade 82, Bor 19210"
              delivery="Besplatna Dostava"
            />
          </View>
          <View style={styles.jelPop}>
            <TouchableOpacity onPress={this.jelovnikHandler}>
              <View style={styles.jelPopLook}>
                <Text style={{ color: "white" }}>JELOVNIK</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.popularnoHandler}>
              <View style={styles.jelPopLook}>
                <Text style={{ color: "white" }}>POPULARNO</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View>
              <SingleFoodItem
                image={this.props.pljeskaImage}
                foodName={this.props.pljeskaName}
                weight={this.props.pljeskaWeight}
                foodInfo={this.props.pljeskaInfo}
                foodPrice={this.props.pljeskaPrice}
                onPress={this.pljeskaHandler}
              />
              <SingleFoodItem
                image={this.props.pecurkeImage}
                foodName={this.props.pecurkeName}
                weight={this.props.pecurkeWeight}
                foodInfo={this.props.pecurkeInfo}
                foodPrice={this.props.pecurkePrice}
                onPress={this.pecurkeHandler}
              />
              <SingleFoodItem
                image={this.props.nele1Image}
                foodName={this.props.nele1Name}
                weight={this.props.nele1Weight}
                foodInfo={this.props.nele1Info}
                foodPrice={this.props.nele1Price}
                onPress={this.nele1Handler}
              />
              <SingleFoodItem
                image={this.props.cezarImage}
                foodName={this.props.cezarName}
                weight={this.props.cezarWeight}
                foodInfo={this.props.cezarInfo}
                foodPrice={this.props.cezarPrice}
                onPress={this.cezarHandler}
              />

              <SingleFoodItem
                image={this.props.mesanoImage}
                foodName={this.props.mesanoName}
                weight={this.props.mesanoWeight}
                foodInfo={this.props.mesanoInfo}
                foodPrice={this.props.mesanoPrice}
                onPress={this.mesanoHandler}
              />
              <SingleFoodItem
                image={this.props.sopskaImage}
                foodName={this.props.sopskaName}
                weight={this.props.sopskaWeight}
                foodInfo={this.props.sopskaInfo}
                foodPrice={this.props.sopskaPrice}
                onPress={this.sopskaHandler}
              />
              <SingleFoodItem
                image={this.props.cufteImage}
                foodName={this.props.cufteName}
                weight={this.props.cufteWeight}
                foodInfo={this.props.cufteInfo}
                foodPrice={this.props.cuftePrice}
                onPress={this.cufteHandler}
              />
              <SingleFoodItem
                image={this.props.nele2Image}
                foodName={this.props.nele2Name}
                weight={this.props.nele2Weight}
                foodInfo={this.props.nele2Info}
                foodPrice={this.props.nele2Price}
                onPress={this.nele2Handler}
              />
              <SingleFoodItem
                image={this.props.telecaCorbaImage}
                foodName={this.props.telecaCorbaName}
                weight={this.props.telecaCorbaWeight}
                foodInfo={this.props.telecaCorbaInfo}
                foodPrice={this.props.telecaCorbaPrice}
                onPress={this.telecaCorbaHandler}
              />
              <SingleFoodItem
                image={this.props.lososImage}
                foodName={this.props.lososName}
                weight={this.props.lososWeight}
                foodInfo={this.props.lososInfo}
                foodPrice={this.props.lososPrice}
                onPress={this.lososHandler}
              />
              <SingleFoodItem
                image={this.props.palacinkenutellabananaImage}
                foodName={this.props.palacinkenutellabananaName}
                weight={this.props.palacinkenutellabananaWeight}
                foodInfo={this.props.palacinkenutellabananaInfo}
                foodPrice={this.props.palacinkenutellabananaPrice}
                onPress={this.nutellaHandler}
              />
            </View>
          </ScrollView>
        </View>
      );
    }
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#f2f2f2"
        }}
      >
        {output}
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
    // marginTop: 8,
    // marginLeft: 5
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10
  },
  resName: {
    fontSize: 30,
    color: "black"
  },
  header: {
    flexDirection: "row"
  },
  jelPop: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    justifyContent: "space-around"
  },
  jelPopLook: {
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#2E8B57",
    padding: 10
  },
  foodTypeContainer: {
    borderWidth: 1,
    borderColor: "gray",
    height: 40,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 5
  },
  foodTypeContainer1: {
    borderWidth: 1,
    borderColor: "gray",
    height: 40,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    marginTop: 5
  },
  singleFoodItem: {
    flexDirection: "row",
    height: 70,
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
  foodInfo: { flexDirection: "row", justifyContent: "center" }
});

const mapStateToProps = state => {
  return {
    mesanoName: state.menu.rostilj.mesano.name,
    mesanoWeight: state.menu.rostilj.mesano.weight,
    mesanoInfo: state.menu.rostilj.mesano.info,
    mesanoPrice: state.menu.rostilj.mesano.price,
    mesanoImage: state.menu.rostilj.mesano.image,
    dimVesName: state.menu.rostilj.dimVes.name,
    dimVesWeight: state.menu.rostilj.dimVes.weight,
    dimVesInfo: state.menu.rostilj.dimVes.info,
    dimVesPrice: state.menu.rostilj.dimVes.price,
    dimVesImage: state.menu.rostilj.dimVes.image,
    pecurkeName: state.menu.rostilj.pecurke.name,
    pecurkeWeight: state.menu.rostilj.pecurke.weight,
    pecurkeInfo: state.menu.rostilj.pecurke.info,
    pecurkePrice: state.menu.rostilj.pecurke.price,
    pecurkeImage: state.menu.rostilj.pecurke.image,
    pileciBatakName: state.menu.rostilj.pileciBatak.name,
    pileciBatakWeight: state.menu.rostilj.pileciBatak.weight,
    pileciBatakInfo: state.menu.rostilj.pileciBatak.info,
    pileciBatakPrice: state.menu.rostilj.pileciBatak.price,
    pileciBatakImage: state.menu.rostilj.pileciBatak.image,
    rolCevapiName: state.menu.rostilj.rolCevapi.name,
    rolCevapiWeight: state.menu.rostilj.rolCevapi.weight,
    rolCevapiInfo: state.menu.rostilj.rolCevapi.info,
    rolCevapiPrice: state.menu.rostilj.rolCevapi.price,
    rolCevapiImage: state.menu.rostilj.rolCevapi.image,
    pljeskaName: state.menu.rostilj.pljeska.name,
    pljeskaWeight: state.menu.rostilj.pljeska.weight,
    pljeskaInfo: state.menu.rostilj.pljeska.info,
    pljeskaPrice: state.menu.rostilj.pljeska.price,
    pljeskaImage: state.menu.rostilj.pljeska.image,
    punjenoBeloName: state.menu.rostilj.punjenoBelo.name,
    punjenoBeloWeight: state.menu.rostilj.punjenoBelo.weight,
    punjenoBeloInfo: state.menu.rostilj.punjenoBelo.info,
    punjenoBeloPrice: state.menu.rostilj.punjenoBelo.price,
    punjenoBeloImage: state.menu.rostilj.punjenoBelo.image,
    musakaName: state.menu.kuvanaJela.musaka.name,
    musakaWeight: state.menu.kuvanaJela.musaka.weight,
    musakaInfo: state.menu.kuvanaJela.musaka.info,
    musakaPrice: state.menu.kuvanaJela.musaka.price,
    musakaImage: state.menu.kuvanaJela.musaka.image,
    cufteName: state.menu.kuvanaJela.cufte.name,
    cufteWeight: state.menu.kuvanaJela.cufte.weight,
    cufteInfo: state.menu.kuvanaJela.cufte.info,
    cuftePrice: state.menu.kuvanaJela.cufte.price,
    cufteImage: state.menu.kuvanaJela.cufte.image,
    gulasName: state.menu.kuvanaJela.gulas.name,
    gulasWeight: state.menu.kuvanaJela.gulas.weight,
    gulasInfo: state.menu.kuvanaJela.gulas.info,
    gulasPrice: state.menu.kuvanaJela.gulas.price,
    gulasImage: state.menu.kuvanaJela.gulas.image,
    punjenePaprikeName: state.menu.kuvanaJela.punjenePaprike.name,
    punjenePaprikeWeight: state.menu.kuvanaJela.punjenePaprike.weight,
    punjenePaprikeInfo: state.menu.kuvanaJela.punjenePaprike.info,
    punjenePaprikePrice: state.menu.kuvanaJela.punjenePaprike.price,
    punjenePaprikeImage: state.menu.kuvanaJela.punjenePaprike.image,
    suljpaName: state.menu.kuvanaJela.suljpa.name,
    suljpaWeight: state.menu.kuvanaJela.suljpa.weight,
    suljpaInfo: state.menu.kuvanaJela.suljpa.info,
    suljpaPrice: state.menu.kuvanaJela.suljpa.price,
    suljpaImage: state.menu.kuvanaJela.suljpa.image,
    sarmeName: state.menu.kuvanaJela.sarme.name,
    sarmeWeight: state.menu.kuvanaJela.sarme.weight,
    sarmeInfo: state.menu.kuvanaJela.sarme.info,
    sarmePrice: state.menu.kuvanaJela.sarme.price,
    sarmeImage: state.menu.kuvanaJela.sarme.image,
    boranijeName: state.menu.kuvanaJela.boranija.name,
    boranijeWeight: state.menu.kuvanaJela.boranija.weight,
    boranijeInfo: state.menu.kuvanaJela.boranija.info,
    boranijePrice: state.menu.kuvanaJela.boranija.price,
    boranijeImage: state.menu.kuvanaJela.boranija.image,
    minestroneName: state.menu.corbe.minestrone.name,
    minestroneWeight: state.menu.corbe.minestrone.weight,
    minestroneInfo: state.menu.corbe.minestrone.info,
    minestronePrice: state.menu.corbe.minestrone.price,
    minestroneImage: state.menu.corbe.minestrone.image,
    paradajzCorbaName: state.menu.corbe.paradajzCorba.name,
    paradajzCorbaWeight: state.menu.corbe.paradajzCorba.weight,
    paradajzCorbaInfo: state.menu.corbe.paradajzCorba.info,
    paradajzCorbaPrice: state.menu.corbe.paradajzCorba.price,
    paradajzCorbaImage: state.menu.corbe.paradajzCorba.image,
    telecaCorbaName: state.menu.corbe.telecaCorba.name,
    telecaCorbaWeight: state.menu.corbe.telecaCorba.weight,
    telecaCorbaInfo: state.menu.corbe.telecaCorba.info,
    telecaCorbaPrice: state.menu.corbe.telecaCorba.price,
    telecaCorbaImage: state.menu.corbe.telecaCorba.image,
    pilecaCorbaName: state.menu.corbe.pilecaCorba.name,
    pilecaCorbaWeight: state.menu.corbe.pilecaCorba.weight,
    pilecaCorbaInfo: state.menu.corbe.pilecaCorba.info,
    pilecaCorbaPrice: state.menu.corbe.pilecaCorba.price,
    pilecaCorbaImage: state.menu.corbe.pilecaCorba.image,
    cezarName: state.menu.salate.cezar.name,
    cezarWeight: state.menu.salate.cezar.weight,
    cezarInfo: state.menu.salate.cezar.info,
    cezarPrice: state.menu.salate.cezar.price,
    cezarImage: state.menu.salate.cezar.image,
    sopskaName: state.menu.salate.sopska.name,
    sopskaWeight: state.menu.salate.sopska.weight,
    sopskaInfo: state.menu.salate.sopska.info,
    sopskaPrice: state.menu.salate.sopska.price,
    sopskaImage: state.menu.salate.sopska.image,
    grckaName: state.menu.salate.grcka.name,
    grckaWeight: state.menu.salate.grcka.weight,
    grckaInfo: state.menu.salate.grcka.info,
    grckaPrice: state.menu.salate.grcka.price,
    grckaImage: state.menu.salate.grcka.image,
    kupusName: state.menu.salate.kupus.name,
    kupusWeight: state.menu.salate.kupus.weight,
    kupusInfo: state.menu.salate.kupus.info,
    kupusPrice: state.menu.salate.kupus.price,
    kupusImage: state.menu.salate.kupus.image,
    krompirName: state.menu.salate.krompir.name,
    krompirWeight: state.menu.salate.krompir.weight,
    krompirInfo: state.menu.salate.krompir.info,
    krompirPrice: state.menu.salate.krompir.price,
    krompirImage: state.menu.salate.krompir.image,
    kaprezeName: state.menu.salate.kapreze.name,
    kaprezeWeight: state.menu.salate.kapreze.weight,
    kaprezeInfo: state.menu.salate.kapreze.info,
    kaprezePrice: state.menu.salate.kapreze.price,
    kaprezeImage: state.menu.salate.kapreze.image,
    skarpinaName: state.menu.more.skarpina.name,
    skarpinaWeight: state.menu.more.skarpina.weight,
    skarpinaInfo: state.menu.more.skarpina.info,
    skarpinaPrice: state.menu.more.skarpina.price,
    skarpinaImage: state.menu.more.skarpina.image,
    pastrmkaName: state.menu.more.pastrmka.name,
    pastrmkaWeight: state.menu.more.pastrmka.weight,
    pastrmkaInfo: state.menu.more.pastrmka.info,
    pastrmkaPrice: state.menu.more.pastrmka.price,
    pastrmkaImage: state.menu.more.pastrmka.image,
    jastogName: state.menu.more.jastog.name,
    jastogWeight: state.menu.more.jastog.weight,
    jastogInfo: state.menu.more.jastog.info,
    jastogPrice: state.menu.more.jastog.price,
    jastogImage: state.menu.more.jastog.image,
    saranName: state.menu.more.saran.name,
    saranWeight: state.menu.more.saran.weight,
    saranInfo: state.menu.more.saran.info,
    saranPrice: state.menu.more.saran.price,
    saranImage: state.menu.more.saran.image,
    lignjeName: state.menu.more.lignje.name,
    lignjeWeight: state.menu.more.lignje.weight,
    lignjeInfo: state.menu.more.lignje.info,
    lignjePrice: state.menu.more.lignje.price,
    lignjeImage: state.menu.more.lignje.image,
    lososName: state.menu.more.losos.name,
    lososWeight: state.menu.more.losos.weight,
    lososInfo: state.menu.more.losos.info,
    lososPrice: state.menu.more.losos.price,
    lososImage: state.menu.more.losos.image,
    palacinkenutellabananaName: state.menu.deserts.palacinkenutellabanana.name,
    palacinkenutellabananaWeight:
      state.menu.deserts.palacinkenutellabanana.weight,
    palacinkenutellabananaInfo: state.menu.deserts.palacinkenutellabanana.info,
    palacinkenutellabananaPrice:
      state.menu.deserts.palacinkenutellabanana.price,
    palacinkenutellabananaImage:
      state.menu.deserts.palacinkenutellabanana.image,
    palSatoName: state.menu.deserts.palSato.name,
    palSatoWeight: state.menu.deserts.palSato.weight,
    palSatoInfo: state.menu.deserts.palSato.info,
    palSatoPrice: state.menu.deserts.palSato.price,
    palSatoImage: state.menu.deserts.palSato.image,
    princesVisnjaName: state.menu.deserts.princesVisnja.name,
    princesVisnjaWeight: state.menu.deserts.princesVisnja.weight,
    princesVisnjaInfo: state.menu.deserts.princesVisnja.info,
    princesVisnjaPrice: state.menu.deserts.princesVisnja.price,
    princesVisnjaImage: state.menu.deserts.princesVisnja.image,
    tulumbeName: state.menu.deserts.tulumbe.name,
    tulumbeWeight: state.menu.deserts.tulumbe.weight,
    tulumbeInfo: state.menu.deserts.tulumbe.info,
    tulumbePrice: state.menu.deserts.tulumbe.price,
    tulumbeImage: state.menu.deserts.tulumbe.image,
    cokoKolacName: state.menu.deserts.cokoKolac.name,
    cokoKolacWeight: state.menu.deserts.cokoKolac.weight,
    cokoKolacInfo: state.menu.deserts.cokoKolac.info,
    cokoKolacPrice: state.menu.deserts.cokoKolac.price,
    cokoKolacImage: state.menu.deserts.cokoKolac.image,
    ruskeKapeName: state.menu.deserts.ruskeKape.name,
    ruskeKapeWeight: state.menu.deserts.ruskeKape.weight,
    ruskeKapeInfo: state.menu.deserts.ruskeKape.info,
    ruskeKapePrice: state.menu.deserts.ruskeKape.price,
    ruskeKapeImage: state.menu.deserts.ruskeKape.image,
    cheesecakeName: state.menu.deserts.cheesecake.name,
    cheesecakeWeight: state.menu.deserts.cheesecake.weight,
    cheesecakeInfo: state.menu.deserts.cheesecake.info,
    cheesecakePrice: state.menu.deserts.cheesecake.price,
    cheesecakeImage: state.menu.deserts.cheesecake.image,
    cocacolaName: state.menu.sokovi.cocacola.name,
    cocacolaWeight: state.menu.sokovi.cocacola.weight,
    cocacolaInfo: state.menu.sokovi.cocacola.info,
    cocacolaPrice: state.menu.sokovi.cocacola.price,
    cocacolaImage: state.menu.sokovi.cocacola.image,
    pepsiName: state.menu.sokovi.pepsi.name,
    pepsiWeight: state.menu.sokovi.pepsi.weight,
    pepsiInfo: state.menu.sokovi.pepsi.info,
    pepsiPrice: state.menu.sokovi.pepsi.price,
    pepsiImage: state.menu.sokovi.pepsi.image,
    spriteName: state.menu.sokovi.sprite.name,
    spriteWeight: state.menu.sokovi.sprite.weight,
    spriteInfo: state.menu.sokovi.sprite.info,
    spritePrice: state.menu.sokovi.sprite.price,
    spriteImage: state.menu.sokovi.sprite.image,
    sevenUpName: state.menu.sokovi.sevenUp.name,
    sevenUpWeight: state.menu.sokovi.sevenUp.weight,
    sevenUpInfo: state.menu.sokovi.sevenUp.info,
    sevenUpPrice: state.menu.sokovi.sevenUp.price,
    sevenUpImage: state.menu.sokovi.sevenUp.image,
    fantaName: state.menu.sokovi.fanta.name,
    fantaWeight: state.menu.sokovi.fanta.weight,
    fantaInfo: state.menu.sokovi.fanta.info,
    fantaPrice: state.menu.sokovi.fanta.price,
    fantaImage: state.menu.sokovi.fanta.image,
    domacaName: state.menu.alkohol.domaca.name,
    domacaWeight: state.menu.alkohol.domaca.weight,
    domacaInfo: state.menu.alkohol.domaca.info,
    domacaPrice: state.menu.alkohol.domaca.price,
    domacaImage: state.menu.alkohol.domaca.image,
    jackName: state.menu.alkohol.jack.name,
    jackWeight: state.menu.alkohol.jack.weight,
    jackInfo: state.menu.alkohol.jack.info,
    jackPrice: state.menu.alkohol.jack.price,
    jackImage: state.menu.alkohol.jack.image,
    teachersName: state.menu.alkohol.teachers.name,
    teachersWeight: state.menu.alkohol.teachers.weight,
    teachersInfo: state.menu.alkohol.teachers.info,
    teachersPrice: state.menu.alkohol.teachers.price,
    teachersImage: state.menu.alkohol.teachers.image,
    beloName: state.menu.alkohol.belo.name,
    beloWeight: state.menu.alkohol.belo.weight,
    beloInfo: state.menu.alkohol.belo.info,
    beloPrice: state.menu.alkohol.belo.price,
    beloImage: state.menu.alkohol.belo.image,
    crnoName: state.menu.alkohol.crno.name,
    crnoWeight: state.menu.alkohol.crno.weight,
    crnoInfo: state.menu.alkohol.crno.info,
    crnoPrice: state.menu.alkohol.crno.price,
    crnoImage: state.menu.alkohol.crno.image,
    rozeName: state.menu.alkohol.roze.name,
    rozeWeight: state.menu.alkohol.roze.weight,
    rozeInfo: state.menu.alkohol.roze.info,
    rozePrice: state.menu.alkohol.roze.price,
    rozeImage: state.menu.alkohol.roze.image,
    nele1Name: state.menu.pivo.nele1.name,
    nele1Weight: state.menu.pivo.nele1.weight,
    nele1Info: state.menu.pivo.nele1.info,
    nele1Price: state.menu.pivo.nele1.price,
    nele1Image: state.menu.pivo.nele1.image,
    nele2Name: state.menu.pivo.nele2.name,
    nele2Weight: state.menu.pivo.nele2.weight,
    nele2Info: state.menu.pivo.nele2.info,
    nele2Price: state.menu.pivo.nele2.price,
    nele2Image: state.menu.pivo.nele2.image,
    shofferName: state.menu.pivo.shoffer.name,
    shofferWeight: state.menu.pivo.shoffer.weight,
    shofferInfo: state.menu.pivo.shoffer.info,
    shofferPrice: state.menu.pivo.shoffer.price,
    shofferImage: state.menu.pivo.shoffer.image,
    zajecaracName: state.menu.pivo.zajecarac.name,
    zajecaracWeight: state.menu.pivo.zajecarac.weight,
    zajecaracInfo: state.menu.pivo.zajecarac.info,
    zajecaracPrice: state.menu.pivo.zajecarac.price,
    zajecaracImage: state.menu.pivo.zajecarac.image,
    psenicnoName: state.menu.pivo.psenicno.name,
    psenicnoWeight: state.menu.pivo.psenicno.weight,
    psenicnoInfo: state.menu.pivo.psenicno.info,
    psenicnoPrice: state.menu.pivo.psenicno.price,
    psenicnoImage: state.menu.pivo.psenicno.image,
    heinekenName: state.menu.pivo.heineken.name,
    heinekenWeight: state.menu.pivo.heineken.weight,
    heinekenInfo: state.menu.pivo.heineken.info,
    heinekenPrice: state.menu.pivo.heineken.price,
    heinekenImage: state.menu.pivo.heineken.image,
    addedToCart: state.addedToCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (name, weight, info, price, image) =>
      dispatch(addToCart(name, weight, info, price, image))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BossScreen);
