import React from 'react'
import { withNavigationFocus } from 'react-navigation'
import Camera from '../../components/Camera'

class ScanQr extends React.Component{

    _navigateTo(param) {
        this.props.navigation.navigate('Peserta',{qrCode:param})
    }   

    render(){
        const { navigate } = this.props.navigation
        return this.props.isFocused ? <Camera peserta={(param) => this._navigateTo(param)} /> : <></>
    }
}

export default withNavigationFocus(ScanQr)