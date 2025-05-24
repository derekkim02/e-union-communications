import React from "react";

const HomePage: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-4xl font-bold mb-4">Welcome to Our Homepage</h1>
			<p className="text-lg text-gray-700 mb-8">
				This is a simple homepage built with React and Tailwind CSS.
			</p>
		</div>
	);
}

export default HomePage;