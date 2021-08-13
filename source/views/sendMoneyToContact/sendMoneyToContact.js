import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Context from "../../../context/context";
import Contact from "../../../components/contact";
import Button from "../../../components/button";

export default function SendMoneyToContact({ navigation }) {
  const [active, setActive] = useState(false);
  const [amount, setAmount] = useState("0.00");
  const [concept, setConcept] = useState("");
  const [ref, setRef] = useState("");
  const context = useContext(Context);
  const currentBalance = context.balance.value;
  const setBalance = context.balance.setBalance;
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  const dataContact = context.contact.value;
  function handleCurrentAmount(event) {
    setAmount(event);
  }
  function handlePaymentConcept(event) {
    setConcept(event);
  }
  function handlePaymentRef(event) {
    setRef(event);
  }

  useEffect(() => {
    if (amount.length > 0 && concept.length > 2 && ref.length < 8) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [handleCurrentAmount, handlePaymentConcept, handlePaymentRef]);

  function handleSendMoney() {
    if (active) {
      setBalance(Number(currentBalance) - Number(amount));
      context.history.setPaymentHistory([
        ...context.history.value,
        {
          time: { hour: hour, minutes: minutes },
          amount: amount,
          concept: concept,
          ref: ref,
          id: `id${amount}id${ref}id`,
        },
      ]);
      navigation.navigate("Successful");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerData}>
        <View style={styles.infoConctact}>
          <Text style={styles.subtitle}>Cuenta</Text>
          <View>
            <Contact contact={dataContact} />
          </View>
        </View>
        <View>
          <Text style={styles.subtitle}>Cantidad :</Text>
          <View style={styles.amountContainer}>
            <TextInput
              style={styles.amount}
              placeholder="0.00"
              keyboardType="number-pad"
              onChangeText={handleCurrentAmount}
            />
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.concept}>
            <Text style={styles.txt}>Concepto de pago :</Text>
            <TextInput
              style={styles.input}
              placeholder="Máximo 40 caracters"
              onChangeText={handlePaymentConcept}
            />
          </View>
          <View style={styles.concept}>
            <Text style={styles.txt}>Número de referencia</Text>
            <TextInput
              style={styles.input}
              placeholder="Máximo 7 dígitos"
              keyboardType="number-pad"
              onChangeText={handlePaymentRef}
            />
          </View>
        </View>
      </View>
      <View style={active ? styles.buttonActive : styles.buttonDisabled}>
        <Button text="Enviar dinero" changePage={handleSendMoney} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonActive: {
    opacity: 1,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  container: {
    height: "100%",
    backgroundColor: "rgba(143, 143, 143, .1)",
    borderWidth: 1,
  },
  containerData: {
    flex: 1,
  },
  subtitle: {
    marginHorizontal: 16,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    marginVertical: 8,
    color: "rgba(143, 143, 143, 1)",
  },
  amountContainer: {
    backgroundColor: "white",
    padding: 16,
  },
  amount: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 28,
    lineHeight: 33,
    fontWeight: "700",
    textAlign: "center",
  },
  info: {
    padding: 16,
  },
  concept: {
    marginBottom: 16,
  },
  txt: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "400",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    paddingHorizontal: 16,
    fontSize: 14,
    lineHeight: 24,
    borderColor: "rgba(112, 112, 112, 1)",
    fontWeight: "400",
    color: "black",
  },
});
