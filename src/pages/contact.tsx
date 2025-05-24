import React from "react";

const ContactPage: React.FC = () => {
  return (
	<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
		<h1 className="text-4xl font-bold mb-4">Contact Us</h1>
		<p className="text-lg text-gray-700 mb-8">
			If you have any questions, feel free to reach out!
		</p>
		<form className="w-full max-w-md space-y-4">
		<input
			type="text"
			placeholder="Your Name"
			className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
		/>
		<input
			type="email"
			placeholder="Your Email"
			className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
		/>
		<textarea
			placeholder="Your Message"
			className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
			rows={4}
		></textarea>
		<button
			type="submit"
			className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
		>
			Send Message
		</button>
		</form>
	</div>
  );
};

export default ContactPage;