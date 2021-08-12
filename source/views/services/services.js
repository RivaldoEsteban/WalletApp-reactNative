import React, { useContext, useRef, useState } from "react";
import { Context } from "../../../App";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Botton from "../../../components/button";

const saldo = [
  {
    amount: 20,
  },
  {
    amount: 30,
  },
  {
    amount: 50,
  },
  {
    amount: 100,
  },
  {
    amount: 200,
  },
  {
    amount: 300,
  },
];

export default function Services({ navigation }) {
  const context = useContext(Context);
  function handlePage() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.subtitle}>Recarga de celular</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.label}>Número de celular</Text>
          <TextInput
            style={styles.input}
            placeholder="Numero celular"
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text style={styles.subtitle}>Recarga</Text>
          <View style={styles.amountList}>
            {saldo.map((saldo) => {
              return (
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>{`$${saldo.amount}`}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <Text style={styles.subtitle}>Total a pagar :</Text>
      </View>
      <View>
        <Botton text="Recargar" changePage={handlePage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  amountList: {
    flexDirection: "row",
  },
  container: {
    height: "100%",
    backgroundColor: "rgba(236, 236, 236, 0.1)",
  },
  modal: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 4,
    marginTop: 8,
  },
  numberContainer: {
    paddingVertical: 16,
  },
  subtitle: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,
    color: "rgba(143, 143, 143, 1)",
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "rgba(112, 112, 112, 1)",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
