import Page from './Page.jsx';
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect, SetStateAction } from 'react';

const supaUrl = "https://igxaqwuvabsnrtcxcdbc.supabase.co";
const supaAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlneGFxd3V2YWJzbnJ0Y3hjZGJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwNDI2OTQsImV4cCI6MjAyMzYxODY5NH0.z0GVfqkAqXvLb97iTDFfHHO_SHWII1nqk7IT9HOOaFg";
const supabase = createClient(supaUrl, supaAnonKey);

function App() {

	const dummy = [{"raceId": null, "name": "Name", "round": "", "year": "Year", "date": "Date", "url": null, "circuits": {"name": "Circuit Name", "circuitId": null}}, [], []];
	const example = [{"raceId": null,"year": null,"round": null,"circuitId": null,"name": null,"date": null,"time": null,"url": null,"fp1_date": null,"fp1_time": null,"fp2_date": null,"fp2_time": null,"fp3_date": null,"fp3_time": null,"quali_date": null,"quali_time": null,"sprint_date": null,"sprint_time": null}];   

	const [tables, setTables] = useState(dummy);
	const [races, setRaces] = useState(example);
	const [years, setYears] = useState([]);
	//Years go from 1950-2024
	useEffect(() => {
		async function database () {
			const race =	await supabase.from("races").select().gte("year", 2000).lte("year", 2023).order("year", { ascending: true });
			const years =	await supabase.from("seasons").select("year").gte("year", 2000).lte("year", 2023).order("year", { ascending: true });
			setRaces(race.data);
			setYears(years.data)
		}			
		database()
	}, []);

	const getQuery = async (a, b) => {
		setTables(dummy);
		if (a == "Results") {
			const course =			await supabase.from("races").select("*, circuits (*)").eq("circuitId", b.circuitId).eq("raceId", b.raceId);
			const qualifying =		await supabase.from("qualifying").select("*, drivers (*), constructors (*)").eq("raceId", b.raceId);
			const results =			await supabase.from("results").select("*, drivers (*), constructors (*)").eq("raceId", b.raceId);
			setTables([course.data[0], qualifying.data, results.data])
		}
		else if (a == "Standings") {
			const drivers =			await supabase.from("results").select("*, drivers (*)").eq("raceId", b.raceId);
			const constructors =	await supabase.from("constructorStandings").select("*, constructors (*)").eq("raceId", b.raceId).order("position", {ascending: true});
			setTables([b, drivers.data, constructors.data])
		}
	}

	return (
		<Page races={races} years={years} tables={tables} query={getQuery}/>
	)
}

export default App;