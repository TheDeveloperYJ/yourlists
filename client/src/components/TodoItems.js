import React, { Component } from 'react'
import {List,Container,Icon,Segment} from 'semantic-ui-react'

class TodoItems extends Component{

   delete =(key) => {
      this.props.delete(key)
   }
   complete = (key) => {
       this.props.complete(key)
   }
    render(){
        return(
            <div>
          {this.props.items.length > 0  ? 
          this.props.items.map(u =>
           <div key={u.key} >
            <Container textAlign='center'>
           <List> 
         
           <List.Item>
         
           <List.Content>
           <Segment.Group raised stacked  size='big'>
           <Segment>
             {u.text}
             <span> </span>
            <Icon name="checkmark" onClick={()=>this.complete(u.key)}/>
            <Icon name="delete" onClick={()=>this.delete(u.key)}/>
           </Segment>
            </Segment.Group>
           </List.Content>
            
          
           </List.Item>
            
          
            </List> 
             </Container>
           </div>
           )
       : null
       }
       </div>
        )
    }
}

export default TodoItems