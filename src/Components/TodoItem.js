import React, { Component } from 'react'

import PropTypes from 'prop-types'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration : this.props.todo.completed  ?' line-through' : 'none',
      backgroundColor : '#f4f4f4'
  }
  }

  // getButtonStyle = () => {
  //   return {
  //     margin-left
  //   }
  // }


  render() {
    const {id, title} =this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
        <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/>
        {title}        
        <button onClick={this.props.deleteToDo.bind(this, id)}>X</button>
        </p>

      </div>
    )
  }
}

TodoItem.propTypes = { todo : PropTypes.object.isRequired }


export default TodoItem
