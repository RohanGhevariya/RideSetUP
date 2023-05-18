import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fixToText}>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate("Users")}
        >
          <Icon name={"user"} size={30} color="#01a699" />
          <Text>Users</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate("Houses")}
        >
          <Icon name={"home"} size={30} color="#01a699" />
          <Text>House</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fixToText}>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate("Birthdays")}
        >
          <Icon name={"birthday-cake"} size={30} color="#01a699" />
          <Text>BirthDays</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate("Birthdays")}
        >
          <Icon name={"users"} size={30} color="#01a699" />
          <Text>Sabha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "",
  },
  touchableOpacity: {
    flex: 1,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 50,
    margin: 5,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
});
export default Home;
