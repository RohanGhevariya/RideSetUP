import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import Home from './Home';
import Details from './Details';

const Stack = createNativeStackNavigator();

const AppNavigator = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                options={{headerShown:true}}
                name="Home"
                component={Home}/>

            <Stack.Screen
                options={{headerShown:true}}
                name="Details"
                component={Details}/>  
            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default AppNavigator;