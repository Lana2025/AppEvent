import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'



export default class EventTableRow extends Component {  
  state = {
    name: " ",
    clicked: false
  };
  constructor(props) {
    super(props)    
    this.deleteEvent = this.deleteEvent.bind(this)
   
    
    
  }

  deleteEvent() {
    axios
      .delete(
        'http://localhost:8080/events/delete-event/' + this.props.obj._id,
      )
      .then((res) => {
        console.log('Event successfully deleted!')
      })
      .catch((error) => {
        console.log(error)
      })
      window.location.reload(false);
  }
  
  

  
  
  render() {
    
   
    return (
     

      <tr>
         
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.location}</td>
        <td>{this.props.obj.information}</td>
        <td>{this.props.obj.rollno}</td>
        <td>
        
        <Link className="edit-link" to={"/list-edit/" + this.props.obj._id}>
         Edit        
         </Link>
        
       
          <Button onClick={this.deleteEvent} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
      
      
    )
  }
}


