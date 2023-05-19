import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Details from "./Details";
import Users from "./Users";
import Birthdays from "./Birthdays";
import Houses from "./Houses";
import Ride from "./Ride";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: true }}
          name="Home"
          component={Home}
        />

        <Stack.Screen
          options={{ headerShown: true }}
          name="Details"
          component={Details}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Birthdays"
          component={Birthdays}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Ride"
          component={Ride}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Houses"
          component={Houses}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Users"
          component={Users}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
