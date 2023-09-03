import React, { Component, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-web";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import * as location from "expo-location";
import Carousel from "../components/Carousel";
// import CarouselComponent from "../components/CarouselComponent";
const HomeScreen = () => {
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "we are loading your location"
  );
  const [locationServiceEnable, setLocationServiceEnable] = useState(false);

  useEffect(() => {
    CheckIfLocationEnable();
    getCurrentLocation();
  }, []);

  const CheckIfLocationEnable = async () => {
    let enable = await location.hasServicesEnabledAsync();
    if (!enable) {
      Alert.alert(
        "Location Service not enable",
        "Please enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancleable: false }
      );
    } else {
      setLocationServiceEnable(enable);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "allow the app to use the location service",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancleable: false }
      );
    }

    const { coords } = await location.getCurrentPositionAsync();
    console.log({ coords });
    if (coords) {
      const { latitude, longitude } = coords;
      console.log({ latitude, longitude });
      let response = await location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      console.log({ response });
      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setDisplayCurrentAddress(address);
      }
    }
  };

  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Entypo name="location" size={24} color="red" />
        <View style={{ marginLeft: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
          <Text>{displayCurrentAddress}</Text>
        </View>
        <Pressable style={{ marginLeft: "auto", marginRight: 7 }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 50 }}
            source={{
              uri: "https://lh3.googleusercontent.com/ogw/AGvuzYZe650Tm0U-sW3kF7m2_hrj9ErAdNd9qzbifTlI=s32-c-mo",
            }}
          />
        </Pressable>
      </View>
      {/* Search Bar */}
      <View
        style={{
          padding: 10,
          margin: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          borderWidth: 0.8,
          backgroundColor: "#C0C0C0",
          borderRadius: 7,
        }}
      >
        <TextInput placeholder="Search for item or More" />
        <Feather name="search" size={24} color="black" />
      </View>
      {/* Carousel */}
      <View style={{}}>
        <Image
          style={{ width: "full", height: 300, borderRadius: 5 }}
          source={{
            uri: "https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  head: {
    color: "red",
    fontSize: 40,
  },

  // e2af66723d6042f687272eeb1dacaf1a,
  // exp://localhost:19007/--/spotify-auth-callback
});
