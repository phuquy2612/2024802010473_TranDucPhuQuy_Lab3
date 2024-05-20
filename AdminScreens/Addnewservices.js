import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';

const AddNewServices = ({ navigation }) => {
    const [service, setService] = useState('');
    const [prices, setPrices] = useState('');
    const [imageUri, setImageUri] = useState(null);

    const pickImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorMessage) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                const selectedImage = response.assets[0];
                setImageUri(selectedImage.uri);
            }
        });
    };

    const addService = () => {
        if (service.trim() === '' || prices.trim() === '') {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        // Assuming you have a local service data state
        const newService = {
            id: Math.random().toString(),
            service: service.trim(),
            prices: prices.trim(),
            imageUrl: imageUri,
        };

        // Assuming you have a function to add the service to local state
        addServiceToLocalState(newService);

        // Show success message and navigate back to the Home screen
        Alert.alert('Success', 'Service added successfully');
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            {/* Upper Section containing back button */}
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Lower Section containing input fields and buttons */}
            <View style={styles.bottomContainer}>
                <Text style={{ fontWeight: 'bold' }}>Service Name*</Text>
                <TextInput
                    placeholder="Enter service name"
                    onChangeText={setService}
                    value={service}
                    style={styles.input}
                />

                <Text style={{ fontWeight: 'bold' }}>Price*</Text>
                <TextInput
                    placeholder="0"
                    onChangeText={setPrices}
                    value={prices}
                    style={styles.input}
                    keyboardType="number-pad"
                />

                <TouchableOpacity onPress={pickImage} style={styles.button}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Choose Image</Text>
                </TouchableOpacity>

                {imageUri && (
                    <Image source={{ uri: imageUri }} style={styles.imagePreview} />
                )}

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={addService} style={styles.button}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10, // Spacing between TextInput fields
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    topContainer: {
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        backgroundColor: '#FFC0CB',
    },
    bottomContainer: {
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 50,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        height: 45,
        backgroundColor: '#FFC0CB',
        borderColor: '#075eec',
        marginTop: 10,
    },
    buttonsContainer: {
        marginTop: 10,
    },
    backButton: {
        position: 'absolute',
        left: 10,
        top: 10,
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginTop: 10,
        borderRadius: 10,
    },
});

export default AddNewServices;
