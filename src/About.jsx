const About = (props) => {

	return (
		<aside onClick={(e) => e.target.localName == "aside" ? props.popUp("X") : null} className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
			<div className="bg-gray-200 p-12 rounded-lg flex flex-col relative w-96">
				<div className="mb-6 flex justify-between items-center">
					<h2 className="text-lg">About</h2>
					<button onClick={() => props.popUp("X")} className="bg-red-500 text-white px-4 py-2 rounded-md">Close</button>
				</div>
				<div className="flex items-center mb-6">
					<div>
						<p>Made by <u><a href="https://github.com/rgend797">Remi Gendron</a></u> and <u><a href="https://github.com/cowbasianw">Shawn Tian</a></u> for COMP 4513</p>
					</div>
				</div>
			</div>
		</aside>
	)
}

export default About;