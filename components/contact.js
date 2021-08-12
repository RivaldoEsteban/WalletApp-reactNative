import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
export default function Contact({ contact }) {
  return (
    <View style={styles.contact}>
      <View style={styles.avatar}>
        <Text styles={styles.avatarName}>{contact.name.charAt(0)}</Text>
      </View>
      <View>
        <Text style={styles.contactName}>{contact.name}</Text>
        <Text
          style={styles.contactAccountNumber}
        >{`${contact.key} / ${contact.bank}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contact: {
    backgroundColor: "white",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    padding: 10,
    paddingHorizontal: 16,
    borderRadius: 50,
    backgroundColor: "rgba(3, 26, 110, 0.1)",
    marginRight: 16,
  },
  avatarName: {
    fontSize: 14,
    fontWeight: "400",
    color: "rgba(3, 26, 110, 1)",
  },
  contactName: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 24,
    color: "black",
  },
  contactAccountNumber: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 22,
    color: "rgba(143, 143, 143, 1)",
  },
});
