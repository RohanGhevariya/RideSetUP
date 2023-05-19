import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get("window");
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        ref={(scrollView) => {
          this.scrollView = scrollView;
        }}
        style={styles.container}
        //pagingEnabled={true}
        horizontal={true}
        decelerationRate={0}
        snapToInterval={width - 60}
        snapToAlignment={"center"}
        showsHorizontalScrollIndicator="False"
        contentInset={{
          top: 0,
          left: 30,
          bottom: 0,
          right: 30,
        }}
      >
        <TouchableOpacity
          style={styles.view}
          onPress={() => navigation.navigate("Users")}
        >
          <Icon name={"user"} size={30} color="#01a699" />
          <Text>Users</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.view}
          onPress={() => navigation.navigate("Houses")}
        >
          <Icon name={"home"} size={30} color="#01a699" />
          <Text>House</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.view}
          onPress={() => navigation.navigate("Birthdays")}
        >
          <Icon name={"birthday-cake"} size={30} color="#01a699" />
          <Text>Birthdays</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.view}
          onPress={() => navigation.navigate("Sabha")}
        >
          <Icon name={"users"} size={30} color="#01a699" />
          <Text>Sabha</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.view1}>
            <Icon name={"car"} size={30} color="#01a699" />
            <Text>Ride Set Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.view1}>
            <Icon name={"car"} size={30} color="#01a699" />
            <Text>Ride Set Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.view1}>
            <Icon name={"car"} size={30} color="#01a699" />
            <Text>Ride Set Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.view1}>
            <Icon name={"car"} size={30} color="#01a699" />
            <Text>Ride Set Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.view1}>
            <Icon name={"car"} size={30} color="#01a699" />
            <Text>Ride Set Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>

    // <View style={styles.container}>
    //   <View style={styles.fixToText}>
    //     <TouchableOpacity
    //       style={styles.touchableOpacity}
    //       onPress={() => navigation.navigate("Users")}
    //     >
    //       <Icon name={"user"} size={30} color="#01a699" />
    //       <Text>Users</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={styles.touchableOpacity}
    //       onPress={() => navigation.navigate("Houses")}
    //     >
    //       <Icon name={"home"} size={30} color="#01a699" />
    //       <Text>House</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View style={styles.fixToText}>
    //     <TouchableOpacity
    //       style={styles.touchableOpacity}
    //       onPress={() => navigation.navigate("Birthdays")}
    //     >
    //       <Icon name={"birthday-cake"} size={30} color="#01a699" />
    //       <Text>BirthDays</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={styles.touchableOpacity}
    //       onPress={() => navigation.navigate("Birthdays")}
    //     >
    //       <Icon name={"users"} size={30} color="#01a699" />
    //       <Text>Sabha</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  view: {
    marginTop: 100,
    backgroundColor: "#ffff",
    width: width - 70,
    margin: 10,
    height: 200,
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 10,
    shadowOpacity: 0.1,
    shadowColor: "black",
    //paddingHorizontal : 30
  },
  view1: {
    marginTop: 20,
    marginLeft: 40,
    backgroundColor: "#D13927",
    width: width - 70,
    height: 80,
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  touchableOpacity: {
    flex: 1,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
  },
});
export default Home;
