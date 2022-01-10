import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { AddTodo } from './src/AddTodo';
import {NavBar} from './src/Navbar';
import { ToDo } from './src/ToDo';


export default function App() {

const [todos,setTodos] = useState([]);

// const addTodo = (title) =>{
//   const newTodo = {
//     id:Date.now().toString(),
//     title:title
//   }
// }
const addTodo = (title) =>{
  setTodos(prev => [{
        id:Date.now().toString(),
        title
    },
    ...prev
    ]
  )
  }
  return (
    <View>
      <NavBar title='My first mobile App'/>
      <View  style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <ScrollView>
          {todos.map(todo =>{
            return <ToDo todo={todo} key={todo.id} />
          })}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:30,
    paddingVertical:20
  },
});
