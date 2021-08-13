import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./header";
import Main from "./main";
import Footer from "./footer";

function Home({ navigation }) {
  return (
    <View style={styles.home}>
      <Header navigation={navigation} />
      <Main />
      <Footer navigation={navigation} />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  home: {
    height: "100%",
  },
});
