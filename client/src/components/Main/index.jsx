import React from "react";
import styles from "./styles.module.css";
import EventList from './EventList';



const Main  = () => {	
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Event Calendar</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<div>
				<h2>My events</h2>
				<EventList />
				

				</div>
		</div>
	);
};

export default Main;
