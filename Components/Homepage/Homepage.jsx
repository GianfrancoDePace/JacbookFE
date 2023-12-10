import React from "react";
import { View, Image, Button, StyleSheet } from "react-native";

export default function Homepage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/Jac.png")} />
      <Button
        style={styles.button}
        title="Go next"
        onPress={() => navigation.navigate("SecondPage")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 350,
    height: 350,
    borderRadius: 100,
    borderColor: 'orange',
    marginBottom: 50,
  },
  button: {
    width: 250,
    color: 'green',
  },
});
