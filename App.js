import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert } from 'react-native';
import {NavBar} from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import {TodoScreen} from "./src/screens/TodoScreen";



export default function App() {
const [todos,setTodos] = useState([]);
const [todoId,setTodoId] = useState(null);

const updateTodo = (id,title) =>{
    setTodos(old => old.map(todo =>{
        if(todo.id === id){
            todo.title = title
        }
        return todo;
    }) )
}

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
      const todo = todos.find(t => t.id === id);
      Alert.alert(
          "Remove element",
          `${todo.title} will be deleted`,
          [
              {
                  text: "Cancel",
                  style: "cancel",
              },
              {
                  text: "Remove",
                  onPress : () =>{
                      setTodoId(null);
                      setTodos(prev => prev.filter(todo => todo.id !== id))
                  }
              }
          ],
          {
              cancelable: false,

          }
      );

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
     content = <TodoScreen onSave={updateTodo} onRemove={removeTodo} goBack={()=>setTodoId(null)} todo={selectedTodo}/>
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
