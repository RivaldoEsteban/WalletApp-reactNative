import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import check from "../../../images/check.png";
export default function SuccessfulReload({ navigation }) {
  function handlePage() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <View style={styles.successful}>
        <Image source={check} />
        <Text style={styles.txt}>Recarga exitoso</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePage}>
          <Text style={styles.buttonTxt}>Volver al inicio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "rgba(3, 26, 110, 1)",
  },
  successful: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 24,
    color: "white",
    marginTop: 20,
  },
  buttonContainer: {
    padding: 16,
  },
  button: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
  },
  buttonTxt: {
    color: "rgba(3, 26, 110, 1)",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});
