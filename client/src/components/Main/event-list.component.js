import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import EventTableRow from './EventTableRow';



export default class EventList extends Component {
 
  constructor(props) {
    super(props)
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/events/')
      .then(res => {
        this.setState({
          events: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.events.map((res, i) => {
      return <EventTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
     
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Information about event</th>
            <th>Date/time of event</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}