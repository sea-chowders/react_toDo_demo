import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import './Components/Todos'
import Todos from './Components/Todos';
import AddToDo from './Components/AddToDo';
import About from './Components/pages/About';
import Header from './Components/Header';

import {axios} from 'axios';

class App extends Component {
  state={
    todos : [ 
    ]
    
  }

 componentDidMount(){
  const axios = require('axios');

  axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(response => 
      this.setState({todos : response.data})
    );
  ;
 }

  markComplete = (id) =>{
    this.setState( { todos: this.state.todos.map(todo => {
      if(todo.id === id)
      {
      todo.completed = !todo.completed;
      console.log(todo.title);
      }
      return todo;
    }) 
  })
  }

  deleteToDo = (id) =>{
    
  const axios = require('axios');

    axios
    .delete('https://jsonplaceholder.typicode.com/todos/'+ id)
    .then(response => 
    this.setState({todos: [...this.state.todos.filter(todo=> {
      return todo.id !== id;
    }
    )]
  }));
  }

  saveToDo = (todo) => {
    const axios = require('axios');

    axios.post('https://jsonplaceholder.typicode.com/todos', {title : todo, userId: 1, completed: false}).then(response =>
        this.setState({ todos : [...this.state.todos, response.data]})
    );
    }

  render() {
    return (
      <Router>
      <div className="App">

      <Header></Header>

      <Route exact path="/" render={props => 
        (
        <React.Fragment>
      <Todos todos={this.state.todos} markComplete={this.markComplete} deleteToDo={this.deleteToDo}/>
      
      <AddToDo title={this.state.title} saveToDo={this.saveToDo}></AddToDo>
        </React.Fragment>
        )} />

        <Route exact path="/about" component={About}/>
      
      </div>
      </Router>
    );
  }
}

export default App;
