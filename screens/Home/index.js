import React from 'react'
import { View,Text,StatusBar,ScrollView,SafeAreaView,Dimensions,Image, TouchableHighlight } from 'react-native'
import { Button } from 'native-base'
import style from './style'
import Logo from '../../assets/logo.png'
import Icon from 'react-native-vector-icons/FontAwesome'
import Swipeable from 'react-native-gesture-handler/Swipeable'

class Home extends React.Component{
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => <Icon name="home" size={20} color={tintColor}/>

    }
    render(){
        let {height,width} = Dimensions.get("window")
        return(
            <React.Fragment>
                <StatusBar/>
                <SafeAreaView style={style.container}>
                    <View style={style.headerContainer}>
                        <Image source={Logo} style={{ width:width,height:200 }} />
                    </View>
                    <View style={style.contentContainer}>
                        <View style={style.information}>
                            <View style={style.informationContainer}>
                                <Text style={style.informationTitle}>Welcome Firdaus</Text>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </React.Fragment>
        )
    }
}

export default Home