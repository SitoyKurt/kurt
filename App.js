// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoListApp from './todolist/ToDoListApp';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ToDoListApp />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
