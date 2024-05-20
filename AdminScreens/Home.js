import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AddNewServices from './Addnewservices';
import ServiceDetails from './ServiceDetails';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation, route }) => {
    const [services, setServices] = useState([]);
    const [username, setUsername] = useState('John Doe'); // Set a default username

    // Mock data to simulate services
    const mockServices = [
        { id: 1, service: 'Service 1', prices: '$10' },
        { id: 2, service: 'Service 2', prices: '$20' },
        // Add more mock services as needed
    ];

    return (
        <View style={styles.container}>
            {/* Upper View */}
            <View style={styles.upperView}>
                {/* Username */}
                <Text style={styles.username}>{username}</Text>
                {/* Profile icon */}
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <View style={styles.iconContainer}>
                        <Icon name="user" size={25} color="black" />
                    </View>
                </TouchableOpacity>
            </View>

            {/* Content */}
            <View style={styles.contentContainer}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/pq.png')}
                        style={{ width: 200, height: 200 }}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.header}>
                    <Text style={styles.headerText}>DANH SÁCH DỊCH VỤ</Text>
                    <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddNewServices')}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={mockServices}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={styles.input} onPress={() => navigation.navigate('ServiceDetails', { service: item })}>
                            <View style={styles.itemContainer}>
                                <Text>{`${index + 1}. ${item.service}`}</Text>
                                <Text>{item.prices}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => String(item.id)}
                    style={styles.list}
                />
            </View>
        </View>
    );
};

const Home = ({ route }) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                initialParams={route.params}
            />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="AddNewServices" component={AddNewServices} />
            <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperView: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#FFC0CB',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        width: 350,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        padding: 10
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        flex: 1,
        fontSize: 18,
    },
    addButton: {
        backgroundColor: 'pink',
        borderRadius: 50,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    username: {
        marginRight: 'auto',
        marginLeft: 10,
    },
    iconContainer: {
        padding: 5,
    },
});

export default Home;