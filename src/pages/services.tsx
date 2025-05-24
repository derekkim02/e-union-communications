import React from "react";

const ServicesPage: React.FC = () => {
  return (
	<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
		<h1 className="text-4xl font-bold mb-4">Our Services</h1>
		<p className="text-lg text-gray-700 mb-8">
			We offer a range of services to meet your needs.
		</p>
		<ul className="list-disc space-y-2 text-left max-w-md">
		<li>Service 1: Description of service 1.</li>
		<li>Service 2: Description of service 2.</li>
		<li>Service 3: Description of service 3.</li>
		</ul>
	</div>
  );
}

export default ServicesPage;