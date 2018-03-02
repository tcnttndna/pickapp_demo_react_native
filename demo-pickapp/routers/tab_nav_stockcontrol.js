import React, { Component } from 'react';
import { TabNavigator } from "react-navigation";
import AddPark from "../component/component_stockcontrol/addpark";
import Stack,{HelloWorldApp} from "./stack_nav";


const Tabnav = TabNavigator({
    TabAdd:{
        screen: AddPark,
        navigationOptions: {
            tabBarLabel:"AddPart",
        }
    },
    TabTimber:{
        screen: AddPark,
        navigationOptions: {
            tabBarLabel:"Timber Delivered",
        }
    },
    TabReduce:{
        screen: AddPark,
        navigationOptions: {
            tabBarLabel:"Reduce",
        }
    },
    TabTransfer:{
        screen: AddPark,
        navigationOptions: {
            tabBarLabel:"Transfer",
        }
    },
    TabCurent:{
        screen: AddPark,
        navigationOptions: {
            tabBarLabel:"Curent",
        }
    },
    TabPriotity:{
        screen: AddPark,
        navigationOptions: {
            tabBarLabel:"Priotity",
        }
    },
    TabUnpack:{
        screen: AddPark,
        navigationOptions: {
            tabBarLabel:"Unpack",
        }
    }
},{
    'lazy': true,
    tabBarOptions: {
        scrollEnabled: true,
        activeTintColor: '#e91e63',
        tabStyle:{
            width: 100,
        },
        labelStyle: {
            fontSize: 12,
          },
    },
})

export default class StockControl extends Component{
    render(){
        return(
            <Tabnav/>
        );
    }
}