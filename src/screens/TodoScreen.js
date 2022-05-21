import React from 'react'
import {View,StyleSheet,Button,Text} from 'react-native'
import { THEME } from "../theme";
import {AppCard} from "../components/ui/AppCard";


export const TodoScreen=({goBack,todo})=>{
    return(
        <View>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='Edit'></Button>
            </AppCard>
            <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button title={'Back'} color={THEME.GRAY_COLOR} onPress={goBack} />
                    </View>

                    <View style={styles.button}>
                        <Button title={'Remove'} color={THEME.DANGER_COLOR} onPress={()=> console.log('remove')} />
                    </View>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    buttons: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    card:{
        marginBottom:20,
        padding:15
    },
    button:{
        width:'40%'
    },
    title:{
        fontSize:20
    }
})