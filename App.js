import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';
import Profile from './components/Profile';
import CustomButton from './components/CustomButton';

function App() {
  const [greeting, setGreeting] = useState('');

  // Toggle greeting message when the button is clicked
  const toggleGreeting = () => {
    setGreeting(prev => (prev ? '' : 'Hello! Welcome to React Native'));
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Profile name="John Doe" />
        <CustomButton onPress={toggleGreeting} />
        {greeting ? <Text style={styles.greeting}>{greeting}</Text> : null}
      </View>
    </View>
  );
}

// Styles for dark mode
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100, // Prevent overlap with the header
  },
  greeting: {
    marginTop: 20,
    fontSize: 16,
    color: '#BB86FC', // Purple accent for contrast
  },
});

export default App;
