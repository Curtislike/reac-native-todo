import React from "react";
import { View } from "react-native";
import Todo from "./Todo/Todo";
import uniqid from "../../utils/uniqid";
import { ITodo } from "../../types/todos";

interface ITodosProps {
  todos: ITodo[];
  handleRemoveTodo: any;
  handleEditTodo: any;
}

const Todos = ({ todos, handleRemoveTodo, handleEditTodo }: ITodosProps) => {
  return (
    <View>
      {todos.map((item) => (
        <Todo
          handleEditTodo={handleEditTodo}
          handleRemoveTodo={handleRemoveTodo}
          id={item.id}
          key={uniqid()}
          text={item.value}
        ></Todo>
      ))}
    </View>
  );
};

export default Todos;
