import React, {useCallback, useEffect, useState} from 'react'
import { View, Text, StyleSheet} from "react-native";
import Task from "./task";

const TaskList = () => {
    const [todos, setTodos] = useState([])


    const fetchTodos = useCallback(async() => {
        await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    },[])

    useEffect(() => {
        fetchTodos()
    }, [fetchTodos()])

    return (
        <View>
            {
                todos.map((todo) => {
                    return (<Task text={todo.id} key={todo.id}/>)
                })
            }
        </View>
    )
}


export default TaskList;