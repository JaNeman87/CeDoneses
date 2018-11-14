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
import Toggle from '../../components/Toggle/Toggle'
import PizzaToggle from '../../components/Toggle/PizzaToggle'

class ColosseoScreen extends Component {
  state = {
    jelovnik: true,
    popularno: false,
    rostiljToggle: false,
    toplaPredjelaToggle: false,
    pizzaToggle: false,
    transToggle: false,
    margaritaToggle: false,
    vezuvioToggle: false,
    capricciosaToggle: false,
    funghiToggle: false,
    quattroStagioniToggle: false,
    quattroTipiDiFormaggioToggle:false,
    bologneseToggle: false,
    vegeterijanaToggle: false,
    tonnoToggle: false,
    posnaPizzaToggle:false,
    girosDiPolloPizzaToggle:false,
    prosciuttoPrsutToggle:false,
    colosseoToggle:false,
    zlatiboracToggle:false,
    napolitanoToggle: false,
    fruttiDiMareToggle:false,
    ilDiavoloToggle:false,
    srbijaToggle: false,
    pizzaGourmetToggle:false,
    piroskaToggle: false,
    // kreirajteSvojuPizzuToggle: false,
    salateToggle: false,
    moreToggle: false,
    desertToggle: false,
    jelaPoPorudzbiniToggle: false,
    pastaToggle: false,
    priloziToggle: false
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
  rostiljToggleHandler = () => {
    const newState = !this.state.rostiljToggle;
    this.setState({ rostiljToggle: newState });
  };
  toplaPredjelaToggleHandler = () => {
    const newState = !this.state.toplaPredjelaToggle;
    this.setState({ toplaPredjelaToggle: newState });
  };
  pizzaToggleHandler = () => {
    const newState = !this.state.pizzaToggle;
    this.setState({ pizzaToggle: newState });
  };
  transToggleHandler = () => {
    const newState = !this.state.transToggle;
    this.setState({ transToggle: newState });
  };
  margaritaToggleHandler = () => {
    const newState = !this.state.margaritaToggle;
    this.setState({ margaritaToggle: newState });
  };
  vezuvioToggleHandler = () => {
    const newState = !this.state.vezuvioToggle;
    this.setState({ vezuvioToggle: newState });
  };
  capricciosaToggleHandler = () => {
    const newState = !this.state.capricciosaToggle;
    this.setState({ capricciosaToggle: newState });
  };
  funghiToggleHandler = () => {
    const newState = !this.state.funghiToggle;
    this.setState({ funghiToggle: newState });
  }
  quattroStagioniToggleHandler = () => {
    const newState = !this.state.quattroStagioniToggle;
    this.setState({ quattroStagioniToggle: newState });
  }
  quattroTipiDiFormaggioToggleHandler=()=>{
    const newState = !this.state.quattroTipiDiFormaggioToggle;
    this.setState({ quattroTipiDiFormaggioToggle: newState });
  }

  bologneseToggleHandler=()=>{
    const newState = !this.state.bologneseToggle;
    this.setState({ bologneseToggle: newState });
  }

  vegeterijanaToggleHandler=()=>{
    const newState = !this.state.vegeterijanaToggle;
    this.setState({ vegeterijanaToggle: newState });
  }

  tonnoToggleHandler=()=>{
    const newState = !this.state.tonnoToggle;
    this.setState({ tonnoToggle: newState });
  }

  posnaPizzaToggleHandler=()=>{
    const newState = !this.state.posnaPizzaToggle;
    this.setState({ posnaPizzaToggle: newState });
  }

  girosDiPolloPizzaToggleHandler=()=>{
    const newState = !this.state.girosDiPolloPizzaToggle;
    this.setState({ girosDiPolloPizzaToggle: newState });
  }

  prosciuttoPrsutToggleHandler=()=>{
    const newState = !this.state.prosciuttoPrsutToggle;
    this.setState({ prosciuttoPrsutToggle: newState });
  }
  colosseoToggleHandler=()=>{
    const newState = !this.state.colosseoToggle;
    this.setState({ colosseoToggle: newState });
  }

  zlatiboracToggleHandler =()=>{
    const newState = !this.state.zlatiboracToggle;
    this.setState({ zlatiboracToggle: newState });
  }

  napolitanoToggleHandler =()=>{
    const newState = !this.state.napolitanoToggle;
    this.setState({ napolitanoToggle: newState });
  }

  fruttiDiMareToggleHandler =()=>{
    const newState = !this.state.fruttiDiMareToggle;
    this.setState({ fruttiDiMareToggle: newState });
  }

  ilDiavoloToggleHandler =()=>{
    const newState = !this.state.ilDiavoloToggle;
    this.setState({ ilDiavoloToggle: newState });
  }
  srbijaToggleHandler =()=>{
    const newState = !this.state.srbijaToggle;
    this.setState({ srbijaToggle: newState });
  }

  pizzaGourmetToggleHandler =()=>{
    const newState = !this.state.pizzaGourmetToggle;
    this.setState({ pizzaGourmetToggle: newState });
  }

  piroskaToggleHandler =()=>{
    const newState = !this.state.piroskaToggle;
    this.setState({ piroskaToggle: newState });
  }

  // kreirajteSvojuPizzuToggleHandler =()=>{
  //   const newState = !this.state.kreirajteSvojuPizzuToggle;
  //   this.setState({ kreirajteSvojuPizzuToggle: newState });
  // }
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
  jelaPoPorudzbiniToggleHandler = () => {
    const newState = !this.state.jelaPoPorudzbiniToggle;
    this.setState({ jelaPoPorudzbiniToggle: newState });
  };
  pastaToggleHandler = () => {
    const newState = !this.state.pastaToggle;
    this.setState({ pastaToggle: newState });
  };
  priloziToggleHandler = () => {
    const newState = !this.state.priloziToggle;
    this.setState({ priloziToggle: newState });
  };
  transizione28cmHandler = () => {
    this.props.addToCart(
      this.props.transizione28cmName,
      this.props.transizione28cmWeight,
      this.props.transizione28cmInfo,
      this.props.transizione28cmPrice,
      this.props.transizione28cmImage
    );
    console.log(this.props.addedToCart);
  };

  transizione35cmHandler = () => {
    this.props.addToCart(
      this.props.transizione35cmName,
      this.props.transizione35cmWeight,
      this.props.transizione35cmInfo,
      this.props.transizione35cmPrice,
      this.props.transizione35cmImage
    );
  };
  transizione45cmHandler = () => {
    this.props.addToCart(
      this.props.transizione45cmName,
      this.props.transizione45cmWeight,
      this.props.transizione45cmInfo,
      this.props.transizione45cmPrice,
      this.props.transizione45cmImage
    );
  };
  transizione50cmHandler = () => {
    this.props.addToCart(
      this.props.transizione50cmName,
      this.props.transizione50cmWeight,
      this.props.transizione50cmInfo,
      this.props.transizione50cmPrice,
      this.props.transizione50cmImage
    );
  };

  margarita28cmHandler = () => {
    this.props.addToCart(
      this.props.margarita28cmName,
      this.props.margarita28cmWeight,
      this.props.margarita28cmInfo,
      this.props.margarita28cmPrice,
      this.props.margarita28cmImage
    );
  };
  margarita35cmHandler = () => {
    this.props.addToCart(
      this.props.margarita35cmName,
      this.props.margarita35cmWeight,
      this.props.margarita35cmInfo,
      this.props.margarita35cmPrice,
      this.props.margarita35cmImage
    );
  };
  margarita45cmHandler = () => {
    this.props.addToCart(
      this.props.margarita45cmName,
      this.props.margarita45cmWeight,
      this.props.margarita45cmInfo,
      this.props.margarita45cmPrice,
      this.props.margarita45cmImage
    );
  };

  margarita50cmHandler = () => {
    this.props.addToCart(
      this.props.margarita50cmName,
      this.props.margarita50cmWeight,
      this.props.margarita50cmInfo,
      this.props.margarita50cmPrice,
      this.props.margarita50cmImage
    );
  };

  vezuvio28cmHandler = () => {
    this.props.addToCart(
      this.props.vezuvio28cmName,
      this.props.vezuvio28cmWeight,
      this.props.vezuvio28cmInfo,
      this.props.vezuvio28cmPrice,
      this.props.vezuvio28cmImage
    );
  };

  vezuvio35cmHandler = () => {
    this.props.addToCart(
      this.props.vezuvio35cmName,
      this.props.vezuvio35cmWeight,
      this.props.vezuvio35cmInfo,
      this.props.vezuvio35cmPrice,
      this.props.vezuvio35cmImage
    );
  };

  vezuvio45cmHandler = () => {
    this.props.addToCart(
      this.props.vezuvio45cmName,
      this.props.vezuvio45cmWeight,
      this.props.vezuvio45cmInfo,
      this.props.vezuvio45cmPrice,
      this.props.vezuvio45cmImage
    );
  };

  vezuvio50cmHandler = () => {
    this.props.addToCart(
      this.props.vezuvio50cmName,
      this.props.vezuvio50cmWeight,
      this.props.vezuvio50cmInfo,
      this.props.vezuvio50cmPrice,
      this.props.vezuvio50cmImage
    );
  };
  capricciosa28cmHandler = () => {
    this.props.addToCart(
      this.props.capricciosa28cmName,
      this.props.capricciosa28cmWeight,
      this.props.capricciosa28cmInfo,
      this.props.capricciosa28cmPrice,
      this.props.capricciosa28cmImage
    );
  };
  capricciosa35cmHandler = () => {
    this.props.addToCart(
      this.props.capricciosa35cmName,
      this.props.capricciosa35cmWeight,
      this.props.capricciosa35cmInfo,
      this.props.capricciosa35cmPrice,
      this.props.capricciosa35cmImage
    );
  };
  capricciosa45cmHandler = () => {
    this.props.addToCart(
      this.props.capricciosa45cmName,
      this.props.capricciosa45cmWeight,
      this.props.capricciosa45cmInfo,
      this.props.capricciosa45cmPrice,
      this.props.capricciosa45cmImage
    );
  };
  capricciosa50cmHandler = () => {
    this.props.addToCart(
      this.props.capricciosa50cmName,
      this.props.capricciosa50cmWeight,
      this.props.capricciosa50cmInfo,
      this.props.capricciosa50cmPrice,
      this.props.capricciosa50cmImage
    );
  };
  funghi28cmHandler = () => {
    this.props.addToCart(
      this.props.funghi28cmName,
      this.props.funghi28cmWeight,
      this.props.funghi28cmInfo,
      this.props.funghi28cmPrice,
      this.props.funghi28cmImage
    );
  };
  funghi35cmHandler = () => {
    this.props.addToCart(
      this.props.funghi35cmName,
      this.props.funghi35cmWeight,
      this.props.funghi35cmInfo,
      this.props.funghi35cmPrice,
      this.props.funghi35cmImage
    );
  };
  funghi45cmHandler = () => {
    this.props.addToCart(
      this.props.funghi45cmName,
      this.props.funghi45cmWeight,
      this.props.funghi45cmInfo,
      this.props.funghi45cmPrice,
      this.props.funghi45cmImage
    );
  };
  funghi50cmHandler = () => {
    this.props.addToCart(
      this.props.funghi50cmName,
      this.props.funghi50cmWeight,
      this.props.funghi50cmInfo,
      this.props.funghi50cmPrice,
      this.props.funghi50cmImage
    );
  };
  quattroStagioni28cmHandler = () => {
    this.props.addToCart(
      this.props.quattroStagioni28cmName,
      this.props.quattroStagioni28cmWeight,
      this.props.quattroStagioni28cmInfo,
      this.props.quattroStagioni28cmPrice,
      this.props.quattroStagioni28cmImage
    );
  };
  quattroStagioni35cmHandler = () => {
    this.props.addToCart(
      this.props.quattroStagioni35cmName,
      this.props.quattroStagioni35cmWeight,
      this.props.quattroStagioni35cmInfo,
      this.props.quattroStagioni35cmPrice,
      this.props.quattroStagioni35cmImage
    );
  };
  quattroStagioni45cmHandler = () => {
    this.props.addToCart(
      this.props.quattroStagioni45cmName,
      this.props.quattroStagioni45cmWeight,
      this.props.quattroStagioni45cmInfo,
      this.props.quattroStagioni45cmPrice,
      this.props.quattroStagioni45cmImage
    );
  };

  quattroStagioni50cmHandler = () => {
    this.props.addToCart(
      this.props.quattroStagioni50cmName,
      this.props.quattroStagioni50cmWeight,
      this.props.quattroStagioni50cmInfo,
      this.props.quattroStagioni50cmPrice,
      this.props.quattroStagioni50cmImage
    );
  };
  quattroTipiDiFormaggio28cmHandler = () => {
    this.props.addToCart(
      this.props.quattroTipiDiFormaggio28cmName,
      this.props.quattroTipiDiFormaggio28cmWeight,
      this.props.quattroTipiDiFormaggio28cmInfo,
      this.props.quattroTipiDiFormaggio28cmPrice,
      this.props.quattroTipiDiFormaggio28cmImage
    );
  };
  quattroTipiDiFormaggio35cmHandler = () => {
    this.props.addToCart(
      this.props.quattroTipiDiFormaggio35cmName,
      this.props.quattroTipiDiFormaggio35cmWeight,
      this.props.quattroTipiDiFormaggio35cmInfo,
      this.props.quattroTipiDiFormaggio35cmPrice,
      this.props.quattroTipiDiFormaggio35cmImage
    );
  };

  quattroTipiDiFormaggio45cmHandler = () => {
    this.props.addToCart(
      this.props.quattroTipiDiFormaggio45cmName,
      this.props.quattroTipiDiFormaggio45cmWeight,
      this.props.quattroTipiDiFormaggio45cmInfo,
      this.props.quattroTipiDiFormaggio45cmPrice,
      this.props.quattroTipiDiFormaggio45cmImage
    );
  };

  quattroTipiDiFormaggio50cmHandler = () => {
    this.props.addToCart(
      this.props.quattroTipiDiFormaggio50cmName,
      this.props.quattroTipiDiFormaggio50cmWeight,
      this.props.quattroTipiDiFormaggio50cmInfo,
      this.props.quattroTipiDiFormaggio50cmPrice,
      this.props.quattroTipiDiFormaggio50cmImage
    );
  };

  bolognese28cmHandler = () => {
    this.props.addToCart(
      this.props.bolognese28cmName,
      this.props.bolognese28cmWeight,
      this.props.bolognese28cmInfo,
      this.props.bolognese28cmPrice,
      this.props.bolognese28cmImage
    );
  };

  bolognese35cmHandler = () => {
    this.props.addToCart(
      this.props.bolognese35cmName,
      this.props.bolognese35cmWeight,
      this.props.bolognese35cmInfo,
      this.props.bolognese35cmPrice,
      this.props.bolognese35cmImage
    );
  };

  bolognese45cmHandler = () => {
    this.props.addToCart(
      this.props.bolognese45cmName,
      this.props.bolognese45cmWeight,
      this.props.bolognese45cmInfo,
      this.props.bolognese45cmPrice,
      this.props.bolognese45cmImage
    );
  };

  bolognese50cmHandler = () => {
    this.props.addToCart(
      this.props.bolognese50cmName,
      this.props.bolognese50cmWeight,
      this.props.bolognese50cmInfo,
      this.props.bolognese50cmPrice,
      this.props.bolognese50cmImage
    );
  };

  vegeterijana28cmHandler = () => {
    this.props.addToCart(
      this.props.vegeterijana28cmName,
      this.props.vegeterijana28cmWeight,
      this.props.vegeterijana28cmInfo,
      this.props.vegeterijana28cmPrice,
      this.props.vegeterijana28cmImage
    );
  };
  vegeterijana35cmHandler = () => {
    this.props.addToCart(
      this.props.vegeterijana35cmName,
      this.props.vegeterijana35cmWeight,
      this.props.vegeterijana35cmInfo,
      this.props.vegeterijana35cmPrice,
      this.props.vegeterijana35cmImage
    );
  };
  vegeterijana45cmHandler = () => {
    this.props.addToCart(
      this.props.vegeterijana45cmName,
      this.props.vegeterijana45cmWeight,
      this.props.vegeterijana45cmInfo,
      this.props.vegeterijana45cmPrice,
      this.props.vegeterijana45cmImage
    );
  };
  vegeterijana50cmHandler = () => {
    this.props.addToCart(
      this.props.vegeterijana50cmName,
      this.props.vegeterijana50cmWeight,
      this.props.vegeterijana50cmInfo,
      this.props.vegeterijana50cmPrice,
      this.props.vegeterijana50cmImage
    );
  };

  tonno35cmHandler = () => {
    this.props.addToCart(
      this.props.tonno35cmName,
      this.props.tonno35cmWeight,
      this.props.tonno35cmInfo,
      this.props.tonno35cmPrice,
      this.props.tonno35cmImage
    );
  };
  tonno45cmHandler = () => {
    this.props.addToCart(
      this.props.tonno45cmName,
      this.props.tonno45cmWeight,
      this.props.tonno45cmInfo,
      this.props.tonno45cmPrice,
      this.props.tonno45cmImage
    );
  };

  tonno50cmHandler = () => {
    this.props.addToCart(
      this.props.tonno50cmName,
      this.props.tonno50cmWeight,
      this.props.tonno50cmInfo,
      this.props.tonno50cmPrice,
      this.props.tonno50cmImage
    );
  };

  posnaPizza28cmHandler = () => {
    this.props.addToCart(
      this.props.posnaPizza28cmName,
      this.props.posnaPizza28cmWeight,
      this.props.posnaPizza28cmInfo,
      this.props.posnaPizza28cmPrice,
      this.props.posnaPizza28cmImage
    );
  };

  posnaPizza35cmHandler = () => {
    this.props.addToCart(
      this.props.posnaPizza35cmName,
      this.props.posnaPizza35cmWeight,
      this.props.posnaPizza35cmInfo,
      this.props.posnaPizza35cmPrice,
      this.props.posnaPizza35cmImage
    );
  };

  posnaPizza45cmHandler = () => {
    this.props.addToCart(
      this.props.posnaPizza45cmName,
      this.props.posnaPizza45cmWeight,
      this.props.posnaPizza45cmInfo,
      this.props.posnaPizza45cmPrice,
      this.props.posnaPizza45cmImage
    );
  };
  posnaPizza50cmHandler = () => {
    this.props.addToCart(
      this.props.posnaPizza50cmName,
      this.props.posnaPizza50cmWeight,
      this.props.posnaPizza50cmInfo,
      this.props.posnaPizza50cmPrice,
      this.props.posnaPizza50cmImage
    );
  };

  girosDiPolloPizza35cmHandler= () => {
    this.props.addToCart(
      this.props.girosDiPolloPizza35cmName,
      this.props.girosDiPolloPizza35cmWeight,
      this.props.girosDiPolloPizza35cmInfo,
      this.props.girosDiPolloPizza35cmPrice,
      this.props.girosDiPolloPizza35cmImage
    );
  };

  girosDiPolloPizza45cmHandler= () => {
    this.props.addToCart(
      this.props.girosDiPolloPizza45cmName,
      this.props.girosDiPolloPizza45cmWeight,
      this.props.girosDiPolloPizza45cmInfo,
      this.props.girosDiPolloPizza45cmPrice,
      this.props.girosDiPolloPizza45cmImage
    );
  };
  girosDiPolloPizza50cmHandler= () => {
    this.props.addToCart(
      this.props.girosDiPolloPizza50cmName,
      this.props.girosDiPolloPizza50cmWeight,
      this.props.girosDiPolloPizza50cmInfo,
      this.props.girosDiPolloPizza50cmPrice,
      this.props.girosDiPolloPizza50cmImage
    );
  };

  prosciuttoPrsut28cmHandler= () => {
    this.props.addToCart(
      this.props.prosciuttoPrsut28cmName,
      this.props.prosciuttoPrsut28cmWeight,
      this.props.prosciuttoPrsut28cmInfo,
      this.props.prosciuttoPrsut28cmPrice,
      this.props.prosciuttoPrsut28cmImage
    );
  };

  prosciuttoPrsut35cmHandler= () => {
    this.props.addToCart(
      this.props.prosciuttoPrsut35cmName,
      this.props.prosciuttoPrsut35cmWeight,
      this.props.prosciuttoPrsut35cmInfo,
      this.props.prosciuttoPrsut35cmPrice,
      this.props.prosciuttoPrsut35cmImage
    );
  };

  prosciuttoPrsut45cmHandler= () => {
    this.props.addToCart(
      this.props.prosciuttoPrsut45cmName,
      this.props.prosciuttoPrsut45cmWeight,
      this.props.prosciuttoPrsut45cmInfo,
      this.props.prosciuttoPrsut45cmPrice,
      this.props.prosciuttoPrsut45cmImage
    );
  };

  prosciuttoPrsut50cmHandler= () => {
    this.props.addToCart(
      this.props.prosciuttoPrsut50cmName,
      this.props.prosciuttoPrsut50cmWeight,
      this.props.prosciuttoPrsut50cmInfo,
      this.props.prosciuttoPrsut50cmPrice,
      this.props.prosciuttoPrsut50cmImage
    );
  };

  colosseo28cmHandler= () => {
    this.props.addToCart(
      this.props.colosseo28cmName,
      this.props.colosseo28cmWeight,
      this.props.colosseo28cmInfo,
      this.props.colosseo28cmPrice,
      this.props.colosseo28cmImage
    );
  };

  colosseo35cmHandler= () => {
    this.props.addToCart(
      this.props.colosseo35cmName,
      this.props.colosseo35cmWeight,
      this.props.colosseo35cmInfo,
      this.props.colosseo35cmPrice,
      this.props.colosseo35cmImage
    );
  };

  colosseo45cmHandler= () => {
    this.props.addToCart(
      this.props.colosseo45cmName,
      this.props.colosseo45cmWeight,
      this.props.colosseo45cmInfo,
      this.props.colosseo45cmPrice,
      this.props.colosseo45cmImage
    );
  };

  colosseo50cmHandler= () => {
    this.props.addToCart(
      this.props.colosseo50cmName,
      this.props.colosseo50cmWeight,
      this.props.colosseo50cmInfo,
      this.props.colosseo50cmPrice,
      this.props.colosseo50cmImage
    );
  };

  zlatiborac28cmHandler = () => {
    this.props.addToCart(
      this.props.zlatiborac28cmName,
      this.props.zlatiborac28cmWeight,
      this.props.zlatiborac28cmInfo,
      this.props.zlatiborac28cmPrice,
      this.props.zlatiborac28cmImage
    );
  };

  zlatiborac35cmHandler = () => {
    this.props.addToCart(
      this.props.zlatiborac35cmName,
      this.props.zlatiborac35cmWeight,
      this.props.zlatiborac35cmInfo,
      this.props.zlatiborac35cmPrice,
      this.props.zlatiborac35cmImage
    );
  };

  zlatiborac45cmHandler = () => {
    this.props.addToCart(
      this.props.zlatiborac45cmName,
      this.props.zlatiborac45cmWeight,
      this.props.zlatiborac45cmInfo,
      this.props.zlatiborac45cmPrice,
      this.props.zlatiborac45cmImage
    );
  };

  zlatiborac50cmHandler = () => {
    this.props.addToCart(
      this.props.zlatiborac50cmName,
      this.props.zlatiborac50cmWeight,
      this.props.zlatiborac50cmInfo,
      this.props.zlatiborac50cmPrice,
      this.props.zlatiborac50cmImage
    );
  };


  napolitano28cmHandler = () => {
    this.props.addToCart(
      this.props.napolitano28cmName,
      this.props.napolitano28cmWeight,
      this.props.napolitano28cmInfo,
      this.props.napolitano28cmPrice,
      this.props.napolitano28cmImage
    );
  };

  napolitano35cmHandler = () => {
    this.props.addToCart(
      this.props.napolitano35cmName,
      this.props.napolitano35cmWeight,
      this.props.napolitano35cmInfo,
      this.props.napolitano35cmPrice,
      this.props.napolitano35cmImage
    );
  };

  napolitano45cmHandler = () => {
    this.props.addToCart(
      this.props.napolitano45cmName,
      this.props.napolitano45cmWeight,
      this.props.napolitano45cmInfo,
      this.props.napolitano45cmPrice,
      this.props.napolitano45cmImage
    );
  };

  napolitano50cmHandler = () => {
    this.props.addToCart(
      this.props.napolitano50cmName,
      this.props.napolitano50cmWeight,
      this.props.napolitano50cmInfo,
      this.props.napolitano50cmPrice,
      this.props.napolitano50cmImage
    );
  };

  fruttiDiMare28cmHandler = () => {
    this.props.addToCart(
      this.props.fruttiDiMare28cmName,
      this.props.fruttiDiMare28cmWeight,
      this.props.fruttiDiMare28cmInfo,
      this.props.fruttiDiMare28cmPrice,
      this.props.fruttiDiMare28cmImage
    );
  };

  fruttiDiMare35cmHandler = () => {
    this.props.addToCart(
      this.props.fruttiDiMare35cmName,
      this.props.fruttiDiMare35cmWeight,
      this.props.fruttiDiMare35cmInfo,
      this.props.fruttiDiMare35cmPrice,
      this.props.fruttiDiMare35cmImage
    );
  };

  fruttiDiMare45cmHandler = () => {
    this.props.addToCart(
      this.props.fruttiDiMare45cmName,
      this.props.fruttiDiMare45cmWeight,
      this.props.fruttiDiMare45cmInfo,
      this.props.fruttiDiMare45cmPrice,
      this.props.fruttiDiMare45cmImage
    );
  };

  fruttiDiMare50cmHandler = () => {
    this.props.addToCart(
      this.props.fruttiDiMare50cmName,
      this.props.fruttiDiMare50cmWeight,
      this.props.fruttiDiMare50cmInfo,
      this.props.fruttiDiMare50cmPrice,
      this.props.fruttiDiMare50cmImage
    );
  };

  ilDiavolo28cmHandler = () => {
    this.props.addToCart(
      this.props.ilDiavolo28cmName,
      this.props.ilDiavolo28cmWeight,
      this.props.ilDiavolo28cmInfo,
      this.props.ilDiavolo28cmPrice,
      this.props.ilDiavolo28cmImage
    );
  };

  ilDiavolo35cmHandler = () => {
    this.props.addToCart(
      this.props.ilDiavolo35cmName,
      this.props.ilDiavolo35cmWeight,
      this.props.ilDiavolo35cmInfo,
      this.props.ilDiavolo35cmPrice,
      this.props.ilDiavolo35cmImage
    );
  };

  ilDiavolo45cmHandler = () => {
    this.props.addToCart(
      this.props.ilDiavolo45cmName,
      this.props.ilDiavolo45cmWeight,
      this.props.ilDiavolo45cmInfo,
      this.props.ilDiavolo45cmPrice,
      this.props.ilDiavolo45cmImage
    );
  };

  ilDiavolo50cmHandler = () => {
    this.props.addToCart(
      this.props.ilDiavolo50cmName,
      this.props.ilDiavolo50cmWeight,
      this.props.ilDiavolo50cmInfo,
      this.props.ilDiavolo50cmPrice,
      this.props.ilDiavolo50cmImage
    );
  };

  srbija28cmHandler = () => {
    this.props.addToCart(
      this.props.srbija28cmName,
      this.props.srbija28cmWeight,
      this.props.srbija28cmInfo,
      this.props.srbija28cmPrice,
      this.props.srbija28cmImage
    );
  };

  srbija35cmHandler = () => {
    this.props.addToCart(
      this.props.srbija35cmName,
      this.props.srbija35cmWeight,
      this.props.srbija35cmInfo,
      this.props.srbija35cmPrice,
      this.props.srbija35cmImage
    );
  };

  srbija45cmHandler = () => {
    this.props.addToCart(
      this.props.srbija45cmName,
      this.props.srbija45cmWeight,
      this.props.srbija45cmInfo,
      this.props.srbija45cmPrice,
      this.props.srbija45cmImage
    );
  };

  srbija50cmHandler = () => {
    this.props.addToCart(
      this.props.srbija50cmName,
      this.props.srbija50cmWeight,
      this.props.srbija50cmInfo,
      this.props.srbija50cmPrice,
      this.props.srbija50cmImage
    );
  };

  pizzaGourmet28cmHandler = () => {
    this.props.addToCart(
      this.props.pizzaGourmet28cmName,
      this.props.pizzaGourmet28cmWeight,
      this.props.pizzaGourmet28cmInfo,
      this.props.pizzaGourmet28cmPrice,
      this.props.pizzaGourmet28cmImage
    );
  };

  pizzaGourmet35cmHandler = () => {
    this.props.addToCart(
      this.props.pizzaGourmet35cmName,
      this.props.pizzaGourmet35cmWeight,
      this.props.pizzaGourmet35cmInfo,
      this.props.pizzaGourmet35cmPrice,
      this.props.pizzaGourmet35cmImage
    );
  };

  pizzaGourmet45cmHandler = () => {
    this.props.addToCart(
      this.props.pizzaGourmet45cmName,
      this.props.pizzaGourmet45cmWeight,
      this.props.pizzaGourmet45cmInfo,
      this.props.pizzaGourmet45cmPrice,
      this.props.pizzaGourmet45cmImage
    );
  };

  pizzaGourmet50cmHandler = () => {
    this.props.addToCart(
      this.props.pizzaGourmet50cmName,
      this.props.pizzaGourmet50cmWeight,
      this.props.pizzaGourmet50cmInfo,
      this.props.pizzaGourmet50cmPrice,
      this.props.pizzaGourmet50cmImage
    );
  };

  piroska28cmHandler = () => {
    this.props.addToCart(
      this.props.piroska28cmName,
      this.props.piroska28cmWeight,
      this.props.piroska28cmInfo,
      this.props.piroska28cmPrice,
      this.props.piroska28cmImage
    );
  };

  piroska35cmHandler = () => {
    this.props.addToCart(
      this.props.piroska35cmName,
      this.props.piroska35cmWeight,
      this.props.piroska35cmInfo,
      this.props.piroska35cmPrice,
      this.props.piroska35cmImage
    );
  };

  // kreirajteSvojuPizzu28cmHandler = () => {
  //   this.props.addToCart(
  //     this.props.kreirajteSvojuPizzu28cmName,
  //     this.props.kreirajteSvojuPizzu28cmWeight,
  //     this.props.kreirajteSvojuPizzu28cmInfo,
  //     this.props.kreirajteSvojuPizzu28cmPrice,
  //     this.props.kreirajteSvojuPizzu28cmImage
  //   );
  // };

  // kreirajteSvojuPizzu35cmHandler = () => {
  //   this.props.addToCart(
  //     this.props.kreirajteSvojuPizzu35cmName,
  //     this.props.kreirajteSvojuPizzu35cmWeight,
  //     this.props.kreirajteSvojuPizzu35cmInfo,
  //     this.props.kreirajteSvojuPizzu35cmPrice,
  //     this.props.kreirajteSvojuPizzu35cmImage
  //   );
  // };

  // kreirajteSvojuPizzu45cmHandler = () => {
  //   this.props.addToCart(
  //     this.props.kreirajteSvojuPizzu45cmName,
  //     this.props.kreirajteSvojuPizzu45cmWeight,
  //     this.props.kreirajteSvojuPizzu45cmInfo,
  //     this.props.kreirajteSvojuPizzu45cmPrice,
  //     this.props.kreirajteSvojuPizzu45cmImage
  //   );
  // };

  // kreirajteSvojuPizzu50cmHandler = () => {
  //   this.props.addToCart(
  //     this.props.kreirajteSvojuPizzu50cmName,
  //     this.props.kreirajteSvojuPizzu50cmWeight,
  //     this.props.kreirajteSvojuPizzu50cmInfo,
  //     this.props.kreirajteSvojuPizzu50cmPrice,
  //     this.props.kreirajteSvojuPizzu50cmImage
  //   );
  // };

  cevapiHandler = () => {
    this.props.addToCart(
      this.props.cevapiName,
      this.props.cevapiWeight,
      this.props.cevapiInfo,
      this.props.cevapiPrice,
      this.props.cevapiImage
    );
  };

  cevapiNaKajmakuHandler = () => {
    this.props.addToCart(
      this.props.cevapiNaKajmakuName,
      this.props.cevapiNaKajmakuWeight,
      this.props.cevapiNaKajmakuInfo,
      this.props.cevapiNaKajmakuPrice,
      this.props.cevapiNaKajmakuImage
    );
  };

  punjeniCevapHandler = () => {
    this.props.addToCart(
      this.props.punjeniCevapName,
      this.props.punjeniCevapWeight,
      this.props.punjeniCevapInfo,
      this.props.punjeniCevapPrice,
      this.props.punjeniCevapImage
    );
  };

  domacaRostiljskaKobasicaHandler = () => {
    this.props.addToCart(
      this.props.domacaRostiljskaKobasicaName,
      this.props.domacaRostiljskaKobasicaWeight,
      this.props.domacaRostiljskaKobasicaInfo,
      this.props.domacaRostiljskaKobasicaPrice,
      this.props.domacaRostiljskaKobasicaImage
    );
  };

  domacaDimljenaKobasicaHandler = () => {
    this.props.addToCart(
      this.props.domacaDimljenaKobasicaName,
      this.props.domacaDimljenaKobasicaWeight,
      this.props.domacaDimljenaKobasicaInfo,
      this.props.domacaDimljenaKobasicaPrice,
      this.props.domacaDimljenaKobasicaImage
    );
  };

  dimljeniSvinjskiVratHandler = () => {
    this.props.addToCart(
      this.props.dimljeniSvinjskiVratName,
      this.props.dimljeniSvinjskiVratWeight,
      this.props.dimljeniSvinjskiVratInfo,
      this.props.dimljeniSvinjskiVratPrice,
      this.props.dimljeniSvinjskiVratImage
    );
  };

  dimljenaBelaVesalicaHandler = () => {
    this.props.addToCart(
      this.props.dimljenaBelaVesalicaName,
      this.props.dimljenaBelaVesalicaWeight,
      this.props.dimljenaBelaVesalicaInfo,
      this.props.dimljenaBelaVesalicaPrice,
      this.props.dimljenaBelaVesalicaImage
    );
  };

  belaVesalicaHandler = () => {
    this.props.addToCart(
      this.props.belaVesalicaName,
      this.props.belaVesalicaWeight,
      this.props.belaVesalicaInfo,
      this.props.belaVesalicaPrice,
      this.props.belaVesalicaImage
    );
  };

  belaVesalicaVrganjHandler = () => {
    this.props.addToCart(
      this.props.belaVesalicaVrganjName,
      this.props.belaVesalicaVrganjWeight,
      this.props.belaVesalicaVrganjInfo,
      this.props.belaVesalicaVrganjPrice,
      this.props.belaVesalicaVrganjImage
    );
  };

  belaVesalicaKajmakHandler = () => {
    this.props.addToCart(
      this.props.belaVesalicaKajmakName,
      this.props.belaVesalicaKajmakWeight,
      this.props.belaVesalicaKajmakInfo,
      this.props.belaVesalicaKajmakPrice,
      this.props.belaVesalicaKajmakImage
    );
  };
 

  pileciFileHandler = () => {
    this.props.addToCart(
      this.props.pileciFileName,
      this.props.pileciFileWeight,
      this.props.pileciFileInfo,
      this.props.pileciFilePrice,
      this.props.pileciFileImage
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


  svinjskaRebraHandler = () => {
    this.props.addToCart(
      this.props.svinjskaRebraName,
      this.props.svinjskaRebraWeight,
      this.props.svinjskaRebraInfo,
      this.props.svinjskaRebraPrice,
      this.props.svinjskaRebraImage
    );
  };

  mesanoMesoHandler = () => {
    this.props.addToCart(
      this.props. mesanoMesoName,
      this.props. mesanoMesoWeight,
      this.props. mesanoMesoInfo,
      this.props. mesanoMesoPrice,
      this.props. mesanoMesoImage
    );
  };

  banjaluckiCevapHandler = () => {
    this.props.addToCart(
      this.props. banjaluckiCevapName,
      this.props. banjaluckiCevapWeight,
      this.props. banjaluckiCevapInfo,
      this.props. banjaluckiCevapPrice,
      this.props. banjaluckiCevapImage
    );
  };

  pastrmkaHandler = () => {
    this.props.addToCart(
      this.props. pastrmkaName,
      this.props. pastrmkaWeight,
      this.props. pastrmkaInfo,
      this.props. pastrmkaPrice,
      this.props. pastrmkaImage
    );
  };

  brancinHandler = () => {
    this.props.addToCart(
      this.props. brancinName,
      this.props. brancinWeight,
      this.props. brancinInfo,
      this.props. brancinPrice,
      this.props. brancinImage
    );
  };

  oradaHandler = () => {
    this.props.addToCart(
      this.props.oradaName,
      this.props.oradaWeight,
      this.props.oradaInfo,
      this.props.oradaPrice,
      this.props.oradaImage
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

  tzatzikiHandler = () => {
    this.props.addToCart(
      this.props.tzatzikiName,
      this.props.tzatzikiWeight,
      this.props.tzatzikiInfo,
      this.props.tzatzikiPrice,
      this.props.tzatzikiImage
    );
  };

  insalataDiFunghiHandler = () => {
    this.props.addToCart(
      this.props.insalataDiFunghiName,
      this.props.insalataDiFunghiWeight,
      this.props.insalataDiFunghiInfo,
      this.props.insalataDiFunghiPrice,
      this.props.insalataDiFunghiImage
    );
  };

  insalataGrecaHandler = () => {
    this.props.addToCart(
      this.props.insalataGrecaName,
      this.props.insalataGrecaWeight,
      this.props.insalataGrecaInfo,
      this.props.insalataGrecaPrice,
      this.props.insalataGrecaImage
    );
  };

  insalataDiPolloHandler = () => {
    this.props.addToCart(
      this.props.insalataDiPolloName,
      this.props.insalataDiPolloWeight,
      this.props.insalataDiPolloInfo,
      this.props.insalataDiPolloPrice,
      this.props.insalataDiPolloImage
    );
  };

  insalataDiMareHandler = () => {
    this.props.addToCart(
      this.props.insalataDiMareName,
      this.props.insalataDiMareWeight,
      this.props.insalataDiMareInfo,
      this.props.insalataDiMarePrice,
      this.props.insalataDiMareImage
    );
  };

  sirHandler = () => {
    this.props.addToCart(
      this.props.sirName,
      this.props.sirWeight,
      this.props.sirInfo,
      this.props.sirPrice,
      this.props.sirImage
    );
  };

  srpskaSalataHandler = () => {
    this.props.addToCart(
      this.props.srpskaSalataName,
      this.props.srpskaSalataWeight,
      this.props.srpskaSalataInfo,
      this.props.srpskaSalataPrice,
      this.props.srpskaSalataImage
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

  urnebesSalataHandler = () => {
    this.props.addToCart(
      this.props.urnebesSalataName,
      this.props.urnebesSalataWeight,
      this.props.urnebesSalataInfo,
      this.props.urnebesSalataPrice,
      this.props.urnebesSalataImage
    );
  };

  ljutaPapricicaHandler = () => {
    this.props.addToCart(
      this.props.ljutaPapricicaName,
      this.props.ljutaPapricicaWeight,
      this.props.ljutaPapricicaInfo,
      this.props.ljutaPapricicaPrice,
      this.props.ljutaPapricicaImage
    );
  };

  kupusSalataHandler = () => {
    this.props.addToCart(
      this.props.kupusSalataName,
      this.props.kupusSalataWeight,
      this.props.kupusSalataInfo,
      this.props.kupusSalataPrice,
      this.props.kupusSalataImage
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

  pohovaniKackavaljHandler = () => {
    this.props.addToCart(
      this.props.pohovaniKackavaljName,
      this.props.pohovaniKackavaljWeight,
      this.props.pohovaniKackavaljInfo,
      this.props.pohovaniKackavaljPrice,
      this.props.pohovaniKackavaljImage
    );
  };

  rissottoHandler = () => {
    this.props.addToCart(
      this.props.rissottoName,
      this.props.rissottoWeight,
      this.props.rissottoInfo,
      this.props.rissottoPrice,
      this.props.rissottoImage
    );
  };

  rissottoCarneHandler = () => {
    this.props.addToCart(
      this.props.rissottoCarneName,
      this.props.rissottoCarneWeight,
      this.props.rissottoCarneInfo,
      this.props.rissottoCarnePrice,
      this.props.rissottoCarneImage
    );
  };

  polloAlFornoHandler = () => {
    this.props.addToCart(
      this.props.polloAlFornoName,
      this.props.polloAlFornoWeight,
      this.props.polloAlFornoInfo,
      this.props.polloAlFornoPrice,
      this.props.polloAlFornoImage
    );
  };

  lasagneBologneseSmallHandler = () => {
    this.props.addToCart(
      this.props.lasagneBologneseSmallName,
      this.props.lasagneBologneseSmallWeight,
      this.props.lasagneBologneseSmallInfo,
      this.props.lasagneBologneseSmallPrice,
      this.props.lasagneBologneseSmallImage
    );
  };

  lasagneBologneseBigHandler = () => {
    this.props.addToCart(
      this.props.lasagneBologneseBigName,
      this.props.lasagneBologneseBigWeight,
      this.props.lasagneBologneseBigInfo,
      this.props.lasagneBologneseBigPrice,
      this.props.lasagneBologneseBigImage
    );
  };

  pastaCarbonaraHandler = () => {
    this.props.addToCart(
      this.props.pastaCarbonaraName,
      this.props.pastaCarbonaraWeight,
      this.props.pastaCarbonaraInfo,
      this.props.pastaCarbonaraPrice,
      this.props.pastaCarbonaraImage
    );
  };

  pastaBologneseHandler = () => {
    this.props.addToCart(
      this.props.pastaBologneseName,
      this.props.pastaBologneseWeight,
      this.props.pastaBologneseInfo,
      this.props.pastaBolognesePrice,
      this.props.pastaBologneseImage
    );
  };

  pastaFruttiDiMareHandler = () => {
    this.props.addToCart(
      this.props.pastaFruttiDiMareName,
      this.props.pastaFruttiDiMareWeight,
      this.props.pastaFruttiDiMareInfo,
      this.props.pastaFruttiDiMarePrice,
      this.props.pastaFruttiDiMareImage
    );
  };

  pastaColosseoHandler = () => {
    this.props.addToCart(
      this.props.pastaColosseoName,
      this.props.pastaColosseoWeight,
      this.props.pastaColosseoInfo,
      this.props.pastaColosseoPrice,
      this.props.pastaColosseoImage
    );
  };

  pastaCasseruolaDiPolloHandler = () => {
    this.props.addToCart(
      this.props.pastaCasseruolaDiPolloName,
      this.props.pastaCasseruolaDiPolloWeight,
      this.props.pastaCasseruolaDiPolloInfo,
      this.props.pastaCasseruolaDiPolloPrice,
      this.props.pastaCasseruolaDiPolloImage
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

  parmezanHandler = () => {
    this.props.addToCart(
      this.props.parmezanName,
      this.props.parmezanWeight,
      this.props.parmezanInfo,
      this.props.parmezanPrice,
      this.props.parmezanImage
    );
  };
  
  pelatHandler = () => {
    this.props.addToCart(
      this.props.pelatName,
      this.props.pelatWeight,
      this.props.pelatInfo,
      this.props.pelatPrice,
      this.props.pelatImage
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

  feferoniHandler = () => {
    this.props.addToCart(
      this.props.feferoniName,
      this.props.feferoniWeight,
      this.props.feferoniInfo,
      this.props.feferoniPrice,
      this.props.feferoniImage
    );
  };
  pavlakaHandler = () => {
    this.props.addToCart(
      this.props.pavlakaName,
      this.props.pavlakaWeight,
      this.props.pavlakaInfo,
      this.props.pavlakaPrice,
      this.props.pavlakaImage
    );
  };

  majonezHandler = () => {
    this.props.addToCart(
      this.props.majonezName,
      this.props.majonezWeight,
      this.props.majonezInfo,
      this.props.majonezPrice,
      this.props.majonezImage
    );
  };

  palacinkeKremPlazmaHandler = () => {
    this.props.addToCart(
      this.props.palacinkeKremPlazmaName,
      this.props.palacinkeKremPlazmaWeight,
      this.props.palacinkeKremPlazmaInfo,
      this.props.palacinkeKremPlazmaPrice,
      this.props.palacinkeKremPlazmaImage
    );
  };

  palacinkeKremPlazmaSlagHandler = () => {
    this.props.addToCart(
      this.props.palacinkeKremPlazmaSlagName,
      this.props.palacinkeKremPlazmaSlagWeight,
      this.props.palacinkeKremPlazmaSlagInfo,
      this.props.palacinkeKremPlazmaSlagPrice,
      this.props.palacinkeKremPlazmaSlagImage
    );
  };

  palacinkeNutellaPlazmaHandler = () => {
    this.props.addToCart(
      this.props.palacinkeNutellaPlazmaName,
      this.props.palacinkeNutellaPlazmaWeight,
      this.props.palacinkeNutellaPlazmaInfo,
      this.props.palacinkeNutellaPlazmaPrice,
      this.props.palacinkeNutellaPlazmaImage
    );
  };

  palacinkeNutellaPlazmaSlagHandler = () => {
    this.props.addToCart(
      this.props.palacinkeNutellaPlazmaSlagName,
      this.props.palacinkeNutellaPlazmaSlagWeight,
      this.props.palacinkeNutellaPlazmaSlagInfo,
      this.props.palacinkeNutellaPlazmaSlagPrice,
      this.props.palacinkeNutellaPlazmaSlagImage
    );
  };

  palacinkeMedOrasiHandler = () => {
    this.props.addToCart(
      this.props.palacinkeMedOrasiName,
      this.props.palacinkeMedOrasiWeight,
      this.props.palacinkeMedOrasiInfo,
      this.props.palacinkeMedOrasiPrice,
      this.props.palacinkeMedOrasiImage
    );
  };

  palacinkeMedOrasiSlagHandler = () => {
    this.props.addToCart(
      this.props.palacinkeMedOrasiSlagName,
      this.props.palacinkeMedOrasiSlagWeight,
      this.props.palacinkeMedOrasiSlagInfo,
      this.props.palacinkeMedOrasiSlagPrice,
      this.props.palacinkeMedOrasiSlagImage
    );
  };

  palacinkeNarandzaKremHandler = () => {
    this.props.addToCart(
      this.props.palacinkeNarandzaKremName,
      this.props.palacinkeNarandzaKremWeight,
      this.props.palacinkeNarandzaKremInfo,
      this.props.palacinkeNarandzaKremPrice,
      this.props.palacinkeNarandzaKremImage
    );
  };

  palacinkeNarandzaKremSlagHandler = () => {
    this.props.addToCart(
      this.props.palacinkeNarandzaKremSlagName,
      this.props.palacinkeNarandzaKremSlagWeight,
      this.props.palacinkeNarandzaKremSlagInfo,
      this.props.palacinkeNarandzaKremSlagPrice,
      this.props.palacinkeNarandzaKremSlagImage
    );
  };

  palacinkeVisnjaHandler = () => {
    this.props.addToCart(
      this.props.palacinkeVisnjaName,
      this.props.palacinkeVisnjaWeight,
      this.props.palacinkeVisnjaInfo,
      this.props.palacinkeVisnjaPrice,
      this.props.palacinkeVisnjaImage
    );
  };

  palacinkeVisnjaSlagHandler = () => {
    this.props.addToCart(
      this.props.palacinkeVisnjaSlagName,
      this.props.palacinkeVisnjaSlagWeight,
      this.props.palacinkeVisnjaSlagInfo,
      this.props.palacinkeVisnjaSlagPrice,
      this.props.palacinkeVisnjaSlagImage
    );
  };

  palacinkeVisnjaVanilaHandler = () => {
    this.props.addToCart(
      this.props.palacinkeVisnjaVanilaName,
      this.props.palacinkeVisnjaVanilaWeight,
      this.props.palacinkeVisnjaVanilaInfo,
      this.props.palacinkeVisnjaVanilaPrice,
      this.props.palacinkeVisnjaVanilaImage
    );
  };

  palacinkeVisnjaVanilaSlagHandler = () => {
    this.props.addToCart(
      this.props.palacinkeVisnjaVanilaSlagName,
      this.props.palacinkeVisnjaVanilaSlagWeight,
      this.props.palacinkeVisnjaVanilaSlagInfo,
      this.props.palacinkeVisnjaVanilaSlagPrice,
      this.props.palacinkeVisnjaVanilaSlagImage
    );
  };

  palacinkeMarmeladaHandler = () => {
    this.props.addToCart(
      this.props.palacinkeMarmeladaName,
      this.props.palacinkeMarmeladaWeight,
      this.props.palacinkeMarmeladaInfo,
      this.props.palacinkeMarmeladaPrice,
      this.props.palacinkeMarmeladaImage
    );
  };

  palacinkeMarmeladaSlagHandler = () => {
    this.props.addToCart(
      this.props.palacinkeMarmeladaSlagName,
      this.props.palacinkeMarmeladaSlagWeight,
      this.props.palacinkeMarmeladaSlagInfo,
      this.props.palacinkeMarmeladaSlagPrice,
      this.props.palacinkeMarmeladaSlagImage
    );
  };

  palacinkeColosseoHandler = () => {
    this.props.addToCart(
      this.props.palacinkeColosseoName,
      this.props.palacinkeColosseoWeight,
      this.props.palacinkeColosseoInfo,
      this.props.palacinkeColosseoPrice,
      this.props.palacinkeColosseoImage
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

  vocniKupHandler = () => {
    this.props.addToCart(
      this.props.vocniKupName,
      this.props.vocniKupWeight,
      this.props.vocniKupInfo,
      this.props.vocniKupPrice,
      this.props.vocniKupImage
    );
  };

  bananaSplitHandler = () => {
    this.props.addToCart(
      this.props.bananaSplitName,
      this.props.bananaSplitWeight,
      this.props.bananaSplitInfo,
      this.props.bananaSplitPrice,
      this.props.bananaSplitImage
    );
  };
  render() {
    let output = null;
    let RostiljToggle = null;
    let pizzaToggle = null;
    let salateToggle = null;
    let moreToggle = null;
    let desertToggle = null;
    let prilozi = null;
    let trans = null;
    let margarita = null;
    let vezuvio = null;
    let capricciosa = null;
    let funghi = null;
    let quattroStagioni=null;
    let quattroTipiDiFormaggio=null;
    let bolognese=null;
    let vegeterijana=null;
    let tonno=null;
    let posnaPizza=null;
    let girosDiPolloPizza=null;
    let prosciuttoPrsut=null;
    let colosseo = null;
    let zlatiborac = null;
    let napolitano = null;
    let fruttiDiMare=null;
    let ilDiavolo=null;
    let srbija=null;
    let pizzaGourmet=null;
    let piroska = null;
    // let kreirajteSvojuPizzu=null;
    let toplaPredjela=null;
    let jelaPoPorudzbini = null;
    let pasta=null;

    if (this.state.desertToggle) {
      desertToggle = (
        <View>
          <SingleFoodItem
            image={this.props.palacinkeKremPlazmaImage}
            foodName={this.props.palacinkeKremPlazmaName}
            weight={this.props.palacinkeKremPlazmaWeight}
            foodInfo={this.props.palacinkeKremPlazmaInfo}
            foodPrice={this.props.palacinkeKremPlazmaPrice}
            onPress={this.palacinkeKremPlazmaHandler}
          />
          <SingleFoodItem
            image={this.props.palacinkeKremPlazmaSlagImage}
            foodName={this.props.palacinkeKremPlazmaSlagName}
            weight={this.props.palacinkeKremPlazmaSlagWeight}
            foodInfo={this.props.palacinkeKremPlazmaSlagInfo}
            foodPrice={this.props.palacinkeKremPlazmaSlagPrice}
            onPress={this.palacinkeKremPlazmaSlagHandler}
          />
          <SingleFoodItem
            image={this.props.palacinkeNutellaPlazmaImage}
            foodName={this.props.palacinkeNutellaPlazmaName}
            weight={this.props.palacinkeNutellaPlazmaWeight}
            foodInfo={this.props.palacinkeNutellaPlazmaInfo}
            foodPrice={this.props.palacinkeNutellaPlazmaPrice}
            onPress={this.palacinkeNutellaPlazmaHandler}
          />
          <SingleFoodItem
            image={this.props.palacinkeNutellaPlazmaSlagImage}
            foodName={this.props.palacinkeNutellaPlazmaSlagName}
            weight={this.props.palacinkeNutellaPlazmaSlagWeight}
            foodInfo={this.props.palacinkeNutellaPlazmaSlagInfo}
            foodPrice={this.props.palacinkeNutellaPlazmaSlagPrice}
            onPress={this.palacinkeNutellaPlazmaSlagHandler}
          />
          <SingleFoodItem
            image={this.props.palacinkeMedOrasiImage}
            foodName={this.props.palacinkeMedOrasiName}
            weight={this.props.palacinkeMedOrasiWeight}
            foodInfo={this.props.palacinkeMedOrasiInfo}
            foodPrice={this.props.palacinkeMedOrasiPrice}
            onPress={this.palacinkeMedOrasiHandler}
          />
          <SingleFoodItem
            image={this.props.palacinkeMedOrasiSlagImage}
            foodName={this.props.palacinkeMedOrasiSlagName}
            weight={this.props.palacinkeMedOrasiSlagWeight}
            foodInfo={this.props.palacinkeMedOrasiSlagInfo}
            foodPrice={this.props.palacinkeMedOrasiSlagPrice}
            onPress={this.palacinkeMedOrasiSlagHandler}
          />
          <SingleFoodItem
            image={this.props.palacinkeNarandzaKremImage}
            foodName={this.props.palacinkeNarandzaKremName}
            weight={this.props.palacinkeNarandzaKremWeight}
            foodInfo={this.props.palacinkeNarandzaKremInfo}
            foodPrice={this.props.palacinkeNarandzaKremPrice}
            onPress={this.palacinkeNarandzaKremHandler}
          />
          <SingleFoodItem
            image={this.props.palacinkeNarandzaKremSlagImage}
            foodName={this.props.palacinkeNarandzaKremSlagName}
            weight={this.props.palacinkeNarandzaKremSlagWeight}
            foodInfo={this.props.palacinkeNarandzaKremSlagInfo}
            foodPrice={this.props.palacinkeNarandzaKremSlagPrice}
            onPress={this.palacinkeNarandzaKremSlagHandler}
          />
          <SingleFoodItem
            image={this.props.palacinkeVisnjaImage}
            foodName={this.props.palacinkeVisnjaName}
            weight={this.props.palacinkeVisnjaWeight}
            foodInfo={this.props.palacinkeVisnjaInfo}
            foodPrice={this.props.palacinkeVisnjaPrice}
            onPress={this.palacinkeVisnjaHandler}
          />
          <SingleFoodItem
            image={this.props.palacinkeVisnjaSlagImage}
            foodName={this.props.palacinkeVisnjaSlagName}
            weight={this.props.palacinkeVisnjaSlagWeight}
            foodInfo={this.props.palacinkeVisnjaSlagInfo}
            foodPrice={this.props.palacinkeVisnjaSlagPrice}
            onPress={this.palacinkeVisnjaSlagHandler}
          />
          <SingleFoodItem
            image={this.props.palacinkeVisnjaVanilaImage}
            foodName={this.props.palacinkeVisnjaVanilaName}
            weight={this.props.palacinkeVisnjaVanilaWeight}
            foodInfo={this.props.palacinkeVisnjaVanilaInfo}
            foodPrice={this.props.palacinkeVisnjaVanilaPrice}
            onPress={this.palacinkeVisnjaVanilaHandler}
          />
           <SingleFoodItem
            image={this.props.palacinkeVisnjaVanilaSlagImage}
            foodName={this.props.palacinkeVisnjaVanilaSlagName}
            weight={this.props.palacinkeVisnjaVanilaSlagWeight}
            foodInfo={this.props.palacinkeVisnjaVanilaSlagInfo}
            foodPrice={this.props.palacinkeVisnjaVanilaSlagPrice}
            onPress={this.palacinkeVisnjaVanilaSlagHandler}
          />
           <SingleFoodItem
            image={this.props.palacinkeMarmeladaImage}
            foodName={this.props.palacinkeMarmeladaName}
            weight={this.props.palacinkeMarmeladaWeight}
            foodInfo={this.props.palacinkeMarmeladaInfo}
            foodPrice={this.props.palacinkeMarmeladaPrice}
            onPress={this.palacinkeMarmeladaHandler}
          />
           <SingleFoodItem
            image={this.props.palacinkeMarmeladaSlagImage}
            foodName={this.props.palacinkeMarmeladaSlagName}
            weight={this.props.palacinkeMarmeladaSlagWeight}
            foodInfo={this.props.palacinkeMarmeladaSlagInfo}
            foodPrice={this.props.palacinkeMarmeladaSlagPrice}
            onPress={this.palacinkeMarmeladaSlagHandler}
          />
          <SingleFoodItem
            image={this.props.palacinkeColosseoImage}
            foodName={this.props.palacinkeColosseoName}
            weight={this.props.palacinkeColosseoWeight}
            foodInfo={this.props.palacinkeColosseoInfo}
            foodPrice={this.props.palacinkeColosseoPrice}
            onPress={this.palacinkeColosseoHandler}
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
            image={this.props.vocniKupImage}
            foodName={this.props.vocniKupName}
            weight={this.props.vocniKupWeight}
            foodInfo={this.props.vocniKupInfo}
            foodPrice={this.props.vocniKupPrice}
            onPress={this.vocniKupHandler}
          />
          <SingleFoodItem
            image={this.props.bananaSplitImage}
            foodName={this.props.bananaSplitName}
            weight={this.props.bananaSplitWeight}
            foodInfo={this.props.bananaSplitInfo}
            foodPrice={this.props.bananaSplitPrice}
            onPress={this.bananaSplitHandler}
          />
        </View>
      );
    }

    if (this.state.priloziToggle) {
      prilozi = (
        <View>
          <SingleFoodItem
            image={this.props.pomfritImage}
            foodName={this.props.pomfritName}
            weight={this.props.pomfritWeight}
            foodInfo={this.props.pomfritInfo}
            foodPrice={this.props.pomfritPrice}
            onPress={this.pomfritHandler}
          />
          <SingleFoodItem
            image={this.props.parmezanImage}
            foodName={this.props.parmezanName}
            weight={this.props.parmezanWeight}
            foodInfo={this.props.parmezanInfo}
            foodPrice={this.props.parmezanPrice}
            onPress={this.parmezanHandler}
          />
          <SingleFoodItem
            image={this.props.pelatImage}
            foodName={this.props.pelatName}
            weight={this.props.pelatWeight}
            foodInfo={this.props.pelatInfo}
            foodPrice={this.props.pelatPrice}
            onPress={this.pelatHandler}
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
            image={this.props.feferoniImage}
            foodName={this.props.feferoniName}
            weight={this.props.feferoniWeight}
            foodInfo={this.props.feferoniInfo}
            foodPrice={this.props.feferoniPrice}
            onPress={this.feferoniHandler}
          />
          <SingleFoodItem
            image={this.props.pavlakaImage}
            foodName={this.props.pavlakaName}
            weight={this.props.pavlakaWeight}
            foodInfo={this.props.pavlakaInfo}
            foodPrice={this.props.pavlakaPrice}
            onPress={this.pavlakaHandler}
          />
           <SingleFoodItem
            image={this.props.majonezImage}
            foodName={this.props.majonezName}
            weight={this.props.majonezWeight}
            foodInfo={this.props.majonezInfo}
            foodPrice={this.props.majonezPrice}
            onPress={this.majonezHandler}
          />
        </View>
      );
    }

    if (this.state.pastaToggle) {
      pasta = (
        <View>
          <SingleFoodItem
            image={this.props.lasagneBologneseSmallImage}
            foodName={this.props.lasagneBologneseSmallName}
            weight={this.props.lasagneBologneseSmallWeight}
            foodInfo={this.props.lasagneBologneseSmallInfo}
            foodPrice={this.props.lasagneBologneseSmallPrice}
            onPress={this.lasagneBologneseSmallHandler}
          />
          <SingleFoodItem
            image={this.props.lasagneBologneseBigImage}
            foodName={this.props.lasagneBologneseBigName}
            weight={this.props.lasagneBologneseBigWeight}
            foodInfo={this.props.lasagneBologneseBigInfo}
            foodPrice={this.props.lasagneBologneseBigPrice}
            onPress={this.lasagneBologneseBigHandler}
          />
          <SingleFoodItem
            image={this.props.pastaCarbonaraImage}
            foodName={this.props.pastaCarbonaraName}
            weight={this.props.pastaCarbonaraWeight}
            foodInfo={this.props.pastaCarbonaraInfo}
            foodPrice={this.props.pastaCarbonaraPrice}
            onPress={this.pastaCarbonaraHandler}
          />
          <SingleFoodItem
            image={this.props.pastaBologneseImage}
            foodName={this.props.pastaBologneseName}
            weight={this.props.pastaBologneseWeight}
            foodInfo={this.props.pastaBologneseInfo}
            foodPrice={this.props.pastaBolognesePrice}
            onPress={this.pastaBologneseHandler}
          />
          <SingleFoodItem
            image={this.props.pastaFruttiDiMareImage}
            foodName={this.props.pastaFruttiDiMareName}
            weight={this.props.pastaFruttiDiMareWeight}
            foodInfo={this.props.pastaFruttiDiMareInfo}
            foodPrice={this.props.pastaFruttiDiMarePrice}
            onPress={this.pastaFruttiDiMareHandler}
          />
          <SingleFoodItem
            image={this.props.pastaColosseoImage}
            foodName={this.props.pastaColosseoName}
            weight={this.props.pastaColosseoWeight}
            foodInfo={this.props.pastaColosseoInfo}
            foodPrice={this.props.pastaColosseoPrice}
            onPress={this.pastaColosseoHandler}
          />
          <SingleFoodItem
            image={this.props.pastaCasseruolaDiPolloImage}
            foodName={this.props.pastaCasseruolaDiPolloName}
            weight={this.props.pastaCasseruolaDiPolloWeight}
            foodInfo={this.props.pastaCasseruolaDiPolloInfo}
            foodPrice={this.props.pastaCasseruolaDiPolloPrice}
            onPress={this.pastaCasseruolaDiPolloHandler}
          />
        </View>
      );
    }

    if (this.state.jelaPoPorudzbiniToggle) {
      jelaPoPorudzbini = (
        <View>
          <SingleFoodItem
            image={this.props.rissottoImage}
            foodName={this.props.rissottoName}
            weight={this.props.rissottoWeight}
            foodInfo={this.props.rissottoInfo}
            foodPrice={this.props.rissottoPrice}
            onPress={this.rissottoHandler}
          />
          <SingleFoodItem
            image={this.props.rissottoCarneImage}
            foodName={this.props.rissottoCarneName}
            weight={this.props.rissottoCarneWeight}
            foodInfo={this.props.rissottoCarneInfo}
            foodPrice={this.props.rissottoCarnePrice}
            onPress={this.rissottoCarneHandler}
          />
          <SingleFoodItem
            image={this.props.polloAlFornoImage}
            foodName={this.props.polloAlFornoName}
            weight={this.props.polloAlFornoWeight}
            foodInfo={this.props.polloAlFornoInfo}
            foodPrice={this.props.polloAlFornoPrice}
            onPress={this.polloAlFornoHandler}
          />
          
        </View>
      );
    }

    if (this.state.moreToggle) {
      moreToggle = (
        <View>
          <SingleFoodItem
            image={this.props.pastrmkaImage}
            foodName={this.props.pastrmkaName}
            weight={this.props.pastrmkaWeight}
            foodInfo={this.props.pastrmkaInfo}
            foodPrice={this.props.pastrmkaPrice}
            onPress={this.pastrmkaHandler}
          />
          <SingleFoodItem
            image={this.props.brancinImage}
            foodName={this.props.brancinName}
            weight={this.props.brancinWeight}
            foodInfo={this.props.brancinInfo}
            foodPrice={this.props.brancinPrice}
            onPress={this.brancinHandler}
          />
          <SingleFoodItem
            image={this.props.oradaImage}
            foodName={this.props.oradaName}
            weight={this.props.oradaWeight}
            foodInfo={this.props.oradaInfo}
            foodPrice={this.props.oradaPrice}
            onPress={this.oradaHandler}
          />
          <SingleFoodItem
            image={this.props.lignjeImage}
            foodName={this.props.lignjeName}
            weight={this.props.lignjeWeight}
            foodInfo={this.props.lignjeInfo}
            foodPrice={this.props.lignjePrice}
            onPress={this.lignjeHandler}
          />
          
        </View>
      );
    }

    if (this.state.salateToggle) {
      salateToggle = (
        <View>
          <SingleFoodItem
            image={this.props.tzatzikiImage}
            foodName={this.props.tzatzikiName}
            weight={this.props.tzatzikiWeight}
            foodInfo={this.props.tzatzikiInfo}
            foodPrice={this.props.tzatzikiPrice}
            onPress={this.tzatzikiHandler}
          />
          <SingleFoodItem
            image={this.props.insalataDiFunghiImage}
            foodName={this.props.insalataDiFunghiName}
            weight={this.props.insalataDiFunghiWeight}
            foodInfo={this.props.insalataDiFunghiInfo}
            foodPrice={this.props.insalataDiFunghiPrice}
            onPress={this.insalataDiFunghiHandler}
          />
          <SingleFoodItem
            image={this.props.insalataGrecaImage}
            foodName={this.props.insalataGrecaName}
            weight={this.props.insalataGrecaWeight}
            foodInfo={this.props.insalataGrecaInfo}
            foodPrice={this.props.insalataGrecaPrice}
            onPress={this.insalataGrecaHandler}
          />
          <SingleFoodItem
            image={this.props.insalataDiPolloImage}
            foodName={this.props.insalataDiPolloName}
            weight={this.props.insalataDiPolloWeight}
            foodInfo={this.props.insalataDiPolloInfo}
            foodPrice={this.props.insalataDiPolloPrice}
            onPress={this.insalataDiPolloHandler}
          />
          <SingleFoodItem
            image={this.props.insalataDiMareImage}
            foodName={this.props.insalataDiMareName}
            weight={this.props.insalataDiMareWeight}
            foodInfo={this.props.insalataDiMareInfo}
            foodPrice={this.props.insalataDiMarePrice}
            onPress={this.insalataDiMareHandler}
          />
          <SingleFoodItem
            image={this.props.sirImage}
            foodName={this.props.sirName}
            weight={this.props.sirWeight}
            foodInfo={this.props.sirInfo}
            foodPrice={this.props.sirPrice}
            onPress={this.sirHandler}
          />
          <SingleFoodItem
            image={this.props.srpskaSalataImage}
            foodName={this.props.srpskaSalataName}
            weight={this.props.srpskaSalataWeight}
            foodInfo={this.props.srpskaSalataInfo}
            foodPrice={this.props.srpskaSalataPrice}
            onPress={this.srpskaSalataHandler}
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
            image={this.props.urnebesSalataImage}
            foodName={this.props.urnebesSalataName}
            weight={this.props.urnebesSalataWeight}
            foodInfo={this.props.urnebesSalataInfo}
            foodPrice={this.props.urnebesSalataPrice}
            onPress={this.urnebesSalataHandler}
          />
          <SingleFoodItem
            image={this.props.ljutaPapricicaImage}
            foodName={this.props.ljutaPapricicaName}
            weight={this.props.ljutaPapricicaWeight}
            foodInfo={this.props.ljutaPapricicaInfo}
            foodPrice={this.props.ljutaPapricicaPrice}
            onPress={this.ljutaPapricicaHandler}
          />
          <SingleFoodItem
            image={this.props.kupusSalataImage}
            foodName={this.props.kupusSalataName}
            weight={this.props.kupusSalataWeight}
            foodInfo={this.props.kupusSalataInfo}
            foodPrice={this.props.kupusSalataPrice}
            onPress={this.kupusSalataHandler}
          />
        </View>
      );
    }

    if (this.state.transToggle) {
      trans = (
        <View>
          <SingleFoodItem
            image={this.props.transizione28cmImage}
            foodName={this.props.transizione28cmName}
            weight={this.props.transizione28cmWeight}
            foodInfo={this.props.transizione28cmInfo}
            foodPrice={this.props.transizione28cmPrice}
            onPress={this.transizione28cmHandler}
          />
          <SingleFoodItem
            image={this.props.transizione35cmImage}
            foodName={this.props.transizione35cmName}
            weight={this.props.transizione35cmWeight}
            foodInfo={this.props.transizione35cmInfo}
            foodPrice={this.props.transizione35cmPrice}
            onPress={this.transizione35cmHandler}
          />
          <SingleFoodItem
            image={this.props.transizione45cmImage}
            foodName={this.props.transizione45cmName}
            weight={this.props.transizione45cmWeight}
            foodInfo={this.props.transizione45cmInfo}
            foodPrice={this.props.transizione45cmPrice}
            onPress={this.transizione45cmHandler}
          />
          <SingleFoodItem
            image={this.props.transizione50cmImage}
            foodName={this.props.transizione50cmName}
            weight={this.props.transizione50cmWeight}
            foodInfo={this.props.transizione50cmInfo}
            foodPrice={this.props.transizione50cmPrice}
            onPress={this.transizione50cmHandler}
          />
        </View>
      );
    }

    if (this.state.margaritaToggle) {
      margarita = (
        <View>
          <SingleFoodItem
            image={this.props.margarita28cmImage}
            foodName={this.props.margarita28cmName}
            weight={this.props.margarita28cmWeight}
            foodInfo={this.props.margarita28cmInfo}
            foodPrice={this.props.margarita28cmPrice}
            onPress={this.margarita28cmHandler}
          />
          <SingleFoodItem
            image={this.props.margarita35cmImage}
            foodName={this.props.margarita35cmName}
            weight={this.props.margarita35cmWeight}
            foodInfo={this.props.margarita35cmInfo}
            foodPrice={this.props.margarita35cmPrice}
            onPress={this.margarita35cmHandler}
          />
          <SingleFoodItem
            image={this.props.margarita45cmImage}
            foodName={this.props.margarita45cmName}
            weight={this.props.margarita45cmWeight}
            foodInfo={this.props.margarita45cmInfo}
            foodPrice={this.props.margarita45cmPrice}
            onPress={this.margarita45cmHandler}
          />
          <SingleFoodItem
            image={this.props.margarita50cmImage}
            foodName={this.props.margarita50cmName}
            weight={this.props.margarita50cmWeight}
            foodInfo={this.props.margarita50cmInfo}
            foodPrice={this.props.margarita50cmPrice}
            onPress={this.margarita50cmHandler}
          />
        </View>
      );
    }

    if (this.state.vezuvioToggle) {
      vezuvio = (
        <View>
          <SingleFoodItem
            image={this.props.vezuvio28cmImage}
            foodName={this.props.vezuvio28cmName}
            weight={this.props.vezuvio28cmWeight}
            foodInfo={this.props.vezuvio28cmInfo}
            foodPrice={this.props.vezuvio28cmPrice}
            onPress={this.vezuvio28cmHandler}
          />
          <SingleFoodItem
            image={this.props.vezuvio35cmImage}
            foodName={this.props.vezuvio35cmName}
            weight={this.props.vezuvio35cmWeight}
            foodInfo={this.props.vezuvio35cmInfo}
            foodPrice={this.props.vezuvio35cmPrice}
            onPress={this.vezuvio35cmHandler}
          />
          <SingleFoodItem
            image={this.props.vezuvio45cmImage}
            foodName={this.props.vezuvio45cmName}
            weight={this.props.vezuvio45cmWeight}
            foodInfo={this.props.vezuvio45cmInfo}
            foodPrice={this.props.vezuvio45cmPrice}
            onPress={this.vezuvio45cmHandler}
          />
          <SingleFoodItem
            image={this.props.vezuvio50cmImage}
            foodName={this.props.vezuvio50cmName}
            weight={this.props.vezuvio50cmWeight}
            foodInfo={this.props.vezuvio50cmInfo}
            foodPrice={this.props.vezuvio50cmPrice}
            onPress={this.vezuvio50cmHandler}
          />
        </View>
      );
    }

    if (this.state.capricciosaToggle) {
      capricciosa = (
        <View>
          <SingleFoodItem
            image={this.props.capricciosa28cmImage}
            foodName={this.props.capricciosa28cmName}
            weight={this.props.capricciosa28cmWeight}
            foodInfo={this.props.capricciosa28cmInfo}
            foodPrice={this.props.capricciosa28cmPrice}
            onPress={this.capricciosa28cmHandler}
          />
          <SingleFoodItem
            image={this.props.capricciosa35cmImage}
            foodName={this.props.capricciosa35cmName}
            weight={this.props.capricciosa35cmWeight}
            foodInfo={this.props.capricciosa35cmInfo}
            foodPrice={this.props.capricciosa35cmPrice}
            onPress={this.capricciosa35cmHandler}
          />
          <SingleFoodItem
            image={this.props.capricciosa45cmImage}
            foodName={this.props.capricciosa45cmName}
            weight={this.props.capricciosa45cmWeight}
            foodInfo={this.props.capricciosa45cmInfo}
            foodPrice={this.props.capricciosa45cmPrice}
            onPress={this.capricciosa45cmHandler}
          />
          <SingleFoodItem
            image={this.props.capricciosa50cmImage}
            foodName={this.props.capricciosa50cmName}
            weight={this.props.capricciosa50cmWeight}
            foodInfo={this.props.capricciosa50cmInfo}
            foodPrice={this.props.capricciosa50cmPrice}
            onPress={this.capricciosa50cmHandler}
          />

         
        </View>
      );
    }

    if (this.state.funghiToggle){
      funghi=(
        <View>
        <SingleFoodItem
            image={this.props.funghi28cmImage}
            foodName={this.props.funghi28cmName}
            weight={this.props.funghi28cmWeight}
            foodInfo={this.props.funghi28cmInfo}
            foodPrice={this.props.funghi28cmPrice}
            onPress={this.funghi28cmHandler}
          />
          <SingleFoodItem
            image={this.props.funghi35cmImage}
            foodName={this.props.funghi35cmName}
            weight={this.props.funghi35cmWeight}
            foodInfo={this.props.funghi35cmInfo}
            foodPrice={this.props.funghi35cmPrice}
            onPress={this.funghi35cmHandler}
          />
          <SingleFoodItem
            image={this.props.funghi45cmImage}
            foodName={this.props.funghi45cmName}
            weight={this.props.funghi45cmWeight}
            foodInfo={this.props.funghi45cmInfo}
            foodPrice={this.props.funghi45cmPrice}
            onPress={this.funghi45cmHandler}
          />
          <SingleFoodItem
            image={this.props.funghi50cmImage}
            foodName={this.props.funghi50cmName}
            weight={this.props.funghi50cmWeight}
            foodInfo={this.props.funghi50cmInfo}
            foodPrice={this.props.funghi50cmPrice}
            onPress={this.funghi50cmHandler}
          />

         
        </View>
      )
    }

    if(this.state.quattroStagioniToggle){
      quattroStagioni=(
        <View>
         <SingleFoodItem
            image={this.props.quattroStagioni28cmImage}
            foodName={this.props.quattroStagioni28cmName}
            weight={this.props.quattroStagioni28cmWeight}
            foodInfo={this.props.quattroStagioni28cmInfo}
            foodPrice={this.props.quattroStagioni28cmPrice}
            onPress={this.quattroStagioni28cmHandler}
          />
          <SingleFoodItem
            image={this.props.quattroStagioni35cmImage}
            foodName={this.props.quattroStagioni35cmName}
            weight={this.props.quattroStagioni35cmWeight}
            foodInfo={this.props.quattroStagioni35cmInfo}
            foodPrice={this.props.quattroStagioni35cmPrice}
            onPress={this.quattroStagioni35cmHandler}
          />
          <SingleFoodItem
            image={this.props.quattroStagioni45cmImage}
            foodName={this.props.quattroStagioni45cmName}
            weight={this.props.quattroStagioni45cmWeight}
            foodInfo={this.props.quattroStagioni45cmInfo}
            foodPrice={this.props.quattroStagioni45cmPrice}
            onPress={this.quattroStagioni45cmHandler}
          />
          <SingleFoodItem
            image={this.props.quattroStagioni50cmImage}
            foodName={this.props.quattroStagioni50cmName}
            weight={this.props.quattroStagioni50cmWeight}
            foodInfo={this.props.quattroStagioni50cmInfo}
            foodPrice={this.props.quattroStagioni50cmPrice}
            onPress={this.quattroStagioni50cmHandler}
          />

          
        </View>
      )
    }

    if(this.state.quattroTipiDiFormaggioToggle){
      quattroTipiDiFormaggio=(
        <View>
        <SingleFoodItem
            image={this.props.quattroTipiDiFormaggio28cmImage}
            foodName={this.props.quattroTipiDiFormaggio28cmName}
            weight={this.props.quattroTipiDiFormaggio28cmWeight}
            foodInfo={this.props.quattroTipiDiFormaggio28cmInfo}
            foodPrice={this.props.quattroTipiDiFormaggio28cmPrice}
            onPress={this.quattroTipiDiFormaggio28cmHandler}
          />
          <SingleFoodItem
            image={this.props.quattroTipiDiFormaggio35cmImage}
            foodName={this.props.quattroTipiDiFormaggio35cmName}
            weight={this.props.quattroTipiDiFormaggio35cmWeight}
            foodInfo={this.props.quattroTipiDiFormaggio35cmInfo}
            foodPrice={this.props.quattroTipiDiFormaggio35cmPrice}
            onPress={this.quattroTipiDiFormaggio35cmHandler}
          />
          <SingleFoodItem
            image={this.props.quattroTipiDiFormaggio45cmImage}
            foodName={this.props.quattroTipiDiFormaggio45cmName}
            weight={this.props.quattroTipiDiFormaggio45cmWeight}
            foodInfo={this.props.quattroTipiDiFormaggio45cmInfo}
            foodPrice={this.props.quattroTipiDiFormaggio45cmPrice}
            onPress={this.quattroTipiDiFormaggio45cmHandler}
          />
          <SingleFoodItem
            image={this.props.quattroTipiDiFormaggio50cmImage}
            foodName={this.props.quattroTipiDiFormaggio50cmName}
            weight={this.props.quattroTipiDiFormaggio50cmWeight}
            foodInfo={this.props.quattroTipiDiFormaggio50cmInfo}
            foodPrice={this.props.quattroTipiDiFormaggio50cmPrice}
            onPress={this.quattroTipiDiFormaggio50cmHandler}
          />


          
        </View>
      )
    }

    if(this.state.bologneseToggle){
      bolognese=(
        <View>
        <SingleFoodItem
            image={this.props.bolognese28cmImage}
            foodName={this.props.bolognese28cmName}
            weight={this.props.bolognese28cmWeight}
            foodInfo={this.props.bolognese28cmInfo}
            foodPrice={this.props.bolognese28cmPrice}
            onPress={this.bolognese28cmHandler}
          />
          <SingleFoodItem
            image={this.props.bolognese35cmImage}
            foodName={this.props.bolognese35cmName}
            weight={this.props.bolognese35cmWeight}
            foodInfo={this.props.bolognese35cmInfo}
            foodPrice={this.props.bolognese35cmPrice}
            onPress={this.bolognese35cmHandler}
          />
          <SingleFoodItem
            image={this.props.bolognese45cmImage}
            foodName={this.props.bolognese45cmName}
            weight={this.props.bolognese45cmWeight}
            foodInfo={this.props.bolognese45cmInfo}
            foodPrice={this.props.bolognese45cmPrice}
            onPress={this.bolognese45cmHandler}
          />
          <SingleFoodItem
            image={this.props.bolognese50cmImage}
            foodName={this.props.bolognese50cmName}
            weight={this.props.bolognese50cmWeight}
            foodInfo={this.props.bolognese50cmInfo}
            foodPrice={this.props.bolognese50cmPrice}
            onPress={this.bolognese50cmHandler}
          />

          
        </View>
      )
    }

    if(this.state.vegeterijanaToggle){
      vegeterijana=(
        <View>
        <SingleFoodItem
            image={this.props.vegeterijana28cmImage}
            foodName={this.props.vegeterijana28cmName}
            weight={this.props.vegeterijana28cmWeight}
            foodInfo={this.props.vegeterijana28cmInfo}
            foodPrice={this.props.vegeterijana28cmPrice}
            onPress={this.vegeterijana28cmHandler}
          />
          <SingleFoodItem
            image={this.props.vegeterijana35cmImage}
            foodName={this.props.vegeterijana35cmName}
            weight={this.props.vegeterijana35cmWeight}
            foodInfo={this.props.vegeterijana35cmInfo}
            foodPrice={this.props.vegeterijana35cmPrice}
            onPress={this.vegeterijana35cmHandler}
          />
          <SingleFoodItem
            image={this.props.vegeterijana45cmImage}
            foodName={this.props.vegeterijana45cmName}
            weight={this.props.vegeterijana45cmWeight}
            foodInfo={this.props.vegeterijana45cmInfo}
            foodPrice={this.props.vegeterijana45cmPrice}
            onPress={this.vegeterijana45cmHandler}
          />
          <SingleFoodItem
            image={this.props.vegeterijana50cmImage}
            foodName={this.props.vegeterijana50cmName}
            weight={this.props.vegeterijana50cmWeight}
            foodInfo={this.props.vegeterijana50cmInfo}
            foodPrice={this.props.vegeterijana50cmPrice}
            onPress={this.vegeterijana50cmHandler}
          />

         
        </View>
      )
    }

    if(this.state.tonnoToggle){
      tonno=(
        <View>
         <SingleFoodItem
            image={this.props.tonno35cmImage}
            foodName={this.props.tonno35cmName}
            weight={this.props.tonno35cmWeight}
            foodInfo={this.props.tonno35cmInfo}
            foodPrice={this.props.tonno35cmPrice}
            onPress={this.tonno35cmHandler}
          />
          <SingleFoodItem
            image={this.props.tonno45cmImage}
            foodName={this.props.tonno45cmName}
            weight={this.props.tonno45cmWeight}
            foodInfo={this.props.tonno45cmInfo}
            foodPrice={this.props.tonno45cmPrice}
            onPress={this.tonno45cmHandler}
          />
          <SingleFoodItem
            image={this.props.tonno50cmImage}
            foodName={this.props.tonno50cmName}
            weight={this.props.tonno50cmWeight}
            foodInfo={this.props.tonno50cmInfo}
            foodPrice={this.props.tonno50cmPrice}
            onPress={this.tonno50cmHandler}
          />

          
        </View>
      )
    }

    if(this.state.posnaPizzaToggle){
      posnaPizza=(
        <View>
          <SingleFoodItem
            image={this.props.posnaPizza28cmImage}
            foodName={this.props.posnaPizza28cmName}
            weight={this.props.posnaPizza28cmWeight}
            foodInfo={this.props.posnaPizza28cmInfo}
            foodPrice={this.props.posnaPizza28cmPrice}
            onPress={this.posnaPizza28cmHandler}
          />
          <SingleFoodItem
            image={this.props.posnaPizza35cmImage}
            foodName={this.props.posnaPizza35cmName}
            weight={this.props.posnaPizza35cmWeight}
            foodInfo={this.props.posnaPizza35cmInfo}
            foodPrice={this.props.posnaPizza35cmPrice}
            onPress={this.posnaPizza35cmHandler}
          />
          <SingleFoodItem
            image={this.props.posnaPizza45cmImage}
            foodName={this.props.posnaPizza45cmName}
            weight={this.props.posnaPizza45cmWeight}
            foodInfo={this.props.posnaPizza45cmInfo}
            foodPrice={this.props.posnaPizza45cmPrice}
            onPress={this.posnaPizza45cmHandler}
          />
          <SingleFoodItem
            image={this.props.posnaPizza50cmImage}
            foodName={this.props.posnaPizza50cmName}
            weight={this.props.posnaPizza50cmWeight}
            foodInfo={this.props.posnaPizza50cmInfo}
            foodPrice={this.props.posnaPizza50cmPrice}
            onPress={this.posnaPizza50cmHandler}
          />

          
        </View>
      )
    }

    if(this.state.girosDiPolloPizzaToggle){
      girosDiPolloPizza=(
        <View>
        <SingleFoodItem
            image={this.props.girosDiPolloPizza35cmImage}
            foodName={this.props.girosDiPolloPizza35cmName}
            weight={this.props.girosDiPolloPizza35cmWeight}
            foodInfo={this.props.girosDiPolloPizza35cmInfo}
            foodPrice={this.props.girosDiPolloPizza35cmPrice}
            onPress={this.girosDiPolloPizza35cmHandler}
          />
          <SingleFoodItem
            image={this.props.girosDiPolloPizza45cmImage}
            foodName={this.props.girosDiPolloPizza45cmName}
            weight={this.props.girosDiPolloPizza45cmWeight}
            foodInfo={this.props.girosDiPolloPizza45cmInfo}
            foodPrice={this.props.girosDiPolloPizza45cmPrice}
            onPress={this.girosDiPolloPizza45cmHandler}
          />
          <SingleFoodItem
            image={this.props.girosDiPolloPizza50cmImage}
            foodName={this.props.girosDiPolloPizza50cmName}
            weight={this.props.girosDiPolloPizza50cmWeight}
            foodInfo={this.props.girosDiPolloPizza50cmInfo}
            foodPrice={this.props.girosDiPolloPizza50cmPrice}
            onPress={this.girosDiPolloPizza50cmHandler}
          />
        </View>
      )
    }

    if(this.state.prosciuttoPrsutToggle){
      prosciuttoPrsut=(
        <View>
        <SingleFoodItem
            image={this.props.prosciuttoPrsut28cmImage}
            foodName={this.props.prosciuttoPrsut28cmName}
            weight={this.props.prosciuttoPrsut28cmWeight}
            foodInfo={this.props.prosciuttoPrsut28cmInfo}
            foodPrice={this.props.prosciuttoPrsut28cmPrice}
            onPress={this.prosciuttoPrsut28cmHandler}
          />
          <SingleFoodItem
            image={this.props.prosciuttoPrsut35cmImage}
            foodName={this.props.prosciuttoPrsut35cmName}
            weight={this.props.prosciuttoPrsut35cmWeight}
            foodInfo={this.props.prosciuttoPrsut35cmInfo}
            foodPrice={this.props.prosciuttoPrsut35cmPrice}
            onPress={this.prosciuttoPrsut35cmHandler}
          />
          <SingleFoodItem
            image={this.props.prosciuttoPrsut45cmImage}
            foodName={this.props.prosciuttoPrsut45cmName}
            weight={this.props.prosciuttoPrsut45cmWeight}
            foodInfo={this.props.prosciuttoPrsut45cmInfo}
            foodPrice={this.props.prosciuttoPrsut45cmPrice}
            onPress={this.prosciuttoPrsut45cmHandler}
          />
          <SingleFoodItem
            image={this.props.prosciuttoPrsut50cmImage}
            foodName={this.props.prosciuttoPrsut50cmName}
            weight={this.props.prosciuttoPrsut50cmWeight}
            foodInfo={this.props.prosciuttoPrsut50cmInfo}
            foodPrice={this.props.prosciuttoPrsut50cmPrice}
            onPress={this.prosciuttoPrsut50cmHandler}
          />
          
        </View>
      )
    }

    if(this.state.colosseoToggle){
      colosseo=(
        <View>
        <SingleFoodItem
            image={this.props.colosseo28cmImage}
            foodName={this.props.colosseo28cmName}
            weight={this.props.colosseo28cmWeight}
            foodInfo={this.props.colosseo28cmInfo}
            foodPrice={this.props.colosseo28cmPrice}
            onPress={this.colosseo28cmHandler}
          />
          <SingleFoodItem
            image={this.props.colosseo35cmImage}
            foodName={this.props.colosseo35cmName}
            weight={this.props.colosseo35cmWeight}
            foodInfo={this.props.colosseo35cmInfo}
            foodPrice={this.props.colosseo35cmPrice}
            onPress={this.colosseo35cmHandler}
          />
          <SingleFoodItem
            image={this.props.colosseo45cmImage}
            foodName={this.props.colosseo45cmName}
            weight={this.props.colosseo45cmWeight}
            foodInfo={this.props.colosseo45cmInfo}
            foodPrice={this.props.colosseo45cmPrice}
            onPress={this.colosseo45cmHandler}
          />
          <SingleFoodItem
            image={this.props.colosseo50cmImage}
            foodName={this.props.colosseo50cmName}
            weight={this.props.colosseo50cmWeight}
            foodInfo={this.props.colosseo50cmInfo}
            foodPrice={this.props.colosseo50cmPrice}
            onPress={this.colosseo50cmHandler}
          />

          
        </View>
      )
    }

    if(this.state.zlatiboracToggle){
      zlatiborac=(
        <View>
        <SingleFoodItem
            image={this.props.zlatiborac28cmImage}
            foodName={this.props.zlatiborac28cmName}
            weight={this.props.zlatiborac28cmWeight}
            foodInfo={this.props.zlatiborac28cmInfo}
            foodPrice={this.props.zlatiborac28cmPrice}
            onPress={this.zlatiborac28cmHandler}
          />
          <SingleFoodItem
            image={this.props.zlatiborac35cmImage}
            foodName={this.props.zlatiborac35cmName}
            weight={this.props.zlatiborac35cmWeight}
            foodInfo={this.props.zlatiborac35cmInfo}
            foodPrice={this.props.zlatiborac35cmPrice}
            onPress={this.zlatiborac35cmHandler}
          />
          <SingleFoodItem
            image={this.props.zlatiborac45cmImage}
            foodName={this.props.zlatiborac45cmName}
            weight={this.props.zlatiborac45cmWeight}
            foodInfo={this.props.zlatiborac45cmInfo}
            foodPrice={this.props.zlatiborac45cmPrice}
            onPress={this.zlatiborac45cmHandler}
          />
          <SingleFoodItem
            image={this.props.zlatiborac50cmImage}
            foodName={this.props.zlatiborac50cmName}
            weight={this.props.zlatiborac50cmWeight}
            foodInfo={this.props.zlatiborac50cmInfo}
            foodPrice={this.props.zlatiborac50cmPrice}
            onPress={this.zlatiborac50cmHandler}
          />

          
        </View>
      )
    }

    if(this.state.napolitanoToggle){
      napolitano=(
        <View>
        <SingleFoodItem
            image={this.props.napolitano28cmImage}
            foodName={this.props.napolitano28cmName}
            weight={this.props.napolitano28cmWeight}
            foodInfo={this.props.napolitano28cmInfo}
            foodPrice={this.props.napolitano28cmPrice}
            onPress={this.napolitano28cmHandler}
          />
          <SingleFoodItem
            image={this.props.napolitano35cmImage}
            foodName={this.props.napolitano35cmName}
            weight={this.props.napolitano35cmWeight}
            foodInfo={this.props.napolitano35cmInfo}
            foodPrice={this.props.napolitano35cmPrice}
            onPress={this.napolitano35cmHandler}
          />
          <SingleFoodItem
            image={this.props.napolitano45cmImage}
            foodName={this.props.napolitano45cmName}
            weight={this.props.napolitano45cmWeight}
            foodInfo={this.props.napolitano45cmInfo}
            foodPrice={this.props.napolitano45cmPrice}
            onPress={this.napolitano45cmHandler}
          />
          <SingleFoodItem
            image={this.props.napolitano50cmImage}
            foodName={this.props.napolitano50cmName}
            weight={this.props.napolitano50cmWeight}
            foodInfo={this.props.napolitano50cmInfo}
            foodPrice={this.props.napolitano50cmPrice}
            onPress={this.napolitano50cmHandler}
          />

          
        </View>
      )
    }

    if(this.state.fruttiDiMareToggle){
      fruttiDiMare=(
        <View>
          <SingleFoodItem
            image={this.props.fruttiDiMare28cmImage}
            foodName={this.props.fruttiDiMare28cmName}
            weight={this.props.fruttiDiMare28cmWeight}
            foodInfo={this.props.fruttiDiMare28cmInfo}
            foodPrice={this.props.fruttiDiMare28cmPrice}
            onPress={this.fruttiDiMare28cmHandler}
          />
          <SingleFoodItem
            image={this.props.fruttiDiMare35cmImage}
            foodName={this.props.fruttiDiMare35cmName}
            weight={this.props.fruttiDiMare35cmWeight}
            foodInfo={this.props.fruttiDiMare35cmInfo}
            foodPrice={this.props.fruttiDiMare35cmPrice}
            onPress={this.fruttiDiMare35cmHandler}
          />
          <SingleFoodItem
            image={this.props.fruttiDiMare45cmImage}
            foodName={this.props.fruttiDiMare45cmName}
            weight={this.props.fruttiDiMare45cmWeight}
            foodInfo={this.props.fruttiDiMare45cmInfo}
            foodPrice={this.props.fruttiDiMare45cmPrice}
            onPress={this.fruttiDiMare45cmHandler}
          />
          <SingleFoodItem
            image={this.props.fruttiDiMare50cmImage}
            foodName={this.props.fruttiDiMare50cmName}
            weight={this.props.fruttiDiMare50cmWeight}
            foodInfo={this.props.fruttiDiMare50cmInfo}
            foodPrice={this.props.fruttiDiMare50cmPrice}
            onPress={this.fruttiDiMare50cmHandler}
          />

         
        </View>
      )
    }

    if(this.state.ilDiavoloToggle){
      ilDiavolo=(
        <View>
         <SingleFoodItem
            image={this.props.ilDiavolo28cmImage}
            foodName={this.props.ilDiavolo28cmName}
            weight={this.props.ilDiavolo28cmWeight}
            foodInfo={this.props.ilDiavolo28cmInfo}
            foodPrice={this.props.ilDiavolo28cmPrice}
            onPress={this.ilDiavolo28cmHandler}
          />
          <SingleFoodItem
            image={this.props.ilDiavolo35cmImage}
            foodName={this.props.ilDiavolo35cmName}
            weight={this.props.ilDiavolo35cmWeight}
            foodInfo={this.props.ilDiavolo35cmInfo}
            foodPrice={this.props.ilDiavolo35cmPrice}
            onPress={this.ilDiavolo35cmHandler}
          />
          <SingleFoodItem
            image={this.props.ilDiavolo45cmImage}
            foodName={this.props.ilDiavolo45cmName}
            weight={this.props.ilDiavolo45cmWeight}
            foodInfo={this.props.ilDiavolo45cmInfo}
            foodPrice={this.props.ilDiavolo45cmPrice}
            onPress={this.ilDiavolo45cmHandler}
          />
          <SingleFoodItem
            image={this.props.ilDiavolo50cmImage}
            foodName={this.props.ilDiavolo50cmName}
            weight={this.props.ilDiavolo50cmWeight}
            foodInfo={this.props.ilDiavolo50cmInfo}
            foodPrice={this.props.ilDiavolo50cmPrice}
            onPress={this.ilDiavolo50cmHandler}
          />

          
        </View>
      )
    }

    if(this.state.srbijaToggle){
      srbija=(
        <View>
        <SingleFoodItem
            image={this.props.srbija28cmImage}
            foodName={this.props.srbija28cmName}
            weight={this.props.srbija28cmWeight}
            foodInfo={this.props.srbija28cmInfo}
            foodPrice={this.props.srbija28cmPrice}
            onPress={this.srbija28cmHandler}
          />
          <SingleFoodItem
            image={this.props.srbija35cmImage}
            foodName={this.props.srbija35cmName}
            weight={this.props.srbija35cmWeight}
            foodInfo={this.props.srbija35cmInfo}
            foodPrice={this.props.srbija35cmPrice}
            onPress={this.srbija35cmHandler}
          />
          <SingleFoodItem
            image={this.props.srbija45cmImage}
            foodName={this.props.srbija45cmName}
            weight={this.props.srbija45cmWeight}
            foodInfo={this.props.srbija45cmInfo}
            foodPrice={this.props.srbija45cmPrice}
            onPress={this.srbija45cmHandler}
          />
          <SingleFoodItem
            image={this.props.srbija50cmImage}
            foodName={this.props.srbija50cmName}
            weight={this.props.srbija50cmWeight}
            foodInfo={this.props.srbija50cmInfo}
            foodPrice={this.props.srbija50cmPrice}
            onPress={this.srbija50cmHandler}
          />

          
        </View>
      )
    }

    if(this.state.pizzaGourmetToggle){
      pizzaGourmet=(
        <View>
        <SingleFoodItem
            image={this.props.pizzaGourmet28cmImage}
            foodName={this.props.pizzaGourmet28cmName}
            weight={this.props.pizzaGourmet28cmWeight}
            foodInfo={this.props.pizzaGourmet28cmInfo}
            foodPrice={this.props.pizzaGourmet28cmPrice}
            onPress={this.pizzaGourmet28cmHandler}
          />
          <SingleFoodItem
            image={this.props.pizzaGourmet35cmImage}
            foodName={this.props.pizzaGourmet35cmName}
            weight={this.props.pizzaGourmet35cmWeight}
            foodInfo={this.props.pizzaGourmet35cmInfo}
            foodPrice={this.props.pizzaGourmet35cmPrice}
            onPress={this.pizzaGourmet35cmHandler}
          />
          <SingleFoodItem
            image={this.props.pizzaGourmet45cmImage}
            foodName={this.props.pizzaGourmet45cmName}
            weight={this.props.pizzaGourmet45cmWeight}
            foodInfo={this.props.pizzaGourmet45cmInfo}
            foodPrice={this.props.pizzaGourmet45cmPrice}
            onPress={this.pizzaGourmet45cmHandler}
          />
          <SingleFoodItem
            image={this.props.pizzaGourmet50cmImage}
            foodName={this.props.pizzaGourmet50cmName}
            weight={this.props.pizzaGourmet50cmWeight}
            foodInfo={this.props.pizzaGourmet50cmInfo}
            foodPrice={this.props.pizzaGourmet50cmPrice}
            onPress={this.pizzaGourmet50cmHandler}
          />

        

          
        </View>
      )
    }

    // if(this.state.kreirajteSvojuPizzuToggle){
    //   kreirajteSvojuPizzu=(
    //     <View>
    //     <SingleFoodItem
    //         image={this.props.kreirajteSvojuPizzu28cmImage}
    //         foodName={this.props.kreirajteSvojuPizzu28cmName}
    //         weight={this.props.kreirajteSvojuPizzu28cmWeight}
    //         foodInfo={this.props.kreirajteSvojuPizzu28cmInfo}
    //         foodPrice={this.props.kreirajteSvojuPizzu28cmPrice}
    //         onPress={this.kreirajteSvojuPizzu28cmHandler}
    //       />
    //       <SingleFoodItem
    //         image={this.props.kreirajteSvojuPizzu35cmImage}
    //         foodName={this.props.kreirajteSvojuPizzu35cmName}
    //         weight={this.props.kreirajteSvojuPizzu35cmWeight}
    //         foodInfo={this.props.kreirajteSvojuPizzu35cmInfo}
    //         foodPrice={this.props.kreirajteSvojuPizzu35cmPrice}
    //         onPress={this.kreirajteSvojuPizzu35cmHandler}
    //       />
    //       <SingleFoodItem
    //         image={this.props.kreirajteSvojuPizzu45cmImage}
    //         foodName={this.props.kreirajteSvojuPizzu45cmName}
    //         weight={this.props.kreirajteSvojuPizzu45cmWeight}
    //         foodInfo={this.props.kreirajteSvojuPizzu45cmInfo}
    //         foodPrice={this.props.kreirajteSvojuPizzu45cmPrice}
    //         onPress={this.kreirajteSvojuPizzu45cmHandler}
    //       />
    //       <SingleFoodItem
    //         image={this.props.kreirajteSvojuPizzu50cmImage}
    //         foodName={this.props.kreirajteSvojuPizzu50cmName}
    //         weight={this.props.kreirajteSvojuPizzu50cmWeight}
    //         foodInfo={this.props.kreirajteSvojuPizzu50cmInfo}
    //         foodPrice={this.props.kreirajteSvojuPizzu50cmPrice}
    //         onPress={this.kreirajteSvojuPizzu50cmHandler}
    //       />
    //     </View>
    //   )
    // }

    if(this.state.piroskaToggle){
      piroska=(
        <View>
        <SingleFoodItem
            image={this.props.piroska28cmImage}
            foodName={this.props.piroska28cmName}
            weight={this.props.piroska28cmWeight}
            foodInfo={this.props.piroska28cmInfo}
            foodPrice={this.props.piroska28cmPrice}
            onPress={this.piroska28cmHandler}
          />
          <SingleFoodItem
            image={this.props.piroska35cmImage}
            foodName={this.props.piroska35cmName}
            weight={this.props.piroska35cmWeight}
            foodInfo={this.props.piroska35cmInfo}
            foodPrice={this.props.piroska35cmPrice}
            onPress={this.piroska35cmHandler}
          />
          
        </View>
      )
    }
    if (this.state.pizzaToggle) {
      pizzaToggle = (
        <View>
          <PizzaToggle output={trans} text="Transizione" onPress={this.transToggleHandler} stateToggle={this.state.transToggle} />
          <PizzaToggle output={margarita} text="Margarita" onPress={this.margaritaToggleHandler} stateToggle={this.state.margaritaToggle} />
          <PizzaToggle output={vezuvio} text="Vezuvio" onPress={this.vezuvioToggleHandler} stateToggle={this.state.vezuvioToggle} />
          <PizzaToggle output={capricciosa} text="Capricciosa" onPress={this.capricciosaToggleHandler} stateToggle={this.state.capricciosaToggle} />
          <PizzaToggle output={funghi} text="Funghi" onPress={this.funghiToggleHandler} stateToggle={this.state.funghiToggle} />
          <PizzaToggle output={quattroStagioni} text="Quattro Stagioni" onPress={this.quattroStagioniToggleHandler} stateToggle={this.state.quattroStagioniToggle} />
          <PizzaToggle output={quattroTipiDiFormaggio} text="Quattro Tipi Di Formaggio" onPress={this.quattroTipiDiFormaggioToggleHandler} stateToggle={this.state.quattroTipiDiFormaggioToggle} />
          <PizzaToggle output={bolognese} text="Bolognese" onPress={this.bologneseToggleHandler} stateToggle={this.state.bologneseToggle} />
          <PizzaToggle output={vegeterijana} text="Vegeterijana" onPress={this.vegeterijanaToggleHandler} stateToggle={this.state.vegeterijanaToggle} />
          <PizzaToggle output={tonno} text="Tonno" onPress={this.tonnoToggleHandler} stateToggle={this.state.tonnoToggle} />
          <PizzaToggle output={posnaPizza} text="Posna Pizza" onPress={this.posnaPizzaToggleHandler} stateToggle={this.state.posnaPizzaToggle} />
          <PizzaToggle output={girosDiPolloPizza} text="Giros Di Pollo Pizza" onPress={this.girosDiPolloPizzaToggleHandler} stateToggle={this.state.girosDiPolloPizzaToggle} />
          <PizzaToggle output={prosciuttoPrsut} text="Prosciutto - Pršut" onPress={this.prosciuttoPrsutToggleHandler} stateToggle={this.state.prosciuttoPrsutToggle} />
          <PizzaToggle output={colosseo} text="Colosseo" onPress={this.colosseoToggleHandler} stateToggle={this.state.colosseoToggle} />
          <PizzaToggle output={zlatiborac} text="Zlatiborac" onPress={this.zlatiboracToggleHandler} stateToggle={this.state.zlatiboracToggle} />
          <PizzaToggle output={napolitano} text="Napolitano" onPress={this.napolitanoToggleHandler} stateToggle={this.state.napolitanoToggle} />
          <PizzaToggle output={fruttiDiMare} text="Frutti Di Mare" onPress={this.fruttiDiMareToggleHandler} stateToggle={this.state.fruttiDiMareToggle} />
          <PizzaToggle output={ilDiavolo} text="Il Diavolo" onPress={this.ilDiavoloToggleHandler} stateToggle={this.state.ilDiavoloToggle} />
          <PizzaToggle output={srbija} text="Srbija" onPress={this.srbijaToggleHandler} stateToggle={this.state.srbijaToggle} />
          <PizzaToggle output={pizzaGourmet} text="Pizza Gourmet" onPress={this.pizzaGourmetToggleHandler} stateToggle={this.state.pizzaGourmetToggle} />
          <PizzaToggle output={piroska} text="Piroška" onPress={this.piroskaToggleHandler} stateToggle={this.state.piroskaToggle} />
          {/* <PizzaToggle output={kreirajteSvojuPizzu} text="Kreirajte Svoju Pizzu" onPress={this.kreirajteSvojuPizzuToggleHandler} stateToggle={this.state.kreirajteSvojuPizzuToggle} /> */}
        </View>
      );
    }

    if (this.state.toplaPredjelaToggle) {
      toplaPredjela = (
        <View>
          <SingleFoodItem
            image={this.props.pecurkeImage}
            foodName={this.props.pecurkeName}
            weight={this.props.pecurkeWeight}
            foodInfo={this.props.pecurkeInfo}
            foodPrice={this.props.pecurkePrice}
            onPress={this.pecurkeHandler}
          />
          <SingleFoodItem
            image={this.props.pohovaniKackavaljImage}
            foodName={this.props.pohovaniKackavaljName}
            weight={this.props.pohovaniKackavaljWeight}
            foodInfo={this.props.pohovaniKackavaljInfo}
            foodPrice={this.props.pohovaniKackavaljPrice}
            onPress={this.pohovaniKackavaljHandler}
          />
          
        </View>
      );
    }

    if (this.state.rostiljToggle) {
      RostiljToggle = (
        <View>
          <SingleFoodItem
            image={this.props.cevapiImage}
            foodName={this.props.cevapiName}
            weight={this.props.cevapiWeight}
            foodInfo={this.props.cevapiInfo}
            foodPrice={this.props.cevapiPrice}
            onPress={this.cevapiHandler}
          />
          <SingleFoodItem
            image={this.props.cevapiNaKajmakuImage}
            foodName={this.props.cevapiNaKajmakuName}
            weight={this.props.cevapiNaKajmakuWeight}
            foodInfo={this.props.cevapiNaKajmakuInfo}
            foodPrice={this.props.cevapiNaKajmakuPrice}
            onPress={this.cevapiNaKajmakuHandler}
          />
          <SingleFoodItem
            image={this.props.punjeniCevapImage}
            foodName={this.props.punjeniCevapName}
            weight={this.props.punjeniCevapWeight}
            foodInfo={this.props.punjeniCevapInfo}
            foodPrice={this.props.punjeniCevapPrice}
            onPress={this.punjeniCevapHandler}
          />
          <SingleFoodItem
            image={this.props.domacaRostiljskaKobasicaImage}
            foodName={this.props.domacaRostiljskaKobasicaName}
            weight={this.props.domacaRostiljskaKobasicaWeight}
            foodInfo={this.props.domacaRostiljskaKobasicaInfo}
            foodPrice={this.props.domacaRostiljskaKobasicaPrice}
            onPress={this.domacaRostiljskaKobasicaHandler}
          />
          <SingleFoodItem
            image={this.props.domacaDimljenaKobasicaImage}
            foodName={this.props.domacaDimljenaKobasicaName}
            weight={this.props.domacaDimljenaKobasicaWeight}
            foodInfo={this.props.domacaDimljenaKobasicaInfo}
            foodPrice={this.props.domacaDimljenaKobasicaPrice}
            onPress={this.domacaDimljenaKobasicaHandler}
          />
          <SingleFoodItem
            image={this.props.dimljeniSvinjskiVratImage}
            foodName={this.props.dimljeniSvinjskiVratName}
            weight={this.props.dimljeniSvinjskiVratWeight}
            foodInfo={this.props.dimljeniSvinjskiVratInfo}
            foodPrice={this.props.dimljeniSvinjskiVratPrice}
            onPress={this.dimljeniSvinjskiVratHandler}
          />
          <SingleFoodItem
            image={this.props.dimljenaBelaVesalicaImage}
            foodName={this.props.dimljenaBelaVesalicaName}
            weight={this.props.dimljenaBelaVesalicaWeight}
            foodInfo={this.props.dimljenaBelaVesalicaInfo}
            foodPrice={this.props.dimljenaBelaVesalicaPrice}
            onPress={this.dimljenaBelaVesalicaHandler}
          />
          <SingleFoodItem
            image={this.props.belaVesalicaImage}
            foodName={this.props.belaVesalicaName}
            weight={this.props.belaVesalicaWeight}
            foodInfo={this.props.belaVesalicaInfo}
            foodPrice={this.props.belaVesalicaPrice}
            onPress={this.belaVesalicaHandler}
          />
          <SingleFoodItem
            image={this.props.belaVesalicaVrganjImage}
            foodName={this.props.belaVesalicaVrganjName}
            weight={this.props.belaVesalicaVrganjWeight}
            foodInfo={this.props.belaVesalicaVrganjInfo}
            foodPrice={this.props.belaVesalicaVrganjPrice}
            onPress={this.belaVesalicaVrganjHandler}
          />
          <SingleFoodItem
            image={this.props.belaVesalicaKajmakImage}
            foodName={this.props.belaVesalicaKajmakName}
            weight={this.props.belaVesalicaKajmakWeight}
            foodInfo={this.props.belaVesalicaKajmakInfo}
            foodPrice={this.props.belaVesalicaKajmakPrice}
            onPress={this.belaVesalicaKajmakHandler}
          />
          <SingleFoodItem
            image={this.props.pileciFileImage}
            foodName={this.props.pileciFileName}
            weight={this.props.pileciFileWeight}
            foodInfo={this.props.pileciFileInfo}
            foodPrice={this.props.pileciFilePrice}
            onPress={this.pileciFileHandler}
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
            image={this.props.svinjskaRebraImage}
            foodName={this.props.svinjskaRebraName}
            weight={this.props.svinjskaRebraWeight}
            foodInfo={this.props.svinjskaRebraInfo}
            foodPrice={this.props.svinjskaRebraPrice}
            onPress={this.svinjskaRebraHandler}
          />
          <SingleFoodItem
            image={this.props.mesanoMesoImage}
            foodName={this.props.mesanoMesoName}
            weight={this.props.mesanoMesoWeight}
            foodInfo={this.props.mesanoMesoInfo}
            foodPrice={this.props.mesanoMesoPrice}
            onPress={this.mesanoMesoHandler}
          />
          <SingleFoodItem
            image={this.props.banjaluckiCevapImage}
            foodName={this.props.banjaluckiCevapName}
            weight={this.props.banjaluckiCevapWeight}
            foodInfo={this.props.banjaluckiCevapInfo}
            foodPrice={this.props.banjaluckiCevapPrice}
            onPress={this.banjaluckiCevapHandler}
          />
        </View>
      );
    }

    if (this.state.jelovnik) {
      output = (
        <View style={{ flex: 1, backgroundColor: "#f2f2f2" , marginBottom:5}}>
          <View>
            <HeaderInfo
              online="false"
              time="00:00"
              minPay="590din"
              image={{uri:"https://firebasestorage.googleapis.com/v0/b/deliveryapp-4951a.appspot.com/o/img%2Fcolosseo%2FcolosseoLogo%2FpizzaSmall.jpg?alt=media&token=33afaca1-18f5-4b2d-b06e-f743ef9bc135"}}
              resName="Pizzeria Colosseo"
              adress="Ulica, 13 Crnovrških Brigada, Bor"
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
          <ScrollView removeClippedSubviews={true} >
            <Toggle onPress={this.pizzaToggleHandler} stateToggle={this.state.pizzaToggle} text="Pizza"/>
            {pizzaToggle}
            <Toggle onPress={this.pastaToggleHandler} stateToggle={this.state.pastaToggle} text="Pasta & Lasagne"/>
            {pasta}
            <Toggle onPress={this.salateToggleHandler} stateToggle={this.state.salateToggle} text="Salate"/>
            {salateToggle}
            <Toggle onPress={this.toplaPredjelaToggleHandler} stateToggle={this.state.toplaPredjelaToggle} text="Topla Predjela (Antipasti Caldi)"/>
            {toplaPredjela}
            <Toggle onPress={this.jelaPoPorudzbiniToggleHandler} stateToggle={this.state.jelaPoPorudzbiniToggle} text="Jela Po Porudzbini"/>
            {jelaPoPorudzbini}
            <Toggle onPress={this.rostiljToggleHandler} stateToggle={this.state.rostiljToggle} text="Specijaliteti Sa Roštilja"/>
            {RostiljToggle}
            <Toggle onPress={this.moreToggleHandler} stateToggle={this.state.moreToggle} text="Specijaliteti od Morskih Plodova"/>
            {moreToggle}
            <Toggle onPress={this.priloziToggleHandler} stateToggle={this.state.priloziToggle} text="Prilozi"/>
            {prilozi}
            <Toggle onPress={this.desertToggleHandler} stateToggle={this.state.desertToggle} text="Dezerti"/>
            {desertToggle}
          </ScrollView>
        </View>
      );
    }

    if (this.state.popularno) {
      output = (
        <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
          <View>
            <HeaderInfo
              online="false"
              time="00:00"
              minPay="590din"
              image={{uri:"https://firebasestorage.googleapis.com/v0/b/deliveryapp-4951a.appspot.com/o/img%2Fcolosseo%2FcolosseoLogo%2FpizzaSmall.jpg?alt=media&token=33afaca1-18f5-4b2d-b06e-f743ef9bc135"}}
              resName="Pizzeria Colosseo"
              adress="Ulica, 13 Crnovrških Brigada, Bor"
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
          <ScrollView removeClippedSubviews={true} >
                <View>
                <SingleFoodItem
                image={this.props.zlatiborac50cmImage}
                foodName={this.props.zlatiborac50cmName}
                weight={this.props.zlatiborac50cmWeight}
                foodInfo={this.props.zlatiborac50cmInfo}
                foodPrice={this.props.zlatiborac50cmPrice}
                onPress={this.zlatiborac50cmHandler}
              />
              <SingleFoodItem
            image={this.props.dimljenaBelaVesalicaImage}
            foodName={this.props.dimljenaBelaVesalicaName}
            weight={this.props.dimljenaBelaVesalicaWeight}
            foodInfo={this.props.dimljenaBelaVesalicaInfo}
            foodPrice={this.props.dimljenaBelaVesalicaPrice}
            onPress={this.dimljenaBelaVesalicaHandler}
          />
              
              <SingleFoodItem
                image={this.props.margarita50cmImage}
                foodName={this.props.margarita50cmName}
                weight={this.props.margarita50cmWeight}
                foodInfo={this.props.margarita50cmInfo}
                foodPrice={this.props.margarita50cmPrice}
                onPress={this.margarita50cmHandler}
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
                image={this.props.colosseo50cmImage}
                foodName={this.props.colosseo50cmName}
                weight={this.props.colosseo50cmWeight}
                foodInfo={this.props.colosseo50cmInfo}
                foodPrice={this.props.colosseo50cmPrice}
                onPress={this.colosseo50cmHandler}
              />
             <SingleFoodItem
                image={this.props.lasagneBologneseBigImage}
                foodName={this.props.lasagneBologneseBigName}
                weight={this.props.lasagneBologneseBigWeight}
                foodInfo={this.props.lasagneBologneseBigInfo}
                foodPrice={this.props.lasagneBologneseBigPrice}
                onPress={this.lasagneBologneseBigHandler}
              />
              <SingleFoodItem
            image={this.props.palacinkeNutellaPlazmaImage}
            foodName={this.props.palacinkeNutellaPlazmaName}
            weight={this.props.palacinkeNutellaPlazmaWeight}
            foodInfo={this.props.palacinkeNutellaPlazmaInfo}
            foodPrice={this.props.palacinkeNutellaPlazmaPrice}
            onPress={this.palacinkeNutellaPlazmaHandler}
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
            image={this.props.dimljeniSvinjskiVratImage}
            foodName={this.props.dimljeniSvinjskiVratName}
            weight={this.props.dimljeniSvinjskiVratWeight}
            foodInfo={this.props.dimljeniSvinjskiVratInfo}
            foodPrice={this.props.dimljeniSvinjskiVratPrice}
            onPress={this.dimljeniSvinjskiVratHandler}
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
    height: 60,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 5
  },
  foodTypeContainer1: {
    borderWidth: 1,
    borderColor: "gray",
    height: 60,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    marginTop: 5
  },
  foodTypeContainerSmall: {
    borderWidth: 1,
    borderColor: "gray",
    height: 50,
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 5
  },
  foodTypeContainerSmall1: {
    borderWidth: 1,
    borderColor: "gray",
    height: 50,
    width: "85%",
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
    transizione28cmName: state.colosseo.pizza.transizione28cm.name,
    transizione28cmWeight: state.colosseo.pizza.transizione28cm.diam,
    transizione28cmInfo: state.colosseo.pizza.transizione28cm.info,
    transizione28cmPrice: state.colosseo.pizza.transizione28cm.price,
    transizione28cmImage: state.colosseo.pizza.transizione28cm.image,
    transizione35cmName: state.colosseo.pizza.transizione35cm.name,
    transizione35cmWeight: state.colosseo.pizza.transizione35cm.diam,
    transizione35cmInfo: state.colosseo.pizza.transizione35cm.info,
    transizione35cmPrice: state.colosseo.pizza.transizione35cm.price,
    transizione35cmImage: state.colosseo.pizza.transizione35cm.image,
    transizione45cmName: state.colosseo.pizza.transizione45cm.name,
    transizione45cmWeight: state.colosseo.pizza.transizione45cm.diam,
    transizione45cmInfo: state.colosseo.pizza.transizione45cm.info,
    transizione45cmPrice: state.colosseo.pizza.transizione45cm.price,
    transizione45cmImage: state.colosseo.pizza.transizione45cm.image,
    transizione50cmName: state.colosseo.pizza.transizione50cm.name,
    transizione50cmWeight: state.colosseo.pizza.transizione50cm.diam,
    transizione50cmInfo: state.colosseo.pizza.transizione50cm.info,
    transizione50cmPrice: state.colosseo.pizza.transizione50cm.price,
    transizione50cmImage: state.colosseo.pizza.transizione50cm.image,
    margarita28cmName: state.colosseo.pizza.margarita28cm.name,
    margarita28cmWeight: state.colosseo.pizza.margarita28cm.diam,
    margarita28cmInfo: state.colosseo.pizza.margarita28cm.info,
    margarita28cmPrice: state.colosseo.pizza.margarita28cm.price,
    margarita28cmImage: state.colosseo.pizza.margarita28cm.image,
    margarita35cmName: state.colosseo.pizza.margarita35cm.name,
    margarita35cmWeight: state.colosseo.pizza.margarita35cm.diam,
    margarita35cmInfo: state.colosseo.pizza.margarita35cm.info,
    margarita35cmPrice: state.colosseo.pizza.margarita35cm.price,
    margarita35cmImage: state.colosseo.pizza.margarita35cm.image,
    margarita45cmName: state.colosseo.pizza.margarita45cm.name,
    margarita45cmWeight: state.colosseo.pizza.margarita45cm.diam,
    margarita45cmInfo: state.colosseo.pizza.margarita45cm.info,
    margarita45cmPrice: state.colosseo.pizza.margarita45cm.price,
    margarita45cmImage: state.colosseo.pizza.margarita45cm.image,
    margarita50cmName: state.colosseo.pizza.margarita50cm.name,
    margarita50cmWeight: state.colosseo.pizza.margarita50cm.diam,
    margarita50cmInfo: state.colosseo.pizza.margarita50cm.info,
    margarita50cmPrice: state.colosseo.pizza.margarita50cm.price,
    margarita50cmImage: state.colosseo.pizza.margarita50cm.image,
    vezuvio28cmName: state.colosseo.pizza.vezuvio28cm.name,
    vezuvio28cmWeight: state.colosseo.pizza.vezuvio28cm.diam,
    vezuvio28cmInfo: state.colosseo.pizza.vezuvio28cm.info,
    vezuvio28cmPrice: state.colosseo.pizza.vezuvio28cm.price,
    vezuvio28cmImage: state.colosseo.pizza.vezuvio28cm.image,
    vezuvio35cmName: state.colosseo.pizza.vezuvio35cm.name,
    vezuvio35cmWeight: state.colosseo.pizza.vezuvio35cm.diam,
    vezuvio35cmInfo: state.colosseo.pizza.vezuvio35cm.info,
    vezuvio35cmPrice: state.colosseo.pizza.vezuvio35cm.price,
    vezuvio35cmImage: state.colosseo.pizza.vezuvio35cm.image,
    vezuvio45cmName: state.colosseo.pizza.vezuvio45cm.name,
    vezuvio45cmWeight: state.colosseo.pizza.vezuvio45cm.diam,
    vezuvio45cmInfo: state.colosseo.pizza.vezuvio45cm.info,
    vezuvio45cmPrice: state.colosseo.pizza.vezuvio45cm.price,
    vezuvio45cmImage: state.colosseo.pizza.vezuvio45cm.image,
    vezuvio50cmName: state.colosseo.pizza.vezuvio50cm.name,
    vezuvio50cmWeight: state.colosseo.pizza.vezuvio50cm.diam,
    vezuvio50cmInfo: state.colosseo.pizza.vezuvio50cm.info,
    vezuvio50cmPrice: state.colosseo.pizza.vezuvio50cm.price,
    vezuvio50cmImage: state.colosseo.pizza.vezuvio50cm.image,
    capricciosa28cmName: state.colosseo.pizza.capricciosa28cm.name,
    capricciosa28cmWeight: state.colosseo.pizza.capricciosa28cm.diam,
    capricciosa28cmInfo: state.colosseo.pizza.capricciosa28cm.info,
    capricciosa28cmPrice: state.colosseo.pizza.capricciosa28cm.price,
    capricciosa28cmImage: state.colosseo.pizza.capricciosa28cm.image,
    capricciosa35cmName: state.colosseo.pizza.capricciosa35cm.name,
    capricciosa35cmWeight: state.colosseo.pizza.capricciosa35cm.diam,
    capricciosa35cmInfo: state.colosseo.pizza.capricciosa35cm.info,
    capricciosa35cmPrice: state.colosseo.pizza.capricciosa35cm.price,
    capricciosa35cmImage: state.colosseo.pizza.capricciosa35cm.image,
    capricciosa45cmName: state.colosseo.pizza.capricciosa45cm.name,
    capricciosa45cmWeight: state.colosseo.pizza.capricciosa45cm.diam,
    capricciosa45cmInfo: state.colosseo.pizza.capricciosa45cm.info,
    capricciosa45cmPrice: state.colosseo.pizza.capricciosa45cm.price,
    capricciosa45cmImage: state.colosseo.pizza.capricciosa45cm.image,
    capricciosa50cmName: state.colosseo.pizza.capricciosa50cm.name,
    capricciosa50cmWeight: state.colosseo.pizza.capricciosa50cm.diam,
    capricciosa50cmInfo: state.colosseo.pizza.capricciosa50cm.info,
    capricciosa50cmPrice: state.colosseo.pizza.capricciosa50cm.price,
    capricciosa50cmImage: state.colosseo.pizza.capricciosa50cm.image,
    funghi28cmName: state.colosseo.pizza.funghi28cm.name,
    funghi28cmWeight: state.colosseo.pizza.funghi28cm.diam,
    funghi28cmInfo: state.colosseo.pizza.funghi28cm.info,
    funghi28cmPrice: state.colosseo.pizza.funghi28cm.price,
    funghi28cmImage: state.colosseo.pizza.funghi28cm.image,
    funghi35cmName: state.colosseo.pizza.funghi35cm.name,
    funghi35cmWeight: state.colosseo.pizza.funghi35cm.diam,
    funghi35cmInfo: state.colosseo.pizza.funghi35cm.info,
    funghi35cmPrice: state.colosseo.pizza.funghi35cm.price,
    funghi35cmImage: state.colosseo.pizza.funghi35cm.image,
    funghi45cmName: state.colosseo.pizza.funghi45cm.name,
    funghi45cmWeight: state.colosseo.pizza.funghi45cm.diam,
    funghi45cmInfo: state.colosseo.pizza.funghi45cm.info,
    funghi45cmPrice: state.colosseo.pizza.funghi45cm.price,
    funghi45cmImage: state.colosseo.pizza.funghi45cm.image,
    funghi50cmName: state.colosseo.pizza.funghi50cm.name,
    funghi50cmWeight: state.colosseo.pizza.funghi50cm.diam,
    funghi50cmInfo: state.colosseo.pizza.funghi50cm.info,
    funghi50cmPrice: state.colosseo.pizza.funghi50cm.price,
    funghi50cmImage: state.colosseo.pizza.funghi50cm.image,
    quattroStagioni28cmName: state.colosseo.pizza.quattroStagioni28cm.name,
    quattroStagioni28cmWeight: state.colosseo.pizza.quattroStagioni28cm.diam,
    quattroStagioni28cmInfo: state.colosseo.pizza.quattroStagioni28cm.info,
    quattroStagioni28cmPrice: state.colosseo.pizza.quattroStagioni28cm.price,
    quattroStagioni28cmImage: state.colosseo.pizza.quattroStagioni28cm.image,
    quattroStagioni35cmName: state.colosseo.pizza.quattroStagioni35cm.name,
    quattroStagioni35cmWeight: state.colosseo.pizza.quattroStagioni35cm.diam,
    quattroStagioni35cmInfo: state.colosseo.pizza.quattroStagioni35cm.info,
    quattroStagioni35cmPrice: state.colosseo.pizza.quattroStagioni35cm.price,
    quattroStagioni35cmImage: state.colosseo.pizza.quattroStagioni35cm.image,
    quattroStagioni45cmName: state.colosseo.pizza.quattroStagioni45cm.name,
    quattroStagioni45cmWeight: state.colosseo.pizza.quattroStagioni45cm.diam,
    quattroStagioni45cmInfo: state.colosseo.pizza.quattroStagioni45cm.info,
    quattroStagioni45cmPrice: state.colosseo.pizza.quattroStagioni45cm.price,
    quattroStagioni45cmImage: state.colosseo.pizza.quattroStagioni45cm.image,
    quattroStagioni50cmName: state.colosseo.pizza.quattroStagioni50cm.name,
    quattroStagioni50cmWeight: state.colosseo.pizza.quattroStagioni50cm.diam,
    quattroStagioni50cmInfo: state.colosseo.pizza.quattroStagioni50cm.info,
    quattroStagioni50cmPrice: state.colosseo.pizza.quattroStagioni50cm.price,
    quattroStagioni50cmImage: state.colosseo.pizza.quattroStagioni50cm.image,
    quattroTipiDiFormaggio28cmName: state.colosseo.pizza.quattroTipiDiFormaggio28cm.name,
    quattroTipiDiFormaggio28cmWeight: state.colosseo.pizza.quattroTipiDiFormaggio28cm.diam,
    quattroTipiDiFormaggio28cmInfo: state.colosseo.pizza.quattroTipiDiFormaggio28cm.info,
    quattroTipiDiFormaggio28cmPrice: state.colosseo.pizza.quattroTipiDiFormaggio28cm.price,
    quattroTipiDiFormaggio28cmImage: state.colosseo.pizza.quattroTipiDiFormaggio28cm.image,
    quattroTipiDiFormaggio35cmName: state.colosseo.pizza.quattroTipiDiFormaggio35cm.name,
    quattroTipiDiFormaggio35cmWeight: state.colosseo.pizza.quattroTipiDiFormaggio35cm.diam,
    quattroTipiDiFormaggio35cmInfo: state.colosseo.pizza.quattroTipiDiFormaggio35cm.info,
    quattroTipiDiFormaggio35cmPrice: state.colosseo.pizza.quattroTipiDiFormaggio35cm.price,
    quattroTipiDiFormaggio35cmImage: state.colosseo.pizza.quattroTipiDiFormaggio35cm.image,
    quattroTipiDiFormaggio45cmName: state.colosseo.pizza.quattroTipiDiFormaggio45cm.name,
    quattroTipiDiFormaggio45cmWeight: state.colosseo.pizza.quattroTipiDiFormaggio45cm.diam,
    quattroTipiDiFormaggio45cmInfo: state.colosseo.pizza.quattroTipiDiFormaggio45cm.info,
    quattroTipiDiFormaggio45cmPrice: state.colosseo.pizza.quattroTipiDiFormaggio45cm.price,
    quattroTipiDiFormaggio45cmImage: state.colosseo.pizza.quattroTipiDiFormaggio45cm.image,
    quattroTipiDiFormaggio50cmName: state.colosseo.pizza.quattroTipiDiFormaggio50cm.name,
    quattroTipiDiFormaggio50cmWeight: state.colosseo.pizza.quattroTipiDiFormaggio50cm.diam,
    quattroTipiDiFormaggio50cmInfo: state.colosseo.pizza.quattroTipiDiFormaggio50cm.info,
    quattroTipiDiFormaggio50cmPrice: state.colosseo.pizza.quattroTipiDiFormaggio50cm.price,
    quattroTipiDiFormaggio50cmImage: state.colosseo.pizza.quattroTipiDiFormaggio50cm.image,
    bolognese28cmName: state.colosseo.pizza.bolognese28cm.name,
    bolognese28cmWeight: state.colosseo.pizza.bolognese28cm.diam,
    bolognese28cmInfo: state.colosseo.pizza.bolognese28cm.info,
    bolognese28cmPrice: state.colosseo.pizza.bolognese28cm.price,
    bolognese28cmImage: state.colosseo.pizza.bolognese28cm.image,
    bolognese35cmName: state.colosseo.pizza.bolognese35cm.name,
    bolognese35cmWeight: state.colosseo.pizza.bolognese35cm.diam,
    bolognese35cmInfo: state.colosseo.pizza.bolognese35cm.info,
    bolognese35cmPrice: state.colosseo.pizza.bolognese35cm.price,
    bolognese35cmImage: state.colosseo.pizza.bolognese35cm.image,
    bolognese45cmName: state.colosseo.pizza.bolognese45cm.name,
    bolognese45cmWeight: state.colosseo.pizza.bolognese45cm.diam,
    bolognese45cmInfo: state.colosseo.pizza.bolognese45cm.info,
    bolognese45cmPrice: state.colosseo.pizza.bolognese45cm.price,
    bolognese45cmImage: state.colosseo.pizza.bolognese45cm.image,
    bolognese50cmName: state.colosseo.pizza.bolognese50cm.name,
    bolognese50cmWeight: state.colosseo.pizza.bolognese50cm.diam,
    bolognese50cmInfo: state.colosseo.pizza.bolognese50cm.info,
    bolognese50cmPrice: state.colosseo.pizza.bolognese50cm.price,
    bolognese50cmImage: state.colosseo.pizza.bolognese50cm.image,
    vegeterijana28cmName: state.colosseo.pizza.vegeterijana28cm.name,
    vegeterijana28cmWeight: state.colosseo.pizza.vegeterijana28cm.diam,
    vegeterijana28cmInfo: state.colosseo.pizza.vegeterijana28cm.info,
    vegeterijana28cmPrice: state.colosseo.pizza.vegeterijana28cm.price,
    vegeterijana28cmImage: state.colosseo.pizza.vegeterijana28cm.image,
    vegeterijana35cmName: state.colosseo.pizza.vegeterijana35cm.name,
    vegeterijana35cmWeight: state.colosseo.pizza.vegeterijana35cm.diam,
    vegeterijana35cmInfo: state.colosseo.pizza.vegeterijana35cm.info,
    vegeterijana35cmPrice: state.colosseo.pizza.vegeterijana35cm.price,
    vegeterijana35cmImage: state.colosseo.pizza.vegeterijana35cm.image,
    vegeterijana45cmName: state.colosseo.pizza.vegeterijana45cm.name,
    vegeterijana45cmWeight: state.colosseo.pizza.vegeterijana45cm.diam,
    vegeterijana45cmInfo: state.colosseo.pizza.vegeterijana45cm.info,
    vegeterijana45cmPrice: state.colosseo.pizza.vegeterijana45cm.price,
    vegeterijana45cmImage: state.colosseo.pizza.vegeterijana45cm.image,
    vegeterijana50cmName: state.colosseo.pizza.vegeterijana50cm.name,
    vegeterijana50cmWeight: state.colosseo.pizza.vegeterijana50cm.diam,
    vegeterijana50cmInfo: state.colosseo.pizza.vegeterijana50cm.info,
    vegeterijana50cmPrice: state.colosseo.pizza.vegeterijana50cm.price,
    vegeterijana50cmImage: state.colosseo.pizza.vegeterijana50cm.image,
    tonno35cmName: state.colosseo.pizza.tonno35cm.name,
    tonno35cmWeight: state.colosseo.pizza.tonno35cm.diam,
    tonno35cmInfo: state.colosseo.pizza.tonno35cm.info,
    tonno35cmPrice: state.colosseo.pizza.tonno35cm.price,
    tonno35cmImage: state.colosseo.pizza.tonno35cm.image,
    tonno45cmName: state.colosseo.pizza.tonno45cm.name,
    tonno45cmWeight: state.colosseo.pizza.tonno45cm.diam,
    tonno45cmInfo: state.colosseo.pizza.tonno45cm.info,
    tonno45cmPrice: state.colosseo.pizza.tonno45cm.price,
    tonno45cmImage: state.colosseo.pizza.tonno45cm.image,
    tonno50cmName: state.colosseo.pizza.tonno50cm.name,
    tonno50cmWeight: state.colosseo.pizza.tonno50cm.diam,
    tonno50cmInfo: state.colosseo.pizza.tonno50cm.info,
    tonno50cmPrice: state.colosseo.pizza.tonno50cm.price,
    tonno50cmImage: state.colosseo.pizza.tonno50cm.image,
    posnaPizza28cmName: state.colosseo.pizza.posnaPizza28cm.name,
    posnaPizza28cmWeight: state.colosseo.pizza.posnaPizza28cm.diam,
    posnaPizza28cmInfo: state.colosseo.pizza.posnaPizza28cm.info,
    posnaPizza28cmPrice: state.colosseo.pizza.posnaPizza28cm.price,
    posnaPizza28cmImage: state.colosseo.pizza.posnaPizza28cm.image,
    posnaPizza35cmName: state.colosseo.pizza.posnaPizza35cm.name,
    posnaPizza35cmWeight: state.colosseo.pizza.posnaPizza35cm.diam,
    posnaPizza35cmInfo: state.colosseo.pizza.posnaPizza35cm.info,
    posnaPizza35cmPrice: state.colosseo.pizza.posnaPizza35cm.price,
    posnaPizza35cmImage: state.colosseo.pizza.posnaPizza35cm.image,
    posnaPizza45cmName: state.colosseo.pizza.posnaPizza45cm.name,
    posnaPizza45cmWeight: state.colosseo.pizza.posnaPizza45cm.diam,
    posnaPizza45cmInfo: state.colosseo.pizza.posnaPizza45cm.info,
    posnaPizza45cmPrice: state.colosseo.pizza.posnaPizza45cm.price,
    posnaPizza45cmImage: state.colosseo.pizza.posnaPizza45cm.image,
    posnaPizza50cmName: state.colosseo.pizza.posnaPizza50cm.name,
    posnaPizza50cmWeight: state.colosseo.pizza.posnaPizza50cm.diam,
    posnaPizza50cmInfo: state.colosseo.pizza.posnaPizza50cm.info,
    posnaPizza50cmPrice: state.colosseo.pizza.posnaPizza50cm.price,
    posnaPizza50cmImage: state.colosseo.pizza.posnaPizza50cm.image,
    girosDiPolloPizza35cmName: state.colosseo.pizza.girosDiPolloPizza35cm.name,
    girosDiPolloPizza35cmWeight: state.colosseo.pizza.girosDiPolloPizza35cm.diam,
    girosDiPolloPizza35cmInfo: state.colosseo.pizza.girosDiPolloPizza35cm.info,
    girosDiPolloPizza35cmPrice: state.colosseo.pizza.girosDiPolloPizza35cm.price,
    girosDiPolloPizza35cmImage: state.colosseo.pizza.girosDiPolloPizza35cm.image,
    girosDiPolloPizza45cmName: state.colosseo.pizza.girosDiPolloPizza45cm.name,
    girosDiPolloPizza45cmWeight: state.colosseo.pizza.girosDiPolloPizza45cm.diam,
    girosDiPolloPizza45cmInfo: state.colosseo.pizza.girosDiPolloPizza45cm.info,
    girosDiPolloPizza45cmPrice: state.colosseo.pizza.girosDiPolloPizza45cm.price,
    girosDiPolloPizza45cmImage: state.colosseo.pizza.girosDiPolloPizza45cm.image,
    girosDiPolloPizza50cmName: state.colosseo.pizza.girosDiPolloPizza50cm.name,
    girosDiPolloPizza50cmWeight: state.colosseo.pizza.girosDiPolloPizza50cm.diam,
    girosDiPolloPizza50cmInfo: state.colosseo.pizza.girosDiPolloPizza50cm.info,
    girosDiPolloPizza50cmPrice: state.colosseo.pizza.girosDiPolloPizza50cm.price,
    girosDiPolloPizza50cmImage: state.colosseo.pizza.girosDiPolloPizza50cm.image,
    prosciuttoPrsut28cmName: state.colosseo.pizza.prosciuttoPrsut28cm.name,
    prosciuttoPrsut28cmWeight: state.colosseo.pizza.prosciuttoPrsut28cm.diam,
    prosciuttoPrsut28cmInfo: state.colosseo.pizza.prosciuttoPrsut28cm.info,
    prosciuttoPrsut28cmPrice: state.colosseo.pizza.prosciuttoPrsut28cm.price,
    prosciuttoPrsut28cmImage: state.colosseo.pizza.prosciuttoPrsut28cm.image,
    prosciuttoPrsut35cmName: state.colosseo.pizza.prosciuttoPrsut35cm.name,
    prosciuttoPrsut35cmWeight: state.colosseo.pizza.prosciuttoPrsut35cm.diam,
    prosciuttoPrsut35cmInfo: state.colosseo.pizza.prosciuttoPrsut35cm.info,
    prosciuttoPrsut35cmPrice: state.colosseo.pizza.prosciuttoPrsut35cm.price,
    prosciuttoPrsut35cmImage: state.colosseo.pizza.prosciuttoPrsut35cm.image,
    prosciuttoPrsut45cmName: state.colosseo.pizza.prosciuttoPrsut45cm.name,
    prosciuttoPrsut45cmWeight: state.colosseo.pizza.prosciuttoPrsut45cm.diam,
    prosciuttoPrsut45cmInfo: state.colosseo.pizza.prosciuttoPrsut45cm.info,
    prosciuttoPrsut45cmPrice: state.colosseo.pizza.prosciuttoPrsut45cm.price,
    prosciuttoPrsut45cmImage: state.colosseo.pizza.prosciuttoPrsut45cm.image,
    prosciuttoPrsut50cmName: state.colosseo.pizza.prosciuttoPrsut50cm.name,
    prosciuttoPrsut50cmWeight: state.colosseo.pizza.prosciuttoPrsut50cm.diam,
    prosciuttoPrsut50cmInfo: state.colosseo.pizza.prosciuttoPrsut50cm.info,
    prosciuttoPrsut50cmPrice: state.colosseo.pizza.prosciuttoPrsut50cm.price,
    prosciuttoPrsut50cmImage: state.colosseo.pizza.prosciuttoPrsut50cm.image,
    colosseo28cmName: state.colosseo.pizza.colosseo28cm.name,
    colosseo28cmWeight: state.colosseo.pizza.colosseo28cm.diam,
    colosseo28cmInfo: state.colosseo.pizza.colosseo28cm.info,
    colosseo28cmPrice: state.colosseo.pizza.colosseo28cm.price,
    colosseo28cmImage: state.colosseo.pizza.colosseo28cm.image,
    colosseo35cmName: state.colosseo.pizza.colosseo35cm.name,
    colosseo35cmWeight: state.colosseo.pizza.colosseo35cm.diam,
    colosseo35cmInfo: state.colosseo.pizza.colosseo35cm.info,
    colosseo35cmPrice: state.colosseo.pizza.colosseo35cm.price,
    colosseo35cmImage: state.colosseo.pizza.colosseo35cm.image,
    colosseo45cmName: state.colosseo.pizza.colosseo45cm.name,
    colosseo45cmWeight: state.colosseo.pizza.colosseo45cm.diam,
    colosseo45cmInfo: state.colosseo.pizza.colosseo45cm.info,
    colosseo45cmPrice: state.colosseo.pizza.colosseo45cm.price,
    colosseo45cmImage: state.colosseo.pizza.colosseo45cm.image,
    colosseo50cmName: state.colosseo.pizza.colosseo50cm.name,
    colosseo50cmWeight: state.colosseo.pizza.colosseo50cm.diam,
    colosseo50cmInfo: state.colosseo.pizza.colosseo50cm.info,
    colosseo50cmPrice: state.colosseo.pizza.colosseo50cm.price,
    colosseo50cmImage: state.colosseo.pizza.colosseo50cm.image,
    zlatiborac28cmName: state.colosseo.pizza.zlatiborac28cm.name,
    zlatiborac28cmWeight: state.colosseo.pizza.zlatiborac28cm.diam,
    zlatiborac28cmInfo: state.colosseo.pizza.zlatiborac28cm.info,
    zlatiborac28cmPrice: state.colosseo.pizza.zlatiborac28cm.price,
    zlatiborac28cmImage: state.colosseo.pizza.zlatiborac28cm.image,
    zlatiborac35cmName: state.colosseo.pizza.zlatiborac35cm.name,
    zlatiborac35cmWeight: state.colosseo.pizza.zlatiborac35cm.diam,
    zlatiborac35cmInfo: state.colosseo.pizza.zlatiborac35cm.info,
    zlatiborac35cmPrice: state.colosseo.pizza.zlatiborac35cm.price,
    zlatiborac35cmImage: state.colosseo.pizza.zlatiborac35cm.image,
    zlatiborac45cmName: state.colosseo.pizza.zlatiborac45cm.name,
    zlatiborac45cmWeight: state.colosseo.pizza.zlatiborac45cm.diam,
    zlatiborac45cmInfo: state.colosseo.pizza.zlatiborac45cm.info,
    zlatiborac45cmPrice: state.colosseo.pizza.zlatiborac45cm.price,
    zlatiborac45cmImage: state.colosseo.pizza.zlatiborac45cm.image,
    zlatiborac50cmName: state.colosseo.pizza.zlatiborac50cm.name,
    zlatiborac50cmWeight: state.colosseo.pizza.zlatiborac50cm.diam,
    zlatiborac50cmInfo: state.colosseo.pizza.zlatiborac50cm.info,
    zlatiborac50cmPrice: state.colosseo.pizza.zlatiborac50cm.price,
    zlatiborac50cmImage: state.colosseo.pizza.zlatiborac50cm.image,
    napolitano28cmName: state.colosseo.pizza.napolitano28cm.name,
    napolitano28cmWeight: state.colosseo.pizza.napolitano28cm.diam,
    napolitano28cmInfo: state.colosseo.pizza.napolitano28cm.info,
    napolitano28cmPrice: state.colosseo.pizza.napolitano28cm.price,
    napolitano28cmImage: state.colosseo.pizza.napolitano28cm.image,
    napolitano35cmName: state.colosseo.pizza.napolitano35cm.name,
    napolitano35cmWeight: state.colosseo.pizza.napolitano35cm.diam,
    napolitano35cmInfo: state.colosseo.pizza.napolitano35cm.info,
    napolitano35cmPrice: state.colosseo.pizza.napolitano35cm.price,
    napolitano35cmImage: state.colosseo.pizza.napolitano35cm.image,
    napolitano45cmName: state.colosseo.pizza.napolitano45cm.name,
    napolitano45cmWeight: state.colosseo.pizza.napolitano45cm.diam,
    napolitano45cmInfo: state.colosseo.pizza.napolitano45cm.info,
    napolitano45cmPrice: state.colosseo.pizza.napolitano45cm.price,
    napolitano45cmImage: state.colosseo.pizza.napolitano45cm.image,
    napolitano50cmName: state.colosseo.pizza.napolitano50cm.name,
    napolitano50cmWeight: state.colosseo.pizza.napolitano50cm.diam,
    napolitano50cmInfo: state.colosseo.pizza.napolitano50cm.info,
    napolitano50cmPrice: state.colosseo.pizza.napolitano50cm.price,
    napolitano50cmImage: state.colosseo.pizza.napolitano50cm.image,
    fruttiDiMare28cmName: state.colosseo.pizza.fruttiDiMare28cm.name,
    fruttiDiMare28cmWeight: state.colosseo.pizza.fruttiDiMare28cm.diam,
    fruttiDiMare28cmInfo: state.colosseo.pizza.fruttiDiMare28cm.info,
    fruttiDiMare28cmPrice: state.colosseo.pizza.fruttiDiMare28cm.price,
    fruttiDiMare28cmImage: state.colosseo.pizza.fruttiDiMare28cm.image,
    fruttiDiMare35cmName: state.colosseo.pizza.fruttiDiMare35cm.name,
    fruttiDiMare35cmWeight: state.colosseo.pizza.fruttiDiMare35cm.diam,
    fruttiDiMare35cmInfo: state.colosseo.pizza.fruttiDiMare35cm.info,
    fruttiDiMare35cmPrice: state.colosseo.pizza.fruttiDiMare35cm.price,
    fruttiDiMare35cmImage: state.colosseo.pizza.fruttiDiMare35cm.image,
    fruttiDiMare45cmName: state.colosseo.pizza.fruttiDiMare45cm.name,
    fruttiDiMare45cmWeight: state.colosseo.pizza.fruttiDiMare45cm.diam,
    fruttiDiMare45cmInfo: state.colosseo.pizza.fruttiDiMare45cm.info,
    fruttiDiMare45cmPrice: state.colosseo.pizza.fruttiDiMare45cm.price,
    fruttiDiMare45cmImage: state.colosseo.pizza.fruttiDiMare45cm.image,
    fruttiDiMare50cmName: state.colosseo.pizza.fruttiDiMare50cm.name,
    fruttiDiMare50cmWeight: state.colosseo.pizza.fruttiDiMare50cm.diam,
    fruttiDiMare50cmInfo: state.colosseo.pizza.fruttiDiMare50cm.info,
    fruttiDiMare50cmPrice: state.colosseo.pizza.fruttiDiMare50cm.price,
    fruttiDiMare50cmImage: state.colosseo.pizza.fruttiDiMare50cm.image,
    ilDiavolo28cmName: state.colosseo.pizza.ilDiavolo28cm.name,
    ilDiavolo28cmWeight: state.colosseo.pizza.ilDiavolo28cm.diam,
    ilDiavolo28cmInfo: state.colosseo.pizza.ilDiavolo28cm.info,
    ilDiavolo28cmPrice: state.colosseo.pizza.ilDiavolo28cm.price,
    ilDiavolo28cmImage: state.colosseo.pizza.ilDiavolo28cm.image,
    ilDiavolo35cmName: state.colosseo.pizza.ilDiavolo35cm.name,
    ilDiavolo35cmWeight: state.colosseo.pizza.ilDiavolo35cm.diam,
    ilDiavolo35cmInfo: state.colosseo.pizza.ilDiavolo35cm.info,
    ilDiavolo35cmPrice: state.colosseo.pizza.ilDiavolo35cm.price,
    ilDiavolo35cmImage: state.colosseo.pizza.ilDiavolo35cm.image,
    ilDiavolo45cmName: state.colosseo.pizza.ilDiavolo45cm.name,
    ilDiavolo45cmWeight: state.colosseo.pizza.ilDiavolo45cm.diam,
    ilDiavolo45cmInfo: state.colosseo.pizza.ilDiavolo45cm.info,
    ilDiavolo45cmPrice: state.colosseo.pizza.ilDiavolo45cm.price,
    ilDiavolo45cmImage: state.colosseo.pizza.ilDiavolo45cm.image,
    ilDiavolo50cmName: state.colosseo.pizza.ilDiavolo50cm.name,
    ilDiavolo50cmWeight: state.colosseo.pizza.ilDiavolo50cm.diam,
    ilDiavolo50cmInfo: state.colosseo.pizza.ilDiavolo50cm.info,
    ilDiavolo50cmPrice: state.colosseo.pizza.ilDiavolo50cm.price,
    ilDiavolo50cmImage: state.colosseo.pizza.ilDiavolo50cm.image,
    srbija28cmName: state.colosseo.pizza.srbija28cm.name,
    srbija28cmWeight: state.colosseo.pizza.srbija28cm.diam,
    srbija28cmInfo: state.colosseo.pizza.srbija28cm.info,
    srbija28cmPrice: state.colosseo.pizza.srbija28cm.price,
    srbija28cmImage: state.colosseo.pizza.srbija28cm.image,
    srbija35cmName: state.colosseo.pizza.srbija35cm.name,
    srbija35cmWeight: state.colosseo.pizza.srbija35cm.diam,
    srbija35cmInfo: state.colosseo.pizza.srbija35cm.info,
    srbija35cmPrice: state.colosseo.pizza.srbija35cm.price,
    srbija35cmImage: state.colosseo.pizza.srbija35cm.image,
    srbija45cmName: state.colosseo.pizza.srbija45cm.name,
    srbija45cmWeight: state.colosseo.pizza.srbija45cm.diam,
    srbija45cmInfo: state.colosseo.pizza.srbija45cm.info,
    srbija45cmPrice: state.colosseo.pizza.srbija45cm.price,
    srbija45cmImage: state.colosseo.pizza.srbija45cm.image,
    srbija50cmName: state.colosseo.pizza.srbija50cm.name,
    srbija50cmWeight: state.colosseo.pizza.srbija50cm.diam,
    srbija50cmInfo: state.colosseo.pizza.srbija50cm.info,
    srbija50cmPrice: state.colosseo.pizza.srbija50cm.price,
    srbija50cmImage: state.colosseo.pizza.srbija50cm.image,
    pizzaGourmet28cmName: state.colosseo.pizza.pizzaGourmet28cm.name,
    pizzaGourmet28cmWeight: state.colosseo.pizza.pizzaGourmet28cm.diam,
    pizzaGourmet28cmInfo: state.colosseo.pizza.pizzaGourmet28cm.info,
    pizzaGourmet28cmPrice: state.colosseo.pizza.pizzaGourmet28cm.price,
    pizzaGourmet28cmImage: state.colosseo.pizza.pizzaGourmet28cm.image,
    pizzaGourmet35cmName: state.colosseo.pizza.pizzaGourmet35cm.name,
    pizzaGourmet35cmWeight: state.colosseo.pizza.pizzaGourmet35cm.diam,
    pizzaGourmet35cmInfo: state.colosseo.pizza.pizzaGourmet35cm.info,
    pizzaGourmet35cmPrice: state.colosseo.pizza.pizzaGourmet35cm.price,
    pizzaGourmet35cmImage: state.colosseo.pizza.pizzaGourmet35cm.image,
    pizzaGourmet45cmName: state.colosseo.pizza.pizzaGourmet45cm.name,
    pizzaGourmet45cmWeight: state.colosseo.pizza.pizzaGourmet45cm.diam,
    pizzaGourmet45cmInfo: state.colosseo.pizza.pizzaGourmet45cm.info,
    pizzaGourmet45cmPrice: state.colosseo.pizza.pizzaGourmet45cm.price,
    pizzaGourmet45cmImage: state.colosseo.pizza.pizzaGourmet45cm.image,
    pizzaGourmet50cmName: state.colosseo.pizza.pizzaGourmet50cm.name,
    pizzaGourmet50cmWeight: state.colosseo.pizza.pizzaGourmet50cm.diam,
    pizzaGourmet50cmInfo: state.colosseo.pizza.pizzaGourmet50cm.info,
    pizzaGourmet50cmPrice: state.colosseo.pizza.pizzaGourmet50cm.price,
    pizzaGourmet50cmImage: state.colosseo.pizza.pizzaGourmet50cm.image,
    piroska28cmName: state.colosseo.pizza.piroska28cm.name,
    piroska28cmWeight: state.colosseo.pizza.piroska28cm.diam,
    piroska28cmInfo: state.colosseo.pizza.piroska28cm.info,
    piroska28cmPrice: state.colosseo.pizza.piroska28cm.price,
    piroska28cmImage: state.colosseo.pizza.piroska28cm.image,
    piroska35cmName: state.colosseo.pizza.piroska35cm.name,
    piroska35cmWeight: state.colosseo.pizza.piroska35cm.diam,
    piroska35cmInfo: state.colosseo.pizza.piroska35cm.info,
    piroska35cmPrice: state.colosseo.pizza.piroska35cm.price,
    piroska35cmImage: state.colosseo.pizza.piroska35cm.image,
    // kreirajteSvojuPizzu28cmName: state.colosseo.pizza.kreirajteSvojuPizzu28cm.name,
    // kreirajteSvojuPizzu28cmWeight: state.colosseo.pizza.kreirajteSvojuPizzu28cm.diam,
    // kreirajteSvojuPizzu28cmInfo: state.colosseo.pizza.kreirajteSvojuPizzu28cm.info,
    // kreirajteSvojuPizzu28cmPrice: state.colosseo.pizza.kreirajteSvojuPizzu28cm.price,
    // kreirajteSvojuPizzu28cmImage: state.colosseo.pizza.kreirajteSvojuPizzu28cm.image,
    // kreirajteSvojuPizzu35cmName: state.colosseo.pizza.kreirajteSvojuPizzu35cm.name,
    // kreirajteSvojuPizzu35cmWeight: state.colosseo.pizza.kreirajteSvojuPizzu35cm.diam,
    // kreirajteSvojuPizzu35cmInfo: state.colosseo.pizza.kreirajteSvojuPizzu35cm.info,
    // kreirajteSvojuPizzu35cmPrice: state.colosseo.pizza.kreirajteSvojuPizzu35cm.price,
    // kreirajteSvojuPizzu35cmImage: state.colosseo.pizza.kreirajteSvojuPizzu35cm.image,
    // kreirajteSvojuPizzu45cmName: state.colosseo.pizza.kreirajteSvojuPizzu45cm.name,
    // kreirajteSvojuPizzu45cmWeight: state.colosseo.pizza.kreirajteSvojuPizzu45cm.diam,
    // kreirajteSvojuPizzu45cmInfo: state.colosseo.pizza.kreirajteSvojuPizzu45cm.info,
    // kreirajteSvojuPizzu45cmPrice: state.colosseo.pizza.kreirajteSvojuPizzu45cm.price,
    // kreirajteSvojuPizzu45cmImage: state.colosseo.pizza.kreirajteSvojuPizzu45cm.image,
    // kreirajteSvojuPizzu50cmName: state.colosseo.pizza.kreirajteSvojuPizzu50cm.name,
    // kreirajteSvojuPizzu50cmWeight: state.colosseo.pizza.kreirajteSvojuPizzu50cm.diam,
    // kreirajteSvojuPizzu50cmInfo: state.colosseo.pizza.kreirajteSvojuPizzu50cm.info,
    // kreirajteSvojuPizzu50cmPrice: state.colosseo.pizza.kreirajteSvojuPizzu50cm.price,
    // kreirajteSvojuPizzu50cmImage: state.colosseo.pizza.kreirajteSvojuPizzu50cm.image,
    cevapiName: state.colosseo.rostilj.cevapi.name,
    cevapiWeight: state.colosseo.rostilj.cevapi.weight,
    cevapiInfo: state.colosseo.rostilj.cevapi.info,
    cevapiPrice: state.colosseo.rostilj.cevapi.price,
    cevapiImage: state.colosseo.rostilj.cevapi.image,
    cevapiNaKajmakuName: state.colosseo.rostilj.cevapiNaKajmaku.name,
    cevapiNaKajmakuWeight: state.colosseo.rostilj.cevapiNaKajmaku.weight,
    cevapiNaKajmakuInfo: state.colosseo.rostilj.cevapiNaKajmaku.info,
    cevapiNaKajmakuPrice: state.colosseo.rostilj.cevapiNaKajmaku.price,
    cevapiNaKajmakuImage: state.colosseo.rostilj.cevapiNaKajmaku.image,
    punjeniCevapName: state.colosseo.rostilj.punjeniCevap.name,
    punjeniCevapWeight: state.colosseo.rostilj.punjeniCevap.weight,
    punjeniCevapInfo: state.colosseo.rostilj.punjeniCevap.info,
    punjeniCevapPrice: state.colosseo.rostilj.punjeniCevap.price,
    punjeniCevapImage: state.colosseo.rostilj.punjeniCevap.image,
    domacaRostiljskaKobasicaName: state.colosseo.rostilj.domacaRostiljskaKobasica.name,
    domacaRostiljskaKobasicaWeight: state.colosseo.rostilj.domacaRostiljskaKobasica.weight,
    domacaRostiljskaKobasicaInfo: state.colosseo.rostilj.domacaRostiljskaKobasica.info,
    domacaRostiljskaKobasicaPrice: state.colosseo.rostilj.domacaRostiljskaKobasica.price,
    domacaRostiljskaKobasicaImage: state.colosseo.rostilj.domacaRostiljskaKobasica.image,
    domacaDimljenaKobasicaName: state.colosseo.rostilj.domacaDimljenaKobasica.name,
    domacaDimljenaKobasicaWeight: state.colosseo.rostilj.domacaDimljenaKobasica.weight,
    domacaDimljenaKobasicaInfo: state.colosseo.rostilj.domacaDimljenaKobasica.info,
    domacaDimljenaKobasicaPrice: state.colosseo.rostilj.domacaDimljenaKobasica.price,
    domacaDimljenaKobasicaImage: state.colosseo.rostilj.domacaDimljenaKobasica.image,
    dimljeniSvinjskiVratName: state.colosseo.rostilj.dimljeniSvinjskiVrat.name,
    dimljeniSvinjskiVratWeight: state.colosseo.rostilj.dimljeniSvinjskiVrat.weight,
    dimljeniSvinjskiVratInfo: state.colosseo.rostilj.dimljeniSvinjskiVrat.info,
    dimljeniSvinjskiVratPrice: state.colosseo.rostilj.dimljeniSvinjskiVrat.price,
    dimljeniSvinjskiVratImage: state.colosseo.rostilj.dimljeniSvinjskiVrat.image,
    dimljenaBelaVesalicaName: state.colosseo.rostilj.dimljenaBelaVesalica.name,
    dimljenaBelaVesalicaWeight: state.colosseo.rostilj.dimljenaBelaVesalica.weight,
    dimljenaBelaVesalicaInfo: state.colosseo.rostilj.dimljenaBelaVesalica.info,
    dimljenaBelaVesalicaPrice: state.colosseo.rostilj.dimljenaBelaVesalica.price,
    dimljenaBelaVesalicaImage: state.colosseo.rostilj.dimljenaBelaVesalica.image,
    belaVesalicaName: state.colosseo.rostilj.belaVesalica.name,
    belaVesalicaWeight: state.colosseo.rostilj.belaVesalica.weight,
    belaVesalicaInfo: state.colosseo.rostilj.belaVesalica.info,
    belaVesalicaPrice: state.colosseo.rostilj.belaVesalica.price,
    belaVesalicaImage: state.colosseo.rostilj.belaVesalica.image,
    belaVesalicaVrganjName: state.colosseo.rostilj.belaVesalicaVrganj.name,
    belaVesalicaVrganjWeight: state.colosseo.rostilj.belaVesalicaVrganj.weight,
    belaVesalicaVrganjInfo: state.colosseo.rostilj.belaVesalicaVrganj.info,
    belaVesalicaVrganjPrice: state.colosseo.rostilj.belaVesalicaVrganj.price,
    belaVesalicaVrganjImage: state.colosseo.rostilj.belaVesalicaVrganj.image,
    belaVesalicaKajmakName: state.colosseo.rostilj.belaVesalicaKajmak.name,
    belaVesalicaKajmakWeight: state.colosseo.rostilj.belaVesalicaKajmak.weight,
    belaVesalicaKajmakInfo: state.colosseo.rostilj.belaVesalicaKajmak.info,
    belaVesalicaKajmakPrice: state.colosseo.rostilj.belaVesalicaKajmak.price,
    belaVesalicaKajmakImage: state.colosseo.rostilj.belaVesalicaKajmak.image,
    pileciFileName: state.colosseo.rostilj.pileciFile.name,
    pileciFileWeight: state.colosseo.rostilj.pileciFile.weight,
    pileciFileInfo: state.colosseo.rostilj.pileciFile.info,
    pileciFilePrice: state.colosseo.rostilj.pileciFile.price,
    pileciFileImage: state.colosseo.rostilj.pileciFile.image,
    pileciBatakName: state.colosseo.rostilj.pileciBatak.name,
    pileciBatakWeight: state.colosseo.rostilj.pileciBatak.weight,
    pileciBatakInfo: state.colosseo.rostilj.pileciBatak.info,
    pileciBatakPrice: state.colosseo.rostilj.pileciBatak.price,
    pileciBatakImage: state.colosseo.rostilj.pileciBatak.image,
    svinjskaRebraName: state.colosseo.rostilj.svinjskaRebra.name,
    svinjskaRebraWeight: state.colosseo.rostilj.svinjskaRebra.weight,
    svinjskaRebraInfo: state.colosseo.rostilj.svinjskaRebra.info,
    svinjskaRebraPrice: state.colosseo.rostilj.svinjskaRebra.price,
    svinjskaRebraImage: state.colosseo.rostilj.svinjskaRebra.image,
    mesanoMesoName: state.colosseo.rostilj.mesanoMeso.name,
    mesanoMesoWeight: state.colosseo.rostilj.mesanoMeso.weight,
    mesanoMesoInfo: state.colosseo.rostilj.mesanoMeso.info,
    mesanoMesoPrice: state.colosseo.rostilj.mesanoMeso.price,
    mesanoMesoImage: state.colosseo.rostilj.mesanoMeso.image,
    banjaluckiCevapName: state.colosseo.rostilj.banjaluckiCevap.name,
    banjaluckiCevapWeight: state.colosseo.rostilj.banjaluckiCevap.weight,
    banjaluckiCevapInfo: state.colosseo.rostilj.banjaluckiCevap.info,
    banjaluckiCevapPrice: state.colosseo.rostilj.banjaluckiCevap.price,
    banjaluckiCevapImage: state.colosseo.rostilj.banjaluckiCevap.image,
    pastrmkaName: state.colosseo.morskiPlodovi.pastrmka.name,
    pastrmkaWeight: state.colosseo.morskiPlodovi.pastrmka.weight,
    pastrmkaInfo: state.colosseo.morskiPlodovi.pastrmka.info,
    pastrmkaPrice: state.colosseo.morskiPlodovi.pastrmka.price,
    pastrmkaImage: state.colosseo.morskiPlodovi.pastrmka.image,
    brancinName: state.colosseo.morskiPlodovi.brancin.name,
    brancinWeight: state.colosseo.morskiPlodovi.brancin.weight,
    brancinInfo: state.colosseo.morskiPlodovi.brancin.info,
    brancinPrice: state.colosseo.morskiPlodovi.brancin.price,
    brancinImage: state.colosseo.morskiPlodovi.brancin.image,
    oradaName: state.colosseo.morskiPlodovi.orada.name,
    oradaWeight: state.colosseo.morskiPlodovi.orada.weight,
    oradaInfo: state.colosseo.morskiPlodovi.orada.info,
    oradaPrice: state.colosseo.morskiPlodovi.orada.price,
    oradaImage: state.colosseo.morskiPlodovi.orada.image,
    lignjeName: state.colosseo.morskiPlodovi.lignje.name,
    lignjeWeight: state.colosseo.morskiPlodovi.lignje.weight,
    lignjeInfo: state.colosseo.morskiPlodovi.lignje.info,
    lignjePrice: state.colosseo.morskiPlodovi.lignje.price,
    lignjeImage: state.colosseo.morskiPlodovi.lignje.image,
    tzatzikiName: state.colosseo.salate.tzatziki.name,
    tzatzikiWeight: state.colosseo.salate.tzatziki.weight,
    tzatzikiInfo: state.colosseo.salate.tzatziki.info,
    tzatzikiPrice: state.colosseo.salate.tzatziki.price,
    tzatzikiImage: state.colosseo.salate.tzatziki.image,
    insalataDiFunghiName: state.colosseo.salate.insalataDiFunghi.name,
    insalataDiFunghiWeight: state.colosseo.salate.insalataDiFunghi.weight,
    insalataDiFunghiInfo: state.colosseo.salate.insalataDiFunghi.info,
    insalataDiFunghiPrice: state.colosseo.salate.insalataDiFunghi.price,
    insalataDiFunghiImage: state.colosseo.salate.insalataDiFunghi.image,
    insalataGrecaName: state.colosseo.salate.insalataGreca.name,
    insalataGrecaWeight: state.colosseo.salate.insalataGreca.weight,
    insalataGrecaInfo: state.colosseo.salate.insalataGreca.info,
    insalataGrecaPrice: state.colosseo.salate.insalataGreca.price,
    insalataGrecaImage: state.colosseo.salate.insalataGreca.image,
    insalataDiPolloName: state.colosseo.salate.insalataDiPollo.name,
    insalataDiPolloWeight: state.colosseo.salate.insalataDiPollo.weight,
    insalataDiPolloInfo: state.colosseo.salate.insalataDiPollo.info,
    insalataDiPolloPrice: state.colosseo.salate.insalataDiPollo.price,
    insalataDiPolloImage: state.colosseo.salate.insalataDiPollo.image,
    insalataDiMareName: state.colosseo.salate.insalataDiMare.name,
    insalataDiMareWeight: state.colosseo.salate.insalataDiMare.weight,
    insalataDiMareInfo: state.colosseo.salate.insalataDiMare.info,
    insalataDiMarePrice: state.colosseo.salate.insalataDiMare.price,
    insalataDiMareImage: state.colosseo.salate.insalataDiMare.image,
    sirName: state.colosseo.salate.sir.name,
    sirWeight: state.colosseo.salate.sir.weight,
    sirInfo: state.colosseo.salate.sir.info,
    sirPrice: state.colosseo.salate.sir.price,
    sirImage: state.colosseo.salate.sir.image,
    srpskaSalataName: state.colosseo.salate.srpskaSalata.name,
    srpskaSalataWeight: state.colosseo.salate.srpskaSalata.weight,
    srpskaSalataInfo: state.colosseo.salate.srpskaSalata.info,
    srpskaSalataPrice: state.colosseo.salate.srpskaSalata.price,
    srpskaSalataImage: state.colosseo.salate.srpskaSalata.image,
    sopskaSalataName: state.colosseo.salate.sopskaSalata.name,
    sopskaSalataWeight: state.colosseo.salate.sopskaSalata.weight,
    sopskaSalataInfo: state.colosseo.salate.sopskaSalata.info,
    sopskaSalataPrice: state.colosseo.salate.sopskaSalata.price,
    sopskaSalataImage: state.colosseo.salate.sopskaSalata.image,
    urnebesSalataName: state.colosseo.salate.urnebesSalata.name,
    urnebesSalataWeight: state.colosseo.salate.urnebesSalata.weight,
    urnebesSalataInfo: state.colosseo.salate.urnebesSalata.info,
    urnebesSalataPrice: state.colosseo.salate.urnebesSalata.price,
    urnebesSalataImage: state.colosseo.salate.urnebesSalata.image,
    ljutaPapricicaName: state.colosseo.salate.ljutaPapricica.name,
    ljutaPapricicaWeight: state.colosseo.salate.ljutaPapricica.weight,
    ljutaPapricicaInfo: state.colosseo.salate.ljutaPapricica.info,
    ljutaPapricicaPrice: state.colosseo.salate.ljutaPapricica.price,
    ljutaPapricicaImage: state.colosseo.salate.ljutaPapricica.image,
    kupusSalataName: state.colosseo.salate.kupusSalata.name,
    kupusSalataWeight: state.colosseo.salate.kupusSalata.weight,
    kupusSalataInfo: state.colosseo.salate.kupusSalata.info,
    kupusSalataPrice: state.colosseo.salate.kupusSalata.price,
    kupusSalataImage: state.colosseo.salate.kupusSalata.image,
    pecurkeName: state.colosseo.toplaPredjela.pecurke.name,
    pecurkeWeight: state.colosseo.toplaPredjela.pecurke.weight,
    pecurkeInfo: state.colosseo.toplaPredjela.pecurke.info,
    pecurkePrice: state.colosseo.toplaPredjela.pecurke.price,
    pecurkeImage: state.colosseo.toplaPredjela.pecurke.image,
    pohovaniKackavaljName: state.colosseo.toplaPredjela.pohovaniKackavalj.name,
    pohovaniKackavaljWeight: state.colosseo.toplaPredjela.pohovaniKackavalj.weight,
    pohovaniKackavaljInfo: state.colosseo.toplaPredjela.pohovaniKackavalj.info,
    pohovaniKackavaljPrice: state.colosseo.toplaPredjela.pohovaniKackavalj.price,
    pohovaniKackavaljImage: state.colosseo.toplaPredjela.pohovaniKackavalj.image,
    rissottoName: state.colosseo.jelaPoPorudzbini.rissotto.name,
    rissottoWeight: state.colosseo.jelaPoPorudzbini.rissotto.weight,
    rissottoInfo: state.colosseo.jelaPoPorudzbini.rissotto.info,
    rissottoPrice: state.colosseo.jelaPoPorudzbini.rissotto.price,
    rissottoImage: state.colosseo.jelaPoPorudzbini.rissotto.image,
    rissottoCarneName: state.colosseo.jelaPoPorudzbini.rissottoCarne.name,
    rissottoCarneWeight: state.colosseo.jelaPoPorudzbini.rissottoCarne.weight,
    rissottoCarneInfo: state.colosseo.jelaPoPorudzbini.rissottoCarne.info,
    rissottoCarnePrice: state.colosseo.jelaPoPorudzbini.rissottoCarne.price,
    rissottoCarneImage: state.colosseo.jelaPoPorudzbini.rissottoCarne.image,
    polloAlFornoName: state.colosseo.jelaPoPorudzbini.polloAlForno.name,
    polloAlFornoWeight: state.colosseo.jelaPoPorudzbini.polloAlForno.weight,
    polloAlFornoInfo: state.colosseo.jelaPoPorudzbini.polloAlForno.info,
    polloAlFornoPrice: state.colosseo.jelaPoPorudzbini.polloAlForno.price,
    polloAlFornoImage: state.colosseo.jelaPoPorudzbini.polloAlForno.image,
    lasagneBologneseSmallName: state.colosseo.pasta.lasagneBologneseSmall.name,
    lasagneBologneseSmallWeight: state.colosseo.pasta.lasagneBologneseSmall.weight,
    lasagneBologneseSmallInfo: state.colosseo.pasta.lasagneBologneseSmall.info,
    lasagneBologneseSmallPrice: state.colosseo.pasta.lasagneBologneseSmall.price,
    lasagneBologneseSmallImage: state.colosseo.pasta.lasagneBologneseSmall.image,
    lasagneBologneseBigName: state.colosseo.pasta.lasagneBologneseBig.name,
    lasagneBologneseBigWeight: state.colosseo.pasta.lasagneBologneseBig.weight,
    lasagneBologneseBigInfo: state.colosseo.pasta.lasagneBologneseBig.info,
    lasagneBologneseBigPrice: state.colosseo.pasta.lasagneBologneseBig.price,
    lasagneBologneseBigImage: state.colosseo.pasta.lasagneBologneseBig.image,
    pastaCarbonaraName: state.colosseo.pasta.pastaCarbonara.name,
    pastaCarbonaraWeight: state.colosseo.pasta.pastaCarbonara.weight,
    pastaCarbonaraInfo: state.colosseo.pasta.pastaCarbonara.info,
    pastaCarbonaraPrice: state.colosseo.pasta.pastaCarbonara.price,
    pastaCarbonaraImage: state.colosseo.pasta.pastaCarbonara.image,
    pastaBologneseName: state.colosseo.pasta.pastaBolognese.name,
    pastaBologneseWeight: state.colosseo.pasta.pastaBolognese.weight,
    pastaBologneseInfo: state.colosseo.pasta.pastaBolognese.info,
    pastaBolognesePrice: state.colosseo.pasta.pastaBolognese.price,
    pastaBologneseImage: state.colosseo.pasta.pastaBolognese.image,
    pastaFruttiDiMareName: state.colosseo.pasta.pastaFruttiDiMare.name,
    pastaFruttiDiMareWeight: state.colosseo.pasta.pastaFruttiDiMare.weight,
    pastaFruttiDiMareInfo: state.colosseo.pasta.pastaFruttiDiMare.info,
    pastaFruttiDiMarePrice: state.colosseo.pasta.pastaFruttiDiMare.price,
    pastaFruttiDiMareImage: state.colosseo.pasta.pastaFruttiDiMare.image,
    pastaColosseoName: state.colosseo.pasta.pastaColosseo.name,
    pastaColosseoWeight: state.colosseo.pasta.pastaColosseo.weight,
    pastaColosseoInfo: state.colosseo.pasta.pastaColosseo.info,
    pastaColosseoPrice: state.colosseo.pasta.pastaColosseo.price,
    pastaColosseoImage: state.colosseo.pasta.pastaColosseo.image,
    pastaCasseruolaDiPolloName: state.colosseo.pasta.pastaCasseruolaDiPollo.name,
    pastaCasseruolaDiPolloWeight: state.colosseo.pasta.pastaCasseruolaDiPollo.weight,
    pastaCasseruolaDiPolloInfo: state.colosseo.pasta.pastaCasseruolaDiPollo.info,
    pastaCasseruolaDiPolloPrice: state.colosseo.pasta.pastaCasseruolaDiPollo.price,
    pastaCasseruolaDiPolloImage: state.colosseo.pasta.pastaCasseruolaDiPollo.image,
    pomfritName: state.colosseo.prilozi.pomfrit.name,
    pomfritWeight: state.colosseo.prilozi.pomfrit.weight,
    pomfritInfo: state.colosseo.prilozi.pomfrit.info,
    pomfritPrice: state.colosseo.prilozi.pomfrit.price,
    pomfritImage: state.colosseo.prilozi.pomfrit.image,
    parmezanName: state.colosseo.prilozi.parmezan.name,
    parmezanWeight: state.colosseo.prilozi.parmezan.weight,
    parmezanInfo: state.colosseo.prilozi.parmezan.info,
    parmezanPrice: state.colosseo.prilozi.parmezan.price,
    parmezanImage: state.colosseo.prilozi.parmezan.image,
    pelatName: state.colosseo.prilozi.pelat.name,
    pelatWeight: state.colosseo.prilozi.pelat.weight,
    pelatInfo: state.colosseo.prilozi.pelat.info,
    pelatPrice: state.colosseo.prilozi.pelat.price,
    pelatImage: state.colosseo.prilozi.pelat.image,
    maslineName: state.colosseo.prilozi.masline.name,
    maslineWeight: state.colosseo.prilozi.masline.weight,
    maslineInfo: state.colosseo.prilozi.masline.info,
    maslinePrice: state.colosseo.prilozi.masline.price,
    maslineImage: state.colosseo.prilozi.masline.image,
    feferoniName: state.colosseo.prilozi.feferoni.name,
    feferoniWeight: state.colosseo.prilozi.feferoni.weight,
    feferoniInfo: state.colosseo.prilozi.feferoni.info,
    feferoniPrice: state.colosseo.prilozi.feferoni.price,
    feferoniImage: state.colosseo.prilozi.feferoni.image,
    pavlakaName: state.colosseo.prilozi.pavlaka.name,
    pavlakaWeight: state.colosseo.prilozi.pavlaka.weight,
    pavlakaInfo: state.colosseo.prilozi.pavlaka.info,
    pavlakaPrice: state.colosseo.prilozi.pavlaka.price,
    pavlakaImage: state.colosseo.prilozi.pavlaka.image,
    majonezName: state.colosseo.prilozi.majonez.name,
    majonezWeight: state.colosseo.prilozi.majonez.weight,
    majonezInfo: state.colosseo.prilozi.majonez.info,
    majonezPrice: state.colosseo.prilozi.majonez.price,
    majonezImage: state.colosseo.prilozi.majonez.image,
    palacinkeKremPlazmaName: state.colosseo.deserts.palacinkeKremPlazma.name,
    palacinkeKremPlazmaWeight: state.colosseo.deserts.palacinkeKremPlazma.weight,
    palacinkeKremPlazmaInfo: state.colosseo.deserts.palacinkeKremPlazma.info,
    palacinkeKremPlazmaPrice: state.colosseo.deserts.palacinkeKremPlazma.price,
    palacinkeKremPlazmaImage: state.colosseo.deserts.palacinkeKremPlazma.image,
    palacinkeKremPlazmaSlagName: state.colosseo.deserts.palacinkeKremPlazmaSlag.name,
    palacinkeKremPlazmaSlagWeight: state.colosseo.deserts.palacinkeKremPlazmaSlag.weight,
    palacinkeKremPlazmaSlagInfo: state.colosseo.deserts.palacinkeKremPlazmaSlag.info,
    palacinkeKremPlazmaSlagPrice: state.colosseo.deserts.palacinkeKremPlazmaSlag.price,
    palacinkeKremPlazmaSlagImage: state.colosseo.deserts.palacinkeKremPlazmaSlag.image,
    palacinkeNutellaPlazmaName: state.colosseo.deserts.palacinkeNutellaPlazma.name,
    palacinkeNutellaPlazmaWeight: state.colosseo.deserts.palacinkeNutellaPlazma.weight,
    palacinkeNutellaPlazmaInfo: state.colosseo.deserts.palacinkeNutellaPlazma.info,
    palacinkeNutellaPlazmaPrice: state.colosseo.deserts.palacinkeNutellaPlazma.price,
    palacinkeNutellaPlazmaImage: state.colosseo.deserts.palacinkeNutellaPlazma.image,
    palacinkeNutellaPlazmaSlagName: state.colosseo.deserts.palacinkeNutellaPlazmaSlag.name,
    palacinkeNutellaPlazmaSlagWeight: state.colosseo.deserts.palacinkeNutellaPlazmaSlag.weight,
    palacinkeNutellaPlazmaSlagInfo: state.colosseo.deserts.palacinkeNutellaPlazmaSlag.info,
    palacinkeNutellaPlazmaSlagPrice: state.colosseo.deserts.palacinkeNutellaPlazmaSlag.price,
    palacinkeNutellaPlazmaSlagImage: state.colosseo.deserts.palacinkeNutellaPlazmaSlag.image,
    palacinkeMedOrasiName: state.colosseo.deserts.palacinkeMedOrasi.name,
    palacinkeMedOrasiWeight: state.colosseo.deserts.palacinkeMedOrasi.weight,
    palacinkeMedOrasiInfo: state.colosseo.deserts.palacinkeMedOrasi.info,
    palacinkeMedOrasiPrice: state.colosseo.deserts.palacinkeMedOrasi.price,
    palacinkeMedOrasiImage: state.colosseo.deserts.palacinkeMedOrasi.image,
    palacinkeMedOrasiSlagName: state.colosseo.deserts.palacinkeMedOrasiSlag.name,
    palacinkeMedOrasiSlagWeight: state.colosseo.deserts.palacinkeMedOrasiSlag.weight,
    palacinkeMedOrasiSlagInfo: state.colosseo.deserts.palacinkeMedOrasiSlag.info,
    palacinkeMedOrasiSlagPrice: state.colosseo.deserts.palacinkeMedOrasiSlag.price,
    palacinkeMedOrasiSlagImage: state.colosseo.deserts.palacinkeMedOrasiSlag.image,
    palacinkeNarandzaKremName: state.colosseo.deserts.palacinkeNarandzaKrem.name,
    palacinkeNarandzaKremWeight: state.colosseo.deserts.palacinkeNarandzaKrem.weight,
    palacinkeNarandzaKremInfo: state.colosseo.deserts.palacinkeNarandzaKrem.info,
    palacinkeNarandzaKremPrice: state.colosseo.deserts.palacinkeNarandzaKrem.price,
    palacinkeNarandzaKremImage: state.colosseo.deserts.palacinkeNarandzaKrem.image,
    palacinkeNarandzaKremSlagName: state.colosseo.deserts.palacinkeNarandzaKremSlag.name,
    palacinkeNarandzaKremSlagWeight: state.colosseo.deserts.palacinkeNarandzaKremSlag.weight,
    palacinkeNarandzaKremSlagInfo: state.colosseo.deserts.palacinkeNarandzaKremSlag.info,
    palacinkeNarandzaKremSlagPrice: state.colosseo.deserts.palacinkeNarandzaKremSlag.price,
    palacinkeNarandzaKremSlagImage: state.colosseo.deserts.palacinkeNarandzaKremSlag.image,
    palacinkeVisnjaName: state.colosseo.deserts.palacinkeVisnja.name,
    palacinkeVisnjaWeight: state.colosseo.deserts.palacinkeVisnja.weight,
    palacinkeVisnjaInfo: state.colosseo.deserts.palacinkeVisnja.info,
    palacinkeVisnjaPrice: state.colosseo.deserts.palacinkeVisnja.price,
    palacinkeVisnjaImage: state.colosseo.deserts.palacinkeVisnja.image,
    palacinkeVisnjaSlagName: state.colosseo.deserts.palacinkeVisnjaSlag.name,
    palacinkeVisnjaSlagWeight: state.colosseo.deserts.palacinkeVisnjaSlag.weight,
    palacinkeVisnjaSlagInfo: state.colosseo.deserts.palacinkeVisnjaSlag.info,
    palacinkeVisnjaSlagPrice: state.colosseo.deserts.palacinkeVisnjaSlag.price,
    palacinkeVisnjaSlagImage: state.colosseo.deserts.palacinkeVisnjaSlag.image,
    palacinkeVisnjaVanilaName: state.colosseo.deserts.palacinkeVisnjaVanila.name,
    palacinkeVisnjaVanilaWeight: state.colosseo.deserts.palacinkeVisnjaVanila.weight,
    palacinkeVisnjaVanilaInfo: state.colosseo.deserts.palacinkeVisnjaVanila.info,
    palacinkeVisnjaVanilaPrice: state.colosseo.deserts.palacinkeVisnjaVanila.price,
    palacinkeVisnjaVanilaImage: state.colosseo.deserts.palacinkeVisnjaVanila.image,
    palacinkeVisnjaVanilaSlagName: state.colosseo.deserts.palacinkeVisnjaVanilaSlag.name,
    palacinkeVisnjaVanilaSlagWeight: state.colosseo.deserts.palacinkeVisnjaVanilaSlag.weight,
    palacinkeVisnjaVanilaSlagInfo: state.colosseo.deserts.palacinkeVisnjaVanilaSlag.info,
    palacinkeVisnjaVanilaSlagPrice: state.colosseo.deserts.palacinkeVisnjaVanilaSlag.price,
    palacinkeVisnjaVanilaSlagImage: state.colosseo.deserts.palacinkeVisnjaVanilaSlag.image,
    palacinkeMarmeladaName: state.colosseo.deserts.palacinkeMarmelada.name,
    palacinkeMarmeladaWeight: state.colosseo.deserts.palacinkeMarmelada.weight,
    palacinkeMarmeladaInfo: state.colosseo.deserts.palacinkeMarmelada.info,
    palacinkeMarmeladaPrice: state.colosseo.deserts.palacinkeMarmelada.price,
    palacinkeMarmeladaImage: state.colosseo.deserts.palacinkeMarmelada.image,
    palacinkeMarmeladaSlagName: state.colosseo.deserts.palacinkeMarmeladaSlag.name,
    palacinkeMarmeladaSlagWeight: state.colosseo.deserts.palacinkeMarmeladaSlag.weight,
    palacinkeMarmeladaSlagInfo: state.colosseo.deserts.palacinkeMarmeladaSlag.info,
    palacinkeMarmeladaSlagPrice: state.colosseo.deserts.palacinkeMarmeladaSlag.price,
    palacinkeMarmeladaSlagImage: state.colosseo.deserts.palacinkeMarmeladaSlag.image,
    palacinkeColosseoName: state.colosseo.deserts.palacinkeColosseo.name,
    palacinkeColosseoWeight: state.colosseo.deserts.palacinkeColosseo.weight,
    palacinkeColosseoInfo: state.colosseo.deserts.palacinkeColosseo.info,
    palacinkeColosseoPrice: state.colosseo.deserts.palacinkeColosseo.price,
    palacinkeColosseoImage: state.colosseo.deserts.palacinkeColosseo.image,
    vocnaSalataName: state.colosseo.deserts.vocnaSalata.name,
    vocnaSalataWeight: state.colosseo.deserts.vocnaSalata.weight,
    vocnaSalataInfo: state.colosseo.deserts.vocnaSalata.info,
    vocnaSalataPrice: state.colosseo.deserts.vocnaSalata.price,
    vocnaSalataImage: state.colosseo.deserts.vocnaSalata.image,
    vocniKupName: state.colosseo.deserts.vocniKup.name,
    vocniKupWeight: state.colosseo.deserts.vocniKup.weight,
    vocniKupInfo: state.colosseo.deserts.vocniKup.info,
    vocniKupPrice: state.colosseo.deserts.vocniKup.price,
    vocniKupImage: state.colosseo.deserts.vocniKup.image,
    bananaSplitName: state.colosseo.deserts.bananaSplit.name,
    bananaSplitWeight: state.colosseo.deserts.bananaSplit.weight,
    bananaSplitInfo: state.colosseo.deserts.bananaSplit.info,
    bananaSplitPrice: state.colosseo.deserts.bananaSplit.price,
    bananaSplitImage: state.colosseo.deserts.bananaSplit.image,

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
)(ColosseoScreen);
