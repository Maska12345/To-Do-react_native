import React,{useState} from 'react';
import {View,StyleSheet,Text,TextInput,Button,Modal,Alert} from 'react-native';
import {THEME} from "../theme";

export const EditModal = ({visible,onCancel,value,onSave}) => {

    const [title,setTitle] = useState(value);

    const saveHandler = () =>{
        if(title.trim().length < 3){
            Alert.alert('Error',`Changed task is small`);
        }else{
            onSave(title);
        }
    }

    return (
        <Modal visible={visible} animationType='slide' transparent={false}>
            <View style={styles.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder='Change your task'
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <Button title={'Back'} onPress={onCancel} color={THEME.DANGER_COLOR}/>
                    <Button title={'Save'} onPress={saveHandler} />
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

