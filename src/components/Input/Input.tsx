import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

interface IInputProps {
  value: string;
  setInputValue: any;
}

const Input = ({ value, setInputValue }: IInputProps) => {
  return (
    <TextInput
      style={styles.input}
      maxLength={60}
      placeholder="Type todo"
      value={value}
      onChangeText={setInputValue}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    marginHorizontal: 10,
  },
});

export default Input;
