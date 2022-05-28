import React from 'react'
import {View,StyleSheet,FlatList,Image} from 'react-native'
import {AddTodo} from '../components/AddTodo'
import {ToDo} from '../components/ToDo'




export const MainScreen=({todos,addTodo,removeTodo,openTodo})=>{
    let content =  <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({item}) => <ToDo todo={item} onRemove={removeTodo} onOpen={openTodo}/>}
    />

    if(todos.length === 0){
        content = <View style={styles.imgWrap}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/no-items.png')}
                    />
                  </View>
    }
    return(
        <View>
             <AddTodo onSubmit={addTodo} />
            {content}

        </View>
    )

}

const styles = StyleSheet.create({
    imgWrap:{
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        height:300
    },
    image:{
        height:'100%',
        width:'100%',
        resizeMode:'contain'
    }
})