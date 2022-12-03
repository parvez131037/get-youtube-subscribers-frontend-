import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

// Setting up the initial states using
// react hook 'useState'
const [search, setSearch] = useState("");
const [subscribers, setSubscribers] = useState([]);

//Fetching subscriber data from the backend API only
//using UseEffect method
useEffect(() => {
	axios.get("https://get-youtube-subscribers.onrender.com/api/subscribers").then((res) => {
	setSubscribers(res.data);
  console.log(res.data);
	});
}, []);


return (
	<div className="App">
	<h1>ALMABETTER - GET YOUTUBE SUBSCRIBERS</h1>
	<input
		type="text"
		placeholder="Search by name..."
		onChange={(e) => {
		setSearch(e.target.value);
		}}
	/>
	<table>
		<thead>
		<tr>
			<td>Subscriber ID</td>
			<td>Subscriber Name</td>
			<td>Subscribed Channel</td>
			<td>Subscribed at</td>
		</tr>
		</thead>
		{/* Mapping all the subscribers */}
		<tbody>
		{/* Filtering to check for the searched subscriber */}
		{subscribers
			.filter((val) => {
			return val.name.toLowerCase().includes(search.toLowerCase());
			})
			.map((val, id) => {
			return (
				<>
				<tr id={id}>
					<td className="subsId">{val._id}</td>
					<td className="subsName">{val.name}</td>
					<td className="subsChannel">{val.subscribedChannel}</td>
					<td className="subsDate">{val.subscribedDate}</td>
				</tr>
				</>
			);
			})}
		</tbody>
	</table>
	</div>
);
}

export default App;
