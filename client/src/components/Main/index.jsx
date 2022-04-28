import styles from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import EventList from './event-list.component'
import CreateEvent from './create-event.component'
import EditEvent from './edit-event.component'




const Main = (props) => {
	
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
		
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Events List</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<div>
			<h3>Create event</h3>
			<CreateEvent />
		
			<h3>List of events</h3>
			<EventList />
			<br/><br/><br/>
			
			
			
			</div>
		</div>
	);
};

export default Main;
