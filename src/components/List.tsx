import React, { FC } from 'react'

interface ListProps<T> { // t это означает любого типа
    items: T[]; // массив любого типа
    renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) { // здесь мы расписываем интерфейс для отдельного пропса 
    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}
