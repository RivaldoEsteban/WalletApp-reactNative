import React, { useContext, useRef, useState } from "react";
import avatar from "../../../images/avatar.png";
import { Context } from "../../../App";
import * as SecureStore from "expo-secure-store";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

function Login({}) {
  const context = useContext(Context);
  const emailRef = useRef(null);
  const [email, setEmail] = useState("");
  const [pasword, setPasword] = useState("");

  const [value, onChangeValue] = useState({});

  async function handlePage() {
    // await SecureStore.setItemAsync("email", email);
    // await SecureStore.setItemAsync("pasword", pasword);
    context.login.setIsSignedIn(true);
  }

  function handleEmail(event) {
    setEmail(event);
    onChangeValue({ ...value, email });
  }

  function handlePasword(event) {
    setPasword(event);
    onChangeValue({ ...value, pasword });
  }

  return (
    <View style={styles.login}>
      <Image source={avatar} style={styles.loginImage} />
      <Text style={styles.loginTitle}>Iniciar sesión</Text>
      <Text style={styles.loginLabel}>Correo electrónico</Text>
      <TextInput
        placeholder="Ingresa tu correo"
        style={styles.input}
        ref={emailRef}
        onChangeText={handleEmail}
      />
      <Text style={styles.loginLabel}>Contraseña</Text>
      <TextInput
        placeholder="Ingresa tu contraseña"
        style={styles.input}
        onChangeText={handlePasword}
        required
      />
      <TouchableOpacity style={styles.button} onPress={handlePage}>
        <Text style={styles.buttonText}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  login: {
    backgroundColor: "rgba(236, 236, 236, 0.1)",
    height: "100%",
    display: "flex",
    padding: 16,
    justifyContent: "center",
  },
  loginImage: {
    width: 80,
    height: 80,
  },
  loginTitle: {
    fontSize: 28,
    lineHeight: 42,
    fontWeight: "600",
  },
  loginLabel: {
    marginTop: 16,
    marginBottom: 4,
  },
  input: {
    padding: 8,
    borderRadius: 4,
    borderColor: "rgba(112, 112, 112, 1)",
    borderWidth: 1,
    fontSize: 14,
  },
  button: {
    backgroundColor: "rgba(3, 26, 110, 1)",
    padding: 8,
    borderRadius: 8,
    textAlign: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
});
