import { Navigation } from "react-native-navigation";
import React from "react";

import AuthScreen from "./src/screens/Auth/Auth";
import ScreenOne from "./src/screens/ScreenOne/ScreenOne";
import ScreenTwo from "./src/screens/ScreenTwo/ScreenTwo";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
import CiraScreen from "./src/screens/CiraScreen/CiraScreen";
import ColosseoScreen from "./src/screens/PizzeriaColosseo/PizzeriaColosseo";
import AvlijaScreen from "./src/screens/AvlijaScreen/AvlijaScreen";
import AstoriaScreen from "./src/screens/Astoria/Astoria";
import RiMScreen from "./src/screens/RakijaMeze/RakijaMeze";
import HarizmaScreen from "./src/screens/HarizmaScreen/HarizmaScreen";
import TopScreen from "./src/screens/TopScreen/TopScreen";
import SKScreen from "./src/screens/SrpskaKrunaScreen/SrpskaKrunaScreen";
import ResJezerceScreen from "./src/screens/ResJezerce/ResJezerce";
import PPScreen from "./src/screens/PinkPanter/PinkPanter";
import BajBajScreen from "./src/screens/BajBaj/BajBaj";
import BossScreen from "./src/screens/Boss/Boss";
import NavBarCustomButton from "./src/components/CustomNavBarButton/CustomNavBarButton";
import HistoryScreen from "./src/screens/HistoryScreen/HistoryScreen";
import AddressScreen from "./src/screens/AddressScreen/AddressScreen";
import CasperScreen from "./src/screens/CasperScreen/CasperScreen";
import ProfilScreen from "./src/screens/ProfilScreen/ProfilScreen";

import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import menuReducer from "./src/Store/reducers/menu";
let composeEnhancers = compose;
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const store = createStore(menuReducer, composeEnhancers());

Navigation.registerComponent(
  "potrcko.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "potrcko.ScreenOne",
  () => ScreenOne,
  store,
  Provider
);
Navigation.registerComponent(
  "potrcko.ScreenTwo",
  () => ScreenTwo,
  store,
  Provider
);
Navigation.registerComponent(
  "potrcko.SideDrawer",
  () => SideDrawer,
  store,
  Provider
);
Navigation.registerComponent(
  "potrcko.CiraScreen",
  () => CiraScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "potrcko.ColosseoScreen",
  () => ColosseoScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "potrcko.AvlijaScreen",
  () => AvlijaScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "potrcko.AstoriaScreen",
  () => AstoriaScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "potrcko.RiMScreen",
  () => RiMScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "potrcko.HarizmaScreen",
  () => HarizmaScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "potrcko.TopScreen",
  () => TopScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "potrcko.SKScreen",
  () => SKScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "potrcko.ResJezerceScreen",
  () => ResJezerceScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "potrcko.PPScreen",
  () => PPScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "potrcko.BajBajScreen",
  () => BajBajScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "potrcko.BossScreen",
  () => BossScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "potrcko.CasperScreen",
  () => CasperScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "potrcko.NavBarCustomButton",
  () => NavBarCustomButton
);
Navigation.registerComponent(
  "potrcko.HistoryScreen",
  () => HistoryScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "potrcko.AddressScreen",
  () => AddressScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "potrcko.ProfilScreen",
  () => ProfilScreen,
  store,
  Provider
);

export default () =>
  Navigation.startSingleScreenApp({
    screen: {
      screen: "potrcko.AuthScreen",
      title: "Login"
    }
  });
