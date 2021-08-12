import React, { useContext } from "react";
import { Context } from "../../../App";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Contact from "../../../components/contact";

export default function SendMoney({ navigation }) {
  const context = useContext(Context);
  const newContacts = context.contacts.value;

  function handlePageChange() {
    navigation.navigate("AddContact");
  }

  function sendMoneyToContact(contact) {
    context.contact.setCurrentContact(contact);
    navigation.navigate("SendMoneyToContact");
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contactContainer}>
        {newContacts.map((contact) => {
          return (
            <TouchableOpacity
              key={contact.name}
              onPress={() => {
                sendMoneyToContact(contact);
              }}
            >
              <Contact contact={contact} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={styles.addContactContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePageChange}>
          <Text style={styles.buttonTxt}>Agregar un nuevo contacto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "rgba(143, 143, 143, .1)",
  },
  contactContainer: {
    flex: 1,
  },
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
