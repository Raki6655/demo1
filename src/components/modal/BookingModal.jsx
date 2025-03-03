"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const BookingModal = React.forwardRef((props, ref) => {
	const { isModalOpen, setIsModalOpen } = props;
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [submitError, setSubmitError] = useState("");
	useEffect(() => {
		console.log(ref.current);
	}, [ref.current]);

	const [formData, setFormData] = useState({
		phone: "",
		email: "",
		date: "",
		time: "09:00",
		dateAnyTime: false,
		timeAnyTime: false,
	});
	const { contextSafe } = useGSAP(() => {
		gsap.set(ref.current, { opacity: 0, scale: 0.95 });
	});
	const timeOptions = Array.from({ length: 48 }, (_, i) => {
		const hours = Math.floor(i / 2);
		const minutes = i % 2 === 0 ? "00" : "30";
		return `${hours.toString().padStart(2, "0")}:${minutes}`;
	});

	const closeModal = contextSafe(async () => {
		await gsap.to(ref.current, {
			opacity: 0,
			scale: 0.95,
			duration: 0.2,
			ease: "power2.in",
		});
		setIsModalOpen(false);
		setIsSubmitted(false);
		setFormData({
			phone: "",
			email: "",
			date: "",
			time: "09:00",
			dateAnyTime: false,
			timeAnyTime: false,
		});
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitError("");

		if (!formData.phone && !formData.email) {
			setSubmitError("Please provide either phone number or email");
			return;
		}
		console.log(formData);
		console.log(JSON.stringify(formData));

		try {
			const response = await fetch(
				"https://tweenlab-backend.vercel.app/api/book-appointment",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}
			);

			if (!response.ok) {
				throw new Error("Something went wrong. Please try again.");
			}

			const data = await response.json();
			console.log("API Response:", data);

			setIsSubmitted(true);
		} catch (err) {}
	};

	return (
		<>
			{/* <button
				onClick={openModal}
				className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
			>
				Book a Call
			</button> */}

			<div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
				<div
					ref={ref}
					className="bg-gray-900 rounded-2xl p-2 lg:p-8 max-w-md w-full relative border border-gray-700"
				>
					{!isSubmitted ? (
						<form onSubmit={handleSubmit} className="space-y-6">
							<h2 className="text-lg lg:text-2xl font-bold text-white mb-6">
								Schedule a Call
							</h2>

							<div className="space-y-4">
								<div>
									<label className="block text-sm lg:text-md font-medium text-gray-300 mb-2">
										Phone Number *
									</label>
									<input
										type="tel"
										required={!formData.email}
										className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm lg:text-md"
										value={formData.phone}
										onChange={(e) =>
											setFormData({ ...formData, phone: e.target.value })
										}
									/>
								</div>

								<div className="flex items-center gap-3">
									<input
										type="checkbox"
										id="dateAnyTime"
										className="w-5 h-5 accent-blue-500"
										checked={formData.dateAnyTime}
										onChange={(e) =>
											setFormData({
												...formData,
												dateAnyTime: e.target.checked,
											})
										}
									/>
									<label
										htmlFor="dateAnyTime"
										className="text-gray-300 text-sm lg:text-md"
									>
										Anytime (No specific date needed)
									</label>
								</div>

								{!formData.dateAnyTime && (
									<div>
										<label className="block text-sm font-medium text-gray-300 mb-2">
											Preferred Date
										</label>
										<input
											type="date"
											className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm lg:text-md"
											value={formData.date}
											onChange={(e) =>
												setFormData({ ...formData, date: e.target.value })
											}
										/>
									</div>
								)}

								<div className="flex items-center gap-3">
									<input
										type="checkbox"
										id="timeAnyTime"
										className="w-5 h-5 accent-blue-500"
										checked={formData.timeAnyTime}
										onChange={(e) =>
											setFormData({
												...formData,
												timeAnyTime: e.target.checked,
											})
										}
									/>
									<label
										htmlFor="timeAnyTime"
										className="text-gray-300 text-sm lg:text-md"
									>
										Anytime (No specific time needed)
									</label>
								</div>

								{!formData.timeAnyTime && (
									<div>
										<label className="block text-sm lg:text-md font-medium text-gray-300 mb-2">
											Preferred Time
										</label>
										<select
											className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm lg:text-md"
											value={formData.time}
											onChange={(e) =>
												setFormData({ ...formData, time: e.target.value })
											}
										>
											{timeOptions.map((time) => (
												<option key={time} value={time}>
													{time}
												</option>
											))}
										</select>
									</div>
								)}

								<div>
									<label className="block text-sm lg:text-md font-medium text-gray-300 mb-2">
										Email (Optional)
									</label>
									<input
										type="email"
										className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm lg:text-md"
										value={formData.email}
										onChange={(e) =>
											setFormData({ ...formData, email: e.target.value })
										}
									/>
								</div>
							</div>

							{submitError && (
								<p className="text-red-400 text-sm mt-2">{submitError}</p>
							)}

							<div className="flex gap-4 mt-8">
								<button
									type="button"
									onClick={closeModal}
									className="px-2 py-1 lg:px-6 lg:py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors flex-1"
								>
									Cancel
								</button>
								<button
									type="submit"
									className="px-2 py-1 lg:px-6 lg:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex-1"
								>
									Schedule Now
								</button>
							</div>
						</form>
					) : (
						<div className="text-center">
							<div className="text-4xl mb-4">🎉</div>
							<h3 className="text-xl font-bold text-white mb-4">
								Request Received!
							</h3>
							<p className="text-gray-300 mb-8">
								Our team will get back to you shortly to confirm the schedule.
							</p>
							<button
								onClick={closeModal}
								className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full"
							>
								Close
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
});
export default BookingModal;
