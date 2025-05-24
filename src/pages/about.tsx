import React from "react";

const AboutPage: React.FC = () => {
	return (
	<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
		<h1 className="text-4xl font-bold mb-4">About Us</h1>
		<p className="text-lg text-gray-700 mb-8">
			We are a team of dedicated professionals committed to providing the best services.
		</p>
		<p className="text-md text-gray-600 max-w-md text-center">
			Our mission is to deliver high-quality solutions that meet the needs of our clients and exceed their expectations.
		</p>
	</div>
  );
}

export default AboutPage;