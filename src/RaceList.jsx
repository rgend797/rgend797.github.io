import { useState, useEffect } from "react";

const RaceList = (props) => {

	const [rL, setRL] = useState([]);

	useEffect(() => {
		props.raceOrder == 0 ? setRL(props.races) : setRL([...props.races].reverse());
	}, [props]);

	return (
		<nav className="bg-gray-200 w-1/3 p-4 pb-12 h-full ml-4 mr-2 border border-black ">
			<h2 className="text-lg font-semibold">{props.year} Races</h2>
			<div className="overflow-x-auto h-full">
				<table className="flex-1 w-full h-full">
					<thead className="sticky top-0">
						<tr onClick={() => props.flipRaceOrder()} className="bg-gray-200 cursor-pointer">
							<th className="px-3 py-2">Rnd</th>
							<th className="px-3 py-2">Circuit</th>
							<th className="px-3 py-2"></th>
							<th className="px-3 py-2"></th>
							<img className="absolute left-1/2 top-1/3" src={props.raceOrder == 0 ? "../images/Down.png" : "../images/Up.png"} width="15px" height="15px"></img>
						</tr>
					</thead>
					<tbody className="overflow-y-auto">
						{rL.length == 0 ? <tr><td>There is no data for this year</td><td></td><td></td><td></td></tr>
										: rL.map((i) => (
												<tr key={i.raceId} className="border-b border-gray-300">
													<td className="px-3 py-2 text-sm">{i.round}</td>
													<td className="px-3 py-2 text-sm">{i.name}</td>
													<td className="px-3 py-2"><button onClick={() => props.query("Results", i)} className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Results</button></td>
													<td className="px-3 py-2"><button onClick={() => props.query("Standings", i)} className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Standings</button></td>
												</tr>
						))}
					</tbody>
				</table>
			</div>
		</nav>
	)
}

export default RaceList;