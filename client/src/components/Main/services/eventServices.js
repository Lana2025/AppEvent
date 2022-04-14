import axios from "axios";


const API_URL = "http://localhost:8080/api/events/"

async function createEvent(task) {
  const { data: newEvent } = await axios.post(API_URL, {
    task,
  })
  return newEvent
}

async function deleteEvent(id) {    
  const message = await axios.delete(`${API_URL}${id}`)  
  return message
}

async function updateEvent(id, payload) {
  const { data: newEvent } = await axios.put(`${API_URL}${id}`, payload)
  return newEvent
}

async function getAllEvents() {
  const { data: events } = await axios.get(API_URL)
  return events
}

export default { createEvent, deleteEvent, updateEvent, getAllEvents }
