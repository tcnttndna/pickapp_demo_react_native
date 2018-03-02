import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27
import {LoginScreen} from "../component/component_login/login";
import { HomeScreen } from "../component/component_main/home";
import StockControl from "./tab_nav_stockcontrol";

export class HelloWorldApp extends React.Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

const RootStack = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions : {
        header: null
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions : {
        headerLeft: null,
        title: 'Home'
      }
    },
    StockControl: {
      screen: StockControl,
      navigationOptions : {
        title: 'Stock Control'
      }
    },
    QRCodeScanner:{
      screen: HelloWorldApp,
      navigationOptions : {
        title: 'qrcodescanner'
      }
    },
  },
  {
    initialRouteName: 'Login',
  }
);

export default class Stack extends React.Component {
  render() {
    return <RootStack />;
  }
}


