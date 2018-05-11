import React, {Component, PureComponent, Fragment} from 'react';
// import PropTypes from 'prop-types';

export class TodoItem extends PureComponent {
    constructor() {
        super();
        this.state = {
            editMode: false

        };
        this.toggleMode = this.toggleMode.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

    }

    toggleMode() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

     deleteItem() {
        const { id } = this.props.item;
        this.props.deleteItem(id);
    }

    render() {
        const { editMode } = this.state;
        const { toggleMode } = this;

        return (
            <li>
                {
                    editMode
                        ? <EditItem2 { ...this.props }
                                    toggleMode={ toggleMode }/>
                        : <Item { ...this.props }
                                toggleMode={ toggleMode }
                                deleteItem={ this.deleteItem }
                                />
                }
            </li>
        );
    }
}

const Item = ({ item, toggleDone, toggleMode ,  deleteItem  }) => (
    <Fragment>
        <label>
            <input type="checkbox"
                   checked={ item.done }
                   onChange={ () => toggleDone(item.id) }/>
            <span className="title">{ item.text }</span>
        </label>
        { (!item.done)
        ? <Fragment><span className="info">{ item.info }</span>
            <div className="btnHolder">
                <button onClick={ toggleMode }>Edit</button>
                <button onClick={ deleteItem }>Delete</button>
            </div></Fragment>
        : <span  className="done">Готово!</span>
        }
    </Fragment>
);



class EditItem2 extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            info: ''
        };
        this.changeText = this.changeText.bind(this);
        this.changeInfo = this.changeInfo.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    changeText(ev) {
        this.setState({
            text: ev.target.value
        })
    }
     changeInfo(ev) {
        this.setState({
            info: ev.target.value
        })
    }

    componentDidMount() {
        this.setState({
            text: this.props.item.text,
            info: this.props.item.info
        });
    }
    onSave() {
        const { id } = this.props.item;
        const { text } = this.state;
        const { info } = this.state;

        this.props.saveItem(id, text, info);
        this.props.toggleMode();
    }

    render() {
        const { item, toggleMode } = this.props;

        return (
            <Fragment>
                <input className="input"  type="text"
                       value={ this.state.text }
                       onChange={ this.changeText }
                />
                    <textarea className="textarea"
                        value={ this.state.info }
                     onChange={ this.changeInfo}
                     />
                     <div className="btnHolder">
                         <button onClick={ this.onSave }>Save</button>
                         <button onClick={ toggleMode }>Cancel</button>
                     </div>
            </Fragment>
        );
    }
}


// const EditItem = ({ item, saveItem, toggleMode }) => {
//     let textField = null;
//     let infoField = null;

//     const onSave = () => {
//         const { id } = item;
//         const text = textField.value;
//         const info = infoField.value;

//         saveItem(id, text, info);
//         toggleMode();
//     };

//     return (
//         <Fragment>
//             <input className="input" type="text"
//                    ref={ input => { textField = input; } }
//                    defaultValue={ item.text }
//             />
//             <textarea className="textarea"
//             defaultValue={ item.info }
//             ref={ textarea => { infoField = textarea; } }
//             ></textarea>
//             <div className="btnHolder">
//                 <button onClick={ onSave }>Save</button>
//                 <button onClick={ toggleMode }>Cancel</button>
//              </div>
//         </Fragment>
//     );
// };