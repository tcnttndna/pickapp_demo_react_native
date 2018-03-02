import React from 'react';
import { Button, View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Stack,{HelloWorldApp} from "./stack_nav";
import { LoginScreen } from "../component/component_login/login";

const Drawernav = DrawerNavigator({
    DrawerItem1: {
        screen: Stack,
        navigationOptions: {
            drawerLabel: "Home",
        },
    },
    DrawerItem2: {
        screen: LoginScreen,
        navigationOptions: {
            drawerLabel: "Login",
        },
    },
    DrawerItem3: {
        screen: HelloWorldApp,
        navigationOptions: {
            drawerLabel: "hello",
        },
    }

});

export default class DrawerNav extends React.Component {
  render() {
    return <Drawernav/>;
  }
}