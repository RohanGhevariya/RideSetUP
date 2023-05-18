import React from "react";  
import { View,Text,StyleSheet,Button } from "react-native";

const Houses =({navigation})=>{
    return(
        <View style={{flex:1 ,alignContent:'center'}}>
        <Text style={{}}>Houses</Text>
        <Button title="Press" onPress={()=> navigation.navigate('Home')}></Button>
    </View>
    )

}
export default Houses;