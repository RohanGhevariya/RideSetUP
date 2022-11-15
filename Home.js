import React from "react";  
import { View,Text,StyleSheet,Button } from "react-native";

const Home =({navigation})=>{
    return(
        <View style={{flex:1 ,alignContent:'center'}}>
        <Text style={{}}>Home</Text>
        <Button title="Press" onPress={navigation.navigate("Details")}></Button>
    </View>
    )

}
export default Home;