import React, {useState} from 'react'
import {View, Text, StyleSheet, Image} from "react-native";
import {CheckBox} from "react-native-web";
import { AntDesign } from '@expo/vector-icons';

const Task = (props) => {
    const [isDone, setIsDone] = useState(props.isDone);
    const [isDeleted, setDeleted] =  useState(false)


    if (isDeleted) return null;
    return (
        <View style={styles.taskWrapper}>
            <View style={styles.startWrap}>
                <CheckBox value={isDone} onValueChange={setIsDone}/>
                <Text style={styles.taskText}>{props.text}</Text>
            </View>
            <AntDesign
                name="delete"
                size={16}
                color="black"
                onPress={()=>{setDeleted(true)}}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    taskWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    taskText: {
        fontSize: 12,
        marginStart: 10
    },
    startWrap: {
        flex: 1,
        flexDirection: 'row',
    }
});


export default Task;