import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Register({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleRegister = () => {
        if (!isValidEmail(email)) {
            Alert.alert('Invalid Email', 'Please enter a valid email address.');
            return;
        }

        if (password.length < 6) {
            Alert.alert('Invalid Password', 'Password must be at least 6 characters.');
            return;
        }

        if (password !== repassword) {
            Alert.alert('Passwords do not match');
            return;
        }

        setLoading(true);

        // Simulating registration process with timeout
        setTimeout(() => {
            Alert.alert('Registration Successful');
            navigation.navigate('Login');
            setLoading(false);
        }, 2000);
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled">
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Register <Text style={{ color: '#FFC0CB' }}>MySpaApp</Text>
                    </Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Email Address</Text>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            clearButtonMode="while-editing"
                            keyboardType="email-address"
                            onChangeText={setEmail}
                            placeholder="john@example.com"
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            value={email} />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                            autoCorrect={false}
                            clearButtonMode="while-editing"
                            onChangeText={setPassword}
                            placeholder="********"
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            secureTextEntry={true}
                            value={password} />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Confirm Password</Text>
                        <TextInput
                            autoCorrect={false}
                            clearButtonMode="while-editing"
                            onChangeText={setRepassword}
                            placeholder="********"
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            secureTextEntry={true}
                            value={repassword} />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Full Name</Text>
                        <TextInput
                            autoCapitalize="words"
                            autoCorrect={false}
                            clearButtonMode="while-editing"
                            onChangeText={setName}
                            placeholder="John Doe"
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            value={name} />
                    </View>

                    <TouchableOpacity onPress={handleRegister} disabled={loading}>
                        <View style={styles.btn}>
                            {loading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={styles.btnText}>Register</Text>
                            )}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.goBack()} disabled={loading}>
                        <View style={[styles.btn, { backgroundColor: 'blue' }]}>
                            {loading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={styles.btnText}>Go back</Text>
                            )}
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8ecf4',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    header: {
        alignItems: 'center',
        marginBottom: 36,
    },
    title: {
        fontSize: 31,
        fontWeight: '700',
        color: '#FFC0CB',
        textAlign: 'center',
        marginBottom: 24,
    },
    form: {
        marginBottom: 24,
    },
    input: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        marginBottom: 8,
    },
    inputControl: {
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
        borderWidth: 1,
        borderColor: '#C9D3DB',
        borderStyle: 'solid',
    },
    btn: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: '#FFC0CB',
        borderColor: '#075eec',
    },
    btnText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: '#fff',
    },
});
