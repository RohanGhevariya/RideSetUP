import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  TextInput,
  StatusBar,
  Linking,
} from "react-native";
import firebase from "./src/authentication/firebase";

const DATA = [
  {
    id: "0",
    title: "ABC",
    BirthDate: "10-10-1999",
    House: "Hariprerit",
    contact: "+12123456789",
    image: require("./src/images/akshardhami_text.png"),
  },
];

const LocationHandler = () => {
  const location = "geo:latitude,longitude?q=43.765709,-79.255783";
  Linking.openURL(location);
};
const WhatsAppHandler = (contact) => {
  const phone = "whatsapp://send?phone=+1234567890";
  Linking.openURL(phone);
};
const Item = ({ title, BirthDate, House, contact, image }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#fcfcfc",
      height: "100%",
      width: "100%",
    }}
  >
    <View style={styles.item}>
      <View style={{ height: 100, width: 100 }}>
        <Image
          style={{ height: 100, width: 100, borderRadius: 60 }}
          source={image}
        ></Image>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          marginLeft: 20,
        }}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={{ marginTop: 5 }}>D.O.B: {BirthDate}</Text>
        <Text style={{ marginTop: 5 }}>House: {House}</Text>
        <Text style={{ marginTop: 5 }}>Contact: {contact}</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row-reverse",
            shadowOpacity: 0.0,
            marginTop: 5,
            marginBottom: -10,
          }}
        >
          <TouchableOpacity
            onPress={() => alert("WhatsApp Clicked")}
            style={styles.touchableOpacity}
          >
            <Image
              style={{ height: 30, width: 30, borderRadius: 50 }}
              source={require("./src/images/info.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={LocationHandler}
            style={styles.touchableOpacity}
          >
            <Image
              style={{ height: 30, width: 30, borderRadius: 50 }}
              source={require("./src/images/placeholder.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={WhatsAppHandler}
            style={styles.touchableOpacity}
          >
            <Image
              style={{ height: 30, width: 30, borderRadius: 50 }}
              source={require("./src/images/whatsapp.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

const Users = ({ navigation }) => {
  //const userData = firebase.firestore().collection("newUserData");
  const [showForm, setShowForm] = useState(false);
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState("");

  const addRide = () => {
    const ride = {
      destination,
      distance,
    };

    firebase
      .database()
      .ref("rides")
      .push(ride)
      .then(() => {
        // Ride added successfully
        console.log("Ride added successfully");
        toggleForm();
      })
      .catch((error) => {
        // Error occurred while adding the ride
        console.log("Error adding ride:", error);
      });
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            image={item.image}
            title={item.title}
            BirthDate={item.BirthDate}
            House={item.House}
            contact={item.contact}
          />
        )}
        keyExtractor={(item) => item.id}
      >
        <Text>Name:</Text>
      </FlatList>
      <View style={{}}>
        {showForm ? (
          <View
            style={{
              alignContent: "center",
              justifyContent: "center",
              padding: 10,
              marginBottom: 150,
            }}
          >
            <View style={styles.formContainer}>
              <Text
                style={{
                  fontSize: 20,
                  alignSelf: "center",
                  marginBottom: 10,
                }}
              >
                Add User
              </Text>
              <TextInput style={styles.input} placeholder="Destination" />
              <TextInput style={styles.input} placeholder="Distance" />
              <View style={styles.buttonContainer}>
                <Button title="Add Ride" onPress={addRide} />
                <Button title="Cancel" onPress={toggleForm} />
              </View>
            </View>
          </View>
        ) : (
          <TouchableOpacity onPress={toggleForm} style={styles.fab}>
            <Text style={styles.fabIcon}>+</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#e6eeff",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
  },
  fab: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#03A9F4",
    borderRadius: 30,
    elevation: 8,
  },
  fabIcon: { fontSize: 40, color: "white" },
  touchableOpacity: {
    flex: 2,
    padding: 8,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  formContainer: {
    width: "100%",
    marginBottom: 20,
    padding: 30,
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#FDFEFE",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
export default Users;
