import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Sabha = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignContent: "center" }}>
      <Text style={{}}>Sabha attendence</Text>
      <Button
        title="Press"
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
};
export default Sabha;
