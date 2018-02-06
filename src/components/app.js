import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import todoData from '../assets/data';
import AddForm from './add_form';
import TodoList from './todo_list';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            list: todoData
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(item){
        this.setState({
            list: [item, ...this.state.list]
        });
    }

    render(){
        return (
            <div className="container">
                <h1 className="center-align">To Do App</h1>
                <AddForm add={this.addItem}/>
                <TodoList list={this.state.list}/>
            </div>
        )
    }
};

export default App;
