const CircuitDetails = (props) => {

	return (
		<aside onClick={(e) => e.target.localName == "aside" ? props.popUp("X") : null} className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
			<div className="bg-gray-200 p-12 rounded-lg flex flex-col relative w-200">
				<div className="mb-6 flex justify-between items-center">
					<h2 className="text-lg">Circuit Details</h2>
					<button onClick={() => props.popUp("X")} className="bg-red-500 text-white px-4 py-2 rounded-md">Close</button>
				</div>
				<div className="flex items-center mb-6">
					<div>
						<b>Name: </b>{props.circuit.name},<br></br>
						<b>Location: </b>{props.circuit.location},<br></br>
						<b>Country: </b>{props.circuit.country},<br></br>
						<b>Website: </b><u><a href={props.circuit.url}>Quick Link</a></u>
					</div>
					<button onClick={() => props.popUp([1, props.circuit])} className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4">Add Favorite</button>
				</div>
				<div className="aspect-w-1 aspect-h-1 border border-gray-400 p-4">
					<p>Circuit Image</p>
				</div>
				<div className="aspect-w-1 aspect-h-1 border border-gray-400 p-4">
					<p>Map Location</p>
				</div>
			</div>
		</aside>
	)
}

export default CircuitDetails;