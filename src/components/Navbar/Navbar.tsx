import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Todo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    height: 70,
    backgroundColor: '#3b345a',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 38,
  },
  text: {
    color: '#ffffff',
    fontSize: 30,
  },
});

export default Navbar;
