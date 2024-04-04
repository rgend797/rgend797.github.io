const DriverDetails = (props) => {

	const age = (e) => {
		function comparator(a) { if (a < 0) return -1; return 0; }
		const t = new Date().toJSON().slice(0, 10);
		const age = (t.substr(0, 4) - e.substr(0, 4) + comparator(t.substr(5, 2) - e.substr(5, 2) + comparator(t.substr(8, 2) - e.substr(8, 2))));
		return age;
	}

	return (
		<aside onClick={(e) => e.target.localName == "aside" ? props.popUp("X") : null} className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
			<div className="bg-gray-200 p-12 rounded-lg flex flex-col relative w-200">
				<div className="mb-6 flex justify-between items-center">
					<h2 className="text-lg">Driver Details</h2>
					<button onClick={() => props.popUp("X")} className="bg-red-500 text-white px-4 py-2 rounded-md">Close</button>
				</div>
				<div className="flex items-center mb-6">
					<div>
						<b>Name: </b>{props.driver.forename} {props.driver.surname},<br></br>
						<b>Date of Birth: </b>{props.driver.dob},<br></br>
						<b>Age: </b>{age(props.driver.dob)},<br></br>
						<b>Nationality: </b>{props.driver.nationality},<br></br>
						<b>Website: </b><u><a href={props.driver.url}>Quick Link</a></u>
					</div>
					<button onClick={() => props.popUp([2, props.driver])} className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4">Add Favorite</button>
				</div>
				<div className="aspect-w-1 aspect-h-1 border border-gray-400 p-4">
					<p>Image Here</p>
				</div>
			</div>
		</aside>
	)
}

export default DriverDetails;