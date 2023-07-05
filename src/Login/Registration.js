// RegisterScreen.js

import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { authentication } from "../authentication/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = ({ navigation }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setIsSignedIn(true);
        alert("Registration completed!");
        navigation.navigate("Login");
      })
      .catch((err) => {
        console.log(err);
        alert("Please enter valid email or password");
      });
  };

  //     <View>
  //       <Text>Registration</Text>
  // <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)} />
  // <TextInput
  //   placeholder="Password"
  //   onChangeText={(text) => setPassword(text)}
  //   secureTextEntry
  // />
  // <Button title="Register" onPress={handleRegister} />
  //     </View>
  //   );
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
        Registration
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
        Confirm Password
      </Text>
      <TextInput
        style={styles.textBoxes}
        placeholder="Re-Enter Password"
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry={!showConfirmPassword}
      />
      <TouchableOpacity
        onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        style={styles.eyeIconContainerShowPassword}
      >
        <Image
          source={
            showConfirmPassword
              ? require("../images/view.png")
              : require("../images/hide.png")
          }
          style={styles.eyeIcon}
        />
      </TouchableOpacity>
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textBoxes: {
    width: "90%",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 0.2,
    fontSize: 18,
  },
  eyeIconContainer: {
    position: "absolute",
    right: 50,
    top: "54.2%",
    transform: [{ translateY: -10 }], // Adjust the vertical position of the icon
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
  eyeIconContainerShowPassword: {
    position: "absolute",
    right: 50,
    top: "64.7%",
    transform: [{ translateY: -10 }], // Adjust the vertical position of the icon
  },
});

export default RegisterScreen;
