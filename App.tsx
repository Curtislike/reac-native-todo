import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button/Button";
import Input from "./src/components/Input/Input";
import Navbar from "./src/components/Navbar/Navbar";
import Todos from "./src/components/Todos/Todos";
import { ITodo } from "./src/types/todos";
import uniqid from "./src/utils/uniqid";

export default function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todoEditId, setTodoEditId] = useState("");

  const handleAddTodo = () => {
    if (!value) {
      return;
    }
    if (todos.some((todo) => todo.id === todoEditId)) {
      const newTodos = todos.map((todo) =>
        todo.id === todoEditId ? { value: value, id: todo.id } : todo
      );
      setTodos(newTodos);
      setTodoEditId("");
      setValue("");
      return;
    }
    setTodos((prev) => [{ value, id: uniqid() }, ...prev]);
    setValue("");
  };

  const handleRemoveTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleClearAllTasks = () => {
    setTodos([]);
  };

  const handleEditTodo = (id: string) => {
    const [todo] = todos.filter((todo) => todo.id === id);
    setValue(todo.value);
    setTodoEditId(todo.id);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Navbar></Navbar>
        <View style={styles.addContainer}>
          <Input value={value} setInputValue={setValue}></Input>
          <Button handlePressButton={handleAddTodo} title="Add todo"></Button>
        </View>
        <ScrollView>
          <Todos
            handleRemoveTodo={handleRemoveTodo}
            todos={todos}
            handleEditTodo={handleEditTodo}
          ></Todos>
        </ScrollView>
        <View style={styles.clearButton}>
          {!!todos.length && (
            <Button title="Clear all tasks" handlePressButton={handleClearAllTasks} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  addContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    margin: 40,
  },
  clearButton: {
    margin: 30,
  },
});
