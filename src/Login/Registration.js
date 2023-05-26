// RegisterScreen.js

import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { authentication } from "../authentication/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setIsSignedIn(true);
      })
      .catch((re) => {
        console.log(re);
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
        secureTextEntry
      />
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
});

export default RegisterScreen;
