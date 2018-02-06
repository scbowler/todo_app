import React, { Component } from 'react';

class TodoList extends Component {

    render(){

        const listItems = this.props.list.map((item, index) => {
            return <li key={index} className="collection-item">{item.title}</li>   
        });

        return (
            <div>
                <ul className="collection">
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default TodoList;
