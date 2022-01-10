import React from 'react';
import {View,Text,StyleSheet} from 'react-native';



export const ToDo = ({todo}) =>(
    <View style={styles.todo}>
        <Text>{todo.title}</Text>
    </View>

)


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