import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';



export const ToDo = ({todo,onRemove}) =>{
    
    const longPressHandler = () =>{
        onRemove(todo.id)
    }
    return(
    <TouchableOpacity
     onPress={()=>console.log('tuched',todo.id)}
     onLongPress={longPressHandler}
     >
         <View style={styles.todo}>
            <Text>{todo.title}</Text>
        </View>
    </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    todo:{
        flexDirection:'row',
        alignItems:'center',
        padding:15,
        borderWidth:1,
        borderRadius:5,
        color:'green',
        marginBottom:10
    }
})