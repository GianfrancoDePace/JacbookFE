import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';

const PwDimenticato = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
                <Image source={require('../../../assets/previous.png')} style={styles.backButtonIcon} />
            </TouchableOpacity>

            <Text style={styles.title}>Ops.. Hai dimenticato la password?</Text>
            <Text>Non preoccuparti! Succede. Inserisci la mail associata al tuo account</Text>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Your Email" />

            <Text style={styles.subtitle}>Invia nuovamente il codice tra:</Text>
            <TouchableOpacity style={styles.sendButton}>
                <Text style={styles.sendButtonText}>Invia</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    backButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F29100',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButtonIcon: {
        width: 30,
        height: 30,
    },
    title: {
        fontSize: 20,
        color: '#F29100',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        marginTop: 10,
    },
    input: {
        height: 40,
        borderColor: '#F29100',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        marginTop: 20,
    },
    sendButton: {
        backgroundColor: '#F29100',
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 10,
    },
    sendButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default PwDimenticato;
