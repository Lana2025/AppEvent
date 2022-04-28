import React, { Component, useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';





export default class EditEvent extends Component {  
 
  constructor(props) {
    super(props)
    this.onChangeEventName = this.onChangeEventName.bind(this);
    this.onChangeEventLocation = this.onChangeEventLocation.bind(this);
    this.onChangeEventInformation = this.onChangeEventInformation.bind(this);
    this.onChangeEventEmail = this.onChangeEventEmail.bind(this);
    this.onChangeEventRollno = this.onChangeEventRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    // State
    this.state = {
      name: '',
      location:'',
      information:'',
      email: '',
      rollno: ''
    }
  }
  
  
  componentDidMount() {
    axios.get('http://localhost:8080/events/edit-event/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          location: res.data.location,
          information: res.data.information,
          rollno: res.data.rollno
        });
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
      email: this.state.email,
      rollno: this.state.rollno
    };
    axios.put('http://localhost:8080/events/update-event/' + this.props.match.params.id, eventObject)
      .then((res) => {
        console.log(res.data)
        console.log('Events successfully updated')
      }).catch((error) => {
        console.log(error)
      })
    // Redirect to Event List 
    this.props.history.push('/event-list')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeEventName} />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Information</Form.Label>
          <Form.Control type="text" value={this.state.information} onChange={this.onChangeEventName} />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" value={this.state.location} onChange={this.onChangeEventName} />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeEventEmail} />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeEventRollno} />
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Event
        </Button>
      </Form>
    </div>);
  }
}