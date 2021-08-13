import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Context from "../../../context/context";

export default function Main() {
  const context = useContext(Context);
  const accountStatus = context.history.value.reverse();
  return (
    <ScrollView style={styles.operationsContainer}>
      {accountStatus.map((item) => {
        return (
          <View style={styles.item} key={`${item.id}id`}>
            <View style={styles.itemDescription}>
              <View style={styles.itemImage}>
                <Image
                  style={styles.icon}
                  source={require("../../../icons/dinner.png")}
                />
              </View>
              <View>
                <Text style={styles.itemName}>{item.concept}</Text>
                <Text style={styles.itemHour}>
                  {parseFloat(item.time.hour) > 11
                    ? `${item.time.hour}:${item.time.minutes} pm`
                    : `${item.time.hour}:${item.time.minutes} am`}
                </Text>
              </View>
            </View>
            <Text style={styles.itemPrice}>
              -${parseFloat(item.amount).toFixed(2)}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  operationsContainer: {
    overflow: "scroll",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    borderBottomColor: "#cfcccce3",
    borderBottomWidth: 1,
  },
  itemImage: {
    justifyContent: "center",
    padding: 12,
    backgroundColor: "rgba(3, 26, 110, 0.1)",
    borderRadius: 8,
    marginRight: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  itemDescription: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemName: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 24,
    color: "rgba(43, 43, 43, 1)",
  },
  itemHour: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 22,
    color: "rgba(143, 143, 143, 1)",
  },
  itemPrice: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 22,
    color: "red",
  },
});
