import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Simple React App</Text>
    </View>
  );
};

// Header styles updated for dark mode
const styles = StyleSheet.create({
  header: {
    position: 'absolute', // Fix to the top
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1F1B24', // Darker shade for the header
    paddingTop: Platform.OS === 'ios' ? 50 : 20, // Adjust for notch
    paddingBottom: 20, 
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10, 
  },
  title: {
    color: '#BB86FC', // Purple accent text
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
