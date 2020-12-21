import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff'
    },
    headerContainer:{
        flex:1
    },
    contentContainer:{
        flex:2,
        backgroundColor: '#F57600',
        padding: 20,
        borderTopStartRadius:500,
        
    },
    information:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    informationTitle:{
        fontSize:22,
        color:'#fff',
        marginVertical:10,
        fontFamily:'Raleway-Regular'
    },
    informationContainer:{
        alignItems:'flex-start'
    }
})

export default style