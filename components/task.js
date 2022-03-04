import React, {useState} from 'react'
import { View, Text, StyleSheet} from "react-native";
import {CheckBox} from "react-native-web";

const Task = (props) => {
    const [isDone, setIsDone] = useState(props.isDone);

    return (
        <View style={styles.taskWrapper}>
            <CheckBox value={isDone} onValueChange={setIsDone}/>
            <Text style={styles.taskText}>{props.text}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    taskWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10
    },
    taskText: {
        fontSize: 12,
        marginStart: 10
    }
});


export default Task;