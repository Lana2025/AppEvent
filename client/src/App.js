import { Route, Routes, Navigate,useParams, Link } from "react-router-dom";
import Main from "./components/Main";
import EditEvent from "./components/Main/edit-event.component";
import EventList from "./components/Main/event-list.component";
import Signup from "./components/Singup";
import Login from "./components/Login";
import './App.css'



function App() {
	const user = localStorage.getItem("token");
	
 

	return (
		<div className="App">
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			{user && <Route path="/event-list" exact element={<EventList />} />}
			{user && <Route path="/list-edit/:id" exact element={<EditEvent />} />}
			{/* {user && <Route path="/list-edit/:id" render={(id) => <EditEvent id={id} />}/> } */}
			{/* {user &&<Route path="/news/:id" exact element = {<EditEvent ID={id}/>} />}                				 */}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
		
		</div>
	);
}


export default App;
