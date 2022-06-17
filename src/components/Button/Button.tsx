import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface IButtonProps {
  handlePressButton: any;
  title: string;
}

const Button = ({ handlePressButton, title }: IButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePressButton}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6a5da0",
    borderRadius: 3,
  },
  buttonText: {
    padding: 10,
    color: "#ffff",
  },
});

export default Button;
