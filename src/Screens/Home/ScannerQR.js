import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Camera } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Routers } from "../../utils/Constant";
import { useNavigation } from "@react-navigation/native";

const QRCodeScannerScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [restaurantId, setRestaurantId] = useState(null);

  // Asking for camera permission when the component mounts
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  // Logging the updated restaurantId whenever it changes
  useEffect(() => {
    console.log("Updated Restaurant ID:", restaurantId);
  }, [restaurantId]);

  // Callback function when a barcode is scanned
  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    console.log("QR Code Data:", data);

    try {
      const qrData = JSON.parse(data);
      const scannedRestaurantId = qrData.restaurantId;
      
      // Updating the restaurantId state
      setRestaurantId(scannedRestaurantId);
      console.log("Scanned Restaurant ID:", scannedRestaurantId);

      // Navigating to the RestaurantDetail screen with the scanned restaurantId
      console.log("Navigating to RestaurantDetail...");
      navigation.navigate(Routers.RestaurantDetail, { idRestaurant: scannedRestaurantId });

    } catch (error) {
      console.error('Error parsing QR Code data:', error);
      setScanned(false); // Reset scanned if there's an error during parsing
    }
  };

  // Callback function to handle scanning again
  const handleScanAgain = () => {
    setScanned(false);
    setRestaurantId(null);
  };

  // Checking camera permissions and rendering the camera view
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // Rendering the main component
  return (
    <View style={styles.container}>
      {/* BarCodeScanner component */}
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {/* Button to scan again */}
      {scanned && (
        <Button
          title="Tap to Scan Again"
          onPress={handleScanAgain}
        />
      )}

      {/* Button to navigate to RestaurantDetail when restaurantId is available */}
      {restaurantId && (
        <Button
          title="Go to Restaurant Detail"
          onPress={() => navigation.navigate(Routers.RestaurantDetail, { restaurantId })}
        />
      )}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
});

export default QRCodeScannerScreen;
