import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import HomeScreen from '../screens/Home'
import ScanQr from '../screens/ScanQr'
import Login from '../screens/Auth/Login'
import Loading from '../screens/Loading'
import Peserta from '../screens/Peserta'

const App = createBottomTabNavigator({
    Home: HomeScreen,
    ScanQr: ScanQr
},{
    initialRouteName:'Home',
    tabBarOptions:{
        activeTintColor:'#000',
        style:{
            elevation:1
        },
        labelStyle:{
            fontSize:14,
            fontFamily:'Raleway-Regular'
        }
    }
})


const AppStack = createStackNavigator({
    App: App,
    Peserta: Peserta
},{
    headerMode:'none'
})

const AuthStack = createStackNavigator({
    Login: Login
},{
    headerMode:'none'
})

export default createAppContainer(
    createSwitchNavigator({
        App:AppStack,
        Auth: AuthStack,
        Loading: Loading
    },{
        initialRouteName:'Loading'
    })
)