import React, { Component } from 'react';
import ListItem from './list_item';

class TodoList extends Component {

    render(){

        const listItems = this.props.list.map((item, index) => {
            return <ListItem key={index} title={item.title} delete={() => {this.props.delete(index)}}/>
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
