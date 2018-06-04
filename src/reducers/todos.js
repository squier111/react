import * as constants from '../actions/constants';

const initialState = {
    items: {
        1: {id: 1, text: 'Выучить реакт', info: 'Подробное описание', done: true,  categoryId: 1},
        2: {id: 2, text: 'Выучить реакт-роутер', info: 'Подробное описание', done: false,  categoryId: 2},
        3: {id: 3, text: 'Выучить редакс', info: 'Подробное описание', done: false ,  categoryId: 3},
        4: {id: 4, text: 'task 1', done: false, categoryId: 4},
        8: {id: 8, text: 'task 5', done: false, categoryId: 4},
        5: {id: 5, text: 'task 2', done: false, categoryId: 5},
        6: {id: 6, text: 'task 3', done: false, categoryId: 6},
        7: {id: 7, text: 'task 4', done: false, categoryId: 7},
        }
    };

export const todos = function (state = initialState, action) {
    const { type, payload } = action;
        console.log(type);

    switch (type) {
        case constants.TODO_DONE_TOGGLE: {
        	console.log("sadsa");
            const id = payload;

            const modifiedItem = getUpdatedListItem(state.items, id, {
                done: !state.items[id].done
            });

            const modifiedItemList = Object.assign({}, state.items, {
                [id]: modifiedItem
            });

            return Object.assign({}, state, {
                items: modifiedItemList
            });
        }

        case constants.TODO_SAVE: {
        	console.log("save todo?");
            const { id, text  } = payload;
            const modifiedItem = getUpdatedListItem(state.items, id, {
                text
            });
            const modifiedItemList = Object.assign({}, state.items, {
                [id]: modifiedItem
            });

            return Object.assign({}, state, {
                items: modifiedItemList
            });
        }
        case constants.TODO_DEL: {
        	console.log("sadsfdsdsfa");
        }

    }

    return state;
};

const getUpdatedListItem = (list, id, updatedItem) => Object.assign({}, list[id], updatedItem);