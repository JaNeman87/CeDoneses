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
import Toggle from "../../components/Toggle/Toggle";
import PizzaToggle from '../../components/Toggle/PizzaToggle'

class CasperScreen extends Component {
  state = {
    jelovnik: true,
    popularno: false,
    extraToggle: false,
    supeToggle: false,
    dorucakToggle: false,
    starteriToggle: false,
    salateToggle: false,
    salateGToggle: false,
    pastaToggle: false,
    rizotoToggle: false,
    slanePalToggle: false,
    glavnaJelaToggle: false,
    slatkePalacinkeToggle: false,
    dezertiToggle:false,
    sendviciToggle: false,
    decijePorcijeToggle:false,
    pizzaToggle:false,
    margaritaToggle:false,
    quatroFormagieToggle:false,
    funghiPizzaToggle: false,
    quatroStagioniToggle: false,
    pizzaCapricciosaToggle:false,
    piroskaToggle: false,
    americanaToggle: false,
    dedinaPizzaToggle:false,
    casperPizzaToggle: false,
    casperSpecialToggle: false,
    vegetarijanaToggle:false,
    srbijanaToggle:false,
    italijanaToggle:false
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
        title: "Će Doneseš?",
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
  extraToggleHandler = () => {
    const newState = !this.state.extraToggle;
    this.setState({ extraToggle: newState });
  };
  supeToggleHandler = () => {
    const newState = !this.state.supeToggle;
    this.setState({ supeToggle: newState });
  };
  dorucakToggleHandler = () => {
    const newState = !this.state.dorucakToggle;
    this.setState({ dorucakToggle: newState });
  };
  starteriToggleHandler = () => {
    const newState = !this.state.starteriToggle;
    this.setState({ starteriToggle: newState });
  };
  salateToggleHandler = () => {
    const newState = !this.state.salateToggle;
    this.setState({ salateToggle: newState });
  };

  salateGToggleHandler = () => {
    const newState = !this.state.salateGToggle;
    this.setState({ salateGToggle: newState });
  };
  pastaToggleHandler = () => {
    const newState = !this.state.pastaToggle;
    this.setState({ pastaToggle: newState });
  };
  rizotoToggleHandler = () => {
    const newState = !this.state.rizotoToggle;
    this.setState({ rizotoToggle: newState });
  };
  slanePalToggleHandler = () => {
    const newState = !this.state.slanePalToggle;
    this.setState({ slanePalToggle: newState });
  };

  glavnaJelaToggleHandler = () => {
    const newState = !this.state.glavnaJelaToggle;
    this.setState({ glavnaJelaToggle: newState });
  };

  slatkePalacinkeToggleHandler = () => {
    const newState = !this.state.slatkePalacinkeToggle;
    this.setState({ slatkePalacinkeToggle: newState });
  };

  dezertiToggleHandler = () => {
    const newState = !this.state.dezertiToggle;
    this.setState({ dezertiToggle: newState });
  };

  sendviciToggleHandler = () => {
    const newState = !this.state.sendviciToggle;
    this.setState({ sendviciToggle: newState });
  };

  decijePorcijeToggleHandler = () => {
    const newState = !this.state.decijePorcijeToggle;
    this.setState({ decijePorcijeToggle: newState });
  };

  pizzaToggleHandler = () => {
    const newState = !this.state.pizzaToggle;
    this.setState({ pizzaToggle: newState });
  };

  margaritaToggleHandler = () => {
    const newState = !this.state.margaritaToggle;
    this.setState({ margaritaToggle: newState });
  };

  quatroFormagieToggleHandler = () => {
    const newState = !this.state.quatroFormagieToggle;
    this.setState({ quatroFormagieToggle: newState });
  };

  funghiPizzaToggleHandler = () => {
    const newState = !this.state.funghiPizzaToggle;
    this.setState({ funghiPizzaToggle: newState });
  };

  quatroStagioniToggleHandler = () => {
    const newState = !this.state.quatroStagioniToggle;
    this.setState({ quatroStagioniToggle: newState });
  };

  pizzaCapricciosaToggleHandler = () => {
    const newState = !this.state.pizzaCapricciosaToggle;
    this.setState({ pizzaCapricciosaToggle: newState });
  };

  piroskaToggleHandler = () => {
    const newState = !this.state.piroskaToggle;
    this.setState({ piroskaToggle: newState });
  };

  americanaToggleHandler = () => {
    const newState = !this.state.americanaToggle;
    this.setState({ americanaToggle: newState });
  };

  dedinaPizzaToggleHandler = () => {
    const newState = !this.state.dedinaPizzaToggle;
    this.setState({ dedinaPizzaToggle: newState });
  };

  casperPizzaToggleHandler = () => {
    const newState = !this.state.casperPizzaToggle;
    this.setState({ casperPizzaToggle: newState });
  };

  casperSpecialToggleHandler = () => {
    const newState = !this.state.casperSpecialToggle;
    this.setState({ casperSpecialToggle: newState });
  };

  vegetarijanaToggleHandler = () => {
    const newState = !this.state.vegetarijanaToggle;
    this.setState({ vegetarijanaToggle: newState });
  };

  srbijanaToggleHandler = () => {
    const newState = !this.state.srbijanaToggle;
    this.setState({ srbijanaToggle: newState });
  };

  italijanaToggleHandler = () => {
    const newState = !this.state.italijanaToggle;
    this.setState({ italijanaToggle: newState });
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  casperDorucakHandler = () => {
    this.props.addToCart(
      this.props.casperDorucakName,
      this.props.casperDorucakWeight,
      this.props.casperDorucakInfo,
      this.props.casperDorucakPrice,
      this.props.casperDorucakImage
    );
  };

  jajaNaOkoHandler = () => {
    this.props.addToCart(
      this.props.jajaNaOkoName,
      this.props.jajaNaOkoWeight,
      this.props.jajaNaOkoInfo,
      this.props.jajaNaOkoPrice,
      this.props.jajaNaOkoImage
    );
  };

  przeniceSaKajmakomHandler = () => {
    this.props.addToCart(
      this.props.przeniceSaKajmakomName,
      this.props.przeniceSaKajmakomWeight,
      this.props.przeniceSaKajmakomInfo,
      this.props.przeniceSaKajmakomPrice,
      this.props.przeniceSaKajmakomImage
    );
  };

  omletSaPovrcemHandler = () => {
    this.props.addToCart(
      this.props.omletSaPovrcemName,
      this.props.omletSaPovrcemWeight,
      this.props.omletSaPovrcemInfo,
      this.props.omletSaPovrcemPrice,
      this.props.omletSaPovrcemImage
    );
  };

  omletSaSunkomHandler = () => {
    this.props.addToCart(
      this.props.omletSaSunkomName,
      this.props.omletSaSunkomWeight,
      this.props.omletSaSunkomInfo,
      this.props.omletSaSunkomPrice,
      this.props.omletSaSunkomImage
    );
  };

  omletSaSlaninomHandler = () => {
    this.props.addToCart(
      this.props.omletSaSlaninomName,
      this.props.omletSaSlaninomWeight,
      this.props.omletSaSlaninomInfo,
      this.props.omletSaSlaninomPrice,
      this.props.omletSaSlaninomImage
    );
  };

  omletKacPecHandler = () => {
    this.props.addToCart(
      this.props.omletKacPecName,
      this.props.omletKacPecWeight,
      this.props.omletKacPecInfo,
      this.props.omletKacPecPrice,
      this.props.omletKacPecImage
    );
  };
  omletSpanSirHandler = () => {
    this.props.addToCart(
      this.props.omletSpanSirName,
      this.props.omletSpanSirWeight,
      this.props.omletSpanSirInfo,
      this.props.omletSpanSirPrice,
      this.props.omletSpanSirImage
    );
  };
  carskaKajganaHandler = () => {
    this.props.addToCart(
      this.props.carskaKajganaName,
      this.props.carskaKajganaWeight,
      this.props.carskaKajganaInfo,
      this.props.carskaKajganaPrice,
      this.props.carskaKajganaImage
    );
  };

  engleskiDorucakHandler = () => {
    this.props.addToCart(
      this.props.engleskiDorucakName,
      this.props.engleskiDorucakWeight,
      this.props.engleskiDorucakInfo,
      this.props.engleskiDorucakPrice,
      this.props.engleskiDorucakImage
    );
  };

  garlicBreadHandler = () => {
    this.props.addToCart(
      this.props.garlicBreadName,
      this.props.garlicBreadWeight,
      this.props.garlicBreadInfo,
      this.props.garlicBreadPrice,
      this.props.garlicBreadImage
    );
  };

  doullBallsHandler = () => {
    this.props.addToCart(
      this.props.doullBallsName,
      this.props.doullBallsWeight,
      this.props.doullBallsInfo,
      this.props.doullBallsPrice,
      this.props.doullBallsImage
    );
  };

  pacurkeNaZaruHandler = () => {
    this.props.addToCart(
      this.props.pacurkeNaZaruName,
      this.props.pacurkeNaZaruWeight,
      this.props.pacurkeNaZaruInfo,
      this.props.pacurkeNaZaruPrice,
      this.props.pacurkeNaZaruImage
    );
  };

  grillDimSirHandler = () => {
    this.props.addToCart(
      this.props.grillDimSirName,
      this.props.grillDimSirWeight,
      this.props.grillDimSirInfo,
      this.props.grillDimSirPrice,
      this.props.grillDimSirImage
    );
  };

  grillPovHandler = () => {
    this.props.addToCart(
      this.props.grillPovName,
      this.props.grillPovWeight,
      this.props.grillPovInfo,
      this.props.grillPovPrice,
      this.props.grillPovImage
    );
  };

  medPovHandler = () => {
    this.props.addToCart(
      this.props.medPovName,
      this.props.medPovWeight,
      this.props.medPovInfo,
      this.props.medPovPrice,
      this.props.medPovImage
    );
  };
  pohKacHandler = () => {
    this.props.addToCart(
      this.props.pohKacName,
      this.props.pohKacWeight,
      this.props.pohKacInfo,
      this.props.pohKacPrice,
      this.props.pohKacImage
    );
  };

  grillMarTikvHandler = () => {
    this.props.addToCart(
      this.props.grillMarTikvName,
      this.props.grillMarTikvWeight,
      this.props.grillMarTikvInfo,
      this.props.grillMarTikvPrice,
      this.props.grillMarTikvImage
    );
  };

  casTanjZaDvojeHandler = () => {
    this.props.addToCart(
      this.props.casTanjZaDvojeName,
      this.props.casTanjZaDvojeWeight,
      this.props.casTanjZaDvojeInfo,
      this.props.casTanjZaDvojePrice,
      this.props.casTanjZaDvojeImage
    );
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

  kremCorPecurkeHandler = () => {
    this.props.addToCart(
      this.props.kremCorPecurkeName,
      this.props.kremCorPecurkeWeight,
      this.props.kremCorPecurkeInfo,
      this.props.kremCorPecurkePrice,
      this.props.kremCorPecurkeImage
    );
  };

  minestroneHandler = () => {
    this.props.addToCart(
      this.props.minestroneName,
      this.props.minestroneWeight,
      this.props.minestroneInfo,
      this.props.minestronePrice,
      this.props.minestroneImage
    );
  };
  potazOdPovHandler = () => {
    this.props.addToCart(
      this.props.potazOdPovName,
      this.props.potazOdPovWeight,
      this.props.potazOdPovInfo,
      this.props.potazOdPovPrice,
      this.props.potazOdPovImage
    );
  };

  parmezanHandler = () => {
    this.props.addToCart(
      this.props.parmezanName,
      this.props.parmezanWeight,
      this.props.parmezanInfo,
      this.props.parmezanPrice,
      this.props.parmezanImage
    );
  };

  maslineHandler = () => {
    this.props.addToCart(
      this.props.maslineName,
      this.props.maslineWeight,
      this.props.maslineInfo,
      this.props.maslinePrice,
      this.props.maslineImage
    );
  };

  ljutePapriciceHandler = () => {
    this.props.addToCart(
      this.props.ljutePapriciceName,
      this.props.ljutePapriciceWeight,
      this.props.ljutePapriciceInfo,
      this.props.ljutePapricicePrice,
      this.props.ljutePapriciceImage
    );
  };

  tzatzikiHandler = () => {
    this.props.addToCart(
      this.props.tzatzikiName,
      this.props.tzatzikiWeight,
      this.props.tzatzikiInfo,
      this.props.tzatzikiPrice,
      this.props.tzatzikiImage
    );
  };

  koktelSosHandler = () => {
    this.props.addToCart(
      this.props.koktelSosName,
      this.props.koktelSosWeight,
      this.props.koktelSosInfo,
      this.props.koktelSosPrice,
      this.props.koktelSosImage
    );
  };

  pomfritHandler = () => {
    this.props.addToCart(
      this.props.pomfritName,
      this.props.pomfritWeight,
      this.props.pomfritInfo,
      this.props.pomfritPrice,
      this.props.pomfritImage
    );
  };

  aromaticniKrompirHandler = () => {
    this.props.addToCart(
      this.props.aromaticniKrompirName,
      this.props.aromaticniKrompirWeight,
      this.props.aromaticniKrompirInfo,
      this.props.aromaticniKrompirPrice,
      this.props.aromaticniKrompirImage
    );
  };

  kroketiHandler = () => {
    this.props.addToCart(
      this.props.kroketiName,
      this.props.kroketiWeight,
      this.props.kroketiInfo,
      this.props.kroketiPrice,
      this.props.kroketiImage
    );
  };

  lepinjaHandler = () => {
    this.props.addToCart(
      this.props.lepinjaName,
      this.props.lepinjaWeight,
      this.props.lepinjaInfo,
      this.props.lepinjaPrice,
      this.props.lepinjaImage
    );
  };

  letnjaSalataHandler = () => {
    this.props.addToCart(
      this.props.letnjaSalataName,
      this.props.letnjaSalataWeight,
      this.props.letnjaSalataInfo,
      this.props.letnjaSalataPrice,
      this.props.letnjaSalataImage
    );
  };

  freshSalataHandler = () => {
    this.props.addToCart(
      this.props.freshSalataName,
      this.props.freshSalataWeight,
      this.props.freshSalataInfo,
      this.props.freshSalataPrice,
      this.props.freshSalataImage
    );
  };
  sopskaSalataHandler = () => {
    this.props.addToCart(
      this.props.sopskaSalataName,
      this.props.sopskaSalataWeight,
      this.props.sopskaSalataInfo,
      this.props.sopskaSalataPrice,
      this.props.sopskaSalataImage
    );
  };

  meksickaSalataHandler = () => {
    this.props.addToCart(
      this.props.meksickaSalataName,
      this.props.meksickaSalataWeight,
      this.props.meksickaSalataInfo,
      this.props.meksickaSalataPrice,
      this.props.meksickaSalataImage
    );
  };

  grckaSalataHandler = () => {
    this.props.addToCart(
      this.props.grckaSalataName,
      this.props.grckaSalataWeight,
      this.props.grckaSalataInfo,
      this.props.grckaSalataPrice,
      this.props.grckaSalataImage
    );
  };

  caprezzaSalataHandler = () => {
    this.props.addToCart(
      this.props.caprezzaSalataName,
      this.props.caprezzaSalataWeight,
      this.props.caprezzaSalataInfo,
      this.props.caprezzaSalataPrice,
      this.props.caprezzaSalataImage
    );
  };

  casperSalataHandler = () => {
    this.props.addToCart(
      this.props.casperSalataName,
      this.props.casperSalataWeight,
      this.props.casperSalataInfo,
      this.props.casperSalataPrice,
      this.props.casperSalataImage
    );
  };

  tunaSalataHandler = () => {
    this.props.addToCart(
      this.props.tunaSalataName,
      this.props.tunaSalataWeight,
      this.props.tunaSalataInfo,
      this.props.tunaSalataPrice,
      this.props.tunaSalataImage
    );
  };

  meksickaSalataGHandler = () => {
    this.props.addToCart(
      this.props.meksickaSalataGName,
      this.props.meksickaSalataGWeight,
      this.props.meksickaSalataGInfo,
      this.props.meksickaSalataGPrice,
      this.props.meksickaSalataGImage
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

  casperHandler = () => {
    this.props.addToCart(
      this.props.casperName,
      this.props.casperWeight,
      this.props.casperInfo,
      this.props.casperPrice,
      this.props.casperImage
    );
  };

  quatroFormagieHandler = () => {
    this.props.addToCart(
      this.props.quatroFormagieName,
      this.props.quatroFormagieWeight,
      this.props.quatroFormagieInfo,
      this.props.quatroFormagiePrice,
      this.props.quatroFormagieImage
    );
  };

  funghiHandler = () => {
    this.props.addToCart(
      this.props.funghiName,
      this.props.funghiWeight,
      this.props.funghiInfo,
      this.props.funghiPrice,
      this.props.funghiImage
    );
  };

  bolonjezeHandler = () => {
    this.props.addToCart(
      this.props.bolonjezeName,
      this.props.bolonjezeWeight,
      this.props.bolonjezeInfo,
      this.props.bolonjezePrice,
      this.props.bolonjezeImage
    );
  };

  carbonaraHandler = () => {
    this.props.addToCart(
      this.props.carbonaraName,
      this.props.carbonaraWeight,
      this.props.carbonaraInfo,
      this.props.carbonaraPrice,
      this.props.carbonaraImage
    );
  };

  casperPastaHandler = () => {
    this.props.addToCart(
      this.props.casperPastaName,
      this.props.casperPastaWeight,
      this.props.casperPastaInfo,
      this.props.casperPastaPrice,
      this.props.casperPastaImage
    );
  };

  pastaBiftekHandler = () => {
    this.props.addToCart(
      this.props.pastaBiftekName,
      this.props.pastaBiftekWeight,
      this.props.pastaBiftekInfo,
      this.props.pastaBiftekPrice,
      this.props.pastaBiftekImage
    );
  };

  napolitanaHandler = () => {
    this.props.addToCart(
      this.props.napolitanaName,
      this.props.napolitanaWeight,
      this.props.napolitanaInfo,
      this.props.napolitanaPrice,
      this.props.napolitanaImage
    );
  };

  arabiataHandler = () => {
    this.props.addToCart(
      this.props.arabiataName,
      this.props.arabiataWeight,
      this.props.arabiataInfo,
      this.props.arabiataPrice,
      this.props.arabiataImage
    );
  };

  lazanjeHandler = () => {
    this.props.addToCart(
      this.props.lazanjeName,
      this.props.lazanjeWeight,
      this.props.lazanjeInfo,
      this.props.lazanjePrice,
      this.props.lazanjeImage
    );
  };

  caneloneHandler = () => {
    this.props.addToCart(
      this.props.caneloneName,
      this.props.caneloneWeight,
      this.props.caneloneInfo,
      this.props.canelonePrice,
      this.props.caneloneImage
    );
  };

  rizPovHandler = () => {
    this.props.addToCart(
      this.props.rizPovName,
      this.props.rizPovWeight,
      this.props.rizPovInfo,
      this.props.rizPovPrice,
      this.props.rizPovImage
    );
  };

  rizPilHandler = () => {
    this.props.addToCart(
      this.props.rizPilName,
      this.props.rizPilWeight,
      this.props.rizPilInfo,
      this.props.rizPilPrice,
      this.props.rizPilImage
    );
  };

  rizBifHandler = () => {
    this.props.addToCart(
      this.props.rizBifName,
      this.props.rizBifWeight,
      this.props.rizBifInfo,
      this.props.rizBifPrice,
      this.props.rizBifImage
    );
  };

  pohPizzaPalHandler = () => {
    this.props.addToCart(
      this.props.pohPizzaPalName,
      this.props.pohPizzaPalWeight,
      this.props.pohPizzaPalInfo,
      this.props.pohPizzaPalPrice,
      this.props.pohPizzaPalImage
    );
  };

  pohPalPilHandler = () => {
    this.props.addToCart(
      this.props.pohPalPilName,
      this.props.pohPalPilWeight,
      this.props.pohPalPilInfo,
      this.props.pohPalPilPrice,
      this.props.pohPalPilImage
    );
  };

  pohPalSpaHandler = () => {
    this.props.addToCart(
      this.props.pohPalSpaName,
      this.props.pohPalSpaWeight,
      this.props.pohPalSpaInfo,
      this.props.pohPalSpaPrice,
      this.props.pohPalSpaImage
    );
  };

  palPrsKajHandler = () => {
    this.props.addToCart(
      this.props.palPrsKajName,
      this.props.palPrsKajWeight,
      this.props.palPrsKajInfo,
      this.props.palPrsKajPrice,
      this.props.palPrsKajImage
    );
  };

  palPanSampHandler = () => {
    this.props.addToCart(
      this.props.palPanSampName,
      this.props.palPanSampWeight,
      this.props.palPanSampInfo,
      this.props.palPanSampPrice,
      this.props.palPanSampImage
    );
  };

  punjenaPiletinaHandler = () => {
    this.props.addToCart(
      this.props.punjenaPiletinaName,
      this.props.punjenaPiletinaWeight,
      this.props.punjenaPiletinaInfo,
      this.props.punjenaPiletinaPrice,
      this.props.punjenaPiletinaImage
    );
  };

  karadjordjevaHandler = () => {
    this.props.addToCart(
      this.props.karadjordjevaName,
      this.props.karadjordjevaWeight,
      this.props.karadjordjevaInfo,
      this.props.karadjordjevaPrice,
      this.props.karadjordjevaImage
    );
  };

  pilPrsHandler = () => {
    this.props.addToCart(
      this.props.pilPrsName,
      this.props.pilPrsWeight,
      this.props.pilPrsInfo,
      this.props.pilPrsPrice,
      this.props.pilPrsImage
    );
  };

  pohPilHandler = () => {
    this.props.addToCart(
      this.props.pohPilName,
      this.props.pohPilWeight,
      this.props.pohPilInfo,
      this.props.pohPilPrice,
      this.props.pohPilImage
    );
  };

  saltimbokaHandler = () => {
    this.props.addToCart(
      this.props.saltimbokaName,
      this.props.saltimbokaWeight,
      this.props.saltimbokaInfo,
      this.props.saltimbokaPrice,
      this.props.saltimbokaImage
    );
  };

  cordonBlueHandler = () => {
    this.props.addToCart(
      this.props.cordonBlueName,
      this.props.cordonBlueWeight,
      this.props.cordonBlueInfo,
      this.props.cordonBluePrice,
      this.props.cordonBlueImage
    );
  };

  fileSpicHandler = () => {
    this.props.addToCart(
      this.props.fileSpicName,
      this.props.fileSpicWeight,
      this.props.fileSpicInfo,
      this.props.fileSpicPrice,
      this.props.fileSpicImage
    );
  };

  lignjeCasperHandler = () => {
    this.props.addToCart(
      this.props.lignjeCasperName,
      this.props.lignjeCasperWeight,
      this.props.lignjeCasperInfo,
      this.props.lignjeCasperPrice,
      this.props.lignjeCasperImage
    );
  };

  grillTanjirHandler = () => {
    this.props.addToCart(
      this.props.grillTanjirName,
      this.props.grillTanjirWeight,
      this.props.grillTanjirInfo,
      this.props.grillTanjirPrice,
      this.props.grillTanjirImage
    );
  };

  pilGorgonHandler = () => {
    this.props.addToCart(
      this.props.pilGorgonName,
      this.props.pilGorgonWeight,
      this.props.pilGorgonInfo,
      this.props.pilGorgonPrice,
      this.props.pilGorgonImage
    );
  };

  pilKariHandler = () => {
    this.props.addToCart(
      this.props.pilKariName,
      this.props.pilKariWeight,
      this.props.pilKariInfo,
      this.props.pilKariPrice,
      this.props.pilKariImage
    );
  };

  sumskiSvFileHandler = () => {
    this.props.addToCart(
      this.props.sumskiSvFileName,
      this.props.sumskiSvFileWeight,
      this.props.sumskiSvFileInfo,
      this.props.sumskiSvFilePrice,
      this.props.sumskiSvFileImage
    );
  };

  svFileBiberHandler = () => {
    this.props.addToCart(
      this.props.svFileBiberName,
      this.props.svFileBiberWeight,
      this.props.svFileBiberInfo,
      this.props.svFileBiberPrice,
      this.props.svFileBiberImage
    );
  };

  sampSnicleHandler = () => {
    this.props.addToCart(
      this.props.sampSnicleName,
      this.props.sampSnicleWeight,
      this.props.sampSnicleInfo,
      this.props.sampSniclePrice,
      this.props.sampSnicleImage
    );
  };

  ciliKonKarneHandler = () => {
    this.props.addToCart(
      this.props.ciliKonKarneName,
      this.props.ciliKonKarneWeight,
      this.props.ciliKonKarneInfo,
      this.props.ciliKonKarnePrice,
      this.props.ciliKonKarneImage
    );
  };

  classicHandler = () => {
    this.props.addToCart(
      this.props.classicName,
      this.props.classicWeight,
      this.props.classicInfo,
      this.props.classicPrice,
      this.props.classicImage
    );
  };

  sarenePalacinkeHandler = () => {
    this.props.addToCart(
      this.props.sarenePalacinkeName,
      this.props.sarenePalacinkeWeight,
      this.props.sarenePalacinkeInfo,
      this.props.sarenePalacinkePrice,
      this.props.sarenePalacinkeImage
    );
  };

  medeneHandler = () => {
    this.props.addToCart(
      this.props.medeneName,
      this.props.medeneWeight,
      this.props.medeneInfo,
      this.props.medenePrice,
      this.props.medeneImage
    );
  };

  nutellaHandler = () => {
    this.props.addToCart(
      this.props.nutellaName,
      this.props.nutellaWeight,
      this.props.nutellaInfo,
      this.props.nutellaPrice,
      this.props.nutellaImage
    );
  };
  dzemHandler = () => {
    this.props.addToCart(
      this.props.dzemName,
      this.props.dzemWeight,
      this.props.dzemInfo,
      this.props.dzemPrice,
      this.props.dzemImage
    );
  };

  kremBananicaHandler = () => {
    this.props.addToCart(
      this.props.kremBananicaName,
      this.props.kremBananicaWeight,
      this.props.kremBananicaInfo,
      this.props.kremBananicaPrice,
      this.props.kremBananicaImage
    );
  };

  rafaeloHandler = () => {
    this.props.addToCart(
      this.props.rafaeloName,
      this.props.rafaeloWeight,
      this.props.rafaeloInfo,
      this.props.rafaeloPrice,
      this.props.rafaeloImage
    );
  };

  chocoCherryHandler = () => {
    this.props.addToCart(
      this.props.chocoCherryName,
      this.props.chocoCherryWeight,
      this.props.chocoCherryInfo,
      this.props.chocoCherryPrice,
      this.props.chocoCherryImage
    );
  };

  chocoMocoHandler = () => {
    this.props.addToCart(
      this.props.chocoMocoName,
      this.props.chocoMocoWeight,
      this.props.chocoMocoInfo,
      this.props.chocoMocoPrice,
      this.props.chocoMocoImage
    );
  };

  bakinaTajnaHandler = () => {
    this.props.addToCart(
      this.props.bakinaTajnaName,
      this.props.bakinaTajnaWeight,
      this.props.bakinaTajnaInfo,
      this.props.bakinaTajnaPrice,
      this.props.bakinaTajnaImage
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

  tiramisuHandler = () => {
    this.props.addToCart(
      this.props.tiramisuName,
      this.props.tiramisuWeight,
      this.props.tiramisuInfo,
      this.props.tiramisuPrice,
      this.props.tiramisuImage
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

  vocnaSalataHandler = () => {
    this.props.addToCart(
      this.props.vocnaSalataName,
      this.props.vocnaSalataWeight,
      this.props.vocnaSalataInfo,
      this.props.vocnaSalataPrice,
      this.props.vocnaSalataImage
    );
  };

  flamBanHandler = () => {
    this.props.addToCart(
      this.props.flamBanName,
      this.props.flamBanWeight,
      this.props.flamBanInfo,
      this.props.flamBanPrice,
      this.props.flamBanImage
    );
  };

  voceKaramelaHandler = () => {
    this.props.addToCart(
      this.props.voceKaramelaName,
      this.props.voceKaramelaWeight,
      this.props.voceKaramelaInfo,
      this.props.voceKaramelaPrice,
      this.props.voceKaramelaImage
    );
  };

  sunkaHandler = () => {
    this.props.addToCart(
      this.props.sunkaName,
      this.props.sunkaWeight,
      this.props.sunkaInfo,
      this.props.sunkaPrice,
      this.props.sunkaImage
    );
  };

  slaninaHandler = () => {
    this.props.addToCart(
      this.props.slaninaName,
      this.props.slaninaWeight,
      this.props.slaninaInfo,
      this.props.slaninaPrice,
      this.props.slaninaImage
    );
  };
  pecenicaHandler = () => {
    this.props.addToCart(
      this.props.pecenicaName,
      this.props.pecenicaWeight,
      this.props.pecenicaInfo,
      this.props.pecenicaPrice,
      this.props.pecenicaImage
    );
  };

  casperSendvicHandler = () => {
    this.props.addToCart(
      this.props.casperSendvicName,
      this.props.casperSendvicWeight,
      this.props.casperSendvicInfo,
      this.props.casperSendvicPrice,
      this.props.casperSendvicImage
    );
  };

  kulenHandler = () => {
    this.props.addToCart(
      this.props.kulenName,
      this.props.kulenWeight,
      this.props.kulenInfo,
      this.props.kulenPrice,
      this.props.kulenImage
    );
  };

  tunaHandler = () => {
    this.props.addToCart(
      this.props.tunaName,
      this.props.tunaWeight,
      this.props.tunaInfo,
      this.props.tunaPrice,
      this.props.tunaImage
    );
  };

  miniSenSunkaHandler = () => {
    this.props.addToCart(
      this.props.miniSenSunkaName,
      this.props.miniSenSunkaWeight,
      this.props.miniSenSunkaInfo,
      this.props.miniSenSunkaPrice,
      this.props.miniSenSunkaImage
    );
  };

  miniSenPecenicaHandler = () => {
    this.props.addToCart(
      this.props.miniSenPecenicaName,
      this.props.miniSenPecenicaWeight,
      this.props.miniSenPecenicaInfo,
      this.props.miniSenPecenicaPrice,
      this.props.miniSenPecenicaImage
    );
  };

  pohPilMiniHandler = () => {
    this.props.addToCart(
      this.props.pohPilMiniName,
      this.props.pohPilMiniWeight,
      this.props.pohPilMiniInfo,
      this.props.pohPilMiniPrice,
      this.props.pohPilMiniImage
    );
  };

  pastaBolMiniHandler = () => {
    this.props.addToCart(
      this.props.pastaBolMiniName,
      this.props.pastaBolMiniWeight,
      this.props.pastaBolMiniInfo,
      this.props.pastaBolMiniPrice,
      this.props.pastaBolMiniImage
    );
  };

  pastaNapoliMiniHandler = () => {
    this.props.addToCart(
      this.props.pastaNapoliMiniName,
      this.props.pastaNapoliMiniWeight,
      this.props.pastaNapoliMiniInfo,
      this.props.pastaNapoliMiniPrice,
      this.props.pastaNapoliMiniImage
    );
  };

  capMiniHandler = () => {
    this.props.addToCart(
      this.props.capMiniName,
      this.props.capMiniWeight,
      this.props.capMiniInfo,
      this.props.capMiniPrice,
      this.props.capMiniImage
    );
  };

  specialMiniHandler = () => {
    this.props.addToCart(
      this.props.specialMiniName,
      this.props.specialMiniWeight,
      this.props.specialMiniInfo,
      this.props.specialMiniPrice,
      this.props.specialMiniImage
    );
  };

  pizzaPalHandler = () => {
    this.props.addToCart(
      this.props.pizzaPalName,
      this.props.pizzaPalWeight,
      this.props.pizzaPalInfo,
      this.props.pizzaPalPrice,
      this.props.pizzaPalImage
    );
  };

  classicPalHandler = () => {
    this.props.addToCart(
      this.props.classicPalName,
      this.props.classicPalWeight,
      this.props.classicPalInfo,
      this.props.classicPalPrice,
      this.props.classicPalImage
    );
  };

  sarenaPalHandler = () => {
    this.props.addToCart(
      this.props.sarenaPalName,
      this.props.sarenaPalWeight,
      this.props.sarenaPalInfo,
      this.props.sarenaPalPrice,
      this.props.sarenaPalImage
    );
  };

  nutellaPalHandler = () => {
    this.props.addToCart(
      this.props.nutellaPalName,
      this.props.nutellaPalWeight,
      this.props.nutellaPalInfo,
      this.props.nutellaPalPrice,
      this.props.nutellaPalImage
    );
  };

  margaritaMHandler = () => {
    this.props.addToCart(
      this.props.margaritaMName,
      this.props.margaritaMWeight,
      this.props.margaritaMInfo,
      this.props.margaritaMPrice,
      this.props.margaritaMImage
    );
  };

  margaritaLHandler = () => {
    this.props.addToCart(
      this.props.margaritaLName,
      this.props.margaritaLWeight,
      this.props.margaritaLInfo,
      this.props.margaritaLPrice,
      this.props.margaritaLImage
    );
  };

  margaritaXLHandler = () => {
    this.props.addToCart(
      this.props.margaritaXLName,
      this.props.margaritaXLWeight,
      this.props.margaritaXLInfo,
      this.props.margaritaXLPrice,
      this.props.margaritaXLImage
    );
  };

  quatroFormagieMHandler = () => {
    this.props.addToCart(
      this.props.quatroFormagieMName,
      this.props.quatroFormagieMWeight,
      this.props.quatroFormagieMInfo,
      this.props.quatroFormagieMPrice,
      this.props.quatroFormagieMImage
    );
  };

  quatroFormagieLHandler = () => {
    this.props.addToCart(
      this.props.quatroFormagieLName,
      this.props.quatroFormagieLWeight,
      this.props.quatroFormagieLInfo,
      this.props.quatroFormagieLPrice,
      this.props.quatroFormagieLImage
    );
  };

  quatroFormagieXLHandler = () => {
    this.props.addToCart(
      this.props.quatroFormagieXLName,
      this.props.quatroFormagieXLWeight,
      this.props.quatroFormagieXLInfo,
      this.props.quatroFormagieXLPrice,
      this.props.quatroFormagieXLImage
    );
  };

  funghiMHandler = () => {
    this.props.addToCart(
      this.props.funghiMName,
      this.props.funghiMWeight,
      this.props.funghiMInfo,
      this.props.funghiMPrice,
      this.props.funghiMImage
    );
  };

  funghiLHandler = () => {
    this.props.addToCart(
      this.props.funghiLName,
      this.props.funghiLWeight,
      this.props.funghiLInfo,
      this.props.funghiLPrice,
      this.props.funghiLImage
    );
  };

  funghiXLHandler = () => {
    this.props.addToCart(
      this.props.funghiXLName,
      this.props.funghiXLWeight,
      this.props.funghiXLInfo,
      this.props.funghiXLPrice,
      this.props.funghiXLImage
    );
  };

  quatroStagioniMHandler = () => {
    this.props.addToCart(
      this.props.quatroStagioniMName,
      this.props.quatroStagioniMWeight,
      this.props.quatroStagioniMInfo,
      this.props.quatroStagioniMPrice,
      this.props.quatroStagioniMImage
    );
  };

  quatroStagioniLHandler = () => {
    this.props.addToCart(
      this.props.quatroStagioniLName,
      this.props.quatroStagioniLWeight,
      this.props.quatroStagioniLInfo,
      this.props.quatroStagioniLPrice,
      this.props.quatroStagioniLImage
    );
  };

  quatroStagioniXLHandler = () => {
    this.props.addToCart(
      this.props.quatroStagioniXLName,
      this.props.quatroStagioniXLWeight,
      this.props.quatroStagioniXLInfo,
      this.props.quatroStagioniXLPrice,
      this.props.quatroStagioniXLImage
    );
  };

  capricciosaMHandler = () => {
    this.props.addToCart(
      this.props.capricciosaMName,
      this.props.capricciosaMWeight,
      this.props.capricciosaMInfo,
      this.props.capricciosaMPrice,
      this.props.capricciosaMImage
    );
  };

  capricciosaLHandler = () => {
    this.props.addToCart(
      this.props.capricciosaLName,
      this.props.capricciosaLWeight,
      this.props.capricciosaLInfo,
      this.props.capricciosaLPrice,
      this.props.capricciosaLImage
    );
  };

  capricciosaXLHandler = () => {
    this.props.addToCart(
      this.props.capricciosaXLName,
      this.props.capricciosaXLWeight,
      this.props.capricciosaXLInfo,
      this.props.capricciosaXLPrice,
      this.props.capricciosaXLImage
    );
  };

  piroskaMHandler = () => {
    this.props.addToCart(
      this.props.piroskaMName,
      this.props.piroskaMWeight,
      this.props.piroskaMInfo,
      this.props.piroskaMPrice,
      this.props.piroskaMImage
    );
  };

  piroskaLHandler = () => {
    this.props.addToCart(
      this.props.piroskaLName,
      this.props.piroskaLWeight,
      this.props.piroskaLInfo,
      this.props.piroskaLPrice,
      this.props.piroskaLImage
    );
  };

  piroskaXLHandler = () => {
    this.props.addToCart(
      this.props.piroskaXLName,
      this.props.piroskaXLWeight,
      this.props.piroskaXLInfo,
      this.props.piroskaXLPrice,
      this.props.piroskaXLImage
    );
  };

  americanaMHandler = () => {
    this.props.addToCart(
      this.props.americanaMName,
      this.props.americanaMWeight,
      this.props.americanaMInfo,
      this.props.americanaMPrice,
      this.props.americanaMImage
    );
  };

  americanaLHandler = () => {
    this.props.addToCart(
      this.props.americanaLName,
      this.props.americanaLWeight,
      this.props.americanaLInfo,
      this.props.americanaLPrice,
      this.props.americanaLImage
    );
  };

  americanaXLHandler = () => {
    this.props.addToCart(
      this.props.americanaXLName,
      this.props.americanaXLWeight,
      this.props.americanaXLInfo,
      this.props.americanaXLPrice,
      this.props.americanaXLImage
    );
  };

  dedinaPizzaMHandler = () => {
    this.props.addToCart(
      this.props.dedinaPizzaMName,
      this.props.dedinaPizzaMWeight,
      this.props.dedinaPizzaMInfo,
      this.props.dedinaPizzaMPrice,
      this.props.dedinaPizzaMImage
    );
  };

  dedinaPizzaLHandler = () => {
    this.props.addToCart(
      this.props.dedinaPizzaLName,
      this.props.dedinaPizzaLWeight,
      this.props.dedinaPizzaLInfo,
      this.props.dedinaPizzaLPrice,
      this.props.dedinaPizzaLImage
    );
  };

  dedinaPizzaXLHandler = () => {
    this.props.addToCart(
      this.props.dedinaPizzaXLName,
      this.props.dedinaPizzaXLWeight,
      this.props.dedinaPizzaXLInfo,
      this.props.dedinaPizzaXLPrice,
      this.props.dedinaPizzaXLImage
    );
  };

  casperPizzaMHandler = () => {
    this.props.addToCart(
      this.props.casperPizzaMName,
      this.props.casperPizzaMWeight,
      this.props.casperPizzaMInfo,
      this.props.casperPizzaMPrice,
      this.props.casperPizzaMImage
    );
  };

  casperPizzaLHandler = () => {
    this.props.addToCart(
      this.props.casperPizzaLName,
      this.props.casperPizzaLWeight,
      this.props.casperPizzaLInfo,
      this.props.casperPizzaLPrice,
      this.props.casperPizzaLImage
    );
  };

  casperPizzaXLHandler = () => {
    this.props.addToCart(
      this.props.casperPizzaXLName,
      this.props.casperPizzaXLWeight,
      this.props.casperPizzaXLInfo,
      this.props.casperPizzaXLPrice,
      this.props.casperPizzaXLImage
    );
  };

  casperSpecialMHandler = () => {
    this.props.addToCart(
      this.props.casperSpecialMName,
      this.props.casperSpecialMWeight,
      this.props.casperSpecialMInfo,
      this.props.casperSpecialMPrice,
      this.props.casperSpecialMImage
    );
  };

  casperSpecialLHandler = () => {
    this.props.addToCart(
      this.props.casperSpecialLName,
      this.props.casperSpecialLWeight,
      this.props.casperSpecialLInfo,
      this.props.casperSpecialLPrice,
      this.props.casperSpecialLImage
    );
  };

  casperSpecialXLHandler = () => {
    this.props.addToCart(
      this.props.casperSpecialXLName,
      this.props.casperSpecialXLWeight,
      this.props.casperSpecialXLInfo,
      this.props.casperSpecialXLPrice,
      this.props.casperSpecialXLImage
    );
  };

  vegetarijanaMHandler = () => {
    this.props.addToCart(
      this.props.vegetarijanaMName,
      this.props.vegetarijanaMWeight,
      this.props.vegetarijanaMInfo,
      this.props.vegetarijanaMPrice,
      this.props.vegetarijanaMImage
    );
  };

  vegetarijanaLHandler = () => {
    this.props.addToCart(
      this.props.vegetarijanaLName,
      this.props.vegetarijanaLWeight,
      this.props.vegetarijanaLInfo,
      this.props.vegetarijanaLPrice,
      this.props.vegetarijanaLImage
    );
  };

  vegetarijanaXLHandler = () => {
    this.props.addToCart(
      this.props.vegetarijanaXLName,
      this.props.vegetarijanaXLWeight,
      this.props.vegetarijanaXLInfo,
      this.props.vegetarijanaXLPrice,
      this.props.vegetarijanaXLImage
    );
  };

  srbijanaMHandler = () => {
    this.props.addToCart(
      this.props.srbijanaMName,
      this.props.srbijanaMWeight,
      this.props.srbijanaMInfo,
      this.props.srbijanaMPrice,
      this.props.srbijanaMImage
    );
  };

  srbijanaLHandler = () => {
    this.props.addToCart(
      this.props.srbijanaLName,
      this.props.srbijanaLWeight,
      this.props.srbijanaLInfo,
      this.props.srbijanaLPrice,
      this.props.srbijanaLImage
    );
  };

  srbijanaXLHandler = () => {
    this.props.addToCart(
      this.props.srbijanaXLName,
      this.props.srbijanaXLWeight,
      this.props.srbijanaXLInfo,
      this.props.srbijanaXLPrice,
      this.props.srbijanaXLImage
    );
  };

  italijanaMHandler = () => {
    this.props.addToCart(
      this.props.italijanaMName,
      this.props.italijanaMWeight,
      this.props.italijanaMInfo,
      this.props.italijanaMPrice,
      this.props.italijanaMImage
    );
  };

  italijanaLHandler = () => {
    this.props.addToCart(
      this.props.italijanaLName,
      this.props.italijanaLWeight,
      this.props.italijanaLInfo,
      this.props.italijanaLPrice,
      this.props.italijanaLImage
    );
  };

  italijanaXLHandler = () => {
    this.props.addToCart(
      this.props.italijanaXLName,
      this.props.italijanaXLWeight,
      this.props.italijanaXLInfo,
      this.props.italijanaXLPrice,
      this.props.italijanaXLImage
    );
  };
  render() {
    let output = null;
    let extra = null;
    let supe = null;
    let dorucak = null;
    let starteri = null;
    let salate = null;
    let salateG = null;
    let pasta = null;
    let rizoto = null;
    let slanePal = null;
    let glavnaJela = null;
    let slatkePalacinke = null;
    let dezerti=null;
    let sendvici=null;
    let decijePorcije=null;
    let pizza=null;
    let margarita=null;
    let quatroFormagie=null;
    let funghiPizza=null;
    let quatroStagioni=null;
    let pizzaCapricciosa=null;
    let piroska=null;
    let americana=null;
    let dedinaPizza=null;
    let casperPizza=null;
    let casperSpecial=null;
    let vegetarijana=null;
    let srbijana=null;
    let italijana=null;
  
    if(this.state.margaritaToggle){
      margarita=(
        <View>
          <SingleFoodItem
            image={this.props.margaritaMImage}
            foodName={this.props.margaritaMName}
            weight={this.props.margaritaMWeight}
            foodInfo={this.props.margaritaMInfo}
            foodPrice={this.props.margaritaMPrice}
            onPress={this.margaritaMHandler}
          />
          <SingleFoodItem
            image={this.props.margaritaLImage}
            foodName={this.props.margaritaLName}
            weight={this.props.margaritaLWeight}
            foodInfo={this.props.margaritaLInfo}
            foodPrice={this.props.margaritaLPrice}
            onPress={this.margaritaLHandler}
          />
          <SingleFoodItem
            image={this.props.margaritaXLImage}
            foodName={this.props.margaritaXLName}
            weight={this.props.margaritaXLWeight}
            foodInfo={this.props.margaritaXLInfo}
            foodPrice={this.props.margaritaXLPrice}
            onPress={this.margaritaXLHandler}
          />
        </View>
      )
    }

    if(this.state.quatroFormagieToggle){
      quatroFormagie=(
        <View>
          <SingleFoodItem
            image={this.props.quatroFormagieMImage}
            foodName={this.props.quatroFormagieMName}
            weight={this.props.quatroFormagieMWeight}
            foodInfo={this.props.quatroFormagieMInfo}
            foodPrice={this.props.quatroFormagieMPrice}
            onPress={this.quatroFormagieMHandler}
          />
          <SingleFoodItem
            image={this.props.quatroFormagieLImage}
            foodName={this.props.quatroFormagieLName}
            weight={this.props.quatroFormagieLWeight}
            foodInfo={this.props.quatroFormagieLInfo}
            foodPrice={this.props.quatroFormagieLPrice}
            onPress={this.quatroFormagieLHandler}
          />
          <SingleFoodItem
            image={this.props.quatroFormagieXLImage}
            foodName={this.props.quatroFormagieXLName}
            weight={this.props.quatroFormagieXLWeight}
            foodInfo={this.props.quatroFormagieXLInfo}
            foodPrice={this.props.quatroFormagieXLPrice}
            onPress={this.quatroFormagieXLHandler}
          />
        </View>
      )
    }

    if(this.state.funghiPizzaToggle){
      funghiPizza=(
        <View>
          <SingleFoodItem
            image={this.props.funghiMImage}
            foodName={this.props.funghiMName}
            weight={this.props.funghiMWeight}
            foodInfo={this.props.funghiMInfo}
            foodPrice={this.props.funghiMPrice}
            onPress={this.funghiMHandler}
          />
          <SingleFoodItem
            image={this.props.funghiLImage}
            foodName={this.props.funghiLName}
            weight={this.props.funghiLWeight}
            foodInfo={this.props.funghiLInfo}
            foodPrice={this.props.funghiLPrice}
            onPress={this.funghiLHandler}
          />
          <SingleFoodItem
            image={this.props.funghiXLImage}
            foodName={this.props.funghiXLName}
            weight={this.props.funghiXLWeight}
            foodInfo={this.props.funghiXLInfo}
            foodPrice={this.props.funghiXLPrice}
            onPress={this.funghiXLHandler}
          />
        </View>
      )
    }

    if(this.state.quatroStagioniToggle){
      quatroStagioni=(
        <View>
          <SingleFoodItem
            image={this.props.quatroStagioniMImage}
            foodName={this.props.quatroStagioniMName}
            weight={this.props.quatroStagioniMWeight}
            foodInfo={this.props.quatroStagioniMInfo}
            foodPrice={this.props.quatroStagioniMPrice}
            onPress={this.quatroStagioniMHandler}
          />
          <SingleFoodItem
            image={this.props.quatroStagioniLImage}
            foodName={this.props.quatroStagioniLName}
            weight={this.props.quatroStagioniLWeight}
            foodInfo={this.props.quatroStagioniLInfo}
            foodPrice={this.props.quatroStagioniLPrice}
            onPress={this.quatroStagioniLHandler}
          />
          <SingleFoodItem
            image={this.props.quatroStagioniXLImage}
            foodName={this.props.quatroStagioniXLName}
            weight={this.props.quatroStagioniXLWeight}
            foodInfo={this.props.quatroStagioniXLInfo}
            foodPrice={this.props.quatroStagioniXLPrice}
            onPress={this.quatroStagioniXLHandler}
          />
        </View>
      )
    }

    if(this.state.pizzaCapricciosaToggle){
      pizzaCapricciosa=(
        <View>
          <SingleFoodItem
            image={this.props.capricciosaMImage}
            foodName={this.props.capricciosaMName}
            weight={this.props.capricciosaMWeight}
            foodInfo={this.props.capricciosaMInfo}
            foodPrice={this.props.capricciosaMPrice}
            onPress={this.capricciosaMHandler}
          />
          <SingleFoodItem
            image={this.props.capricciosaLImage}
            foodName={this.props.capricciosaLName}
            weight={this.props.capricciosaLWeight}
            foodInfo={this.props.capricciosaLInfo}
            foodPrice={this.props.capricciosaLPrice}
            onPress={this.capricciosaLHandler}
          />
          <SingleFoodItem
            image={this.props.capricciosaXLImage}
            foodName={this.props.capricciosaXLName}
            weight={this.props.capricciosaXLWeight}
            foodInfo={this.props.capricciosaXLInfo}
            foodPrice={this.props.capricciosaXLPrice}
            onPress={this.capricciosaXLHandler}
          />
        </View>
      )
    }

    if(this.state.piroskaToggle){
      piroska=(
        <View>
          <SingleFoodItem
            image={this.props.piroskaMImage}
            foodName={this.props.piroskaMName}
            weight={this.props.piroskaMWeight}
            foodInfo={this.props.piroskaMInfo}
            foodPrice={this.props.piroskaMPrice}
            onPress={this.piroskaMHandler}
          />
          <SingleFoodItem
            image={this.props.piroskaLImage}
            foodName={this.props.piroskaLName}
            weight={this.props.piroskaLWeight}
            foodInfo={this.props.piroskaLInfo}
            foodPrice={this.props.piroskaLPrice}
            onPress={this.piroskaLHandler}
          />
          <SingleFoodItem
            image={this.props.piroskaXLImage}
            foodName={this.props.piroskaXLName}
            weight={this.props.piroskaXLWeight}
            foodInfo={this.props.piroskaXLInfo}
            foodPrice={this.props.piroskaXLPrice}
            onPress={this.piroskaXLHandler}
          />
        </View>
      )
    }

    if(this.state.americanaToggle){
      americana=(
        <View>
        <SingleFoodItem
          image={this.props.americanaMImage}
          foodName={this.props.americanaMName}
          weight={this.props.americanaMWeight}
          foodInfo={this.props.americanaMInfo}
          foodPrice={this.props.americanaMPrice}
          onPress={this.americanaMHandler}
        />
        <SingleFoodItem
          image={this.props.americanaLImage}
          foodName={this.props.americanaLName}
          weight={this.props.americanaLWeight}
          foodInfo={this.props.americanaLInfo}
          foodPrice={this.props.americanaLPrice}
          onPress={this.americanaLHandler}
        />
        <SingleFoodItem
          image={this.props.americanaXLImage}
          foodName={this.props.americanaXLName}
          weight={this.props.americanaXLWeight}
          foodInfo={this.props.americanaXLInfo}
          foodPrice={this.props.americanaXLPrice}
          onPress={this.americanaXLHandler}
        />
      </View>
      )
    }

    if(this.state.dedinaPizzaToggle){
      dedinaPizza=(
        <View>
          <SingleFoodItem
            image={this.props.dedinaPizzaMImage}
            foodName={this.props.dedinaPizzaMName}
            weight={this.props.dedinaPizzaMWeight}
            foodInfo={this.props.dedinaPizzaMInfo}
            foodPrice={this.props.dedinaPizzaMPrice}
            onPress={this.dedinaPizzaMHandler}
          />
          <SingleFoodItem
            image={this.props.dedinaPizzaLImage}
            foodName={this.props.dedinaPizzaLName}
            weight={this.props.dedinaPizzaLWeight}
            foodInfo={this.props.dedinaPizzaLInfo}
            foodPrice={this.props.dedinaPizzaLPrice}
            onPress={this.dedinaPizzaLHandler}
          />
          <SingleFoodItem
            image={this.props.dedinaPizzaXLImage}
            foodName={this.props.dedinaPizzaXLName}
            weight={this.props.dedinaPizzaXLWeight}
            foodInfo={this.props.dedinaPizzaXLInfo}
            foodPrice={this.props.dedinaPizzaXLPrice}
            onPress={this.dedinaPizzaXLHandler}
          />
        </View>
      )
    }

    if(this.state.casperPizzaToggle){
      casperPizza=(
        <View>
          <SingleFoodItem
            image={this.props.casperPizzaMImage}
            foodName={this.props.casperPizzaMName}
            weight={this.props.casperPizzaMWeight}
            foodInfo={this.props.casperPizzaMInfo}
            foodPrice={this.props.casperPizzaMPrice}
            onPress={this.casperPizzaMHandler}
          />
          <SingleFoodItem
            image={this.props.casperPizzaLImage}
            foodName={this.props.casperPizzaLName}
            weight={this.props.casperPizzaLWeight}
            foodInfo={this.props.casperPizzaLInfo}
            foodPrice={this.props.casperPizzaLPrice}
            onPress={this.casperPizzaLHandler}
          />
          <SingleFoodItem
            image={this.props.casperPizzaXLImage}
            foodName={this.props.casperPizzaXLName}
            weight={this.props.casperPizzaXLWeight}
            foodInfo={this.props.casperPizzaXLInfo}
            foodPrice={this.props.casperPizzaXLPrice}
            onPress={this.casperPizzaXLHandler}
          />
        </View>
      )
    }

    if(this.state.casperSpecialToggle){
      casperSpecial=(
        <View>
          <SingleFoodItem
            image={this.props.casperSpecialMImage}
            foodName={this.props.casperSpecialMName}
            weight={this.props.casperSpecialMWeight}
            foodInfo={this.props.casperSpecialMInfo}
            foodPrice={this.props.casperSpecialMPrice}
            onPress={this.casperSpecialMHandler}
          />
          <SingleFoodItem
            image={this.props.casperSpecialLImage}
            foodName={this.props.casperSpecialLName}
            weight={this.props.casperSpecialLWeight}
            foodInfo={this.props.casperSpecialLInfo}
            foodPrice={this.props.casperSpecialLPrice}
            onPress={this.casperSpecialLHandler}
          />
          <SingleFoodItem
            image={this.props.casperSpecialXLImage}
            foodName={this.props.casperSpecialXLName}
            weight={this.props.casperSpecialXLWeight}
            foodInfo={this.props.casperSpecialXLInfo}
            foodPrice={this.props.casperSpecialXLPrice}
            onPress={this.casperSpecialXLHandler}
          />
        </View>
      )
    }

    if(this.state.vegetarijanaToggle){
      vegetarijana=(
        <View>
          <SingleFoodItem
            image={this.props.vegetarijanaMImage}
            foodName={this.props.vegetarijanaMName}
            weight={this.props.vegetarijanaMWeight}
            foodInfo={this.props.vegetarijanaMInfo}
            foodPrice={this.props.vegetarijanaMPrice}
            onPress={this.vegetarijanaMHandler}
          />
          <SingleFoodItem
            image={this.props.vegetarijanaLImage}
            foodName={this.props.vegetarijanaLName}
            weight={this.props.vegetarijanaLWeight}
            foodInfo={this.props.vegetarijanaLInfo}
            foodPrice={this.props.vegetarijanaLPrice}
            onPress={this.vegetarijanaLHandler}
          />
          <SingleFoodItem
            image={this.props.vegetarijanaXLImage}
            foodName={this.props.vegetarijanaXLName}
            weight={this.props.vegetarijanaXLWeight}
            foodInfo={this.props.vegetarijanaXLInfo}
            foodPrice={this.props.vegetarijanaXLPrice}
            onPress={this.vegetarijanaXLHandler}
          />
        </View>
      )
    }

    if(this.state.srbijanaToggle){
      srbijana=(
        <View>
          <SingleFoodItem
            image={this.props.srbijanaMImage}
            foodName={this.props.srbijanaMName}
            weight={this.props.srbijanaMWeight}
            foodInfo={this.props.srbijanaMInfo}
            foodPrice={this.props.srbijanaMPrice}
            onPress={this.srbijanaMHandler}
          />
          <SingleFoodItem
            image={this.props.srbijanaLImage}
            foodName={this.props.srbijanaLName}
            weight={this.props.srbijanaLWeight}
            foodInfo={this.props.srbijanaLInfo}
            foodPrice={this.props.srbijanaLPrice}
            onPress={this.srbijanaLHandler}
          />
          <SingleFoodItem
            image={this.props.srbijanaXLImage}
            foodName={this.props.srbijanaXLName}
            weight={this.props.srbijanaXLWeight}
            foodInfo={this.props.srbijanaXLInfo}
            foodPrice={this.props.srbijanaXLPrice}
            onPress={this.srbijanaXLHandler}
          />
        </View>
      )
    }

    if(this.state.italijanaToggle){
      italijana=(
        <View>
          <SingleFoodItem
            image={this.props.italijanaMImage}
            foodName={this.props.italijanaMName}
            weight={this.props.italijanaMWeight}
            foodInfo={this.props.italijanaMInfo}
            foodPrice={this.props.italijanaMPrice}
            onPress={this.italijanaMHandler}
          />
          <SingleFoodItem
            image={this.props.italijanaLImage}
            foodName={this.props.italijanaLName}
            weight={this.props.italijanaLWeight}
            foodInfo={this.props.italijanaLInfo}
            foodPrice={this.props.italijanaLPrice}
            onPress={this.italijanaLHandler}
          />
          <SingleFoodItem
            image={this.props.italijanaXLImage}
            foodName={this.props.italijanaXLName}
            weight={this.props.italijanaXLWeight}
            foodInfo={this.props.italijanaXLInfo}
            foodPrice={this.props.italijanaXLPrice}
            onPress={this.italijanaXLHandler}
          />
        </View>
      )
    }

    if(this.state.pizzaToggle){
      pizza=(
        <View>
          <PizzaToggle output={margarita} text="Margarita" onPress={this.margaritaToggleHandler} stateToggle={this.state.margaritaToggle} />
          <PizzaToggle output={quatroFormagie} text="Quatro Formagie" onPress={this.quatroFormagieToggleHandler} stateToggle={this.state.quatroFormagieToggle} />
          <PizzaToggle output={funghiPizza} text="Funghi" onPress={this.funghiPizzaToggleHandler} stateToggle={this.state.funghiPizzaToggle} />
          <PizzaToggle output={quatroStagioni} text="Quatro Stagioni" onPress={this.quatroStagioniToggleHandler} stateToggle={this.state.quatroStagioniToggle} />
          <PizzaToggle output={pizzaCapricciosa} text="Capricciosa" onPress={this.pizzaCapricciosaToggleHandler} stateToggle={this.state.pizzaCapricciosaToggle} />
          <PizzaToggle output={piroska} text="Piroška" onPress={this.piroskaToggleHandler} stateToggle={this.state.piroskaToggle} />
          <PizzaToggle output={americana} text="Americana" onPress={this.americanaToggleHandler} stateToggle={this.state.americanaToggle} />
          <PizzaToggle output={dedinaPizza} text="Dedina Pizza" onPress={this.dedinaPizzaToggleHandler} stateToggle={this.state.dedinaPizzaToggle} />
          <PizzaToggle output={casperPizza} text="Casper Pizza" onPress={this.casperPizzaToggleHandler} stateToggle={this.state.casperPizzaToggle} />
          <PizzaToggle output={casperSpecial} text="Casper Special" onPress={this.casperSpecialToggleHandler} stateToggle={this.state.casperSpecialToggle} />
          <PizzaToggle output={vegetarijana} text="Vegetarijana" onPress={this.vegetarijanaToggleHandler} stateToggle={this.state.vegetarijanaToggle} />
          <PizzaToggle output={srbijana} text="Srbijana" onPress={this.srbijanaToggleHandler} stateToggle={this.state.srbijanaToggle} />
          <PizzaToggle output={italijana} text="Italijana" onPress={this.italijanaToggleHandler} stateToggle={this.state.italijanaToggle} />
        </View>
      )
    }

   

    if(this.state.decijePorcijeToggle){
      decijePorcije=(
        <View>
        <SingleFoodItem
          image={this.props.miniSenSunkaImage}
          foodName={this.props.miniSenSunkaName}
          weight={this.props.miniSenSunkaWeight}
          foodInfo={this.props.miniSenSunkaInfo}
          foodPrice={this.props.miniSenSunkaPrice}
          onPress={this.miniSenSunkaHandler}
        />
        <SingleFoodItem
          image={this.props.miniSenPecenicaImage}
          foodName={this.props.miniSenPecenicaName}
          weight={this.props.miniSenPecenicaWeight}
          foodInfo={this.props.miniSenPecenicaInfo}
          foodPrice={this.props.miniSenPecenicaPrice}
          onPress={this.miniSenPecenicaHandler}
        />
        <SingleFoodItem
          image={this.props.pohPilMiniImage}
          foodName={this.props.pohPilMiniName}
          weight={this.props.pohPilMiniWeight}
          foodInfo={this.props.pohPilMiniInfo}
          foodPrice={this.props.pohPilMiniPrice}
          onPress={this.pohPilMiniHandler}
        />
        <SingleFoodItem
          image={this.props.pastaBolMiniImage}
          foodName={this.props.pastaBolMiniName}
          weight={this.props.pastaBolMiniWeight}
          foodInfo={this.props.pastaBolMiniInfo}
          foodPrice={this.props.pastaBolMiniPrice}
          onPress={this.pastaBolMiniHandler}
        />
        <SingleFoodItem
          image={this.props.pastaNapoliMiniImage}
          foodName={this.props.pastaNapoliMiniName}
          weight={this.props.pastaNapoliMiniWeight}
          foodInfo={this.props.pastaNapoliMiniInfo}
          foodPrice={this.props.pastaNapoliMiniPrice}
          onPress={this.pastaNapoliMiniHandler}
        />
         <SingleFoodItem
          image={this.props.capMiniImage}
          foodName={this.props.capMiniName}
          weight={this.props.capMiniWeight}
          foodInfo={this.props.capMiniInfo}
          foodPrice={this.props.capMiniPrice}
          onPress={this.capMiniHandler}
        />
        <SingleFoodItem
          image={this.props.specialMiniImage}
          foodName={this.props.specialMiniName}
          weight={this.props.specialMiniWeight}
          foodInfo={this.props.specialMiniInfo}
          foodPrice={this.props.specialMiniPrice}
          onPress={this.specialMiniHandler}
        />
        <SingleFoodItem
          image={this.props.pizzaPalImage}
          foodName={this.props.pizzaPalName}
          weight={this.props.pizzaPalWeight}
          foodInfo={this.props.pizzaPalInfo}
          foodPrice={this.props.pizzaPalPrice}
          onPress={this.pizzaPalHandler}
        />
        <SingleFoodItem
          image={this.props.classicPalImage}
          foodName={this.props.classicPalName}
          weight={this.props.classicPalWeight}
          foodInfo={this.props.classicPalInfo}
          foodPrice={this.props.classicPalPrice}
          onPress={this.classicPalHandler}
        />
        <SingleFoodItem
          image={this.props.sarenaPalImage}
          foodName={this.props.sarenaPalName}
          weight={this.props.sarenaPalWeight}
          foodInfo={this.props.sarenaPalInfo}
          foodPrice={this.props.sarenaPalPrice}
          onPress={this.sarenaPalHandler}
        />
        <SingleFoodItem
          image={this.props.nutellaPalImage}
          foodName={this.props.nutellaPalName}
          weight={this.props.nutellaPalWeight}
          foodInfo={this.props.nutellaPalInfo}
          foodPrice={this.props.nutellaPalPrice}
          onPress={this.nutellaPalHandler}
        />
      </View>
      )
    }

    if(this.state.sendviciToggle){
      sendvici=(
        <View>
        <SingleFoodItem
          image={this.props.sunkaImage}
          foodName={this.props.sunkaName}
          weight={this.props.sunkaWeight}
          foodInfo={this.props.sunkaInfo}
          foodPrice={this.props.sunkaPrice}
          onPress={this.sunkaHandler}
        />
        <SingleFoodItem
          image={this.props.slaninaImage}
          foodName={this.props.slaninaName}
          weight={this.props.slaninaWeight}
          foodInfo={this.props.slaninaInfo}
          foodPrice={this.props.slaninaPrice}
          onPress={this.slaninaHandler}
        />
        <SingleFoodItem
          image={this.props.pecenicaImage}
          foodName={this.props.pecenicaName}
          weight={this.props.pecenicaWeight}
          foodInfo={this.props.pecenicaInfo}
          foodPrice={this.props.pecenicaPrice}
          onPress={this.pecenicaHandler}
        />
        <SingleFoodItem
          image={this.props.casperSendvicImage}
          foodName={this.props.casperSendvicName}
          weight={this.props.casperSendvicWeight}
          foodInfo={this.props.casperSendvicInfo}
          foodPrice={this.props.casperSendvicPrice}
          onPress={this.casperSendvicHandler}
        />
        <SingleFoodItem
          image={this.props.kulenImage}
          foodName={this.props.kulenName}
          weight={this.props.kulenWeight}
          foodInfo={this.props.kulenInfo}
          foodPrice={this.props.kulenPrice}
          onPress={this.kulenHandler}
        />
         <SingleFoodItem
          image={this.props.tunaImage}
          foodName={this.props.tunaName}
          weight={this.props.tunaWeight}
          foodInfo={this.props.tunaInfo}
          foodPrice={this.props.tunaPrice}
          onPress={this.tunaHandler}
        />
      </View>
      )
    }

    if(this.state.dezertiToggle){
      dezerti=(
        <View>
          <SingleFoodItem
            image={this.props.cheesecakeImage}
            foodName={this.props.cheesecakeName}
            weight={this.props.cheesecakeWeight}
            foodInfo={this.props.cheesecakeInfo}
            foodPrice={this.props.cheesecakePrice}
            onPress={this.cheesecakeHandler}
          />
          <SingleFoodItem
            image={this.props.tiramisuImage}
            foodName={this.props.tiramisuName}
            weight={this.props.tiramisuWeight}
            foodInfo={this.props.tiramisuInfo}
            foodPrice={this.props.tiramisuPrice}
            onPress={this.tiramisuHandler}
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
            image={this.props.vocnaSalataImage}
            foodName={this.props.vocnaSalataName}
            weight={this.props.vocnaSalataWeight}
            foodInfo={this.props.vocnaSalataInfo}
            foodPrice={this.props.vocnaSalataPrice}
            onPress={this.vocnaSalataHandler}
          />
          <SingleFoodItem
            image={this.props.flamBanImage}
            foodName={this.props.flamBanName}
            weight={this.props.flamBanWeight}
            foodInfo={this.props.flamBanInfo}
            foodPrice={this.props.flamBanPrice}
            onPress={this.flamBanHandler}
          />
           <SingleFoodItem
            image={this.props.voceKaramelaImage}
            foodName={this.props.voceKaramelaName}
            weight={this.props.voceKaramelaWeight}
            foodInfo={this.props.voceKaramelaInfo}
            foodPrice={this.props.voceKaramelaPrice}
            onPress={this.voceKaramelaHandler}
          />
        </View>
      )
    }

    if (this.state.slatkePalacinkeToggle) {
      slatkePalacinke = (
        <View>
          <SingleFoodItem
            image={this.props.classicImage}
            foodName={this.props.classicName}
            weight={this.props.classicWeight}
            foodInfo={this.props.classicInfo}
            foodPrice={this.props.classicPrice}
            onPress={this.classicHandler}
          />
          <SingleFoodItem
            image={this.props.sarenePalacinkeImage}
            foodName={this.props.sarenePalacinkeName}
            weight={this.props.sarenePalacinkeWeight}
            foodInfo={this.props.sarenePalacinkeInfo}
            foodPrice={this.props.sarenePalacinkePrice}
            onPress={this.sarenePalacinkeHandler}
          />
          <SingleFoodItem
            image={this.props.medeneImage}
            foodName={this.props.medeneName}
            weight={this.props.medeneWeight}
            foodInfo={this.props.medeneInfo}
            foodPrice={this.props.medenePrice}
            onPress={this.medeneHandler}
          />
          <SingleFoodItem
            image={this.props.nutellaImage}
            foodName={this.props.nutellaName}
            weight={this.props.nutellaWeight}
            foodInfo={this.props.nutellaInfo}
            foodPrice={this.props.nutellaPrice}
            onPress={this.nutellaHandler}
          />
          <SingleFoodItem
            image={this.props.dzemImage}
            foodName={this.props.dzemName}
            weight={this.props.dzemWeight}
            foodInfo={this.props.dzemInfo}
            foodPrice={this.props.dzemPrice}
            onPress={this.dzemHandler}
          />
           <SingleFoodItem
            image={this.props.kremBananicaImage}
            foodName={this.props.kremBananicaName}
            weight={this.props.kremBananicaWeight}
            foodInfo={this.props.kremBananicaInfo}
            foodPrice={this.props.kremBananicaPrice}
            onPress={this.kremBananicaHandler}
          />
           <SingleFoodItem
            image={this.props.rafaeloImage}
            foodName={this.props.rafaeloName}
            weight={this.props.rafaeloWeight}
            foodInfo={this.props.rafaeloInfo}
            foodPrice={this.props.rafaeloPrice}
            onPress={this.rafaeloHandler}
          />
           <SingleFoodItem
            image={this.props.chocoCherryImage}
            foodName={this.props.chocoCherryName}
            weight={this.props.chocoCherryWeight}
            foodInfo={this.props.chocoCherryInfo}
            foodPrice={this.props.chocoCherryPrice}
            onPress={this.chocoCherryHandler}
          />
           <SingleFoodItem
            image={this.props.chocoMocoImage}
            foodName={this.props.chocoMocoName}
            weight={this.props.chocoMocoWeight}
            foodInfo={this.props.chocoMocoInfo}
            foodPrice={this.props.chocoMocoPrice}
            onPress={this.chocoMocoHandler}
          />
           <SingleFoodItem
            image={this.props.bakinaTajnaImage}
            foodName={this.props.bakinaTajnaName}
            weight={this.props.bakinaTajnaWeight}
            foodInfo={this.props.bakinaTajnaInfo}
            foodPrice={this.props.bakinaTajnaPrice}
            onPress={this.bakinaTajnaHandler}
          />
        </View>
      );
    }

    if (this.state.slanePalToggle) {
      slanePal = (
        <View>
          <SingleFoodItem
            image={this.props.pohPizzaPalImage}
            foodName={this.props.pohPizzaPalName}
            weight={this.props.pohPizzaPalWeight}
            foodInfo={this.props.pohPizzaPalInfo}
            foodPrice={this.props.pohPizzaPalPrice}
            onPress={this.pohPizzaPalHandler}
          />
          <SingleFoodItem
            image={this.props.pohPalPilImage}
            foodName={this.props.pohPalPilName}
            weight={this.props.pohPalPilWeight}
            foodInfo={this.props.pohPalPilInfo}
            foodPrice={this.props.pohPalPilPrice}
            onPress={this.pohPalPilHandler}
          />
          <SingleFoodItem
            image={this.props.pohPalSpaImage}
            foodName={this.props.pohPalSpaName}
            weight={this.props.pohPalSpaWeight}
            foodInfo={this.props.pohPalSpaInfo}
            foodPrice={this.props.pohPalSpaPrice}
            onPress={this.pohPalSpaHandler}
          />
          <SingleFoodItem
            image={this.props.palPrsKajImage}
            foodName={this.props.palPrsKajName}
            weight={this.props.palPrsKajWeight}
            foodInfo={this.props.palPrsKajInfo}
            foodPrice={this.props.palPrsKajPrice}
            onPress={this.palPrsKajHandler}
          />
          <SingleFoodItem
            image={this.props.palPanSampImage}
            foodName={this.props.palPanSampName}
            weight={this.props.palPanSampWeight}
            foodInfo={this.props.palPanSampInfo}
            foodPrice={this.props.palPanSampPrice}
            onPress={this.palPanSampHandler}
          />
        </View>
      );
    }

    if (this.state.rizotoToggle) {
      rizoto = (
        <View>
          <SingleFoodItem
            image={this.props.rizPovImage}
            foodName={this.props.rizPovName}
            weight={this.props.rizPovWeight}
            foodInfo={this.props.rizPovInfo}
            foodPrice={this.props.rizPovPrice}
            onPress={this.rizPovHandler}
          />
          <SingleFoodItem
            image={this.props.rizPilImage}
            foodName={this.props.rizPilName}
            weight={this.props.rizPilWeight}
            foodInfo={this.props.rizPilInfo}
            foodPrice={this.props.rizPilPrice}
            onPress={this.rizPilHandler}
          />
          <SingleFoodItem
            image={this.props.rizBifImage}
            foodName={this.props.rizBifName}
            weight={this.props.rizBifWeight}
            foodInfo={this.props.rizBifInfo}
            foodPrice={this.props.rizBifPrice}
            onPress={this.rizBifHandler}
          />
        </View>
      );
    }

    if (this.state.pastaToggle) {
      pasta = (
        <View>
          <SingleFoodItem
            image={this.props.quatroFormagieImage}
            foodName={this.props.quatroFormagieName}
            weight={this.props.quatroFormagieWeight}
            foodInfo={this.props.quatroFormagieInfo}
            foodPrice={this.props.quatroFormagiePrice}
            onPress={this.quatroFormagieHandler}
          />
          <SingleFoodItem
            image={this.props.funghiImage}
            foodName={this.props.funghiName}
            weight={this.props.funghiWeight}
            foodInfo={this.props.funghiInfo}
            foodPrice={this.props.funghiPrice}
            onPress={this.funghiHandler}
          />
          <SingleFoodItem
            image={this.props.bolonjezeImage}
            foodName={this.props.bolonjezeName}
            weight={this.props.bolonjezeWeight}
            foodInfo={this.props.bolonjezeInfo}
            foodPrice={this.props.bolonjezePrice}
            onPress={this.bolonjezeHandler}
          />
          <SingleFoodItem
            image={this.props.carbonaraImage}
            foodName={this.props.carbonaraName}
            weight={this.props.carbonaraWeight}
            foodInfo={this.props.carbonaraInfo}
            foodPrice={this.props.carbonaraPrice}
            onPress={this.carbonaraHandler}
          />
          <SingleFoodItem
            image={this.props.casperPastaImage}
            foodName={this.props.casperPastaName}
            weight={this.props.casperPastaWeight}
            foodInfo={this.props.casperPastaInfo}
            foodPrice={this.props.casperPastaPrice}
            onPress={this.casperPastaHandler}
          />
          <SingleFoodItem
            image={this.props.pastaBiftekImage}
            foodName={this.props.pastaBiftekName}
            weight={this.props.pastaBiftekWeight}
            foodInfo={this.props.pastaBiftekInfo}
            foodPrice={this.props.pastaBiftekPrice}
            onPress={this.pastaBiftekHandler}
          />
          <SingleFoodItem
            image={this.props.napolitanaImage}
            foodName={this.props.napolitanaName}
            weight={this.props.napolitanaWeight}
            foodInfo={this.props.napolitanaInfo}
            foodPrice={this.props.napolitanaPrice}
            onPress={this.napolitanaHandler}
          />
          <SingleFoodItem
            image={this.props.arabiataImage}
            foodName={this.props.arabiataName}
            weight={this.props.arabiataWeight}
            foodInfo={this.props.arabiataInfo}
            foodPrice={this.props.arabiataPrice}
            onPress={this.arabiataHandler}
          />
          <SingleFoodItem
            image={this.props.lazanjeImage}
            foodName={this.props.lazanjeName}
            weight={this.props.lazanjeWeight}
            foodInfo={this.props.lazanjeInfo}
            foodPrice={this.props.lazanjePrice}
            onPress={this.lazanjeHandler}
          />
          <SingleFoodItem
            image={this.props.caneloneImage}
            foodName={this.props.caneloneName}
            weight={this.props.caneloneWeight}
            foodInfo={this.props.caneloneInfo}
            foodPrice={this.props.canelonePrice}
            onPress={this.caneloneHandler}
          />
        </View>
      );
    }

    if (this.state.salateGToggle) {
      salateG = (
        <View>
          <SingleFoodItem
            image={this.props.tunaSalataImage}
            foodName={this.props.tunaSalataName}
            weight={this.props.tunaSalataWeight}
            foodInfo={this.props.tunaSalataInfo}
            foodPrice={this.props.tunaSalataPrice}
            onPress={this.tunaSalataHandler}
          />
          <SingleFoodItem
            image={this.props.meksickaSalataGImage}
            foodName={this.props.meksickaSalataGName}
            weight={this.props.meksickaSalataGWeight}
            foodInfo={this.props.meksickaSalataGInfo}
            foodPrice={this.props.meksickaSalataGPrice}
            onPress={this.meksickaSalataGHandler}
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
            image={this.props.casperImage}
            foodName={this.props.casperName}
            weight={this.props.casperWeight}
            foodInfo={this.props.casperInfo}
            foodPrice={this.props.casperPrice}
            onPress={this.casperHandler}
          />
        </View>
      );
    }

    if (this.state.salateToggle) {
      salate = (
        <View>
          <SingleFoodItem
            image={this.props.letnjaSalataImage}
            foodName={this.props.letnjaSalataName}
            weight={this.props.letnjaSalataWeight}
            foodInfo={this.props.letnjaSalataInfo}
            foodPrice={this.props.letnjaSalataPrice}
            onPress={this.letnjaSalataHandler}
          />
          <SingleFoodItem
            image={this.props.freshSalataImage}
            foodName={this.props.freshSalataName}
            weight={this.props.freshSalataWeight}
            foodInfo={this.props.freshSalataInfo}
            foodPrice={this.props.freshSalataPrice}
            onPress={this.freshSalataHandler}
          />
          <SingleFoodItem
            image={this.props.sopskaSalataImage}
            foodName={this.props.sopskaSalataName}
            weight={this.props.sopskaSalataWeight}
            foodInfo={this.props.sopskaSalataInfo}
            foodPrice={this.props.sopskaSalataPrice}
            onPress={this.sopskaSalataHandler}
          />
          <SingleFoodItem
            image={this.props.meksickaSalataImage}
            foodName={this.props.meksickaSalataName}
            weight={this.props.meksickaSalataWeight}
            foodInfo={this.props.meksickaSalataInfo}
            foodPrice={this.props.meksickaSalataPrice}
            onPress={this.meksickaSalataHandler}
          />
          <SingleFoodItem
            image={this.props.grckaSalataImage}
            foodName={this.props.grckaSalataName}
            weight={this.props.grckaSalataWeight}
            foodInfo={this.props.grckaSalataInfo}
            foodPrice={this.props.grckaSalataPrice}
            onPress={this.grckaSalataHandler}
          />
          <SingleFoodItem
            image={this.props.caprezzaSalataImage}
            foodName={this.props.caprezzaSalataName}
            weight={this.props.caprezzaSalataWeight}
            foodInfo={this.props.caprezzaSalataInfo}
            foodPrice={this.props.caprezzaSalataPrice}
            onPress={this.caprezzaSalataHandler}
          />
          <SingleFoodItem
            image={this.props.casperSalataImage}
            foodName={this.props.casperSalataName}
            weight={this.props.casperSalataWeight}
            foodInfo={this.props.casperSalataInfo}
            foodPrice={this.props.casperSalataPrice}
            onPress={this.casperSalataHandler}
          />
        </View>
      );
    }

    if (this.state.starteriToggle) {
      starteri = (
        <View>
          <SingleFoodItem
            image={this.props.garlicBreadImage}
            foodName={this.props.garlicBreadName}
            weight={this.props.garlicBreadWeight}
            foodInfo={this.props.garlicBreadInfo}
            foodPrice={this.props.garlicBreadPrice}
            onPress={this.garlicBreadHandler}
          />
          <SingleFoodItem
            image={this.props.doullBallsImage}
            foodName={this.props.doullBallsName}
            weight={this.props.doullBallsWeight}
            foodInfo={this.props.doullBallsInfo}
            foodPrice={this.props.doullBallsPrice}
            onPress={this.doullBallsHandler}
          />
          <SingleFoodItem
            image={this.props.pacurkeNaZaruImage}
            foodName={this.props.pacurkeNaZaruName}
            weight={this.props.pacurkeNaZaruWeight}
            foodInfo={this.props.pacurkeNaZaruInfo}
            foodPrice={this.props.pacurkeNaZaruPrice}
            onPress={this.pacurkeNaZaruHandler}
          />
          <SingleFoodItem
            image={this.props.grillDimSirImage}
            foodName={this.props.grillDimSirName}
            weight={this.props.grillDimSirWeight}
            foodInfo={this.props.grillDimSirInfo}
            foodPrice={this.props.grillDimSirPrice}
            onPress={this.grillDimSirHandler}
          />
          <SingleFoodItem
            image={this.props.grillPovImage}
            foodName={this.props.grillPovName}
            weight={this.props.grillPovWeight}
            foodInfo={this.props.grillPovInfo}
            foodPrice={this.props.grillPovPrice}
            onPress={this.grillPovHandler}
          />
          <SingleFoodItem
            image={this.props.medPovImage}
            foodName={this.props.medPovName}
            weight={this.props.medPovWeight}
            foodInfo={this.props.medPovInfo}
            foodPrice={this.props.medPovPrice}
            onPress={this.medPovHandler}
          />
          <SingleFoodItem
            image={this.props.pohKacImage}
            foodName={this.props.pohKacName}
            weight={this.props.pohKacWeight}
            foodInfo={this.props.pohKacInfo}
            foodPrice={this.props.pohKacPrice}
            onPress={this.pohKacHandler}
          />
          <SingleFoodItem
            image={this.props.grillMarTikvImage}
            foodName={this.props.grillMarTikvName}
            weight={this.props.grillMarTikvWeight}
            foodInfo={this.props.grillMarTikvInfo}
            foodPrice={this.props.grillMarTikvPrice}
            onPress={this.grillMarTikvHandler}
          />
          <SingleFoodItem
            image={this.props.casTanjZaDvojeImage}
            foodName={this.props.casTanjZaDvojeName}
            weight={this.props.casTanjZaDvojeWeight}
            foodInfo={this.props.casTanjZaDvojeInfo}
            foodPrice={this.props.casTanjZaDvojePrice}
            onPress={this.casTanjZaDvojeHandler}
          />
        </View>
      );
    }

    if (this.state.dorucakToggle) {
      dorucak = (
        <View>
          <SingleFoodItem
            image={this.props.casperDorucakImage}
            foodName={this.props.casperDorucakName}
            weight={this.props.casperDorucakWeight}
            foodInfo={this.props.casperDorucakInfo}
            foodPrice={this.props.casperDorucakPrice}
            onPress={this.casperDorucakHandler}
          />
          <SingleFoodItem
            image={this.props.jajaNaOkoImage}
            foodName={this.props.jajaNaOkoName}
            weight={this.props.jajaNaOkoWeight}
            foodInfo={this.props.jajaNaOkoInfo}
            foodPrice={this.props.jajaNaOkoPrice}
            onPress={this.jajaNaOkoHandler}
          />
          <SingleFoodItem
            image={this.props.przeniceSaKajmakomImage}
            foodName={this.props.przeniceSaKajmakomName}
            weight={this.props.przeniceSaKajmakomWeight}
            foodInfo={this.props.przeniceSaKajmakomInfo}
            foodPrice={this.props.przeniceSaKajmakomPrice}
            onPress={this.przeniceSaKajmakomHandler}
          />
          <SingleFoodItem
            image={this.props.omletSaPovrcemImage}
            foodName={this.props.omletSaPovrcemName}
            weight={this.props.omletSaPovrcemWeight}
            foodInfo={this.props.omletSaPovrcemInfo}
            foodPrice={this.props.omletSaPovrcemPrice}
            onPress={this.omletSaPovrcemHandler}
          />
          <SingleFoodItem
            image={this.props.omletSaSunkomImage}
            foodName={this.props.omletSaSunkomName}
            weight={this.props.omletSaSunkomWeight}
            foodInfo={this.props.omletSaSunkomInfo}
            foodPrice={this.props.omletSaSunkomPrice}
            onPress={this.omletSaSunkomHandler}
          />
          <SingleFoodItem
            image={this.props.omletSaSlaninomImage}
            foodName={this.props.omletSaSlaninomName}
            weight={this.props.omletSaSlaninomWeight}
            foodInfo={this.props.omletSaSlaninomInfo}
            foodPrice={this.props.omletSaSlaninomPrice}
            onPress={this.omletSaSlaninomHandler}
          />
          <SingleFoodItem
            image={this.props.omletKacPecImage}
            foodName={this.props.omletKacPecName}
            weight={this.props.omletKacPecWeight}
            foodInfo={this.props.omletKacPecInfo}
            foodPrice={this.props.omletKacPecPrice}
            onPress={this.omletKacPecHandler}
          />
          <SingleFoodItem
            image={this.props.omletSpanSirImage}
            foodName={this.props.omletSpanSirName}
            weight={this.props.omletSpanSirWeight}
            foodInfo={this.props.omletSpanSirInfo}
            foodPrice={this.props.omletSpanSirPrice}
            onPress={this.omletSpanSirHandler}
          />
          <SingleFoodItem
            image={this.props.carskaKajganaImage}
            foodName={this.props.carskaKajganaName}
            weight={this.props.carskaKajganaWeight}
            foodInfo={this.props.carskaKajganaInfo}
            foodPrice={this.props.carskaKajganaPrice}
            onPress={this.carskaKajganaHandler}
          />
          <SingleFoodItem
            image={this.props.engleskiDorucakImage}
            foodName={this.props.engleskiDorucakName}
            weight={this.props.engleskiDorucakWeight}
            foodInfo={this.props.engleskiDorucakInfo}
            foodPrice={this.props.engleskiDorucakPrice}
            onPress={this.engleskiDorucakHandler}
          />
        </View>
      );
    }

    if (this.state.supeToggle) {
      supe = (
        <View>
          <SingleFoodItem
            image={this.props.paradajzCorbaImage}
            foodName={this.props.paradajzCorbaName}
            weight={this.props.paradajzCorbaWeight}
            foodInfo={this.props.paradajzCorbaInfo}
            foodPrice={this.props.paradajzCorbaPrice}
            onPress={this.paradajzCorbaHandler}
          />
          <SingleFoodItem
            image={this.props.kremCorPecurkeImage}
            foodName={this.props.kremCorPecurkeName}
            weight={this.props.kremCorPecurkeWeight}
            foodInfo={this.props.kremCorPecurkeInfo}
            foodPrice={this.props.kremCorPecurkePrice}
            onPress={this.kremCorPecurkeHandler}
          />
          <SingleFoodItem
            image={this.props.minestroneImage}
            foodName={this.props.minestroneName}
            weight={this.props.minestroneWeight}
            foodInfo={this.props.minestroneInfo}
            foodPrice={this.props.minestronePrice}
            onPress={this.minestroneHandler}
          />
          <SingleFoodItem
            image={this.props.potazOdPovImage}
            foodName={this.props.potazOdPovName}
            weight={this.props.potazOdPovWeight}
            foodInfo={this.props.potazOdPovInfo}
            foodPrice={this.props.potazOdPovPrice}
            onPress={this.potazOdPovHandler}
          />
        </View>
      );
    }

    if (this.state.extraToggle) {
      extra = (
        <View>
          <SingleFoodItem
            image={this.props.parmezanImage}
            foodName={this.props.parmezanName}
            weight={this.props.parmezanWeight}
            foodInfo={this.props.parmezanInfo}
            foodPrice={this.props.parmezanPrice}
            onPress={this.parmezanHandler}
          />
          <SingleFoodItem
            image={this.props.maslineImage}
            foodName={this.props.maslineName}
            weight={this.props.maslineWeight}
            foodInfo={this.props.maslineInfo}
            foodPrice={this.props.maslinePrice}
            onPress={this.maslineHandler}
          />
          <SingleFoodItem
            image={this.props.ljutePapriciceImage}
            foodName={this.props.ljutePapriciceName}
            weight={this.props.ljutePapriciceWeight}
            foodInfo={this.props.ljutePapriciceInfo}
            foodPrice={this.props.ljutePapricicePrice}
            onPress={this.ljutePapriciceHandler}
          />
          <SingleFoodItem
            image={this.props.tzatzikiImage}
            foodName={this.props.tzatzikiName}
            weight={this.props.tzatzikiWeight}
            foodInfo={this.props.tzatzikiInfo}
            foodPrice={this.props.tzatzikiPrice}
            onPress={this.tzatzikiHandler}
          />
          <SingleFoodItem
            image={this.props.koktelSosImage}
            foodName={this.props.koktelSosName}
            weight={this.props.koktelSosWeight}
            foodInfo={this.props.koktelSosInfo}
            foodPrice={this.props.koktelSosPrice}
            onPress={this.koktelSosHandler}
          />
          <SingleFoodItem
            image={this.props.pomfritImage}
            foodName={this.props.pomfritName}
            weight={this.props.pomfritWeight}
            foodInfo={this.props.pomfritInfo}
            foodPrice={this.props.pomfritPrice}
            onPress={this.pomfritHandler}
          />
          <SingleFoodItem
            image={this.props.aromaticniKrompirImage}
            foodName={this.props.aromaticniKrompirName}
            weight={this.props.aromaticniKrompirWeight}
            foodInfo={this.props.aromaticniKrompirInfo}
            foodPrice={this.props.aromaticniKrompirPrice}
            onPress={this.aromaticniKrompirHandler}
          />
          <SingleFoodItem
            image={this.props.kroketiImage}
            foodName={this.props.kroketiName}
            weight={this.props.kroketiWeight}
            foodInfo={this.props.kroketiInfo}
            foodPrice={this.props.kroketiPrice}
            onPress={this.kroketiHandler}
          />
          <SingleFoodItem
            image={this.props.lepinjaImage}
            foodName={this.props.lepinjaName}
            weight={this.props.lepinjaWeight}
            foodInfo={this.props.lepinjaInfo}
            foodPrice={this.props.lepinjaPrice}
            onPress={this.lepinjaHandler}
          />
        </View>
      );
    }

    if (this.state.glavnaJelaToggle) {
      glavnaJela = (
        <View>
          <SingleFoodItem
            image={this.props.punjenaPiletinaImage}
            foodName={this.props.punjenaPiletinaName}
            weight={this.props.punjenaPiletinaWeight}
            foodInfo={this.props.punjenaPiletinaInfo}
            foodPrice={this.props.punjenaPiletinaPrice}
            onPress={this.punjenaPiletinaHandler}
          />
          <SingleFoodItem
            image={this.props.karadjordjevaImage}
            foodName={this.props.karadjordjevaName}
            weight={this.props.karadjordjevaWeight}
            foodInfo={this.props.karadjordjevaInfo}
            foodPrice={this.props.karadjordjevaPrice}
            onPress={this.karadjordjevaHandler}
          />
          <SingleFoodItem
            image={this.props.pilPrsImage}
            foodName={this.props.pilPrsName}
            weight={this.props.pilPrsWeight}
            foodInfo={this.props.pilPrsInfo}
            foodPrice={this.props.pilPrsPrice}
            onPress={this.pilPrsHandler}
          />
          <SingleFoodItem
            image={this.props.pohPilImage}
            foodName={this.props.pohPilName}
            weight={this.props.pohPilWeight}
            foodInfo={this.props.pohPilInfo}
            foodPrice={this.props.pohPilPrice}
            onPress={this.pohPilHandler}
          />
          <SingleFoodItem
            image={this.props.saltimbokaImage}
            foodName={this.props.saltimbokaName}
            weight={this.props.saltimbokaWeight}
            foodInfo={this.props.saltimbokaInfo}
            foodPrice={this.props.saltimbokaPrice}
            onPress={this.saltimbokaHandler}
          />
          <SingleFoodItem
            image={this.props.cordonBlueImage}
            foodName={this.props.cordonBlueName}
            weight={this.props.cordonBlueWeight}
            foodInfo={this.props.cordonBlueInfo}
            foodPrice={this.props.cordonBluePrice}
            onPress={this.cordonBlueHandler}
          />
          <SingleFoodItem
            image={this.props.fileSpicImage}
            foodName={this.props.fileSpicName}
            weight={this.props.fileSpicWeight}
            foodInfo={this.props.fileSpicInfo}
            foodPrice={this.props.fileSpicPrice}
            onPress={this.fileSpicHandler}
          />
          <SingleFoodItem
            image={this.props.lignjeCasperImage}
            foodName={this.props.lignjeCasperName}
            weight={this.props.lignjeCasperWeight}
            foodInfo={this.props.lignjeCasperInfo}
            foodPrice={this.props.lignjeCasperPrice}
            onPress={this.lignjeCasperHandler}
          />
          <SingleFoodItem
            image={this.props.grillTanjirImage}
            foodName={this.props.grillTanjirName}
            weight={this.props.grillTanjirWeight}
            foodInfo={this.props.grillTanjirInfo}
            foodPrice={this.props.grillTanjirPrice}
            onPress={this.grillTanjirHandler}
          />
          <SingleFoodItem
            image={this.props.pilGorgonImage}
            foodName={this.props.pilGorgonName}
            weight={this.props.pilGorgonWeight}
            foodInfo={this.props.pilGorgonInfo}
            foodPrice={this.props.pilGorgonPrice}
            onPress={this.pilGorgonHandler}
          />
          <SingleFoodItem
            image={this.props.pilKariImage}
            foodName={this.props.pilKariName}
            weight={this.props.pilKariWeight}
            foodInfo={this.props.pilKariInfo}
            foodPrice={this.props.pilKariPrice}
            onPress={this.pilKariHandler}
          />
          <SingleFoodItem
            image={this.props.sumskiSvFileImage}
            foodName={this.props.sumskiSvFileName}
            weight={this.props.sumskiSvFileWeight}
            foodInfo={this.props.sumskiSvFileInfo}
            foodPrice={this.props.sumskiSvFilePrice}
            onPress={this.sumskiSvFileHandler}
          />
          <SingleFoodItem
            image={this.props.svFileBiberImage}
            foodName={this.props.svFileBiberName}
            weight={this.props.svFileBiberWeight}
            foodInfo={this.props.svFileBiberInfo}
            foodPrice={this.props.svFileBiberPrice}
            onPress={this.svFileBiberHandler}
          />
          <SingleFoodItem
            image={this.props.sampSnicleImage}
            foodName={this.props.sampSnicleName}
            weight={this.props.sampSnicleWeight}
            foodInfo={this.props.sampSnicleInfo}
            foodPrice={this.props.sampSniclePrice}
            onPress={this.sampSnicleHandler}
          />
          <SingleFoodItem
            image={this.props.ciliKonKarneImage}
            foodName={this.props.ciliKonKarneName}
            weight={this.props.ciliKonKarneWeight}
            foodInfo={this.props.ciliKonKarneInfo}
            foodPrice={this.props.ciliKonKarnePrice}
            onPress={this.ciliKonKarneHandler}
          />
        </View>
      );
    }

    if (this.state.jelovnik) {
      output = (
        <View style={{ flex: 1, backgroundColor: "#f2f2f2", marginBottom: 5 }}>
          <View>
            <HeaderInfo
              online="true"
              time="23:00"
              minPay="700din"
              image={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/deliveryapp-4951a.appspot.com/o/img%2Fcasper%2FcasperLogo%2FcasperLogo.jpg?alt=media&token=95935e96-83a8-46b4-a7b1-03dca2d665ae"
              }}
              resName="Casper Pizzeria"
              adress="Ulica, Moše Pijade 53, Bor"
              delivery="Besplatna Dostava"
            />
          </View>
          <View style={styles.jelPop}>
            <TouchableOpacity onPress={this.jelovnikHandler}>
              <View style={styles.jelPopLook}>
                <Text
                  style={{ color: "white", fontFamily: Fonts.GloriaHallelujah }}
                >
                  JELOVNIK
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.popularnoHandler}>
              <View style={styles.jelPopLook}>
                <Text
                  style={{ color: "white", fontFamily: Fonts.GloriaHallelujah }}
                >
                  POPULARNO
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView removeClippedSubviews={true}>
            <Toggle
              onPress={this.dorucakToggleHandler}
              stateToggle={this.state.dorucakToggle}
              text="Doručak"
            />
            {dorucak}
            <Toggle
              onPress={this.sendviciToggleHandler}
              stateToggle={this.state.sendviciToggle}
              text="Sendviči"
            />
            {sendvici}
            <Toggle
              onPress={this.starteriToggleHandler}
              stateToggle={this.state.starteriToggle}
              text="Starteri"
            />
            {starteri}
            <Toggle
              onPress={this.supeToggleHandler}
              stateToggle={this.state.supeToggle}
              text="Supe i Čorbice"
            />
            {supe}
            <Toggle
              onPress={this.extraToggleHandler}
              stateToggle={this.state.extraToggle}
              text="Extra Porcije"
            />
            {extra}
            <Toggle
              onPress={this.salateToggleHandler}
              stateToggle={this.state.salateToggle}
              text="Salate"
            />
            {salate}
            <Toggle
              onPress={this.salateGToggleHandler}
              stateToggle={this.state.salateGToggle}
              text="Salate Kao Glavno Jelo"
            />
            {salateG}
            <Toggle
              onPress={this.pastaToggleHandler}
              stateToggle={this.state.pastaToggle}
              text="Pasta"
            />
            {pasta}
            <Toggle
              onPress={this.rizotoToggleHandler}
              stateToggle={this.state.rizotoToggle}
              text="Rižoto"
            />
            {rizoto}
            <Toggle
              onPress={this.slanePalToggleHandler}
              stateToggle={this.state.slanePalToggle}
              text="Slane Palačinke"
            />
            {slanePal}
            <Toggle
              onPress={this.pizzaToggleHandler}
              stateToggle={this.state.pizzaToggle}
              text="Pizza"
            />
            {pizza}
            <Toggle
              onPress={this.glavnaJelaToggleHandler}
              stateToggle={this.state.glavnaJelaToggle}
              text="Glavna Jela"
            />
            {glavnaJela}
            <Toggle
              onPress={this.slatkePalacinkeToggleHandler}
              stateToggle={this.state.slatkePalacinkeToggle}
              text="Slatke Palačinke"
            />
            {slatkePalacinke}
            <Toggle
              onPress={this.dezertiToggleHandler}
              stateToggle={this.state.dezertiToggle}
              text="Dezerti"
            />
            {dezerti}
            <Toggle
              onPress={this.decijePorcijeToggleHandler}
              stateToggle={this.state.decijePorcijeToggle}
              text="Dečije Porcije"
            />
            {decijePorcije}
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
              image={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/deliveryapp-4951a.appspot.com/o/img%2Fcasper%2FcasperLogo%2FcasperLogo.jpg?alt=media&token=95935e96-83a8-46b4-a7b1-03dca2d665ae"
              }}
              resName="Casper Pizzeria"
              adress="Ulica, Moše Pijade 53, Bor"
              delivery="Besplatna Dostava"
            />
          </View>
          <View style={styles.jelPop}>
            <TouchableOpacity onPress={this.jelovnikHandler}>
              <View style={styles.jelPopLook}>
                <Text
                  style={{ color: "white", fontFamily: Fonts.GloriaHallelujah }}
                >
                  JELOVNIK
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.popularnoHandler}>
              <View style={styles.jelPopLook}>
                <Text
                  style={{ color: "white", fontFamily: Fonts.GloriaHallelujah }}
                >
                  POPULARNO
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView removeClippedSubviews={true}>
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
    justifyContent: "space-around",
    marginBottom: 5
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
    borderColor: "#2E8B57",
    height: 60,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 5
  },
  foodTypeContainer1: {
    borderWidth: 1,
    borderColor: "#2E8B57",
    height: 60,
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
    casperDorucakName: state.casper.dorucak.casperDorucak.name,
    casperDorucakWeight: state.casper.dorucak.casperDorucak.weight,
    casperDorucakInfo: state.casper.dorucak.casperDorucak.info,
    casperDorucakPrice: state.casper.dorucak.casperDorucak.price,
    casperDorucakImage: state.casper.dorucak.casperDorucak.image,
    jajaNaOkoName: state.casper.dorucak.jajaNaOko.name,
    jajaNaOkoWeight: state.casper.dorucak.jajaNaOko.weight,
    jajaNaOkoInfo: state.casper.dorucak.jajaNaOko.info,
    jajaNaOkoPrice: state.casper.dorucak.jajaNaOko.price,
    jajaNaOkoImage: state.casper.dorucak.jajaNaOko.image,
    przeniceSaKajmakomName: state.casper.dorucak.przeniceSaKajmakom.name,
    przeniceSaKajmakomWeight: state.casper.dorucak.przeniceSaKajmakom.weight,
    przeniceSaKajmakomInfo: state.casper.dorucak.przeniceSaKajmakom.info,
    przeniceSaKajmakomPrice: state.casper.dorucak.przeniceSaKajmakom.price,
    przeniceSaKajmakomImage: state.casper.dorucak.przeniceSaKajmakom.image,
    omletSaPovrcemName: state.casper.dorucak.omletSaPovrcem.name,
    omletSaPovrcemWeight: state.casper.dorucak.omletSaPovrcem.weight,
    omletSaPovrcemInfo: state.casper.dorucak.omletSaPovrcem.info,
    omletSaPovrcemPrice: state.casper.dorucak.omletSaPovrcem.price,
    omletSaPovrcemImage: state.casper.dorucak.omletSaPovrcem.image,
    omletSaSunkomName: state.casper.dorucak.omletSaSunkom.name,
    omletSaSunkomWeight: state.casper.dorucak.omletSaSunkom.weight,
    omletSaSunkomInfo: state.casper.dorucak.omletSaSunkom.info,
    omletSaSunkomPrice: state.casper.dorucak.omletSaSunkom.price,
    omletSaSunkomImage: state.casper.dorucak.omletSaSunkom.image,
    omletSaSlaninomName: state.casper.dorucak.omletSaSlaninom.name,
    omletSaSlaninomWeight: state.casper.dorucak.omletSaSlaninom.weight,
    omletSaSlaninomInfo: state.casper.dorucak.omletSaSlaninom.info,
    omletSaSlaninomPrice: state.casper.dorucak.omletSaSlaninom.price,
    omletSaSlaninomImage: state.casper.dorucak.omletSaSlaninom.image,
    omletKacPecName: state.casper.dorucak.omletKacPec.name,
    omletKacPecWeight: state.casper.dorucak.omletKacPec.weight,
    omletKacPecInfo: state.casper.dorucak.omletKacPec.info,
    omletKacPecPrice: state.casper.dorucak.omletKacPec.price,
    omletKacPecImage: state.casper.dorucak.omletKacPec.image,
    omletSpanSirName: state.casper.dorucak.omletSpanSir.name,
    omletSpanSirWeight: state.casper.dorucak.omletSpanSir.weight,
    omletSpanSirInfo: state.casper.dorucak.omletSpanSir.info,
    omletSpanSirPrice: state.casper.dorucak.omletSpanSir.price,
    omletSpanSirImage: state.casper.dorucak.omletSpanSir.image,
    carskaKajganaName: state.casper.dorucak.carskaKajgana.name,
    carskaKajganaWeight: state.casper.dorucak.carskaKajgana.weight,
    carskaKajganaInfo: state.casper.dorucak.carskaKajgana.info,
    carskaKajganaPrice: state.casper.dorucak.carskaKajgana.price,
    carskaKajganaImage: state.casper.dorucak.carskaKajgana.image,
    engleskiDorucakName: state.casper.dorucak.engleskiDorucak.name,
    engleskiDorucakWeight: state.casper.dorucak.engleskiDorucak.weight,
    engleskiDorucakInfo: state.casper.dorucak.engleskiDorucak.info,
    engleskiDorucakPrice: state.casper.dorucak.engleskiDorucak.price,
    engleskiDorucakImage: state.casper.dorucak.engleskiDorucak.image,
    garlicBreadName: state.casper.starteri.garlicBread.name,
    garlicBreadWeight: state.casper.starteri.garlicBread.weight,
    garlicBreadInfo: state.casper.starteri.garlicBread.info,
    garlicBreadPrice: state.casper.starteri.garlicBread.price,
    garlicBreadImage: state.casper.starteri.garlicBread.image,
    doullBallsName: state.casper.starteri.doullBalls.name,
    doullBallsWeight: state.casper.starteri.doullBalls.weight,
    doullBallsInfo: state.casper.starteri.doullBalls.info,
    doullBallsPrice: state.casper.starteri.doullBalls.price,
    doullBallsImage: state.casper.starteri.doullBalls.image,
    pacurkeNaZaruName: state.casper.starteri.pacurkeNaZaru.name,
    pacurkeNaZaruWeight: state.casper.starteri.pacurkeNaZaru.weight,
    pacurkeNaZaruInfo: state.casper.starteri.pacurkeNaZaru.info,
    pacurkeNaZaruPrice: state.casper.starteri.pacurkeNaZaru.price,
    pacurkeNaZaruImage: state.casper.starteri.pacurkeNaZaru.image,
    grillDimSirName: state.casper.starteri.grillDimSir.name,
    grillDimSirWeight: state.casper.starteri.grillDimSir.weight,
    grillDimSirInfo: state.casper.starteri.grillDimSir.info,
    grillDimSirPrice: state.casper.starteri.grillDimSir.price,
    grillDimSirImage: state.casper.starteri.grillDimSir.image,
    grillPovName: state.casper.starteri.grillPov.name,
    grillPovWeight: state.casper.starteri.grillPov.weight,
    grillPovInfo: state.casper.starteri.grillPov.info,
    grillPovPrice: state.casper.starteri.grillPov.price,
    grillPovImage: state.casper.starteri.grillPov.image,
    medPovName: state.casper.starteri.medPov.name,
    medPovWeight: state.casper.starteri.medPov.weight,
    medPovInfo: state.casper.starteri.medPov.info,
    medPovPrice: state.casper.starteri.medPov.price,
    medPovImage: state.casper.starteri.medPov.image,
    pohKacName: state.casper.starteri.pohKac.name,
    pohKacWeight: state.casper.starteri.pohKac.weight,
    pohKacInfo: state.casper.starteri.pohKac.info,
    pohKacPrice: state.casper.starteri.pohKac.price,
    pohKacImage: state.casper.starteri.pohKac.image,
    grillMarTikvName: state.casper.starteri.grillMarTikv.name,
    grillMarTikvWeight: state.casper.starteri.grillMarTikv.weight,
    grillMarTikvInfo: state.casper.starteri.grillMarTikv.info,
    grillMarTikvPrice: state.casper.starteri.grillMarTikv.price,
    grillMarTikvImage: state.casper.starteri.grillMarTikv.image,
    casTanjZaDvojeName: state.casper.starteri.casTanjZaDvoje.name,
    casTanjZaDvojeWeight: state.casper.starteri.casTanjZaDvoje.weight,
    casTanjZaDvojeInfo: state.casper.starteri.casTanjZaDvoje.info,
    casTanjZaDvojePrice: state.casper.starteri.casTanjZaDvoje.price,
    casTanjZaDvojeImage: state.casper.starteri.casTanjZaDvoje.image,
    paradajzCorbaName: state.casper.supe.paradajzCorba.name,
    paradajzCorbaWeight: state.casper.supe.paradajzCorba.weight,
    paradajzCorbaInfo: state.casper.supe.paradajzCorba.info,
    paradajzCorbaPrice: state.casper.supe.paradajzCorba.price,
    paradajzCorbaImage: state.casper.supe.paradajzCorba.image,
    kremCorPecurkeName: state.casper.supe.kremCorPecurke.name,
    kremCorPecurkeWeight: state.casper.supe.kremCorPecurke.weight,
    kremCorPecurkeInfo: state.casper.supe.kremCorPecurke.info,
    kremCorPecurkePrice: state.casper.supe.kremCorPecurke.price,
    kremCorPecurkeImage: state.casper.supe.kremCorPecurke.image,
    minestroneName: state.casper.supe.minestrone.name,
    minestroneWeight: state.casper.supe.minestrone.weight,
    minestroneInfo: state.casper.supe.minestrone.info,
    minestronePrice: state.casper.supe.minestrone.price,
    minestroneImage: state.casper.supe.minestrone.image,
    potazOdPovName: state.casper.supe.potazOdPov.name,
    potazOdPovWeight: state.casper.supe.potazOdPov.weight,
    potazOdPovInfo: state.casper.supe.potazOdPov.info,
    potazOdPovPrice: state.casper.supe.potazOdPov.price,
    potazOdPovImage: state.casper.supe.potazOdPov.image,
    parmezanName: state.casper.extra.parmezan.name,
    parmezanWeight: state.casper.extra.parmezan.weight,
    parmezanInfo: state.casper.extra.parmezan.info,
    parmezanPrice: state.casper.extra.parmezan.price,
    parmezanImage: state.casper.extra.parmezan.image,
    maslineName: state.casper.extra.masline.name,
    maslineWeight: state.casper.extra.masline.weight,
    maslineInfo: state.casper.extra.masline.info,
    maslinePrice: state.casper.extra.masline.price,
    maslineImage: state.casper.extra.masline.image,
    ljutePapriciceName: state.casper.extra.ljutePapricice.name,
    ljutePapriciceWeight: state.casper.extra.ljutePapricice.weight,
    ljutePapriciceInfo: state.casper.extra.ljutePapricice.info,
    ljutePapricicePrice: state.casper.extra.ljutePapricice.price,
    ljutePapriciceImage: state.casper.extra.ljutePapricice.image,
    tzatzikiName: state.casper.extra.tzatziki.name,
    tzatzikiWeight: state.casper.extra.tzatziki.weight,
    tzatzikiInfo: state.casper.extra.tzatziki.info,
    tzatzikiPrice: state.casper.extra.tzatziki.price,
    tzatzikiImage: state.casper.extra.tzatziki.image,
    koktelSosName: state.casper.extra.koktelSos.name,
    koktelSosWeight: state.casper.extra.koktelSos.weight,
    koktelSosInfo: state.casper.extra.koktelSos.info,
    koktelSosPrice: state.casper.extra.koktelSos.price,
    koktelSosImage: state.casper.extra.koktelSos.image,
    pomfritName: state.casper.extra.pomfrit.name,
    pomfritWeight: state.casper.extra.pomfrit.weight,
    pomfritInfo: state.casper.extra.pomfrit.info,
    pomfritPrice: state.casper.extra.pomfrit.price,
    pomfritImage: state.casper.extra.pomfrit.image,
    aromaticniKrompirName: state.casper.extra.aromaticniKrompir.name,
    aromaticniKrompirWeight: state.casper.extra.aromaticniKrompir.weight,
    aromaticniKrompirInfo: state.casper.extra.aromaticniKrompir.info,
    aromaticniKrompirPrice: state.casper.extra.aromaticniKrompir.price,
    aromaticniKrompirImage: state.casper.extra.aromaticniKrompir.image,
    kroketiName: state.casper.extra.kroketi.name,
    kroketiWeight: state.casper.extra.kroketi.weight,
    kroketiInfo: state.casper.extra.kroketi.info,
    kroketiPrice: state.casper.extra.kroketi.price,
    kroketiImage: state.casper.extra.kroketi.image,
    lepinjaName: state.casper.extra.lepinja.name,
    lepinjaWeight: state.casper.extra.lepinja.weight,
    lepinjaInfo: state.casper.extra.lepinja.info,
    lepinjaPrice: state.casper.extra.lepinja.price,
    lepinjaImage: state.casper.extra.lepinja.image,
    letnjaSalataName: state.casper.salate.letnjaSalata.name,
    letnjaSalataWeight: state.casper.salate.letnjaSalata.weight,
    letnjaSalataInfo: state.casper.salate.letnjaSalata.info,
    letnjaSalataPrice: state.casper.salate.letnjaSalata.price,
    letnjaSalataImage: state.casper.salate.letnjaSalata.image,
    freshSalataName: state.casper.salate.freshSalata.name,
    freshSalataWeight: state.casper.salate.freshSalata.weight,
    freshSalataInfo: state.casper.salate.freshSalata.info,
    freshSalataPrice: state.casper.salate.freshSalata.price,
    freshSalataImage: state.casper.salate.freshSalata.image,
    sopskaSalataName: state.casper.salate.sopskaSalata.name,
    sopskaSalataWeight: state.casper.salate.sopskaSalata.weight,
    sopskaSalataInfo: state.casper.salate.sopskaSalata.info,
    sopskaSalataPrice: state.casper.salate.sopskaSalata.price,
    sopskaSalataImage: state.casper.salate.sopskaSalata.image,
    meksickaSalataName: state.casper.salate.meksickaSalata.name,
    meksickaSalataWeight: state.casper.salate.meksickaSalata.weight,
    meksickaSalataInfo: state.casper.salate.meksickaSalata.info,
    meksickaSalataPrice: state.casper.salate.meksickaSalata.price,
    meksickaSalataImage: state.casper.salate.meksickaSalata.image,
    grckaSalataName: state.casper.salate.grckaSalata.name,
    grckaSalataWeight: state.casper.salate.grckaSalata.weight,
    grckaSalataInfo: state.casper.salate.grckaSalata.info,
    grckaSalataPrice: state.casper.salate.grckaSalata.price,
    grckaSalataImage: state.casper.salate.grckaSalata.image,
    caprezzaSalataName: state.casper.salate.caprezzaSalata.name,
    caprezzaSalataWeight: state.casper.salate.caprezzaSalata.weight,
    caprezzaSalataInfo: state.casper.salate.caprezzaSalata.info,
    caprezzaSalataPrice: state.casper.salate.caprezzaSalata.price,
    caprezzaSalataImage: state.casper.salate.caprezzaSalata.image,
    casperSalataName: state.casper.salate.casperSalata.name,
    casperSalataWeight: state.casper.salate.casperSalata.weight,
    casperSalataInfo: state.casper.salate.casperSalata.info,
    casperSalataPrice: state.casper.salate.casperSalata.price,
    casperSalataImage: state.casper.salate.casperSalata.image,
    tunaSalataName: state.casper.salateG.tunaSalata.name,
    tunaSalataWeight: state.casper.salateG.tunaSalata.weight,
    tunaSalataInfo: state.casper.salateG.tunaSalata.info,
    tunaSalataPrice: state.casper.salateG.tunaSalata.price,
    tunaSalataImage: state.casper.salateG.tunaSalata.image,
    meksickaSalataGName: state.casper.salateG.meksickaSalataG.name,
    meksickaSalataGWeight: state.casper.salateG.meksickaSalataG.weight,
    meksickaSalataGInfo: state.casper.salateG.meksickaSalataG.info,
    meksickaSalataGPrice: state.casper.salateG.meksickaSalataG.price,
    meksickaSalataGImage: state.casper.salateG.meksickaSalataG.image,
    cezarName: state.casper.salateG.cezar.name,
    cezarWeight: state.casper.salateG.cezar.weight,
    cezarInfo: state.casper.salateG.cezar.info,
    cezarPrice: state.casper.salateG.cezar.price,
    cezarImage: state.casper.salateG.cezar.image,
    casperName: state.casper.salateG.casper.name,
    casperWeight: state.casper.salateG.casper.weight,
    casperInfo: state.casper.salateG.casper.info,
    casperPrice: state.casper.salateG.casper.price,
    casperImage: state.casper.salateG.casper.image,
    quatroFormagieName: state.casper.paste.quatroFormagie.name,
    quatroFormagieWeight: state.casper.paste.quatroFormagie.weight,
    quatroFormagieInfo: state.casper.paste.quatroFormagie.info,
    quatroFormagiePrice: state.casper.paste.quatroFormagie.price,
    quatroFormagieImage: state.casper.paste.quatroFormagie.image,
    funghiName: state.casper.paste.funghi.name,
    funghiWeight: state.casper.paste.funghi.weight,
    funghiInfo: state.casper.paste.funghi.info,
    funghiPrice: state.casper.paste.funghi.price,
    funghiImage: state.casper.paste.funghi.image,
    bolonjezeName: state.casper.paste.bolonjeze.name,
    bolonjezeWeight: state.casper.paste.bolonjeze.weight,
    bolonjezeInfo: state.casper.paste.bolonjeze.info,
    bolonjezePrice: state.casper.paste.bolonjeze.price,
    bolonjezeImage: state.casper.paste.bolonjeze.image,
    carbonaraName: state.casper.paste.carbonara.name,
    carbonaraWeight: state.casper.paste.carbonara.weight,
    carbonaraInfo: state.casper.paste.carbonara.info,
    carbonaraPrice: state.casper.paste.carbonara.price,
    carbonaraImage: state.casper.paste.carbonara.image,
    casperPastaName: state.casper.paste.casperPasta.name,
    casperPastaWeight: state.casper.paste.casperPasta.weight,
    casperPastaInfo: state.casper.paste.casperPasta.info,
    casperPastaPrice: state.casper.paste.casperPasta.price,
    casperPastaImage: state.casper.paste.casperPasta.image,
    pastaBiftekName: state.casper.paste.pastaBiftek.name,
    pastaBiftekWeight: state.casper.paste.pastaBiftek.weight,
    pastaBiftekInfo: state.casper.paste.pastaBiftek.info,
    pastaBiftekPrice: state.casper.paste.pastaBiftek.price,
    pastaBiftekImage: state.casper.paste.pastaBiftek.image,
    napolitanaName: state.casper.paste.napolitana.name,
    napolitanaWeight: state.casper.paste.napolitana.weight,
    napolitanaInfo: state.casper.paste.napolitana.info,
    napolitanaPrice: state.casper.paste.napolitana.price,
    napolitanaImage: state.casper.paste.napolitana.image,
    arabiataName: state.casper.paste.arabiata.name,
    arabiataWeight: state.casper.paste.arabiata.weight,
    arabiataInfo: state.casper.paste.arabiata.info,
    arabiataPrice: state.casper.paste.arabiata.price,
    arabiataImage: state.casper.paste.arabiata.image,
    lazanjeName: state.casper.paste.lazanje.name,
    lazanjeWeight: state.casper.paste.lazanje.weight,
    lazanjeInfo: state.casper.paste.lazanje.info,
    lazanjePrice: state.casper.paste.lazanje.price,
    lazanjeImage: state.casper.paste.lazanje.image,
    caneloneName: state.casper.paste.canelone.name,
    caneloneWeight: state.casper.paste.canelone.weight,
    caneloneInfo: state.casper.paste.canelone.info,
    canelonePrice: state.casper.paste.canelone.price,
    caneloneImage: state.casper.paste.canelone.image,
    rizPovName: state.casper.rizoto.rizPov.name,
    rizPovWeight: state.casper.rizoto.rizPov.weight,
    rizPovInfo: state.casper.rizoto.rizPov.info,
    rizPovPrice: state.casper.rizoto.rizPov.price,
    rizPovImage: state.casper.rizoto.rizPov.image,
    rizPilName: state.casper.rizoto.rizPil.name,
    rizPilWeight: state.casper.rizoto.rizPil.weight,
    rizPilInfo: state.casper.rizoto.rizPil.info,
    rizPilPrice: state.casper.rizoto.rizPil.price,
    rizPilImage: state.casper.rizoto.rizPil.image,
    rizBifName: state.casper.rizoto.rizBif.name,
    rizBifWeight: state.casper.rizoto.rizBif.weight,
    rizBifInfo: state.casper.rizoto.rizBif.info,
    rizBifPrice: state.casper.rizoto.rizBif.price,
    rizBifImage: state.casper.rizoto.rizBif.image,
    pohPizzaPalName: state.casper.slanePalacinke.pohPizzaPal.name,
    pohPizzaPalWeight: state.casper.slanePalacinke.pohPizzaPal.weight,
    pohPizzaPalInfo: state.casper.slanePalacinke.pohPizzaPal.info,
    pohPizzaPalPrice: state.casper.slanePalacinke.pohPizzaPal.price,
    pohPizzaPalImage: state.casper.slanePalacinke.pohPizzaPal.image,
    pohPalPilName: state.casper.slanePalacinke.pohPalPil.name,
    pohPalPilWeight: state.casper.slanePalacinke.pohPalPil.weight,
    pohPalPilInfo: state.casper.slanePalacinke.pohPalPil.info,
    pohPalPilPrice: state.casper.slanePalacinke.pohPalPil.price,
    pohPalPilImage: state.casper.slanePalacinke.pohPalPil.image,
    pohPalSpaName: state.casper.slanePalacinke.pohPalSpa.name,
    pohPalSpaWeight: state.casper.slanePalacinke.pohPalSpa.weight,
    pohPalSpaInfo: state.casper.slanePalacinke.pohPalSpa.info,
    pohPalSpaPrice: state.casper.slanePalacinke.pohPalSpa.price,
    pohPalSpaImage: state.casper.slanePalacinke.pohPalSpa.image,
    palPrsKajName: state.casper.slanePalacinke.palPrsKaj.name,
    palPrsKajWeight: state.casper.slanePalacinke.palPrsKaj.weight,
    palPrsKajInfo: state.casper.slanePalacinke.palPrsKaj.info,
    palPrsKajPrice: state.casper.slanePalacinke.palPrsKaj.price,
    palPrsKajImage: state.casper.slanePalacinke.palPrsKaj.image,
    palPanSampName: state.casper.slanePalacinke.palPanSamp.name,
    palPanSampWeight: state.casper.slanePalacinke.palPanSamp.weight,
    palPanSampInfo: state.casper.slanePalacinke.palPanSamp.info,
    palPanSampPrice: state.casper.slanePalacinke.palPanSamp.price,
    palPanSampImage: state.casper.slanePalacinke.palPanSamp.image,
    punjenaPiletinaName: state.casper.glavnaJela.punjenaPiletina.name,
    punjenaPiletinaWeight: state.casper.glavnaJela.punjenaPiletina.weight,
    punjenaPiletinaInfo: state.casper.glavnaJela.punjenaPiletina.info,
    punjenaPiletinaPrice: state.casper.glavnaJela.punjenaPiletina.price,
    punjenaPiletinaImage: state.casper.glavnaJela.punjenaPiletina.image,
    karadjordjevaName: state.casper.glavnaJela.karadjordjeva.name,
    karadjordjevaWeight: state.casper.glavnaJela.karadjordjeva.weight,
    karadjordjevaInfo: state.casper.glavnaJela.karadjordjeva.info,
    karadjordjevaPrice: state.casper.glavnaJela.karadjordjeva.price,
    karadjordjevaImage: state.casper.glavnaJela.karadjordjeva.image,
    pilPrsName: state.casper.glavnaJela.pilPrs.name,
    pilPrsWeight: state.casper.glavnaJela.pilPrs.weight,
    pilPrsInfo: state.casper.glavnaJela.pilPrs.info,
    pilPrsPrice: state.casper.glavnaJela.pilPrs.price,
    pilPrsImage: state.casper.glavnaJela.pilPrs.image,
    pohPilName: state.casper.glavnaJela.pohPil.name,
    pohPilWeight: state.casper.glavnaJela.pohPil.weight,
    pohPilInfo: state.casper.glavnaJela.pohPil.info,
    pohPilPrice: state.casper.glavnaJela.pohPil.price,
    pohPilImage: state.casper.glavnaJela.pohPil.image,
    saltimbokaName: state.casper.glavnaJela.saltimboka.name,
    saltimbokaWeight: state.casper.glavnaJela.saltimboka.weight,
    saltimbokaInfo: state.casper.glavnaJela.saltimboka.info,
    saltimbokaPrice: state.casper.glavnaJela.saltimboka.price,
    saltimbokaImage: state.casper.glavnaJela.saltimboka.image,
    cordonBlueName: state.casper.glavnaJela.cordonBlue.name,
    cordonBlueWeight: state.casper.glavnaJela.cordonBlue.weight,
    cordonBlueInfo: state.casper.glavnaJela.cordonBlue.info,
    cordonBluePrice: state.casper.glavnaJela.cordonBlue.price,
    cordonBlueImage: state.casper.glavnaJela.cordonBlue.image,
    fileSpicName: state.casper.glavnaJela.fileSpic.name,
    fileSpicWeight: state.casper.glavnaJela.fileSpic.weight,
    fileSpicInfo: state.casper.glavnaJela.fileSpic.info,
    fileSpicPrice: state.casper.glavnaJela.fileSpic.price,
    fileSpicImage: state.casper.glavnaJela.fileSpic.image,
    lignjeCasperName: state.casper.glavnaJela.lignjeCasper.name,
    lignjeCasperWeight: state.casper.glavnaJela.lignjeCasper.weight,
    lignjeCasperInfo: state.casper.glavnaJela.lignjeCasper.info,
    lignjeCasperPrice: state.casper.glavnaJela.lignjeCasper.price,
    lignjeCasperImage: state.casper.glavnaJela.lignjeCasper.image,
    grillTanjirName: state.casper.glavnaJela.grillTanjir.name,
    grillTanjirWeight: state.casper.glavnaJela.grillTanjir.weight,
    grillTanjirInfo: state.casper.glavnaJela.grillTanjir.info,
    grillTanjirPrice: state.casper.glavnaJela.grillTanjir.price,
    grillTanjirImage: state.casper.glavnaJela.grillTanjir.image,
    pilGorgonName: state.casper.glavnaJela.pilGorgon.name,
    pilGorgonWeight: state.casper.glavnaJela.pilGorgon.weight,
    pilGorgonInfo: state.casper.glavnaJela.pilGorgon.info,
    pilGorgonPrice: state.casper.glavnaJela.pilGorgon.price,
    pilGorgonImage: state.casper.glavnaJela.pilGorgon.image,
    pilKariName: state.casper.glavnaJela.pilKari.name,
    pilKariWeight: state.casper.glavnaJela.pilKari.weight,
    pilKariInfo: state.casper.glavnaJela.pilKari.info,
    pilKariPrice: state.casper.glavnaJela.pilKari.price,
    pilKariImage: state.casper.glavnaJela.pilKari.image,
    sumskiSvFileName: state.casper.glavnaJela.sumskiSvFile.name,
    sumskiSvFileWeight: state.casper.glavnaJela.sumskiSvFile.weight,
    sumskiSvFileInfo: state.casper.glavnaJela.sumskiSvFile.info,
    sumskiSvFilePrice: state.casper.glavnaJela.sumskiSvFile.price,
    sumskiSvFileImage: state.casper.glavnaJela.sumskiSvFile.image,
    svFileBiberName: state.casper.glavnaJela.svFileBiber.name,
    svFileBiberWeight: state.casper.glavnaJela.svFileBiber.weight,
    svFileBiberInfo: state.casper.glavnaJela.svFileBiber.info,
    svFileBiberPrice: state.casper.glavnaJela.svFileBiber.price,
    svFileBiberImage: state.casper.glavnaJela.svFileBiber.image,
    sampSnicleName: state.casper.glavnaJela.sampSnicle.name,
    sampSnicleWeight: state.casper.glavnaJela.sampSnicle.weight,
    sampSnicleInfo: state.casper.glavnaJela.sampSnicle.info,
    sampSniclePrice: state.casper.glavnaJela.sampSnicle.price,
    sampSnicleImage: state.casper.glavnaJela.sampSnicle.image,
    ciliKonKarneName: state.casper.glavnaJela.ciliKonKarne.name,
    ciliKonKarneWeight: state.casper.glavnaJela.ciliKonKarne.weight,
    ciliKonKarneInfo: state.casper.glavnaJela.ciliKonKarne.info,
    ciliKonKarnePrice: state.casper.glavnaJela.ciliKonKarne.price,
    ciliKonKarneImage: state.casper.glavnaJela.ciliKonKarne.image,
    classicName: state.casper.slatkePalacinke.classic.name,
    classicWeight: state.casper.slatkePalacinke.classic.weight,
    classicInfo: state.casper.slatkePalacinke.classic.info,
    classicPrice: state.casper.slatkePalacinke.classic.price,
    classicImage: state.casper.slatkePalacinke.classic.image,
    sarenePalacinkeName: state.casper.slatkePalacinke.sarenePalacinke.name,
    sarenePalacinkeWeight: state.casper.slatkePalacinke.sarenePalacinke.weight,
    sarenePalacinkeInfo: state.casper.slatkePalacinke.sarenePalacinke.info,
    sarenePalacinkePrice: state.casper.slatkePalacinke.sarenePalacinke.price,
    sarenePalacinkeImage: state.casper.slatkePalacinke.sarenePalacinke.image,
    medeneName: state.casper.slatkePalacinke.medene.name,
    medeneWeight: state.casper.slatkePalacinke.medene.weight,
    medeneInfo: state.casper.slatkePalacinke.medene.info,
    medenePrice: state.casper.slatkePalacinke.medene.price,
    medeneImage: state.casper.slatkePalacinke.medene.image,
    nutellaName: state.casper.slatkePalacinke.nutella.name,
    nutellaWeight: state.casper.slatkePalacinke.nutella.weight,
    nutellaInfo: state.casper.slatkePalacinke.nutella.info,
    nutellaPrice: state.casper.slatkePalacinke.nutella.price,
    nutellaImage: state.casper.slatkePalacinke.nutella.image,
    dzemName: state.casper.slatkePalacinke.dzem.name,
    dzemWeight: state.casper.slatkePalacinke.dzem.weight,
    dzemInfo: state.casper.slatkePalacinke.dzem.info,
    dzemPrice: state.casper.slatkePalacinke.dzem.price,
    dzemImage: state.casper.slatkePalacinke.dzem.image,
    kremBananicaName: state.casper.slatkePalacinke.kremBananica.name,
    kremBananicaWeight: state.casper.slatkePalacinke.kremBananica.weight,
    kremBananicaInfo: state.casper.slatkePalacinke.kremBananica.info,
    kremBananicaPrice: state.casper.slatkePalacinke.kremBananica.price,
    kremBananicaImage: state.casper.slatkePalacinke.kremBananica.image,
    rafaeloName: state.casper.slatkePalacinke.rafaelo.name,
    rafaeloWeight: state.casper.slatkePalacinke.rafaelo.weight,
    rafaeloInfo: state.casper.slatkePalacinke.rafaelo.info,
    rafaeloPrice: state.casper.slatkePalacinke.rafaelo.price,
    rafaeloImage: state.casper.slatkePalacinke.rafaelo.image,
    chocoCherryName: state.casper.slatkePalacinke.chocoCherry.name,
    chocoCherryWeight: state.casper.slatkePalacinke.chocoCherry.weight,
    chocoCherryInfo: state.casper.slatkePalacinke.chocoCherry.info,
    chocoCherryPrice: state.casper.slatkePalacinke.chocoCherry.price,
    chocoCherryImage: state.casper.slatkePalacinke.chocoCherry.image,
    chocoMocoName: state.casper.slatkePalacinke.chocoMoco.name,
    chocoMocoWeight: state.casper.slatkePalacinke.chocoMoco.weight,
    chocoMocoInfo: state.casper.slatkePalacinke.chocoMoco.info,
    chocoMocoPrice: state.casper.slatkePalacinke.chocoMoco.price,
    chocoMocoImage: state.casper.slatkePalacinke.chocoMoco.image,
    bakinaTajnaName: state.casper.slatkePalacinke.bakinaTajna.name,
    bakinaTajnaWeight: state.casper.slatkePalacinke.bakinaTajna.weight,
    bakinaTajnaInfo: state.casper.slatkePalacinke.bakinaTajna.info,
    bakinaTajnaPrice: state.casper.slatkePalacinke.bakinaTajna.price,
    bakinaTajnaImage: state.casper.slatkePalacinke.bakinaTajna.image,
    cheesecakeName: state.casper.dezert.cheesecake.name,
    cheesecakeWeight: state.casper.dezert.cheesecake.weight,
    cheesecakeInfo: state.casper.dezert.cheesecake.info,
    cheesecakePrice: state.casper.dezert.cheesecake.price,
    cheesecakeImage: state.casper.dezert.cheesecake.image,
    tiramisuName: state.casper.dezert.tiramisu.name,
    tiramisuWeight: state.casper.dezert.tiramisu.weight,
    tiramisuInfo: state.casper.dezert.tiramisu.info,
    tiramisuPrice: state.casper.dezert.tiramisu.price,
    tiramisuImage: state.casper.dezert.tiramisu.image,
    ruskeKapeName: state.casper.dezert.ruskeKape.name,
    ruskeKapeWeight: state.casper.dezert.ruskeKape.weight,
    ruskeKapeInfo: state.casper.dezert.ruskeKape.info,
    ruskeKapePrice: state.casper.dezert.ruskeKape.price,
    ruskeKapeImage: state.casper.dezert.ruskeKape.image,
    vocnaSalataName: state.casper.dezert.vocnaSalata.name,
    vocnaSalataWeight: state.casper.dezert.vocnaSalata.weight,
    vocnaSalataInfo: state.casper.dezert.vocnaSalata.info,
    vocnaSalataPrice: state.casper.dezert.vocnaSalata.price,
    vocnaSalataImage: state.casper.dezert.vocnaSalata.image,
    flamBanName: state.casper.dezert.flamBan.name,
    flamBanWeight: state.casper.dezert.flamBan.weight,
    flamBanInfo: state.casper.dezert.flamBan.info,
    flamBanPrice: state.casper.dezert.flamBan.price,
    flamBanImage: state.casper.dezert.flamBan.image,
    voceKaramelaName: state.casper.dezert.voceKaramela.name,
    voceKaramelaWeight: state.casper.dezert.voceKaramela.weight,
    voceKaramelaInfo: state.casper.dezert.voceKaramela.info,
    voceKaramelaPrice: state.casper.dezert.voceKaramela.price,
    voceKaramelaImage: state.casper.dezert.voceKaramela.image,
    sunkaName: state.casper.sendvici.sunka.name,
    sunkaWeight: state.casper.sendvici.sunka.weight,
    sunkaInfo: state.casper.sendvici.sunka.info,
    sunkaPrice: state.casper.sendvici.sunka.price,
    sunkaImage: state.casper.sendvici.sunka.image,
    slaninaName: state.casper.sendvici.slanina.name,
    slaninaWeight: state.casper.sendvici.slanina.weight,
    slaninaInfo: state.casper.sendvici.slanina.info,
    slaninaPrice: state.casper.sendvici.slanina.price,
    slaninaImage: state.casper.sendvici.slanina.image,
    pecenicaName: state.casper.sendvici.pecenica.name,
    pecenicaWeight: state.casper.sendvici.pecenica.weight,
    pecenicaInfo: state.casper.sendvici.pecenica.info,
    pecenicaPrice: state.casper.sendvici.pecenica.price,
    pecenicaImage: state.casper.sendvici.pecenica.image,
    casperSendvicName: state.casper.sendvici.casperSendvic.name,
    casperSendvicWeight: state.casper.sendvici.casperSendvic.weight,
    casperSendvicInfo: state.casper.sendvici.casperSendvic.info,
    casperSendvicPrice: state.casper.sendvici.casperSendvic.price,
    casperSendvicImage: state.casper.sendvici.casperSendvic.image,
    kulenName: state.casper.sendvici.kulen.name,
    kulenWeight: state.casper.sendvici.kulen.weight,
    kulenInfo: state.casper.sendvici.kulen.info,
    kulenPrice: state.casper.sendvici.kulen.price,
    kulenImage: state.casper.sendvici.kulen.image,
    tunaName: state.casper.sendvici.tuna.name,
    tunaWeight: state.casper.sendvici.tuna.weight,
    tunaInfo: state.casper.sendvici.tuna.info,
    tunaPrice: state.casper.sendvici.tuna.price,
    tunaImage: state.casper.sendvici.tuna.image,
    miniSenSunkaName: state.casper.decijePorcije.miniSenSunka.name,
    miniSenSunkaWeight: state.casper.decijePorcije.miniSenSunka.weight,
    miniSenSunkaInfo: state.casper.decijePorcije.miniSenSunka.info,
    miniSenSunkaPrice: state.casper.decijePorcije.miniSenSunka.price,
    miniSenSunkaImage: state.casper.decijePorcije.miniSenSunka.image,
    miniSenPecenicaName: state.casper.decijePorcije.miniSenPecenica.name,
    miniSenPecenicaWeight: state.casper.decijePorcije.miniSenPecenica.weight,
    miniSenPecenicaInfo: state.casper.decijePorcije.miniSenPecenica.info,
    miniSenPecenicaPrice: state.casper.decijePorcije.miniSenPecenica.price,
    miniSenPecenicaImage: state.casper.decijePorcije.miniSenPecenica.image,
    pohPilMiniName: state.casper.decijePorcije.pohPilMini.name,
    pohPilMiniWeight: state.casper.decijePorcije.pohPilMini.weight,
    pohPilMiniInfo: state.casper.decijePorcije.pohPilMini.info,
    pohPilMiniPrice: state.casper.decijePorcije.pohPilMini.price,
    pohPilMiniImage: state.casper.decijePorcije.pohPilMini.image,
    pastaBolMiniName: state.casper.decijePorcije.pastaBolMini.name,
    pastaBolMiniWeight: state.casper.decijePorcije.pastaBolMini.weight,
    pastaBolMiniInfo: state.casper.decijePorcije.pastaBolMini.info,
    pastaBolMiniPrice: state.casper.decijePorcije.pastaBolMini.price,
    pastaBolMiniImage: state.casper.decijePorcije.pastaBolMini.image,
    pastaNapoliMiniName: state.casper.decijePorcije.pastaNapoliMini.name,
    pastaNapoliMiniWeight: state.casper.decijePorcije.pastaNapoliMini.weight,
    pastaNapoliMiniInfo: state.casper.decijePorcije.pastaNapoliMini.info,
    pastaNapoliMiniPrice: state.casper.decijePorcije.pastaNapoliMini.price,
    pastaNapoliMiniImage: state.casper.decijePorcije.pastaNapoliMini.image,
    capMiniName: state.casper.decijePorcije.capMini.name,
    capMiniWeight: state.casper.decijePorcije.capMini.weight,
    capMiniInfo: state.casper.decijePorcije.capMini.info,
    capMiniPrice: state.casper.decijePorcije.capMini.price,
    capMiniImage: state.casper.decijePorcije.capMini.image,
    specialMiniName: state.casper.decijePorcije.specialMini.name,
    specialMiniWeight: state.casper.decijePorcije.specialMini.weight,
    specialMiniInfo: state.casper.decijePorcije.specialMini.info,
    specialMiniPrice: state.casper.decijePorcije.specialMini.price,
    specialMiniImage: state.casper.decijePorcije.specialMini.image,
    pizzaPalName: state.casper.decijePorcije.pizzaPal.name,
    pizzaPalWeight: state.casper.decijePorcije.pizzaPal.weight,
    pizzaPalInfo: state.casper.decijePorcije.pizzaPal.info,
    pizzaPalPrice: state.casper.decijePorcije.pizzaPal.price,
    pizzaPalImage: state.casper.decijePorcije.pizzaPal.image,
    classicPalName: state.casper.decijePorcije.classicPal.name,
    classicPalWeight: state.casper.decijePorcije.classicPal.weight,
    classicPalInfo: state.casper.decijePorcije.classicPal.info,
    classicPalPrice: state.casper.decijePorcije.classicPal.price,
    classicPalImage: state.casper.decijePorcije.classicPal.image,
    sarenaPalName: state.casper.decijePorcije.sarenaPal.name,
    sarenaPalWeight: state.casper.decijePorcije.sarenaPal.weight,
    sarenaPalInfo: state.casper.decijePorcije.sarenaPal.info,
    sarenaPalPrice: state.casper.decijePorcije.sarenaPal.price,
    sarenaPalImage: state.casper.decijePorcije.sarenaPal.image,
    nutellaPalName: state.casper.decijePorcije.nutellaPal.name,
    nutellaPalWeight: state.casper.decijePorcije.nutellaPal.weight,
    nutellaPalInfo: state.casper.decijePorcije.nutellaPal.info,
    nutellaPalPrice: state.casper.decijePorcije.nutellaPal.price,
    nutellaPalImage: state.casper.decijePorcije.nutellaPal.image,
    margaritaMName: state.casper.pizza.margaritaM.name,
    margaritaMWeight: state.casper.pizza.margaritaM.weight,
    margaritaMInfo: state.casper.pizza.margaritaM.info,
    margaritaMPrice: state.casper.pizza.margaritaM.price,
    margaritaMImage: state.casper.pizza.margaritaM.image,
    margaritaLName: state.casper.pizza.margaritaL.name,
    margaritaLWeight: state.casper.pizza.margaritaL.weight,
    margaritaLInfo: state.casper.pizza.margaritaL.info,
    margaritaLPrice: state.casper.pizza.margaritaL.price,
    margaritaLImage: state.casper.pizza.margaritaL.image,
    margaritaXLName: state.casper.pizza.margaritaXL.name,
    margaritaXLWeight: state.casper.pizza.margaritaXL.weight,
    margaritaXLInfo: state.casper.pizza.margaritaXL.info,
    margaritaXLPrice: state.casper.pizza.margaritaXL.price,
    margaritaXLImage: state.casper.pizza.margaritaXL.image,
    quatroFormagieMName: state.casper.pizza.quatroFormagieM.name,
    quatroFormagieMWeight: state.casper.pizza.quatroFormagieM.weight,
    quatroFormagieMInfo: state.casper.pizza.quatroFormagieM.info,
    quatroFormagieMPrice: state.casper.pizza.quatroFormagieM.price,
    quatroFormagieMImage: state.casper.pizza.quatroFormagieM.image,
    quatroFormagieLName: state.casper.pizza.quatroFormagieL.name,
    quatroFormagieLWeight: state.casper.pizza.quatroFormagieL.weight,
    quatroFormagieLInfo: state.casper.pizza.quatroFormagieL.info,
    quatroFormagieLPrice: state.casper.pizza.quatroFormagieL.price,
    quatroFormagieLImage: state.casper.pizza.quatroFormagieL.image,
    quatroFormagieXLName: state.casper.pizza.quatroFormagieXL.name,
    quatroFormagieXLWeight: state.casper.pizza.quatroFormagieXL.weight,
    quatroFormagieXLInfo: state.casper.pizza.quatroFormagieXL.info,
    quatroFormagieXLPrice: state.casper.pizza.quatroFormagieXL.price,
    quatroFormagieXLImage: state.casper.pizza.quatroFormagieXL.image,
    funghiMName: state.casper.pizza.funghiM.name,
    funghiMWeight: state.casper.pizza.funghiM.weight,
    funghiMInfo: state.casper.pizza.funghiM.info,
    funghiMPrice: state.casper.pizza.funghiM.price,
    funghiMImage: state.casper.pizza.funghiM.image,
    funghiLName: state.casper.pizza.funghiL.name,
    funghiLWeight: state.casper.pizza.funghiL.weight,
    funghiLInfo: state.casper.pizza.funghiL.info,
    funghiLPrice: state.casper.pizza.funghiL.price,
    funghiLImage: state.casper.pizza.funghiL.image,
    funghiXLName: state.casper.pizza.funghiXL.name,
    funghiXLWeight: state.casper.pizza.funghiXL.weight,
    funghiXLInfo: state.casper.pizza.funghiXL.info,
    funghiXLPrice: state.casper.pizza.funghiXL.price,
    funghiXLImage: state.casper.pizza.funghiXL.image,
    quatroStagioniMName: state.casper.pizza.quatroStagioniM.name,
    quatroStagioniMWeight: state.casper.pizza.quatroStagioniM.weight,
    quatroStagioniMInfo: state.casper.pizza.quatroStagioniM.info,
    quatroStagioniMPrice: state.casper.pizza.quatroStagioniM.price,
    quatroStagioniMImage: state.casper.pizza.quatroStagioniM.image,
    quatroStagioniLName: state.casper.pizza.quatroStagioniL.name,
    quatroStagioniLWeight: state.casper.pizza.quatroStagioniL.weight,
    quatroStagioniLInfo: state.casper.pizza.quatroStagioniL.info,
    quatroStagioniLPrice: state.casper.pizza.quatroStagioniL.price,
    quatroStagioniLImage: state.casper.pizza.quatroStagioniL.image,
    quatroStagioniXLName: state.casper.pizza.quatroStagioniXL.name,
    quatroStagioniXLWeight: state.casper.pizza.quatroStagioniXL.weight,
    quatroStagioniXLInfo: state.casper.pizza.quatroStagioniXL.info,
    quatroStagioniXLPrice: state.casper.pizza.quatroStagioniXL.price,
    quatroStagioniXLImage: state.casper.pizza.quatroStagioniXL.image,
    capricciosaMName: state.casper.pizza.capricciosaM.name,
    capricciosaMWeight: state.casper.pizza.capricciosaM.weight,
    capricciosaMInfo: state.casper.pizza.capricciosaM.info,
    capricciosaMPrice: state.casper.pizza.capricciosaM.price,
    capricciosaMImage: state.casper.pizza.capricciosaM.image,
    capricciosaLName: state.casper.pizza.capricciosaL.name,
    capricciosaLWeight: state.casper.pizza.capricciosaL.weight,
    capricciosaLInfo: state.casper.pizza.capricciosaL.info,
    capricciosaLPrice: state.casper.pizza.capricciosaL.price,
    capricciosaLImage: state.casper.pizza.capricciosaL.image,
    capricciosaXLName: state.casper.pizza.capricciosaXL.name,
    capricciosaXLWeight: state.casper.pizza.capricciosaXL.weight,
    capricciosaXLInfo: state.casper.pizza.capricciosaXL.info,
    capricciosaXLPrice: state.casper.pizza.capricciosaXL.price,
    capricciosaXLImage: state.casper.pizza.capricciosaXL.image,
    piroskaMName: state.casper.pizza.piroskaM.name,
    piroskaMWeight: state.casper.pizza.piroskaM.weight,
    piroskaMInfo: state.casper.pizza.piroskaM.info,
    piroskaMPrice: state.casper.pizza.piroskaM.price,
    piroskaMImage: state.casper.pizza.piroskaM.image,
    piroskaLName: state.casper.pizza.piroskaL.name,
    piroskaLWeight: state.casper.pizza.piroskaL.weight,
    piroskaLInfo: state.casper.pizza.piroskaL.info,
    piroskaLPrice: state.casper.pizza.piroskaL.price,
    piroskaLImage: state.casper.pizza.piroskaL.image,
    piroskaXLName: state.casper.pizza.piroskaXL.name,
    piroskaXLWeight: state.casper.pizza.piroskaXL.weight,
    piroskaXLInfo: state.casper.pizza.piroskaXL.info,
    piroskaXLPrice: state.casper.pizza.piroskaXL.price,
    piroskaXLImage: state.casper.pizza.piroskaXL.image,
    americanaMName: state.casper.pizza.americanaM.name,
    americanaMWeight: state.casper.pizza.americanaM.weight,
    americanaMInfo: state.casper.pizza.americanaM.info,
    americanaMPrice: state.casper.pizza.americanaM.price,
    americanaMImage: state.casper.pizza.americanaM.image,
    americanaLName: state.casper.pizza.americanaL.name,
    americanaLWeight: state.casper.pizza.americanaL.weight,
    americanaLInfo: state.casper.pizza.americanaL.info,
    americanaLPrice: state.casper.pizza.americanaL.price,
    americanaLImage: state.casper.pizza.americanaL.image,
    americanaXLName: state.casper.pizza.americanaXL.name,
    americanaXLWeight: state.casper.pizza.americanaXL.weight,
    americanaXLInfo: state.casper.pizza.americanaXL.info,
    americanaXLPrice: state.casper.pizza.americanaXL.price,
    americanaXLImage: state.casper.pizza.americanaXL.image,
    dedinaPizzaMName: state.casper.pizza.dedinaPizzaM.name,
    dedinaPizzaMWeight: state.casper.pizza.dedinaPizzaM.weight,
    dedinaPizzaMInfo: state.casper.pizza.dedinaPizzaM.info,
    dedinaPizzaMPrice: state.casper.pizza.dedinaPizzaM.price,
    dedinaPizzaMImage: state.casper.pizza.dedinaPizzaM.image,
    dedinaPizzaLName: state.casper.pizza.dedinaPizzaL.name,
    dedinaPizzaLWeight: state.casper.pizza.dedinaPizzaL.weight,
    dedinaPizzaLInfo: state.casper.pizza.dedinaPizzaL.info,
    dedinaPizzaLPrice: state.casper.pizza.dedinaPizzaL.price,
    dedinaPizzaLImage: state.casper.pizza.dedinaPizzaL.image,
    dedinaPizzaXLName: state.casper.pizza.dedinaPizzaXL.name,
    dedinaPizzaXLWeight: state.casper.pizza.dedinaPizzaXL.weight,
    dedinaPizzaXLInfo: state.casper.pizza.dedinaPizzaXL.info,
    dedinaPizzaXLPrice: state.casper.pizza.dedinaPizzaXL.price,
    dedinaPizzaXLImage: state.casper.pizza.dedinaPizzaXL.image,
    casperPizzaMName: state.casper.pizza.casperPizzaM.name,
    casperPizzaMWeight: state.casper.pizza.casperPizzaM.weight,
    casperPizzaMInfo: state.casper.pizza.casperPizzaM.info,
    casperPizzaMPrice: state.casper.pizza.casperPizzaM.price,
    casperPizzaMImage: state.casper.pizza.casperPizzaM.image,
    casperPizzaLName: state.casper.pizza.casperPizzaL.name,
    casperPizzaLWeight: state.casper.pizza.casperPizzaL.weight,
    casperPizzaLInfo: state.casper.pizza.casperPizzaL.info,
    casperPizzaLPrice: state.casper.pizza.casperPizzaL.price,
    casperPizzaLImage: state.casper.pizza.casperPizzaL.image,
    casperPizzaXLName: state.casper.pizza.casperPizzaXL.name,
    casperPizzaXLWeight: state.casper.pizza.casperPizzaXL.weight,
    casperPizzaXLInfo: state.casper.pizza.casperPizzaXL.info,
    casperPizzaXLPrice: state.casper.pizza.casperPizzaXL.price,
    casperPizzaXLImage: state.casper.pizza.casperPizzaXL.image,
    casperSpecialMName: state.casper.pizza.casperSpecialM.name,
    casperSpecialMWeight: state.casper.pizza.casperSpecialM.weight,
    casperSpecialMInfo: state.casper.pizza.casperSpecialM.info,
    casperSpecialMPrice: state.casper.pizza.casperSpecialM.price,
    casperSpecialMImage: state.casper.pizza.casperSpecialM.image,
    casperSpecialLName: state.casper.pizza.casperSpecialL.name,
    casperSpecialLWeight: state.casper.pizza.casperSpecialL.weight,
    casperSpecialLInfo: state.casper.pizza.casperSpecialL.info,
    casperSpecialLPrice: state.casper.pizza.casperSpecialL.price,
    casperSpecialLImage: state.casper.pizza.casperSpecialL.image,
    casperSpecialXLName: state.casper.pizza.casperSpecialXL.name,
    casperSpecialXLWeight: state.casper.pizza.casperSpecialXL.weight,
    casperSpecialXLInfo: state.casper.pizza.casperSpecialXL.info,
    casperSpecialXLPrice: state.casper.pizza.casperSpecialXL.price,
    casperSpecialXLImage: state.casper.pizza.casperSpecialXL.image,
    vegetarijanaMName: state.casper.pizza.vegetarijanaM.name,
    vegetarijanaMWeight: state.casper.pizza.vegetarijanaM.weight,
    vegetarijanaMInfo: state.casper.pizza.vegetarijanaM.info,
    vegetarijanaMPrice: state.casper.pizza.vegetarijanaM.price,
    vegetarijanaMImage: state.casper.pizza.vegetarijanaM.image,
    vegetarijanaLName: state.casper.pizza.vegetarijanaL.name,
    vegetarijanaLWeight: state.casper.pizza.vegetarijanaL.weight,
    vegetarijanaLInfo: state.casper.pizza.vegetarijanaL.info,
    vegetarijanaLPrice: state.casper.pizza.vegetarijanaL.price,
    vegetarijanaLImage: state.casper.pizza.vegetarijanaL.image,
    vegetarijanaXLName: state.casper.pizza.vegetarijanaXL.name,
    vegetarijanaXLWeight: state.casper.pizza.vegetarijanaXL.weight,
    vegetarijanaXLInfo: state.casper.pizza.vegetarijanaXL.info,
    vegetarijanaXLPrice: state.casper.pizza.vegetarijanaXL.price,
    vegetarijanaXLImage: state.casper.pizza.vegetarijanaXL.image,
    srbijanaMName: state.casper.pizza.srbijanaM.name,
    srbijanaMWeight: state.casper.pizza.srbijanaM.weight,
    srbijanaMInfo: state.casper.pizza.srbijanaM.info,
    srbijanaMPrice: state.casper.pizza.srbijanaM.price,
    srbijanaMImage: state.casper.pizza.srbijanaM.image,
    srbijanaLName: state.casper.pizza.srbijanaL.name,
    srbijanaLWeight: state.casper.pizza.srbijanaL.weight,
    srbijanaLInfo: state.casper.pizza.srbijanaL.info,
    srbijanaLPrice: state.casper.pizza.srbijanaL.price,
    srbijanaLImage: state.casper.pizza.srbijanaL.image,
    srbijanaXLName: state.casper.pizza.srbijanaXL.name,
    srbijanaXLWeight: state.casper.pizza.srbijanaXL.weight,
    srbijanaXLInfo: state.casper.pizza.srbijanaXL.info,
    srbijanaXLPrice: state.casper.pizza.srbijanaXL.price,
    srbijanaXLImage: state.casper.pizza.srbijanaXL.image,
    italijanaMName: state.casper.pizza.italijanaM.name,
    italijanaMWeight: state.casper.pizza.italijanaM.weight,
    italijanaMInfo: state.casper.pizza.italijanaM.info,
    italijanaMPrice: state.casper.pizza.italijanaM.price,
    italijanaMImage: state.casper.pizza.italijanaM.image,
    italijanaLName: state.casper.pizza.italijanaL.name,
    italijanaLWeight: state.casper.pizza.italijanaL.weight,
    italijanaLInfo: state.casper.pizza.italijanaL.info,
    italijanaLPrice: state.casper.pizza.italijanaL.price,
    italijanaLImage: state.casper.pizza.italijanaL.image,
    italijanaXLName: state.casper.pizza.italijanaXL.name,
    italijanaXLWeight: state.casper.pizza.italijanaXL.weight,
    italijanaXLInfo: state.casper.pizza.italijanaXL.info,
    italijanaXLPrice: state.casper.pizza.italijanaXL.price,
    italijanaXLImage: state.casper.pizza.italijanaXL.image
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
)(CasperScreen);
