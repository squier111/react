import { connect } from 'react-redux';
import { toggleDone , saveTodo , todoDel } from '../actions';

const mapStateToProps = (state) => {
    return {
        todos: state.todos.items,
        // categoryId: state.categories.selectedCategory
    };
};
const mapDispatchToProps = {
    toggleDone,
    saveTodo,
    todoDel
};

export const contentConnector = connect(mapStateToProps, mapDispatchToProps);