import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2024 My App - All Rights Reserved</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333', // Footer background color
    paddingVertical: 10, // Padding at the top and bottom
    alignItems: 'center', // Center content horizontally
  },
  text: {
    color: 'white', // Text color
    fontSize: 14, // Text font size
  },
});

export default Footer;
