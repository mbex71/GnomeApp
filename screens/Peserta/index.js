import React from 'react'
import {SafeAreaView,StatusBar,View,Text} from 'react-native';
import { Header,Left,Right,Body,Container, Content, Button } from 'native-base'
class Peserta extends React.Component{
    constructor(){
        super()

        this.state = {
            url:''
        }
    }

    render(){
        const { navigation } = this.props

        return(
            <React.Fragment>
                <StatusBar />
                <SafeAreaView style={{ flex:1 }}>
                    <Container>
                        <Header>
                            <Left>
                                <Button transparent onPress={()=> navigation.goBack()} ><Text>Back</Text></Button>
                            </Left>
                            <Body/>
                        </Header>
                        <Content>
                        <Text>Isi QR Code: {this.state.url}</Text>
                        </Content>
                    </Container>
                </SafeAreaView>
            </React.Fragment>
        )
    }


    componentDidMount(){
        const { navigation } = this.props

        this.setState({
            url: navigation.getParam('qrCode', 'No Data')
        })
    }
}

export default Peserta