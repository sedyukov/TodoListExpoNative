import React, {useCallback, useEffect, useState} from 'react'
import {View, Text, StyleSheet, ScrollView, Button, TextInput} from "react-native";
import Task from "./task";

const TaskList = () => {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')


    const fetchTodos = useCallback(async() => {
        await fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
            .then(response => response.json())
            .then(json => setTodos(json))
    },[])

    const addTodo = () => {
        if (!text) return;
        setTodos([...todos,{"userId": 1,
            "id": Date.now(),
            "title": text,
            "completed": false}])
        setText('')
    }


    // useEffect(() => {
    //     addTodo()
    //     addTodo()
    // }, [])

    return (
        <View style={styles.styleView}>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    paddingLeft: 10
                }}
                placeholder='Type new task'
                onChange={event => {
                    setText(event.target.value);
                }}
                value = {text}
            />
            <ScrollView style={styles.taskList}>
                {
                    todos.map((todo) => {
                        return (<Task style={styles.styleTask} text={todo.title} isDone={todo.completed} key={todo.id}/>)
                    })
                }
            </ScrollView>
            <Button
                style={styles.styleButton}
                title = "Add task"
                onPress={addTodo}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    taskList: {
        maxHeight: 100,
        minHeight: 100,
        marginBottom: 20
    },
    styleView: {
        marginTop: 20
    },
    styleButton: {
        color: 'black'
    }

})

export default TaskList;