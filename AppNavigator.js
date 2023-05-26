import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "./Home";
import Details from "./Details";
import Users from "./Users";
import Birthdays from "./Birthdays";
import Houses from "./Houses";
import Ride from "./Ride";
import Sabha from "./Sabha";
import LoginScreen from "./src/Login/Login";
import RegisterScreen from "./src/Login/Registration";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Homestack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
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
      <Stack.Screen
        options={{ headerShown: true }}
        name="Sabha"
        component={Sabha}
      />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Profile") {
              iconName = "user";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          options={({ navigation }) => ({
            headerShown: false,
            headerLeft: () => (
              <Icon
                name="angle-left"
                size={30}
                color="black"
                style={{ margin: 10, marginLeft: 12 }}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
          name="Home"
          component={Homestack}
        />
        <Tab.Screen
          options={({ navigation }) => ({
            headerShown: true,
            headerLeft: () => (
              <Icon
                name="angle-left"
                size={30}
                color="black"
                style={{ margin: 10, marginLeft: 12 }}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
          name="Profile"
          component={Details}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
