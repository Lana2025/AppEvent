import { Component } from "react";
import {
    addEvent,
    getEvents,
    updateEvent,
    deleteEvent,
} from "./services/eventServices";

class Events extends Component {
    state = { evets: [], currentEvent: "" };

    async componentDidMount() {
        try {
            const { data } = await getEvents();
            this.setState({ event: data });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = ({ currentTarget: input }) => {
        this.setState({ currentEvent: input.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const originalEvents = this.state.events;
        try {
            const { data } = await addEvent({ event: this.state.currentEvent });
            const events = originalEvents;
            events.push(data);
            this.setState({ events, currentEvent: "" });
        } catch (error) {
            console.log(error);
        }
    };

    handleUpdate = async (currentEvent) => {
        const originalEvents = this.state.events;
        try {
            const events = [...originalEvents];
            const index = events.findIndex((event) => event._id === currentEvent);
            events[index] = { ...events[index] };
            events[index].completed = !events[index].completed;
            this.setState({ events });
            await updateEvent(currentEvent, {
                completed: events[index].completed,
            });
        } catch (error) {
            this.setState({ events: originalEvents });
            console.log(error);
        }
    };

    handleDelete = async (currentEvent) => {
        const originalEvents = this.state.events;
        try {
            const events = originalEvents.filter(
                (event) => event._id !== currentEvent
            );
            this.setState({ events });
            await deleteEvent(currentEvent);
        } catch (error) {
            this.setState({ events: originalEvents });
            console.log(error);
        }
    };
}

export default Events;
