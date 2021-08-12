import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { Context } from "../../../App";
import Button from "../../../components/button";

export default function AddContact({ navigation }) {
  const context = useContext(Context);
  console.log(context);
  const contact = context.contacts.value;
  const [key, setKey] = useState("");
  const [bank, setBank] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [buttonStyle, setButtonStyle] = useState(0.5);

  function addKey(event) {
    setKey(event);
    setButtonStyle(1);
  }
  function addBank(event) {
    setBank(event);
  }
  function addName(event) {
    setName(event);
  }
  function addEmal(event) {
    setEmail(event);
  }

  function addContact() {
    if (
      key.length > 0 &&
      bank.length > 0 &&
      name.length > 0 &&
      email.length > 0
    ) {
      context.contacts.setContact([
        ...contact,
        { key: key, bank: bank, name: name, email: email },
      ]);
      navigation.navigate("SendMoney");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContact}>
        <View style={styles.formItem}>
          <Text style={styles.formLabel}>No. clave</Text>
          <TextInput
            style={styles.formInput}
            placeholder="18 dígitos"
            onChangeText={addKey}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.formLabel}>Intitución</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Banco de la cuenta"
            onChangeText={addBank}
          />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.formLabel}>Nombre</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Rivaldo Fabio Esteban Gonzalez"
            onChangeText={addName}
          />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.formLabel}>Correó</Text>
          <TextInput
            style={styles.formInput}
            placeholder="pepio@gmail.com"
            onChangeText={addEmal}
            keyboardType="email-address"
          />
        </View>
      </View>
      <View style={{ opacity: buttonStyle }}>
        <Button text="Agregar Contacto" addContact={addContact} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  formContact: {
    flex: 1,
    backgroundColor: "rgba(143, 143, 143, .1)",
  },
  formItem: {
    padding: 16,
  },
  formLabel: {
    fontSize: 14,
    fontWeight: "400",
    color: "black",
    lineHeight: 24,
    marginBottom: 4,
  },
  formInput: {
    borderColor: "rgba(112, 112, 112, 1)",
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
  },
  button: {
    opacity: 0.5,
  },
});
