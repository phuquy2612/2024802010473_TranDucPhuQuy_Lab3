import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Home from '../AdminScreens/Home';
import Register from './RegisterScreens';

export default function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        navigation.navigate('Register');
    };

    const handleLogin = () => {
        navigation.navigate('Home');
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled">
                <View style={styles.header}>
                    <Image
                        resizeMode="contain"
                        style={styles.headerImg}
                        source={require('../assets/pq.png')} />
                    <Text style={styles.title}>
                        Welcome <Text style={{ color: '#FFC0CB' }}>Phu Quy Spa App</Text>
                    </Text>
                </View>

                <View style={styles.form}>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        clearButtonMode="while-editing"
                        keyboardType="email-address"
                        onChangeText={setUsername}
                        placeholder="Email"
                        placeholderTextColor="#6b7280"
                        style={styles.inputControl}
                        value={username} />

                    <TextInput
                        autoCorrect={false}
                        clearButtonMode="while-editing"
                        onChangeText={setPassword}
                        placeholder="Password"
                        placeholderTextColor="#6b7280"
                        style={styles.inputControl}
                        secureTextEntry
                        value={password} />

                    <TouchableOpacity onPress={handleLogin}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Login</Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.formLink}>Forgot Password?</Text>
                </View>
            </KeyboardAwareScrollView>

            <TouchableOpacity onPress={handleRegister} style={styles.registerLink}>
                <Text style={styles.formFooter}>
                    Bạn không có tài khoản ? <Text style={{ textDecorationLine: 'underline' }}>Đăng ký</Text>
                </Text>
            </TouchableOpacity>
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
    headerImg: {
        width: 500,
        height: 100,
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
        marginBottom: 16,
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#FFC0CB',
    },
    btnText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: '#fff',
    },
    formLink: {
        fontSize: 16,
        fontWeight: '600',
        color: '#075eec',
        textAlign: 'center',
        marginTop: 12,
    },
    formFooter: {
        fontSize: 15,
        fontWeight: '600',
        color: '#222',
        textAlign: 'center',
        letterSpacing: 0.15,
    },
    registerLink: {
        alignItems: 'center',
        marginTop: 'auto',
    },
});
