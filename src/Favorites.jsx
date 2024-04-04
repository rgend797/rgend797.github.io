const Favorites = (props) => {

	return (
	<aside onClick={(e) => e.target.localName == "aside" ? props.popUp("X") : null} className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
		<div className="bg-gray-200 p-10 rounded-lg flex flex-col relative">
			<div className="mb-8 grid grid-cols-3 gap-4 content-start">
				<h2 className="text-lg px-4 py-2 text-center">Favorites</h2>
				<button onClick={() => props.popUp("Empty")} className="bg-red-500 text-white mx-8 px-4 py-2 rounded-md">Empty Favorites</button>
				<button onClick={() => props.popUp("X")} className="bg-red-500 text-white mx-20 px-4 py-2 rounded-md right-1">Close</button>
			</div>
			<div className="flex mb-6">
				<div className="mx-4 w-1/3">
					<h2 className="mb-4 text-lg font-semibold text-center">Drivers</h2>
					<div className="bg-gray-100 p-4 overflow-y-auto h-40">
						<ul className=" py-2 cursor-pointer underline">
							{props.driverList.map((i) => <li key={"dr" + i.driverId} onClick={() => props.popUp([2, i, "up"])} className="cursor-pointer text-center">{i.forename} {i.surname}</li>)}
						</ul>
					</div>
				</div>
				<div className="mx-4 w-1/3">
					<h2 className="mb-4 text-lg font-semibold text-center">Constructors</h2>
					<div className="bg-gray-100 p-4 overflow-y-auto h-40">
						<ul className=" py-2 cursor-pointer underline">
							{props.constructorList.map((i) => <li key={"co" + i.constructorId} onClick={() => props.popUp([3, i, "up"])} className="cursor-pointer text-center">{i.name}</li>)}
						</ul>
					</div>
				</div>
				<div className="mx-4 w-1/3">
					<h2 className="mb-4 text-lg font-semibold text-center">Circuits</h2>
					<div className="bg-gray-100 p-4 overflow-y-auto h-40">
						<ul className=" py-2 cursor-pointer underline">
							{props.circuitList.map((i) => <li key={"ci" + i.circuitId} onClick={() => props.popUp([1, i, "up"])} className="cursor-pointer text-center">{i.name}</li>)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</aside>
	)
}

export default Favorites;