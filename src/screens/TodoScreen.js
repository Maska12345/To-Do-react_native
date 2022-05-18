import React from 'react'
import {View,StyleSheet,Button,Text} from 'react-native'




export const TodoScreen=({goBack,todo})=>{
    return(
        <View>
            <Text>{todo.title}</Text>
            <Button title={'Back'} onPress={goBack} />
        </View>
    )

}

const styles = StyleSheet.create({
    
})