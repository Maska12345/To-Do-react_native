import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {NavBar} from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import {TodoScreen} from "./src/screens/TodoScreen";



export default function App() {
const [todos,setTodos] = useState([]);
const [todoId,setTodoId] = useState(null);

const addTodo = (title) =>{
  setTodos(prev => [{
        id:Date.now().toString(),
        title
    },
    ...prev
    ]
  )
  }
  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  )

  if(todoId){
     const selectedTodo = todos.find(todo => todo.id === todoId);
     content = <TodoScreen goBack={()=>setTodoId(null)} todo={selectedTodo}/>
  }
  
  return (
    <View>
      <NavBar title='My first mobile App'/>
      <View  style={styles.container}>
       {content}
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
