import React, { Component, useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


function withRouter(Component) {
  function ComponentWithRouter(props) {
    let params = useParams()
    // console.log(params)
    return <Component {...props} params={params} />
  }
  return ComponentWithRouter
}


class EditEvent extends Component { 
  
constructor(props) {
  super(props)
  this.onChangeEventName = this.onChangeEventName.bind(this);
  this.onChangeEventLocation = this.onChangeEventLocation.bind(this);
  this.onChangeEventInformation = this.onChangeEventInformation.bind(this);
  this.onChangeEventEmail = this.onChangeEventEmail.bind(this);
  this.onChangeEventRollno = this.onChangeEventRollno.bind(this);
  // this.onChangeEventID = this.onChangeEventID.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  

// State
 this.state = {
  name: '',
  location:'',
  information:'',
  email: '',
  rollno: '',
  sampleState:'hello world',
  id: this.props.params.id
  
  }
 }
 
 componentDidMount() {    
  axios.get('http://localhost:8080/events/edit-event/'+ this.props.params.id)
 .then(res => {
  this.setState({
  name: res.data.name,
  location: res.data.location,
  information: res.data.information,
  rollno: res.data.rollno
     });
     console.log(res)  
  })
.catch((error) => {
   console.log(error);
   })
 }
onChangeEventName(e) {
this.setState({ name: e.target.value })
 }

 onChangeEventLocation(e) {
 this.setState({ location: e.target.value })
  }
onChangeEventInformation(e) {
 this.setState({ information: e.target.value })
}
 onChangeEventEmail(e) {
 this.setState({ email: e.target.value })
}
 onChangeEventRollno(e) {
 this.setState({ rollno: e.target.value })
 }
onSubmit(e) {
 e.preventDefault()
  const eventObject = {
  name: this.state.name,
  location: this.state.location,
  information: this.state.information,
  rollno: this.state.rollno
  };

 axios.put('http://localhost:8080/events/update-event/' + this.props.params.id, eventObject)
 .then((res) => {
   console.log("id", this.props.params.id)
   console.log(res.data)
    console.log('Events successfully updated')
    }).catch((error) => {
     console.log(error)
   })
   // Redirect to Event List 
   alert("Event updated successfully !")
  this.props.history.push('/')
  
 }
 



render() {
  
  
      
   return (
   <div className="form-wrapper">
         <div><br/>
           <h2>Edit event</h2></div>
  <Form onSubmit={this.onSubmit}>
    <Form.Group controlId="Name">
       <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeEventName} />
       </Form.Group>
    <Form.Group controlId="Information">
      <Form.Label>Information</Form.Label>
    <Form.Control type="text" value={this.state.information} onChange={this.onChangeEventInformation} />
  </Form.Group>
  <Form.Group controlId="Location">
  <Form.Label>Location</Form.Label>
     <Form.Control type="text" value={this.state.location} onChange={this.onChangeEventLocation} />
</Form.Group>
<Form.Group controlId="Roll No">
<Form.Label>Roll No</Form.Label>
 <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeEventRollno} />
 </Form.Group>
 <br/>
  <Button  variant="danger" size="lg" block="block" type="submit">
  Update
 </Button>
 
 <Button  href="/" variant="success" size="lg" block="block" type="submit">
   Back
 </Button>
 </Form>
 </div>);
  }
 }
const HOCEditEvent = withRouter(EditEvent);

 export default HOCEditEvent;
 


 

