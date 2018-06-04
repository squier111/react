import React, {Component, Fragment} from 'react';
import { Content } from '../content';
import { map, filter} from 'lodash';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import { Sidebar } from '../sidebar';
import { Header } from '../header';
import { contentConnector } from '../content/connector';
import classnames from 'classnames';

// import PropTypes from 'prop-types';

const MyContent = contentConnector(Content);

const todos = {
    1: {id: 1, text: 'Выучить реакт', info: 'Подробное описание', done: true,  categoryId: 1},
    2: {id: 2, text: 'Выучить реакт-роутер', info: 'Подробное описание', done: false,  categoryId: 2},
    3: {id: 3, text: 'Выучить редакс', info: 'Подробное описание', done: false ,  categoryId: 3},
    4: {id: 4, text: 'task 1', done: false, categoryId: 4},
    8: {id: 8, text: 'task 5', done: false, categoryId: 4},
    5: {id: 5, text: 'task 2', done: false, categoryId: 5},
    6: {id: 6, text: 'task 3', done: false, categoryId: 6},
    7: {id: 7, text: 'task 4', done: false, categoryId: 7},
};

const categories = {
    1: {id: 1, name: 'React', parentId: null},
    2: {id: 2, name: 'React-router', parentId: null},
    3: {id: 3, name: 'Выучить редакс', parentId: null},
    4: {id: 4, name: 'Блабла 1', parentId: 1},
    5: {id: 5, name: 'Блабла 1', parentId: 2},
    6: {id: 6, name: 'Блабла 2', parentId: 2},
    7: {id: 7, name: 'Блабла 1', parentId: 3}
};

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            todos,
            categories,
            selectedCat: 1
        };
        // this.toggleDone = this.toggleDone.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.selectCat = this.selectCat.bind(this);
        this.getContent = this.getContent.bind(this);
    }

    // toggleDone(id) {
    //     const updatedItem = Object.assign(
    //         {}, this.state.todos[id], {done: !this.state.todos[id].done}
    //     );

    //     this.setState({
    //         todos: Object.assign({}, this.state.todos, { [id]: updatedItem })
    //     });
    //     return updatedItem.done;
    // }

     selectCat(id) {
        this.setState({
            selectedCat: id
        });
    }

    deleteItem(id) {
        const todosId = id;
        delete this.state.todos[id];
        this.setState({todos: this.state.todos});
    }

    saveItem(id, text , info) {
        const updatedItem = Object.assign(
            {}, this.state.todos[id], { text , info }
        );

        this.setState({
            todos: Object.assign({}, this.state.todos, { [id]: updatedItem })
        });
    }

    createListNumber(str, numberSeporator){

        str = str.split(numberSeporator);
        if(str.length === 0) return;
        str[str.length-1] =+ str[str.length - 1] + 1;
        return str.join('.');
    }

     getContent() {
        return  <Content todos={ this.state.todos }
                             toggleDone={ this.toggleDone }
                             saveItem={ this.saveItem }
                            deleteItem={ this.deleteItem }
                            categoryId={ this.state.selectedCat }
                    />
    }

    getNum() {
    	const dd = this.state.selectedCat
    	const filtered = filter(todos, item => item.dd ===  this.state.selectedCat);
   		return filtered.length;
    }



    render() {
         const params = {
            todos: this.state.todos,
            toggleDone: this.toggleDone,
            saveItem: this.saveItem,
            deleteItem:  this.deleteItem,
            categoryId: this.state.selectedCat,
            Content: this.getContent
        };


        return (
            <Fragment>
                <div className="wr">
                    <Header todos={ this.state.todos }/>
                    <Sidebar categories={ this.state.categories }
                             parentId={ null }
                             getNum = {this.getNum}
                             createListNumber = {this.createListNumber}
                             todos={ this.state.todos }
                             selectCat={ this.selectCat }/>
                  {/*  <Main { ...params }/>*/}
                    <MyContent { ...params }/>
                  {/* <Content { ...params }/ >*/}
                </div>
            </Fragment>
        );
    }
}


// function Main(props) {
//     return (
//         <Switch>
//         	<Route path="/" exact component={ props.Content }/>
//             <Route path={`/items/${props.categoryId}/`} exact component={ props.Content }/>
//         </Switch>
//     );
// }









export default TodoApp;














