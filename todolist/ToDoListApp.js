// ToDoListApp.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useStore } from '../todolist/store';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons

const ToDoListApp = () => {
  const { todos, addTodo, deleteTodo, editTodo } = useStore();

  const [newTodo, setNewTodo] = React.useState('');

  const handleAddTodo = () => {
    addTodo({
      id: Math.random().toString(36).substr(2, 9),
      text: newTodo,
    });
    setNewTodo('');
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const handleEditTodo = (id, newText) => {
    editTodo(id, newText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a new ToDo"
        value={newTodo}
        onChangeText={setNewTodo}
      />
      <Button title="Add" onPress={handleAddTodo} icon={<Ionicons name="add" size={24} color="black" />} />
      {todos.map((todo) => (
        <View key={todo.id} style={styles.todoItem}>
          <Text>{todo.text}</Text>
          <View style={styles.buttonsContainer}>
            <Button title="Delete" onPress={() => handleDeleteTodo(todo.id)} icon={<Ionicons name="trash-outline" size={24} color="black" />} />
            <Button title="Edit" onPress={() => handleEditTodo(todo.id, 'New Text')} icon={<Ionicons name="create-outline" size={24} color="black" />} />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ToDoListApp;
