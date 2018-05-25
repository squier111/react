import { createStore } from 'redux';
import {Provider} from 'react-redux'



// const initialState = {
//     count: 0,
//     price: 10,
//     total: 0
// };

// const actions = [];

//  // window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__()
// const store = createStore(function(state = initialState, action ) {

//     switch(action.type) {
//         case 'INCREMENT': {
//             const newCount = state.count + 1;

//             return {
//                 count: newCount,
//                 price: state.price,
//                 total: state.price * newCount
//             }
//         }

//         case 'DECREMENT': {
//             const newCount = state.count - 1;

//             return {
//                 count: newCount > 0 ? newCount : 0,
//                 price: state.price,
//                 total: newCount > 0 ? state.price * newCount : 0
//             }
//         }

//         case 'CALCULATE': {
//             return Object.assign({}, state, {
//                 count: action.payload,
//                 total: state.price * action.payload
//             });
//         }
//     }
//     return state;
// });

// console.log(store.getState());





// const inc = document.querySelector('#inc');
// const dec = document.querySelector('#dec');
// const count = document.querySelector('#count');
// const total = document.querySelector('#total');
// const button = document.querySelectorAll('.calculator-button');


// render(store);

// //const increment = () => store.dispatch({ type: 'INCREMENT' });
// //const decrement = () => store.dispatch({ type: 'DECREMENT' });
// // const calculateAction = (payload) => store.dispatch({
// //     type: 'CALCULATE',
// //     payload
// // });

// // const initCreateAction = function(store) {
// //     return function createAction(typeStr) {
// //         return function(payload) {
// //             return store.dispatch({
// //                 type: typeStrm
// //                 payload: payload
// //             })
// //         }
// //     };
// // };

// const initCreateAction = store => typeStr => payload => store.dispatch({ type: typeStr, payload })


// const createAction = initCreateAction(store);

// const incrementAction = createAction('INCREMENT');
// const decrementAction = createAction('DECREMENT');
// const calculateAction = createAction('CALCULATE');

// inc.addEventListener('click', () => incrementAction());
// dec.addEventListener('click', () => decrementAction());
// count.addEventListener('input', (ev) => {
//     const newCount = parseInt(ev.target.value, 10) || 0;

//     calculateAction(newCount);
// });

// function render(store) {
//     count.value = store.getState().count;
//     total.textContent = store.getState().total;
// }

// store.subscribe(function () {
//     render(store);
// });




// --------------Calculator-------------

const NUMBER_ADD1 = 'NUMBER_ADD1'
const NUMBER_ADD2 = 'NUMBER_ADD2'
const OPERATION = 'OPERATION'
const EQUAL = 'EQUAL'
const RESET = 'RESET'



const input_point = document.querySelector('.calculator');

const numberResultDisplay = input_point.querySelector('.calculator__view');



const createAction = (type)=>(payload)=>{
    return {type, payload}
};

const addNumber1 = createAction(NUMBER_ADD1);
const addNumber2 = createAction(NUMBER_ADD2);
const operation = createAction(OPERATION);
const equal = createAction(EQUAL);
const reset = createAction(RESET);


const initialState = {
  a: null,
  b: null,
  math_operation: null,
  result: 0
};


function reducer(state = initialState, action) {
    input_point.querySelector('.calculator__view').value = 0;
    switch(action.type) {
         case 'NUMBER_ADD1': {
                 input_point.querySelector('.calculator__view').value = action.payload
                 return Object.assign({}, state, {
                a: +action.payload
              });
        }
        case 'NUMBER_ADD2': {
                input_point.querySelector('.calculator__view').value = action.payload
                 return Object.assign({}, state, {
                b: +action.payload
              });
        }
         case 'OPERATION': {
             input_point.querySelector('.calculator__view').value = action.payload
              return Object.assign({}, state, {
                math_operation: action.payload
              });
        }
        case 'EQUAL': {
                switch(state.math_operation) {
                     case '+': {
                            let plus = +state.a + +state.b
                            input_point.querySelector('.calculator__view').value = plus
                          return Object.assign({}, state, {
                            a: plus,
                            b: null,
                            math_operation: null,
                            result: plus
                          });
                           break;
                    }
                     case '-': {
                            let minus = +state.a - +state.b
                            input_point.querySelector('.calculator__view').value = minus
                          return Object.assign({}, state, {
                            a: minus,
                            b: null,
                            math_operation: null,
                            result: minus
                          });
                           break;

                    }
                    case '*': {
                            let multiply = +state.a * +state.b
                             input_point.querySelector('.calculator__view').value = multiply
                          return Object.assign({}, state, {
                            a: multiply,
                            b: null,
                            math_operation: null,
                            result: multiply
                          });
                           break;

                    }
                    case '/': {
                            let divide = +state.a / +state.b
                            input_point.querySelector('.calculator__view').value = divide
                          return Object.assign({}, state, {
                            a: divide,
                            b: null,
                            math_operation: null,
                            result: divide
                          });
                           break;

                    }
                }
        }
        case 'RESET': {
              return Object.assign({}, state, {
                  a: null,
                  b: null,
                  math_operation: null,
                  result: 0
              });
        }
    }

  return state;
}




const store = createStore(reducer);


store.subscribe(() => {
    store.getState();
    console.log(store.getState());
});



var num1 = [];
var num2 = [];


input_point.querySelectorAll('.btn').forEach((value, index)=>{
    value.addEventListener('click', ev=>{
        if (store.getState().a == null || store.getState().math_operation == null) {
            num1.push(ev.target.textContent);
            var str1 = num1.join("");
            store.dispatch(addNumber1(str1));
        } else {
             num2.push(ev.target.textContent);
            var str2 = num2.join("");
            store.dispatch(addNumber2(str2));
        }
    })
});


input_point.querySelectorAll('.operation').forEach((value, index)=>{
    value.addEventListener('click', ev=>{
        if (store.getState().a !== null) {
            store.dispatch(operation(ev.target.textContent));
        }
    })
});

input_point.querySelector('.equal').addEventListener('click', ()=>{
        num1 = [];
        num2 = [];
        store.dispatch(equal());
    })
input_point.querySelector('.reset').addEventListener('click', ()=>{
        num1 = [];
        num2 = [];
        store.dispatch(reset());
    })








