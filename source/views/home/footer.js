import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Footer({ navigation }) {
  function handleDeposit() {
    navigation.navigate("Depositar");
  }
  function handleSendMoney() {
    navigation.navigate("SendMoney");
  }
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        style={styles.sendMoneyButton}
        onPress={handleSendMoney}
      >
        <Text style={styles.sendMoney}>Enviar dinero</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.depositButtom} onPress={handleDeposit}>
        <Text style={styles.deposit}>Depositar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    padding: 16,
  },
  sendMoneyButton: {
    borderColor: "rgb(3, 26, 110)",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  sendMoney: {
    color: "rgba(3, 26, 110, 1)",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  depositButtom: {
    borderRadius: 8,
    padding: 8,
    backgroundColor: "rgba(3, 26, 110, 1)",
  },
  deposit: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
