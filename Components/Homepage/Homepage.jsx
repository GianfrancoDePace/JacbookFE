import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Homepage({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("SecondPage")}>
        <Image style={styles.logo} source={require("../../assets/Jac.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#fff"
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: "#F29100",
    marginBottom: 20,
  }
});
