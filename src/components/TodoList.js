import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input type="text" placeholder="Enter task" />
                        <button type="submit">Add Task</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList