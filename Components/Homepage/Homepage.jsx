import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, StyleSheet } from "react-native";

export default function Homepage() {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("SecondPage");
    }, 2000);


    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/Jac.png")} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: "#F29100",
    marginBottom: 20,
  }
});
