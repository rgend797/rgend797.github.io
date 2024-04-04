import { useState, useEffect } from 'react';

const RaceResult = (props) => {

	const [qualifying, setQualifying] = useState([]);
	const [results, setResults] = useState([]);

	useEffect(() => {
		props.qualifyingOrder == 0	? setQualifying(props.tables[1])	: setQualifying([...props.tables[1]].reverse());
		props.resultsOrder == 0		? setResults(props.tables[2])		: setResults([...props.tables[2]].reverse());
	}, [props]);

	let podium = [["[None]", ""], ["[None]", ""], ["[None]", ""]];
	if (props.tables[2].length != 0) podium = 
		[[props.tables[2][0].drivers.forename, props.tables[2][0].drivers.surname, props.tables[2][0].drivers],
		[props.tables[2][1].drivers.forename, props.tables[2][1].drivers.surname, props.tables[2][1].drivers],
		[props.tables[2][2].drivers.forename, props.tables[2][2].drivers.surname, props.tables[2][2].drivers]];

	return (
		<main className="bg-white h-full w-2/3 p-4 pb-24 mb-4 mr-4 ml-2 border border-black">
			<h2 className="text-2xl font-semibold mb-4 text-center">Results</h2>
			<h3 className="font-semibold flex justify-between items-center py-2">
				{props.tables[0].name}, Round {props.tables[0].round}, {props.tables[0].year}, 
				<a onClick={() => {if (props.tables[0].circuits.name != "Circuit Name") props.popUp([1, props.tables[0].circuits])}} className="cursor-pointer underline">{props.tables[0].circuits.name}, </a>
				{props.tables[0].date}, 
				<u><a href={props.tables[0].url} className="underline">Quick Link</a></u>
			</h3>
			<div className="flex flex-col h-full md:flex-row gap-4">
				<div className="w-3/5 h-full">
					<div className="bg-gray-200 h-full overflow-y-scroll">
						<h2 className="text-xl font-semibold m-4 text-center">Qualifying</h2>
						<table className="flex-1 w-11/12 h-full mx-4">
							<thead className="sticky top-0">
								<tr onClick={() => props.flipQualifyingOrder()} className="bg-gray-200 cursor-pointer">
									<th className="px-1 py-1">Pos</th>
									<th className=""></th>
									<th className=""></th>
									<th className="px-1 py-1">Q1</th>
									<th className="px-1 py-1">Q2</th>
									<th className="px-1 py-1">Q3</th>
									<img className="absolute left-1/2 top-1/3" src={props.qualifyingOrder == 0 ? "src/assets/Down.png" : "src/assets/Up.png"} width="15px" height="15px"></img>
								</tr>
							</thead>
							<tbody className="overflow-y-scroll">
								{qualifying.length == 0 ? <tr><td></td><td>There is no data for this race</td><td></td><td></td></tr>
														: qualifying.map((i) => (
															<tr key={"ReQu"+i.qualifyId}>
																<td className="px-1 py-1">{i.position}</td>
																<td className="cursor-pointer underline" onClick={() => props.popUp([2, i.drivers])}>{i.drivers.forename} {i.drivers.surname}</td>
																<td className="cursor-pointer underline" onClick={() => props.popUp([3, i.constructors])}>{i.constructors.name}</td>
																<td className="px-1 py-1">{i.q1}</td>
																<td className="px-1 py-1">{i.q2}</td>
																<td className="px-1 py-1">{i.q3}</td>
															</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<div className="bg-gray-200 overflow-y-scroll">
					<h2 className="text-2xl font-semibold m-4 text-center">Results</h2>
					<div className="flex sideways space-x-4 mx-4">
						<div className="bg-yellow-400 flex-1 border border-black p-4 flex flex-col">
							<h3 className="cursor-pointer underline" onClick={() => {if (podium[0][1] != "") props.popUp([2, podium[0][2]])}}>{podium[0][0]} {podium[0][1]}</h3>
							<h1 className="text-3xl text-green-500 font-bold mt-auto">1st</h1>
						</div>
						<div className="bg-slate-300 flex-1 border border-black p-4 flex flex-col">
							<h3 className="cursor-pointer underline" onClick={() => {if (podium[1][1] != "") props.popUp([2, podium[1][2]])}}>{podium[1][0]} {podium[1][1]}</h3>
							<h1 className="text-3xl text-green-500 font-bold mt-auto">2nd</h1>
						</div>
						<div className="bg-yellow-900 flex-1 border border-black p-4 flex flex-col">
							<h3 className="cursor-pointer underline" onClick={() => {if (podium[2][1] != "") props.popUp([2, podium[2][2]])}}>{podium[2][0]} {podium[2][1]}</h3>
							<h1 className="text-3xl text-green-500 font-bold mt-auto">3rd</h1>
						</div>
					</div>
					<table className="flex-1 w-11/12 h-full mx-4">
						<thead className="sticky top-0">
							<tr onClick={() => props.flipResultsOrder()} className="bg-gray-200 cursor-pointer">
								<th>Pos</th>
								<th className="px-1 py-1"></th>
								<th></th>
								<th className="px-1 py-1 ">Laps</th>
								<th className="px-1 py-1 ">Pts</th>
								<img className="absolute left-1/2 top-1/3" src={props.resultsOrder == 0 ? "src/assets/Down.png" : "src/assets/Up.png"} width="15px" height="15px"></img>
							</tr>
						</thead>
						<tbody className="overflow-y-auto">
							{results.length == 0	? <tr><td>There is no data for this race</td><td></td><td></td><td></td></tr>
													: results.map((i) => (
														<tr key={"ReRe"+i.resultId}>
															<td>{i.positionText}</td>
															<td className="px-1 py-1 cursor-pointer underline" onClick={() => props.popUp([2, i.drivers])}>{i.drivers.forename} {i.drivers.surname}</td>
															<td className="px-1 py-1 cursor-pointer underline" onClick={() => props.popUp([3, i.constructors])}>{i.constructors.name}</td>
															<td className="px-1 py-1" >{i.laps}</td>
															<td className="px-1 py-1" >{i.points}</td>
														</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</main>
	)
}

export default RaceResult;