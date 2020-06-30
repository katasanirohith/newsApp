import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { TabScreen } from "./src/screens/tabScreen.js";
import { render } from "react-dom";
export default class App extends React.Component {
  render() {
    return <TabScreen />;
  }
}
