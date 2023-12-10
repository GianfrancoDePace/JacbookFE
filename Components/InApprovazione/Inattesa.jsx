import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


export default InAttesa = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/Network.png")} />
            <Text style={styles.text1}> In attesa di approvazione</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:50
    },
    text1: {
        alignSelf: "center",
        color: "#F29100",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 50,
    },
})