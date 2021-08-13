import React, { useContext, useState, useEffect } from "react";
import avatar from "../../../images/avatar.png";
import Context from "../../../context/context";
// import * as SecureStore from "expo-secure-store";
import imageBackground from "../../../images/bg.png";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

function Login({}) {
  const context = useContext(Context);
  const [buttonActive, setButtonActive] = useState(false);
  const [email, setEmail] = useState("");
  const [pasword, setPasword] = useState("");

  const [value, onChangeValue] = useState({});

  async function handlePage() {
    // await SecureStore.setItemAsync("email", email);
    // await SecureStore.setItemAsync("pasword", pasword);
    if (buttonActive) {
      context.login.setIsSignedIn(true);
    }
  }

  function handleEmail(event) {
    setEmail(event);
    onChangeValue({ ...value, email });
  }

  function handlePasword(event) {
    setPasword(event);
    onChangeValue({ ...value, pasword });
  }

  useEffect(() => {
    if (pasword.length > 4 && email.length > 4) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [handleEmail, handlePasword]);

  return (
    <ImageBackground source={imageBackground} style={styles.login}>
      <View>
        <Image source={avatar} style={styles.loginImage} />
        <Text style={styles.loginTitle}>Iniciar sesión</Text>
        <Text style={styles.loginLabel}>Correo electrónico</Text>
        <TextInput
          placeholder="Ingresa tu correo"
          style={styles.input}
          onChangeText={handleEmail}
        />
        <Text style={styles.loginLabel}>Contraseña</Text>
        <TextInput
          placeholder="Ingresa tu contraseña"
          style={styles.input}
          onChangeText={handlePasword}
          required
        />
        <View
          style={buttonActive ? styles.buttonActive : styles.buttonDisabled}
        >
          <TouchableOpacity style={styles.button} onPress={handlePage}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

export default Login;

const styles = StyleSheet.create({
  login: {
    // backgroundColor: "rgba(236, 236, 236, 0.1)",
    // height: "100%",
    display: "flex",
    padding: 16,
    justifyContent: "center",
    flex: 1,
  },
  loginImage: {
    width: 80,
    height: 80,
  },
  loginTitle: {
    fontSize: 28,
    lineHeight: 42,
    fontWeight: "600",
    color: "white",
  },
  loginLabel: {
    marginTop: 16,
    marginBottom: 4,
    color: "white",
  },
  input: {
    padding: 8,
    borderRadius: 4,
    borderColor: "rgba(112, 112, 112, 1)",
    borderWidth: 1,
    fontSize: 14,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "rgba(3, 26, 110, 1)",
    padding: 12,
    borderRadius: 8,
    textAlign: "center",
    marginTop: 24,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
  buttonActive: {
    opacity: 1,
  },
  buttonDisabled: {
    opacity: 1,
  },
});
