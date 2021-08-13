import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Context from "../../../context/context";
import logo from "../../../images/logo.png";
function Home({ navigation }) {
  const context = useContext(Context);
  const balance = context.balance.value;
  function handleDeposit() {
    navigation.navigate("Depositar");
  }
  function handleSendMoney() {
    navigation.navigate("SendMoney");
  }
  function handlePage() {
    navigation.navigate("Services");
  }
  console.log("hola".padStart(2, "00"));
  const accountStatus = context.history.value.reverse();
  return (
    <View style={styles.home}>
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
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  home: {
    height: "100%",
  },
  homeHeader: {
    backgroundColor: "rgba(3, 26, 110, 1)",
    paddingHorizontal: 16,
    paddingTop: 60,
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
  avatar: {
    height: 32,
    width: 32,
  },
  avatarContainer: {
    backgroundColor: "#ffffff",
    padding: 6,
    borderRadius: 50,
  },

  buttonsContainer: {
    borderTopWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    // borderColor: "#00008b",
    // borderWidth: 1,
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
    // height: 40,
  },
  deposit: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

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
