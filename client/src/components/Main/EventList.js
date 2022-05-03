import React, { useState, useEffect } from "react"
import eventServices from "./services/eventServices"

function EventList() {
  const [events, setEvents] = useState([])
  const [event, setEvent] = useState("")

  useEffect(() => {
    const fetchEventAndSetEvents = async () => {
      const events = await eventServices.getAllEvents()
      setEvents(events)
    }
    fetchEventAndSetEvents()
  }, [])

  const createEvent = async e => {
    e.preventDefault()
    if (!event) {
      alert("please enter something")
      return
    }
    if (events.some(({ task }) => task === event)) {
      alert(`Task: ${event} already exists`)
      return
    }
    const newEvent = await eventServices.createEvent(event)
    setEvents([...events, newEvent])
  }

  const deleteEvent = async (e, id) => {
    try {
      e.stopPropagation()
      await eventServices.deleteEvent(id)
      setEvents(events.filter(({ _id: i }) => id !== i))
    } catch (err) {}
  }

  const updateEvent = async (e, id) => {
    e.stopPropagation()
    const payload = {
      completed: !events.find(event => event._id === id).completed,
    }
    const updatedEvent = await eventServices.updateEvent(id, payload)
    setEvents(events.map(event => (event._id === id ? updatedEvent : event)))
  }

  return (
    <div className="App">
      <div>
          <label>Title event</label>
          <br/>
        <input
          id="event-input"
          type="text"
          value={event}
          onChange={({ target }) => setEvent(target.value)}
        />
         <br/>
         <label>Descrip event</label>
         <br/>
         <input
          id="event-input"
          type="text"
          value={event}
          onChange={({ target }) => setEvent(target.value)}
        />
        <button type="button" onClick={createEvent}>
          Add
        </button>
      </div>

      <ul>
        {events.map(({ _id, task, completed }, i) => (
          <li
            key={i}
            onClick={e => updateEvent(e, _id)}
            className={completed ? "completed" : ""}
          >
            
            {task} <span onClick={e => deleteEvent(e, _id)}>X</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EventList