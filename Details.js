import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { authentication } from "./src/authentication/firebase";

const Details = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = authentication.currentUser;
      if (currentUser) {
        setUser(currentUser);
      }
    };
    fetchUserData();
  }, []);
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
      {user && <Text style={styles.text}>Welcome, {user.displayName}</Text>}
      <Button
        title="Press"
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
export default Details;
