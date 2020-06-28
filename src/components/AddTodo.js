import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: '',
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={formStyle}>
                <input type="text" name="title" style={inputStyle} 
                       value={this.state.title} 
                       onChange={this.onChange}
                       placeholder="Add Todo..." />
                <input type="submit" value="Submit" className="btn" style={{ flex: '1' }} />
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

const formStyle = {
    display: 'flex',
    height: '40px'
}

const inputStyle = {
    flex: '12', 
    padding: '5px 0 5px 24px', 
    outline: 'none', 
    fontSize: '16px',
    border: 'none'
}

export default AddTodo;