import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { ITodo } from '../types/types';
import List from './List';
import TodoItem from './TodoItem';
import EventsExample from '../components/EventsExample';
import Card, { CardVariant } from './Card';

const TodosPages: FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <List
                items={todos}
                renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
            />
            <EventsExample />
            <Card onClick={(num) => console.log('click', num)} variant={CardVariant.primary} width='200px' height='200px'>
                <button>Click</button>
            </Card>
        </div>
    )
}

export default TodosPages;