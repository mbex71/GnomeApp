import React from 'react'
import {SafeAreaView,StatusBar,View,Text,ActivityIndicator,TouchableHighlight} from 'react-native';
import { Header,Left,Right,Body, Button,  Content,Container, Footer, Form, Item,Input,Label,Toast,Root } from 'native-base'
import style from './style'
import Axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome'
class Peserta extends React.Component{
    constructor(){
        super()

        this.state = {
            user:[],
            eventId: '',
            userId: ''
        }
    }

    _setRegistrasi($eventId,$userId){

        // const baseUrl = 'http://192.168.0.5:8000/api' //Local
        const baseUrl = 'https://kenproject.id/api' //Production
        Axios.post(baseUrl+'/absen',{
            user_id: $userId,
            event_id: $eventId
        })
        .then(response => {
            console.log(response.data)
            if(response.data.errors){
                Toast.show({
                    text:response.data.errors,
                    buttonText:'Okey',
                    duration:3000
                })
            }
            else{
                Toast.show({
                    text:'Absensi Sukses',
                    buttonText:'Okey',
                    duration:3000
                })
            }
        })
        .catch(error => {
            console.log(error.response.data.errors)
            Toast.show({
                text:'Terjadi Kesalahan',
                buttonText:'Okey',
                duration:3000
            })
        })
    }

    render(){
        console.log(this.state.user)
        return(
           <Root>
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={()=>this.props.navigation.goBack()}><Icon name="arrow-left" color="#fff" /></Button>
                    </Left>
                    <Body />
                </Header>
                <Content contentContainerStyle={style.container}>

                    <View style={style.containerJudul}>
                        <Text style={style.textJudul}>Peserta GNOME ASIA 2019</Text>
                    </View>

                    <View style={style.formContainer}>
                        <Form>
                            <Item>
                                
                                <Input value={this.state.user.name} disabled style={style.textInput} />
                            </Item>
                            <Item>
                                
                                <Input value={this.state.user.email} disabled style={style.textInput}/>
                            </Item>
                            <Item>
                                
                                <Input value={this.state.user.phone} disabled style={style.textInput}/>
                            </Item>
                            <Item>
                                
                                <Input value={this.state.user.asal} disabled style={style.textInput}/>
                                
                            </Item>
                            <Item>
                                
                                <Input value={this.state.user.tshirt} disabled style={style.textInput}/>
                                
                            </Item>
                        </Form>
        
                        <Button block primary onPress={()=>this._setRegistrasi(this.state.eventId,this.state.userId)}><Text style={style.textmenu}>SUBMIT</Text></Button>
                    </View>
                </Content>
                </Container>
            </Root>
        )
    }


    componentDidMount(){
        const { navigation } = this.props
        Axios.get(navigation.getParam('qrCode'))
        .then(response => {
            console.log(response.data)
            this.setState({
                user: response.data.user,
                eventId: response.data.event_id,
                userId: response.data.user_id
            })
        })
        .catch(error => {
            console.log(error.response)
        })
        
        // fetch(navigation.getParam('qrCode'))
        // .then(response => response.json())
        // .then(response => {
        //     console.log(response)
        //     this.setState({
        //         user: response.user
        //     })
        // })
        // .catch(error => {
        //     console.log(error)
        // })
    }
}

export default Peserta