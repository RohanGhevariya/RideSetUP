import React from "react";  
import { View,Text,StyleSheet,Button } from "react-native";

const Birthdays =({navigation})=>{
    return(
        <View style={{flex:1 ,alignContent:'center'}}>
        <Text style={{}}>Birthdays</Text>
        <Button title="Press" onPress={()=> navigation.navigate('Home')}></Button>
    </View>
    )

}
export default Birthdays;