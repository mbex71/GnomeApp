import React from 'react'
import { SafeAreaView,StatusBar,View,Text,TextInput,TouchableOpacity } from 'react-native'
import style from '../Auth/style'

const Login = (props) => {

    _doSignin = () =>{
        // navigation.navigate('App')
        props.navigation.navigate('App')
        // alert('HAllo')
    }

    return(
        <React.Fragment>
            <StatusBar />
            <SafeAreaView style={style.container}>
                <TouchableOpacity onPress={this._doSignin}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </React.Fragment>
    )
}

export default Login