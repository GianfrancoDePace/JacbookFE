import React, { useState } from "react";
import { Image, View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const Register = ({ navigation }) => {
    const [formData, setFormData] = useState({
        nome: "",
        cognome: "",
        dataNascita: "",
        emailP: "",
        emailI: "",
        corso: "",
        password: "",
        confermaPassword: ""
    })

    const handleChange = () => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };  

    const handleRegistration=() => {

    }
  return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.logo} source={require("../../assets/Jac.png")} />
            <View style={styles.nameContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput style={styles.input} placeholder="Nome" />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Cognome</Text>
                    <TextInput style={styles.input} placeholder="Cognome" />
                </View>
            </View>
            <Text style={styles.label}>Data di Nascita</Text>
            <TextInput style={styles.input} placeholder="Data di Nascita" />
            <Text style={styles.label}>Email personale</Text>
            <TextInput style={styles.input} placeholder="Inserisci email" keyboardType="email-address" />
            <Text style={styles.label}>Email dell'istituto</Text>
            <TextInput style={styles.input} placeholder="Inserisci email dell'istituto" keyboardType="email-address" />
            <Text style={styles.label}>Corso d'appartenenza</Text>
            <TextInput style={styles.input} placeholder="Inserisci il tuo corso" />
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="Inserisci password" secureTextEntry />
            <Text style={styles.label}>Conferma Password</Text>
            <TextInput style={styles.input} placeholder="Conferma password" secureTextEntry />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Utente")}>
                <Text style={styles.buttonText}>Registrati</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 100,
        height: 100,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputContainer: {
        flex: 1,
        marginRight: 8,
    },
    label: {
        alignSelf: "flex-start",
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    button: {
        width: "100%",
        backgroundColor: 'orange',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 16,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Register;