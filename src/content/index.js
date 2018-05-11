import React from 'react';
import { map , filter } from 'lodash';
// import PropTypes from 'prop-types';
import { TodoItem } from '../todo-item';

export const Content = (props) => {
    const { todos, toggleDone, saveItem , deleteItem,  categoryId } = props;
    const filteredItems = filter(todos, item => item.categoryId === categoryId);
    // console.log(filteredItems.length);
    return (
        <ul className = "todoItems">
            {
                map(filteredItems, item => (
                    <TodoItem item={ item }
                              key={ item.id }
                              toggleDone = { toggleDone }
                              saveItem = { saveItem }
                              deleteItem = { deleteItem }
                    />
                ))
            }
        </ul>
    );
};
