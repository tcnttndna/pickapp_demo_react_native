import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27
import {LoginScreen} from "./component/component_login/login";
import { HomeScreen } from "./component/component_main/home";
import Stack from "./routers/stack_nav";
import DrawerNav from "./routers/drawer_nav";

export default class App extends React.Component {
  render() {
    return <DrawerNav />;
  }
}