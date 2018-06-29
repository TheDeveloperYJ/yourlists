import React,{Component} from "react";
import TodoItems from './TodoItems'
import axios from 'axios'
import Home from './Home'
import {Button,Label,Form,Container} from 'semantic-ui-react'
class TodoList extends Component{
  state = {
    todos:[],
    text:"",
    completedTodos:[]
  }
  change = (e) =>{
    this.setState({text:e.target.value })
  }

   add = (e) => {
     e.preventDefault()
     let newItem = {
       text:this.state.text,
       key:Date.now()
     }
     axios.post('/api/posts/add',{newItem})
     .then(res=> this.setState({ todos: [...this.state.todos,newItem]}))
     .then(data => console.log(data))
     console.log(this.state.todos)
   }

   deleteItem = (key) => {
     let filteredItems = this.state.todos.filter((item)=>{
       return item.key !== key
     })
    this.setState({todos:filteredItems})
   }
   //the completed button doesnt work as expected
  //  completed = (key) => {
  //    let index = this.state.todos.indexOf(key)
  //  let temp = []

  //  let finished = this.state.todos.splice(index,1).push(temp)
  //  console.log(finished)
  //  this.setState({completedTodos:[this.state.completedTodos,...temp]})
  //  console.log(this.state.completedTodos)
  //  }
  
  //Unbale to fetch all posts of the logged in user
  //  componentDidMount(){
  //   axios.get('/api/posts')
  //   .then(res => console.log(res.data))
  //  }
  render(){
    return(
      <div>
      <Home/>
       <Container textAlign='center'>
      <br/>
      <br/>
    
      <Form onSubmit={this.add}>
        <Form.Field inline>
         <Label>Write your todo</Label>
      <input type="text" required onChange={this.change} placeholder= 'Enter your todo' name='text'value={this.state.value}/>
        <Button primary>Add a todo</Button>
      </Form.Field>
     
    
     
      </Form>
      <br/>
      <TodoItems items={this.state.todos} delete={this.deleteItem} complete={this.completed}/>
      </Container>
      {this.state.completedTodos.length >1 ? 
      
      this.state.completedTodos.map(u =>{
        return <li>{u.text}</li>
      }):null
   
      }
      </div>
    )
  }
}



export default TodoList;
