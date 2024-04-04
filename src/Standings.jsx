import { useEffect, useState } from "react";

const Standings = (props) => {
	
	const [drivers, setDrivers] = useState([]);
	const [constructors, setConstructors] = useState([]);
	
	useEffect(() => {
		props.driversOrder == 0			? setDrivers(props.tables[1]) 		: setDrivers([...props.tables[1]].reverse());
		props.constructorsOrder == 0	? setConstructors(props.tables[2])	: setConstructors([...props.tables[2]].reverse());
	}, [props]);

	return (
		<div className="h-full w-2/3 p-4 border border-black overflow-y-clip">
			<h2 className="text-2xl font-semibold mb-4 text-center">Standings</h2>
			<h3 className=" font-semibold mb-4 text-center">After round {props.tables[0].round}</h3>
			<div className="flex flex-row gap-2 h-full pb-20">
				<div className="h-full bg-gray-200 flex-1 mx-4 overflow-y-auto text-center">
					<h3 className="text-xl font-semibold m-4">Drivers</h3>
					<table className="flex-1 w-11/12 h-full mx-4">
						<thead className="sticky top-0">
							<tr onClick={() => props.flipDriversOrder()} className="bg-gray-200 cursor-pointer">
								<th>Pos</th>
								<th></th>
								<th>Pts</th>
								<th>Laps</th>
								<img className="absolute left-1/2 top-1/3" src={props.driversOrder == 0 ? "../images/Down.png" : "../images/Up.png"} width="15px" height="15px"></img>
							</tr>
						</thead>
						<tbody>
							{drivers.length == 0	? <tr><td>There is no data for this race</td><td></td><td></td><td></td></tr>
													: drivers.map((i) => (
														<tr key={"StRe"+i.resultId}>
															<td>{i.positionText}</td>
															<td className="cursor-pointer underline" onClick={() => props.popUp([2, i.drivers])}>{i.drivers.forename} {i.drivers.surname}</td>
															<td>{i.points}</td>
															<td>{i.laps}</td>
														</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="h-full bg-gray-200 flex-1 mr-4  overflow-y-auto text-center">
					<h3 className="text-xl font-semibold m-4">Constructors</h3>
					<table className="w-11/12 h-full mx-4">
						<thead className="sticky top-0">
							<tr onClick={() => props.flipConstructorsOrder()} className="bg-gray-200 cursor-pointer">
								<th>Pos</th>
								<th></th>
								<th>Pts</th>
								<th>Wins</th>
								<img className="absolute left-1/2 top-1/3" src={props.constructorsOrder == 0 ? "../images/Down.png" : "../images/Up.png"} width="15px" height="15px"></img>							</tr>
						</thead>
						<tbody>
							{constructors.length == 0	? <tr><td>There is no data for this race</td><td></td><td></td><td></td></tr>
														: constructors.map((i) => (
															<tr key={"StCo"+i.constructorStandingsId}>
																<td>{i.positionText}</td>
																<td className="cursor-pointer underline" onClick={() => props.popUp([3, i.constructors])}>{i.constructors.name}</td>
																<td>{i.points}</td>
																<td>{i.wins}</td>
															</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default Standings;