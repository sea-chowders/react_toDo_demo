import React, { Component } from 'react'

 import PropTypes from 'prop-types'

export class AddToDo extends Component {
  state = {
    title : ''
  }

  setTitle = (t) => {
    console.log(t.target.value);
    this.setState({[t.target.name]: t.target.value });
    console.log(this.state.title);
  }

  submitForm = (e) =>{
    e.preventDefault();
    this.props.saveToDo(this.state.title);
    this.setState({title : ''});
  }
  


  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input name='title' onChange={this.setTitle.bind(this.state.title)} value={this.state.title} placeholder="Add todo"/>
        <input type='submit' value='Add To Do' />
      </form>
    )
  }
}

//  AddToDo.propTypes = { todo : PropTypes.object.isRequired }


export default AddToDo
