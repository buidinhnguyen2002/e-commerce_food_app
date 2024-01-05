import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import { Routers } from "../../utils/Constant";
import { Center } from "native-base";

const LocationPicker = () => {
  const navigation = useNavigation();
  const [initialRegion, setInitialRegion] = useState({
    latitude: 10.870637153968282,
    longitude: 106.7916165669726,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [markerPosition, setMarkerPosition] = useState({
    latitude: initialRegion.latitude,
    longitude: initialRegion.longitude,
  });

  const [markerInfo, setMarkerInfo] = useState({
    title: "Marker Title",
    description: "Marker Description",
  });

  const [markerAddress, setMarkerAddress] = useState("Unknown Address");

  const handleLocationChange = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const newLatitude = location.coords.latitude;
      const newLongitude = location.coords.longitude;

      setInitialRegion((prevState) => ({
        ...prevState,
        latitude: newLatitude,
        longitude: newLongitude,
      }));

      // Lấy địa chỉ từ tọa độ mới
      getAddressFromCoordinates(newLatitude, newLongitude);

      // Cập nhật thông tin title và description cho vị trí mới
      setMarkerInfo({
        title: "New Marker Title",
        description: "New Marker Description",
      });
      navigation.navigate(Routers.DeliverTo, {
        selectedAddress: markerInfo.title,
      });
    } catch (error) {
      console.error("Error getting location: ", error);
    }
  };

  const handleMarkerPress = () => {
    handleLocationChange();
    setMarkerPosition({
      latitude: initialRegion.latitude,
      longitude: initialRegion.longitude,
    });

    // Lấy địa chỉ từ tọa độ mới
    getAddressFromCoordinates(initialRegion.latitude, initialRegion.longitude);

    // Cập nhật thông tin title và description cho vị trí mới
    setMarkerInfo({
      title: markerAddress,
      description: "New Marker Description",
    });
  };
  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;

    setMarkerPosition({
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    });
    console.log("Marker Position:", coordinate);
    // Lấy địa chỉ từ tọa độ mới
    getAddressFromCoordinates(coordinate.latitude, coordinate.longitude);

    // Cập nhật thông tin title và description cho vị trí mới
    setMarkerInfo({
      title: markerAddress,
      description: "New Marker Description",
    });
  };

  const getAddressFromCoordinates = async (latitude, longitude) => {
    try {
      const apiKey = "AIzaSyBCrF5aGBr8-e1xIgutAaw3qndzJmmNq4s";
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
      );

      const data = await response.json();
      console.log("Geocoding Response:", data);

      if (data.results && data.results.length > 0) {
        const address = data.results[0].formatted_address || "Unknown Address";
        setMarkerInfo({
          title: address,
          description: "New Marker Description",
        });
      } else {
        setMarkerInfo({
          title: `${latitude}, ${longitude}`,
          description: "New Marker Description",
        });
      }
    } catch (error) {
      console.error("Error getting address: ", error);
    }
  };

  useEffect(() => {
    getAddressFromCoordinates(
      markerPosition.latitude,
      markerPosition.longitude
    );

    // Thêm độ trễ trước khi chuyển trang
    const timeoutId = setTimeout(() => {
      if (markerInfo.title !== "Marker Title") {
        // Check if the markerInfo.title has been updated
        navigation.navigate(Routers.DeliverTo, {
          selectedAddress: markerInfo.title,
        });
      }
    }, 1000); // Độ trễ là 1500 milliseconds (1.5 giây)

    // Cleanup function để xóa timeout khi component unmount
    return () => clearTimeout(timeoutId);
  }, [markerInfo.title, navigation]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        onPress={handleMapPress}
      >
        <Marker
          coordinate={markerPosition}
          title={markerInfo.title}
          // description={markerInfo.description}
          onPress={handleMarkerPress}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default LocationPicker;
