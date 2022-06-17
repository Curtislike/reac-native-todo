import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Swipeout from "react-native-swipeout";

interface ITodoProps {
  text: string;
  id: string;
  handleRemoveTodo: any;
  handleEditTodo: any;
}

const Todo = ({ text, handleRemoveTodo, id, handleEditTodo }: ITodoProps) => {
  return (
    <Swipeout>
      <View style={styles.container}>
        <BouncyCheckbox
          style={styles.checkbox}
          size={20}
          text={text}
          fillColor="#6a5da0"
          unfillColor="#f5f5f5"
          iconStyle={{ borderColor: "#6a5da0" }}
          textStyle={{ padding: 3, maxWidth: 170 }}
          onPress={(isChecked: boolean) => {}}
        />
        <View style={styles.images}>
          <TouchableOpacity onPress={() => handleEditTodo(id)}>
            <Image style={styles.img} source={require("../../../assets/pencil.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRemoveTodo(id)}>
            <Image style={styles.img} source={require("../../../assets/bin.png")}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </Swipeout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 330,
    margin: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    padding: 15,
    fontSize: 16,
    lineHeight: 22,
    maxWidth: 180,
  },
  images: {
    flexDirection: "row",
    margin: 10,
  },
  img: {
    width: 20,
    height: 20,
    margin: 10,
  },
  checkbox: {
    margin: 15,
  },
});

export default Todo;
