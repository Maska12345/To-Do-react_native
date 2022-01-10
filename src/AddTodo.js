import React,{useState} from "react"
import {View,StyleSheet,TextInput,Button,Alert} from 'react-native'


export const AddTodo = (props) =>{

const [value,setValue] = useState('')



const PressHandler = () =>{
    if(value.trim()){
        props.onSubmit(value)
        setValue('')
    }else{
        Alert.alert('Field is empty! Try again...')
    }
    
}

    return(
        <View style={styles.block}>
            <TextInput 
            style={styles.input}
            onChangeText={setValue} 
            value={value}
            placeholder="Add new task"
            />
            <Button style={styles.but} title="add" onPress={PressHandler}/> 
        </View>
    )
}


const styles = StyleSheet.create({
    block:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-around',
        marginBottom:15
        
    },
    input:{
        width:'70%',
        borderBottomColor:'green',
        borderStyle:'solid',
        borderBottomWidth:2,
        padding:5
    }
  
})