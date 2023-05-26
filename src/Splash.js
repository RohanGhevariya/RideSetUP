import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 700);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        background: "#ff2ff2",
      }}
    >
      <Image
        source={require("./images/logo.png")}
        style={{
          width: 1000,
          height: 1000,
          borderRadius: 10,
          resizeMode: "center",
        }}
      />
    </View>
  );
};

export default Splash;
