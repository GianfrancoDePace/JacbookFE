import React, { useEffect, useCallback } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Homepage() {
  const navigation = useNavigation();

  const startTimeout = () => {
    return setTimeout(() => {
      navigation.navigate("SecondPage");
    }, 1000);
  };

  useEffect(() => {
    const timeout = startTimeout();
    return () => clearTimeout(timeout);
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      const timeout = startTimeout();
      return () => clearTimeout(timeout);
    }, [navigation])
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("SecondPage")}>
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
