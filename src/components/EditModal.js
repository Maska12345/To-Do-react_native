import React from 'react';
import {View,StyleSheet,Text,TextInput,Button,Modal} from 'react-native';
import {THEME} from "../theme";

export const EditModal = ({visible,onCancel}) => {
    return (
        <Modal visible={visible} animationType='slide' transparent={false}>
            <View style={styles.wrap}>
                <TextInput
                    style={styles.input}
                    placeholder='Change your task'
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <Button title={'Back'} onPress={onCancel} color={THEME.DANGER_COLOR}/>
                    <Button title={'Save'} />
                </View>

            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    wrap:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        padding:10,
        borderBottomColor:THEME.MAIN_COLOR,
        borderBottomWidth:2,
        width:'80%'
    },
    buttons:{
        width: '100%',
        flexDirection:'row',
        marginTop:10,
        justifyContent: 'space-around'
    }
})

