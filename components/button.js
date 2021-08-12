import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function Button({ text, changePage }) {
  return (
    <View style={styles.addContactContainer}>
      <TouchableOpacity style={styles.button} onPress={changePage}>
        <Text style={styles.buttonTxt}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addContactContainer: {
    padding: 16,
    backgroundColor: "white",
  },
  button: {
    width: "100%",
    backgroundColor: "rgba(3, 26, 110, 1)",
    borderRadius: 8,
  },
  buttonTxt: {
    color: "white",
    textAlign: "center",
    margin: 8,
    fontSize: 16,
    fontWeight: "600",
  },
});
