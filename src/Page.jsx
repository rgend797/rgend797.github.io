import Login from './Login.jsx';
import RaceList from './RaceList.jsx';
import RaceResult from './RaceResult.jsx';
import Standings from './Standings.jsx';
import PopUp from './PopUp.jsx'

import { useState, useEffect } from 'react'

const Page = (props) => {

	const [page, setPage] = useState("Login");
	const [popUp, setPopUp] = useState([0, ""]);
	const [favorites, setFavorites] = useState([]);
	const [raceList, setRaceList] = useState([]);
	const [year, setYear] = useState("2000-2023");
	const [raceOrder, setRaceOrder] = useState();
	const [qualifyingOrder, setQualifyingOrder] = useState(0);
	const [resultsOrder, setResultsOrder] = useState(0);
	const [driversOrder, setDriversOrder] = useState(0);
	const [constructorsOrder, setConstructorsOrder] = useState(0);

	useEffect(() => {setRaceOrder(0); resetOrder()}, []);

	useEffect(() => {filter(year); resetOrder()}, [props]);

	const updatePage = (e) => setPage(e);
	const updatePopUp = (e) => setPopUp(e);
	const updateFavorites = (e) => setFavorites(e);
	const resetOrder = () => {setQualifyingOrder(0); setResultsOrder(0); setDriversOrder(0); setConstructorsOrder(0)}
	const flipRaceOrder = () =>			raceOrder == 0			? setRaceOrder(1)			: setRaceOrder(0);
	const flipQualifyingOrder = () =>	qualifyingOrder == 0	? setQualifyingOrder(1)		: setQualifyingOrder(0);
	const flipResultsOrder = () =>		resultsOrder == 0		? setResultsOrder(1)		: setResultsOrder(0);
	const flipDriversOrder = () =>		driversOrder == 0		? setDriversOrder(1)		: setDriversOrder(0);
	const flipConstructorsOrder = () =>	constructorsOrder == 0	? setConstructorsOrder(1)	: setConstructorsOrder(0);

	const filter = async (e) => {setYear(e); e == "2000-2023" ? setRaceList(props.races) : setRaceList(props.races.filter((f) => f.year == e))}

	const query = (a, b) => {props.query(a, b); setPage(a)}
	
	if (page == "Login") {return <Login login={updatePage}/>}
	else {
		return (
			<div className="bg-gray-100 p-4 flex flex-col overflow-y-auto h-screen">
				<header className="bg-white py-4 px-4">
					<h2 className="text-2xl font-semibold">The Racist Zone</h2>
					<div className="flex justify-between items-center border border-black px-4 py-4">
						<div className="flex items-center">
							<label htmlFor="season" className="mr-2">Season</label>
							<select id="season" onChange={(i) => filter(i.target.value)} className="border px-2 py-1 rounded-md focus:outline-none focus:border-blue-500">
								<option value="2000-2023">2000-2023</option>
								{props.years.map((i) => (<option key={i.year} value={i.year}>{i.year}</option>))}
							</select>
						</div>
						<span className="ml-2">F1 Dashboard Project</span>
						<div className="flex items-center">
							<button onClick={() => favorites.length>0 ? updatePopUp([4]) : null} className={"bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"}>Favorites</button>
							<button onClick={() => updatePopUp([5])} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">About</button>
						</div>
					</div>
				</header>
				<div className="flex flex-col md:flex-row justify-between items-start flex-grow py-4 h-px">
					<RaceList races={raceList} query={query} raceOrder={raceOrder} flipRaceOrder={flipRaceOrder} year={year}/>
					{page == "Results"	? <RaceResult tables={props.tables} qualifyingOrder={qualifyingOrder} resultsOrder={resultsOrder} flipQualifyingOrder={flipQualifyingOrder} flipResultsOrder={flipResultsOrder} popUp={updatePopUp}/>
										: <Standings tables={props.tables} driversOrder={driversOrder} constructorsOrder={constructorsOrder} flipDriversOrder={flipDriversOrder} flipConstructorsOrder={flipConstructorsOrder} popUp={updatePopUp}/>
					}
				</div>
				<PopUp popDown={popUp} popUp={updatePopUp} favorites={updateFavorites}/>
			</div>
		)
	}
}

export default Page;