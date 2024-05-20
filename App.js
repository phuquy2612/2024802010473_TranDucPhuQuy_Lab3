import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native'; // Import StyleSheet
import Login from './Screens/LoginScreens'; // Import the Login component

const App = () => {
  return (
    <NavigationContainer>
      <Login /> {/* Render the Login component directly */}
    </NavigationContainer>
  );
};

// Define styles using StyleSheet.create inside the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
