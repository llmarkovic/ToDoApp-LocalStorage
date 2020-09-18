import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => {
        this.setState({ title: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input type="text" placeholder="Add Todo" name="title" style={{ flex: '10' }} value={this.state.title} onChange={this.onChange} />
                <input type="submit" value="Submit"  className="btn" style={{ flex: '1' }} />   
            </form>
        )
    }
}

export default AddTodo
