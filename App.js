import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import styled from "styled-components";
import logo from "./images/avatar.png";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import uploadToAnonymousFilesAsync from "anonymous-files";

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera is required");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    } else {
      if (Platform.OS === "web") {
        const remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);

        setSelectedImage({ localUri: pickerResult.uri, remoteUri });
      } else {
        setSelectedImage({ localUri: pickerResult.uri });
      }
    }
  };

  async function openShareDialog() {
    if (!(await Sharing.isAvailableAsync())) {
      alert("hola");
      return;
    }
    await Sharing.shareAsync(selectedImage.localUri);
  }

  return (
    <View style={styles.container}>
      {/* <Text>iniciar sesión</Text> */}
      <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>
        <Image
          source={{
            uri: selectedImage !== null ? selectedImage.localUri : logo,
          }}
          style={styles.logo}
        />
      </TouchableOpacity>
      {selectedImage ? (
        <TouchableOpacity style={styles.button} onPress={openShareDialog}>
          <Text style={styles.buttonText}>Sharing</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECECEC",
    borderColor: "red",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 80,
    width: 80,
    borderRadius: 4,
    resizeMode: "contain",
  },
  button: {
    borderRadius: 16,
    padding: 16,
    backgroundColor: "#031A6E",
  },
  buttonText: {
    color: "#fff",
  },
});
