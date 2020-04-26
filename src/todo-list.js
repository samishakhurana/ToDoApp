import React from "react";
import "./index.css";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: []
        }
    }
    addToList() {
        let item = document.getElementsByClassName('input-text')[0].value;
        let todoItems = this.state.todoItems
        todoItems.push(item);
        this.setState({todoItems: todoItems})
        document.getElementsByClassName('input-text')[0].value = '';
    }
    removeItem(index) {
        let todoItems = this.state.todoItems
        todoItems.splice(index, 1)
        console.log(this.state.todoItems)
        this.setState({todoItems: todoItems})
    }
    render() {
        return(
            <div className="container">
                <div className="heading">
                    Keep a track!
                </div>
                <div className="content">
                    <div className="content-div-1">
                        {this.state.todoItems.map((item, key) => {
                            return (<div className="item" key={key}>
                                {item}
                                <span onClick={this.removeItem.bind(this, key)} className="icon"><FontAwesomeIcon icon={faMinus} /></span>
                            </div>)
                        })}
                    </div>
                    <div className="content-div-2">
                        <input type="text" className="input-text" />
                        <button className="submit-button" onClick={this.addToList.bind(this)}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList