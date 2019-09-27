import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Container,Text } from 'native-base'

class Loading extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            islogin: true
        }
    }

    componentDidMount(){
        if(this.state.islogin){
            this.props.navigation.navigate('App')
        }
        else{
            this.props.navigation.navigate('Auth')
        }
    }

    render(){
        return(
            <React.Fragment>
                <Container style={{ justifyContent:'center',alignItems:'center' }}>
                    <ActivityIndicator size="large"/>
                </Container>
            </React.Fragment>
        )
    }
}

export default Loading;