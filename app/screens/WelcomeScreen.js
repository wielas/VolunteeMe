import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Platform,
} from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import LoginScreen from "./LoginScreen";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={Platform.OS === "android" ? 0.5 : 7}
      style={styles.background}
      source={require("../assets/volunteer.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Help And Be Helped</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
