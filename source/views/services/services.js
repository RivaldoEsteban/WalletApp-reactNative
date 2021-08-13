import React, { useContext, useState, useEffect } from "react";
import Context from "../../../context/context";

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
    id: "amount1",
  },
  {
    amount: 30,
    id: "amount2",
  },
  {
    amount: 50,
    id: "amount3",
  },
  {
    amount: 100,
    id: "amount4",
  },
  {
    amount: 200,
    id: "amount5",
  },
  {
    amount: 300,
    id: "amount6",
  },
];

export default function Services({ navigation }) {
  const context = useContext(Context);
  const [amount, setAmount] = useState("");
  const [insertPhoneNumber, setInsertPhoneNumbre] = useState();
  const [buttonActive, setButtonActive] = useState(false);
  console.log(context);
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  const accountHistory = context.history.value;
  const setHistory = context.history.setPaymentHistory;
  function handlePage() {
    if (buttonActive) {
      setHistory([
        ...accountHistory,
        {
          amount: amount,
          concept: "Recarga",
          ref: insertPhoneNumber,
          time: { hour: hour, minutes: minutes },
          id: `id${amount}id${insertPhoneNumber}id`,
        },
      ]);
      context.balance.setBalance(context.balance.value - amount);

      navigation.navigate("SuccessfulReload");
    }
  }
  function handleAmount(amount) {
    setAmount(amount);
  }
  function handlePhoneNumber(phone) {
    if (phone.length > 3) {
      setInsertPhoneNumbre(phone);
    }
  }
  useEffect(() => {
    if (amount && insertPhoneNumber) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [handlePhoneNumber && handleAmount]);
  console.log(buttonActive);
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
            onChangeText={handlePhoneNumber}
          />
        </View>
        <View>
          <Text style={styles.subtitle}>Recarga</Text>
          <View style={styles.amountList}>
            {saldo.map((saldo) => {
              return (
                <TouchableOpacity
                  style={
                    saldo.amount === amount
                      ? styles.active
                      : styles.amountContainer
                  }
                  key={saldo.id}
                  onPress={() => {
                    handleAmount(saldo.amount);
                  }}
                >
                  <Text
                    style={
                      saldo.amount === amount ? styles.activeTxt : styles.amount
                    }
                  >{`$${saldo.amount}`}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View>
          <Text style={styles.subtitle}>Total a pagar :</Text>
          <Text>{amount ? `$${amount}` : ""}</Text>
        </View>
      </View>
      <View
        style={buttonActive ? styles.buttonActive : styles.buttonDeactivated}
      >
        <Botton text="Recargar" changePage={handlePage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  amountList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  amountContainer: {
    borderWidth: 1,
    height: 40,
    width: 100,
    borderColor: "rgba(3, 26, 110, 1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 16,
  },
  active: {
    backgroundColor: "rgba(3, 26, 110, 1)",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 100,
    marginBottom: 16,
  },
  activeTxt: {
    color: "white",
  },
  amount: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    color: "black",
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
  buttonActive: {
    opacity: 1,
  },
  buttonDeactivated: {
    opacity: 0.5,
  },
});
