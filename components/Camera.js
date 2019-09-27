import React from 'react'
import { SafeAreaView,View,StatusBar,Text,Alert } from 'react-native'
import { RNCamera } from 'react-native-camera'

class Camera extends React.Component{
    
    render(){
        
        return(
            <React.Fragment>
                <StatusBar/>
                <SafeAreaView style={{ flex:1 }}>
                    <View style={{ flex: 1 }}>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={{ flex:1,justifyContent:'flex-end',alignItems:'center' }}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        // onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        //     console.log(barcodes);
                        // }}
                        barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                        onBarCodeRead={(e)=> this.props.peserta(e.data)}
                        />
                    </View>
                </SafeAreaView>
            </React.Fragment>
        )
    }
}

export default Camera