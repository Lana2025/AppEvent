import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateEvent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeEventName = this.onChangeEventName.bind(this);
    this.onChangeEventLocation = this.onChangeEventLocation.bind(this);
    this.onChangeEventInformation = this.onChangeEventInformation.bind(this);
    this.onChangeEventEmail = this.onChangeEventEmail.bind(this);
    this.onChangeEventRollno = this.onChangeEventRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      location:'',
      information:'',
      email: '',
      rollno: ''
    }
  }

  onChangeEventName(e) {
    this.setState({ name: e.target.value })
  }
  onChangeEventLocation(e) {
    this.setState({ location: e.target.value })
  }
  onChangeEventInformation (e) {
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
    axios.post('http://localhost:8080/events/create-event', eventObject)
      .then(res => console.log(res.data));

    this.setState({ name: '', location: '', information: '', email: '', rollno: '' })
    window.location.reload(false);
  }
  

  render() {
    return (<div className="form-wrapper">
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

        <Form.Group controlId="Name">
          <Form.Label>Date/time of event</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeEventRollno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Event
        </Button>
      </Form>
    </div>);
  }
}