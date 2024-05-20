import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';

const ServiceDetails = ({ route, navigation }) => {
    const { service } = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [isEditMode, setIsEditMode] = useState(true);
    const [updatedServiceName, setUpdatedServiceName] = useState(service.service);
    const [updatedPrices, setUpdatedPrices] = useState(service.prices);
    const [imageUrl, setImageUrl] = useState(service.imageUrl);

    const handleChooseImage = () => {
        ImagePicker.openPicker({}).then(image => {
            const source = { uri: image.path };
            setImageUrl(source.uri);
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setIsEditMode(true);
                    setModalVisible(true);
                }} style={styles.editButton}>
                    <Icon name="pencil" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.containerWrapper}>
                {imageUrl && (
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                )}
                <TouchableOpacity onPress={handleChooseImage} style={styles.chooseImageButton}>
                    <Text style={styles.chooseImageText}>Chọn ảnh</Text>
                </TouchableOpacity>
                <View style={styles.section}>
                    <Text style={styles.label}>Tên dịch vụ:</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            value={updatedServiceName}
                            onChangeText={setUpdatedServiceName}
                            placeholder="Tên dịch vụ"
                            editable={isEditMode}
                        />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>Giá:</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            value={updatedPrices}
                            onChangeText={setUpdatedPrices}
                            placeholder="Giá"
                            keyboardType="numeric"
                            editable={isEditMode}
                        />
                    </View>
                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Text style={styles.modalButton}>Huỷ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        padding: 20,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    backButton: {
        justifyContent: 'center',
    },
    editButton: {
        justifyContent: 'center',
    },
    containerWrapper: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 5,
    },
    input: {
        padding: 10,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
    },
    chooseImageButton: {
        alignItems: 'center',
        marginVertical: 10,
    },
    chooseImageText: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    modalButton: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default ServiceDetails;
