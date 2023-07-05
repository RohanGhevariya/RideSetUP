// LoginScreen.js

import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { authentication } from "../authentication/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import Icon from "react-native-vector-icons/FontAwesome";

const LoginScreen = ({ navigation }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        setIsSignedIn(true);
        navigation.navigate("Home");
        console.log("Singned In");
      })
      .catch((re) => {
        console.log(re.message);
        alert("Incorrect User name or Password", re.message);
      });
  };
  // const SignOutUser = () => {
  //   signOut(authentication)
  //     .then((re) => {
  //       setIsSignedIn(false);
  //       console.log("Singned Out");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <View style={styles.container}>
      <Text
        style={{
          alignItems: "center",
          justifyContent: "center",
          color: "Black",
          fontFamily: "Cochin",
          fontStyle: "bold",
          fontSize: 30,
          marginBottom: 40,
        }}
      >
        Login
      </Text>
      <Text
        style={{
          alignItems: "flex-start",
          justifyContent: "flex-start",
          alignSelf: "flex-start",
          color: "Black",
          fontFamily: "Cochin",
          fontStyle: "bold",
          fontSize: 20,
          marginBottom: 10,
          marginLeft: 22,
        }}
      >
        User Name
      </Text>
      <TextInput
        style={styles.textBoxes}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <Text
        style={{
          alignItems: "flex-start",
          justifyContent: "flex-start",
          alignSelf: "flex-start",
          color: "#000000",
          fontFamily: "Cochin",
          fontStyle: "bold",
          fontSize: 20,
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 22,
        }}
      >
        Password
      </Text>
      <TextInput
        style={styles.textBoxes}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity
        onPress={() => setShowPassword(!showPassword)}
        style={styles.eyeIconContainer}
      >
        <Image
          source={
            showPassword
              ? require("../images/view.png")
              : require("../images/hide.png")
          }
          style={styles.eyeIcon}
        />
      </TouchableOpacity>
      <Button title="Log In" onPress={handleLogin} />
      {/* {isSignedIn === true ? (
        <Button title="Sign Out" onPress={SignOutUser} />
      ) : (
        <Button title="Sign In" onPress={handleLogin} />
      )} */}
      <Button
        title="Register Here"
        onPress={() => navigation.navigate("Register")}
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eef2f3",
  },
  textBoxes: {
    width: "85%",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 0.2,
    fontSize: 18,
    flexDirection: "row",
  },
  eyeIconContainer: {
    position: "absolute",
    right: 50,
    top: "57%",
    transform: [{ translateY: -10 }], // Adjust the vertical position of the icon
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
});

export default LoginScreen;
