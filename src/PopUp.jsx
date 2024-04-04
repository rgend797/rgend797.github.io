import CircuitDetails from './CircuitDetails.jsx';
import DriverDetails from './DriverDetails.jsx';
import ConstructorDetails from './ConstructorDetails.jsx';
import Favorites from './Favorites.jsx';
import About from './About.jsx'
import { useState, useEffect } from "react";

const PopUp = (props) => {

	var ciExample = [{"alt": 10,"lat": -37.8497,"lng": 144.968,"url": "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit","name": "Albert Park Grand Prix Circuit","country": "Australia","location": "Melbourne","circuitId": 1,"circuitRef": "albert_park"}, {"alt": 264,"lat": 47.5789,"lng": 19.2486,"url": "http://en.wikipedia.org/wiki/Hungaroring","name": "Hungaroring","country": "Hungary","location": "Budapest","circuitId": 11,"circuitRef": "hungaroring"}];
	var drExample = [{"dob": "1980-01-19","url": "http://en.wikipedia.org/wiki/Jenson_Button","code": "BUT","number": 22,"surname": "Button","driverId": 18,"forename": "Jenson","driverRef": "button","nationality": "British"}, {"dob": "1987-07-03","url": "http://en.wikipedia.org/wiki/Sebastian_Vettel","code": "VET","number": 5,"surname": "Vettel","driverId": 20,"forename": "Sebastian","driverRef": "vettel","nationality": "German"}];
	var coExample = [{"url": "http://en.wikipedia.org/wiki/Brawn_GP","name": "Brawn","nationality": "British","constructorId": 23,"constructorRef": "brawn"}, {"url": "http://en.wikipedia.org/wiki/Red_Bull_Racing","name": "Red Bull","nationality": "Austrian","constructorId": 9,"constructorRef": "red_bull"}];

	const [circuitList, setCircuitList] = useState([]);
	const [driverList, setDriverList] = useState([]);
	const [constructorList, setConstructorList] = useState([]);

	useEffect(() => {props.favorites(circuitList.concat(driverList.concat(constructorList)))}, [circuitList, driverList, constructorList]);

	const detailAction = (e) => {
		if		(e == "X") 		{props.popUp([0, ""])}
		else if	(e == "Empty")	{setCircuitList([]); setDriverList([]); setConstructorList([]); props.popUp([0, ""])}
		else if	(e[2] == "up")	props.popUp(e);
		else 					{addTo(e)}
		
	}
	
	function addTo(e) {
		if		(e[0] == 1 && !circuitList.some(f => f.circuitId == e[1].circuitId))				{setCircuitList(circuitList.concat(e[1]))}
		else if	(e[0] == 2 && !driverList.some(f => f.driverId == e[1].driverId))					{setDriverList(driverList.concat(e[1]))}
		else if	(e[0] == 3 && !constructorList.some(f => f.constructorId == e[1].constructorId))	{setConstructorList(constructorList.concat(e[1]))}
		else 																						{alert("You have already favorited this")}
		props.popUp([4]);
	}

	if(props.popDown[0] == 0)		return <></>;
	else if(props.popDown[0] == 1)	return <CircuitDetails circuit={props.popDown[1]} popUp={detailAction}/>;
	else if(props.popDown[0] == 2)	return <DriverDetails driver={props.popDown[1]} popUp={detailAction}/>;
	else if(props.popDown[0] == 3)	return <ConstructorDetails constructor={props.popDown[1]} popUp={detailAction}/>;
	else if(props.popDown[0] == 4)	return <Favorites circuitList={circuitList} driverList={driverList} constructorList={constructorList} popUp={detailAction}/>;
	else if(props.popDown[0] == 5)	return <About popUp={detailAction}/>;
}

export default PopUp;