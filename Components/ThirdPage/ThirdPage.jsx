import React from "react"
import { Image, Text, StyleSheet, TouchableOpacity, View } from "react-native"


const thirdPage = ({navigation}) => {

    return (
        <View>
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
                <Text style={styles.buttonText}>Sono un ex-Talento</Text>
            </TouchableOpacity>
        </View>
    )
}

export default thirdPage;


const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
        marginBottom: 20,
        resizeMode: "contain",
    },
    text1: {
        color: "#F29100",
        fontSize: 25,
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
        color: "black",
        fontSize: 16,
    }
})