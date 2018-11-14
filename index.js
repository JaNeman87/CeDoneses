/** @format */

import App from "./App";
App();

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([
  "Warning: Can't call setState (or forceUpdate) on an unmounted component. ",
  "Unable to symbolicate stack trace: Network request failed"
]);
