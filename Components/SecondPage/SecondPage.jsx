import React, { useState } from "react";
import { Button, Text, Image, StyleSheet, View } from "react-native";




const SecondPage = ({ navigation }) => {
  const [fillX, setFillX] = useState(0);

  const handleView = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const width = event.nativeEvent.contentSize.width - event.nativeEvent.layoutMeasurement.width;
    const fillPercentage = (offsetX / width) * 100;
    setFillX(fillPercentage);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/Jac.png")} />
      <Text style={styles.text1}>
        Ehi, conosci l’articolo 2 dello statuto? Il suo scopo?
      </Text>
      <Text style={styles.text2}>
        Promuovere la realizzazione integrale della persona, accompagnandone e
        sostenendone, attraverso l’acquisizione piena dei criteri per l’azione
        personale, la naturale propensione al compimento di sé, il cui vertice è
        la libertà intesa come piena soddisfazione dei propri desideri.
      </Text>
      <View style={styles.horizontalLine}></View>
      <Text style={styles.text1}>Pronto ad entrare in questo nuovo mondo? </Text>
      <View style={[styles.horizontalLine, { width: `${fillX}%` }]}></View>

      <Button title={"prova"} onPress={() => navigation.navigate("ThirdPage")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#F29100",
    marginBottom: 20,
  },
  horizontalLine: {
    width: "100%",
    height: 1,
    backgroundColor: "grey",
    marginVertical: 20,
  },
  text1: {
    color: "#F29100",
    fontSize: 25,
    marginBottom: 15,
    textAlign: "center",
  },
  text2: {
    color: "grey",
    fontSize: 20,
    marginBottom: 15,
    textAlign: "center",
  },
});

export default SecondPage;
