const Login = (props) => {

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100" style={{ backgroundImage: 'url(https://news.microsoft.com/wp-content/uploads/prod/sites/66/2017/09/Hero-Image-.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
			<h1 className="text-3xl font-bold mb-4 text-yellow-600 shadow-md">THE BEST RACISTS</h1>
			<div className="bg-white px-8 py-6 shadow-md w-96">
				<h2 className="text-2xl font-semibold mb-4">Login</h2>
				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
					<input id="email" type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-50" />
				</div>
				<div className="mb-6">
					<label htmlFor="password" className="block text-gray-800 mb-2">Password</label>
					<input id="password" type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-200" />
				</div>
				<div className="flex justify-between">
					<button type="submit" onClick={() => props.login("Results")} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
					<button onClick={() => alert("No registry")} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400">Register</button>
				</div>
			</div>
			<div className="mt-4 text-gray-500">
				<a href={'https://news.microsoft.com/en-au/features/artificial-intelligence-formula-one-bots-pole-position-race-technology/'} className="underline">Image credit</a>
			</div>
		</div>
	)
}

export default Login;