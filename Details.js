import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { authentication } from "./src/authentication/firebase";

const Details = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Logout" onPress={handleLogout} />,
    });
  }, [navigation]);

  const handleLogout = () => {
    authentication
      .signOut()
      .then(() => {
        // User successfully logged out
        console.log("User logged out");
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log("Logout error:", error.message);
      });
  };
  return (
    <View style={{ flex: 1, alignContent: "center" }}>
      <Text style={{}}>Details</Text>
      <Button
        title="Press"
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
};
export default Details;
