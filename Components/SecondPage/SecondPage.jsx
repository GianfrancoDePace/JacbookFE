import React from "react";
import { Text, Image, StyleSheet, ScrollView, View, TouchableOpacity } from "react-native";

const SecondPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
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
                <Image style={styles.image} source={require("../../assets/Network.png")} />
                <Text style={styles.text1}>Noi non vediamo l'ora </Text>
                <TouchableOpacity
                    style={styles.opacity}
                    onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.buttonText}>Sono un Talento</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.opacity2}
                    onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.buttonText}>Sono un ex-talento</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContainer: {
        justifyContent: "flex-start",
        alignItems: "center",
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
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
        marginBottom: 20,
        resizeMode: "contain",
    },
    horizontalLine: {
        width: "100%",
        height: 1,
        backgroundColor: "orange",
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
    opacity: {
        width: "100%",
        backgroundColor: "#F29100",
        alignItems: "center",
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
    },
    opacity2: {
        width: "100%",
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "grey",
        alignItems: "center",
        padding: 15,
        marginTop: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
});

export default SecondPage;
