import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
        <div>
        <h1 style={{textAlign: 'center', marginTop: '20px'}}>Tasks</h1>
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                type="text" 
                name="title" 
                style={{ flex: '10', padding: '5px', margin: '20px' }}
                placeholder="Add task ..." 
                value={this.state.title}
                onChange={this.onChange}
                />
            </form>
        </div>
     
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo