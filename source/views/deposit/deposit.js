import React from "react";
import logo from "../../../images/spe.png";
import { StyleSheet, Text, View, Image } from "react-native";

function Deposit() {
  return (
    <View style={styles.containerPage}>
      <View style={styles.containerKey}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.txt1}>Tranferencia</Text>
        <Text style={styles.txt2}>No.de cuenta CLABE</Text>
        <Text style={styles.txt3}>646199146004637642</Text>
      </View>
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsTitle}>Instrucciones</Text>
        <View style={styles.instructions}>
          <View style={styles.instructionsItem}>
            <Text style={styles.instructionsNumber}>1.</Text>
            <Text style={styles.instructionsTxt}>
              Realiza una tranferencia a Cuenta CLABE, desde la aplicación o
              portal de otro banco.
            </Text>
          </View>
          <View style={styles.instructionsItem}>
            <Text style={styles.instructionsNumber}>2.</Text>
            <Text style={styles.instructionsTxt}>
              Selecciona STP(Sistema de Transferencias y Pagos) como banco de
              destino.
            </Text>
          </View>
          <View style={styles.instructionsItem}>
            <Text style={styles.instructionsNumber}>3.</Text>
            <Text style={styles.instructionsTxt}>
              Ingresa el número de titula de la cuenta, el monto de
              transferencia y confirma.
            </Text>
          </View>
          <View style={styles.instructionsItem}>
            <Text style={styles.instructionsNumber}>4.</Text>
            <Text style={styles.instructionsTxt}>
              El depósito se vera reflejado en cuestión de minutos.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Deposit;

const styles = StyleSheet.create({
  containerPage: {
    height: "100%",
  },
  containerKey: {
    backgroundColor: "white",
    padding: 16,
  },
  logo: {
    aspectRatio: 3.5,
  },
  txt1: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 4,
  },
  txt2: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 22,
  },
  txt3: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 26,
  },
  instructionsContainer: {
    backgroundColor: "rgba(143, 143, 143, .1)",
    flex: 1,
  },
  instructionsTitle: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,
    color: "rgba(143, 143, 143, 1)",
  },
  instructions: {
    backgroundColor: "white",
    padding: 16,
  },
  instructionsItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  instructionsNumber: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 32,
    color: "black",
    marginRight: 4,
  },
  instructionsTxt: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 32,
    color: "black",
  },
});
