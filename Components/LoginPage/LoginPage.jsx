import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native';

const LoginPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../../assets/Jac.png")} />
            <Text style={styles.text1}>SMAPP</Text>
            <Text>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Inserisci tua mail"
            />
            <Text>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Inserisci la password"
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.opacity} onPress={() => navigation.navigate("InAttesa")}>
                <Text style={styles.text1}>Accedi</Text>
            </TouchableOpacity>
            <Text style={styles.text2}onPress={()=> navigation.navigate("PwDimenticata")}>Hai dimenticato la password?</Text>
            <View style={styles.horizontalLine}></View>
            <Text style={styles.text2}>Oppure accedi con i seguenti servizi</Text>
            <TouchableOpacity style={styles.opacity2}>
                <Image
                    style={styles.microsoftImage}
                    source={require("../../assets/Microsoft.png")}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    logo: {
        alignSelf: "center",
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "#F29100",
        marginBottom: 20,
    },
    text1: {
        alignSelf: "center",
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
    },
    text2: {
        alignSelf: "center",
        color: "#F29100",
        marginTop: 20,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: "#F29100",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    opacity: {
        backgroundColor: "#F29100",
        alignItems: "center",
        marginTop: 10,  
        paddingVertical: 5,
        borderRadius: 10,
    },
    opacity2: {
        height: 70,  
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "#F29100",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,  
        borderRadius: 10,
    },
    horizontalLine: {
        width: "100%",
        height: 1,
        backgroundColor: "grey",
        marginVertical: 20,
    },
    microsoftImage: {
        resizeMode: "contain",
        width: "100%",
        height: "100%", 
    },
});

export default LoginPage;
