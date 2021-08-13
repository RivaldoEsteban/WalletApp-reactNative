import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import logo from "../../../images/logo.png";
import Context from "../../../context/context";

export default function Header({ navigation }) {
  const context = useContext(Context);
  const balance = context.balance.value;

  function handlePage() {
    navigation.navigate("Services");
  }

  return (
    <View style={styles.homeHeader}>
      <View style={styles.headerFlex}>
        <View>
          <Text style={styles.homeHeaderTxt}>Dinero disponible</Text>
          <Text style={styles.balance}>${balance}</Text>
        </View>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={logo} />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePage}>
        <Text style={styles.buttonText}>Servicios</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  homeHeader: {
    backgroundColor: "rgba(3, 26, 110, 1)",
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  headerFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: "100%",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    marginVertical: 16,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  homeHeaderTxt: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "400",
  },
  balance: {
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 34,
    color: "#fff",
    marginVertical: 4,
  },

  avatar: {
    height: 32,
    width: 32,
  },
  avatarContainer: {
    backgroundColor: "#ffffff",
    padding: 6,
    borderRadius: 50,
  },
});
