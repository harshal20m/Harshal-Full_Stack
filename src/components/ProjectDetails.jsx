const ProjectDetails = () => {
	const details1 = [
		{ label: "Monthly Content Units", value: "1" },
		{ label: "Monthly Backlinks", value: "1" },
		{ label: "Increment Month", value: "1" },
		{ label: "Total Spend", value: "1" },
	];

	const details = [
		{ label: "First Main Geographic Target", value: "Chicago" },
		{ label: "Additional Geographic Target", value: "Nationwide" },
		{ label: "Practice area or Area to Target", value: "None" },
		{ label: "Target Practice Area", value: "Nationwide" },
		{ label: "Estimated Starting Month", value: "Jun 11, 2024" },
		{ label: "Content Live date", value: "Jun 11, 2024" },
		{ label: "Cancel Date", value: "Jun 11, 2023" },
		{ label: "Cancel Approver", value: "None" },
		{ label: "Notes", value: "Impressive! Though it seems the drag feature could be improved. " },

		{ label: "Free Consultaion", value: "Jun 11, 2023" },
	];

	return (
		<div className="bg-white p-4 pb-6 rounded-3xl shadow">
			<div className="bg-primary rounded-3xl p-8 mb-4 flex items-center justify-between">
				<h2 className="text-2xl text-white  font-bold ">Project Details</h2>
			</div>
			<div className="grid grid-cols-2 px-10 mb-2">
				{details1.map((item, index) => (
					<div key={index} className="relative">
						<div className="flex w-[80%] justify-between items-center mt-3 mb-4 ">
							<span className="text-lg text-gray-700 font-semibold">{item.label}</span>
							<span className="text-lg font-bold">{item.value}</span>
						</div>

						<hr className="absolute bottom-0 left-0 w-full mb-2 border-gray-300" />
					</div>
				))}
			</div>

			<div className="grid  grid-cols-2 px-10">
				{details.map((item, index) => (
					<div key={index} className="flex flex-col  relative">
						<span className="text-sm font-semibold">{item.label}</span>
						<span className="text-sm text-gray-600 mb-7 ">{item.value}</span>
						{index < details.length - 2 && (
							<hr className="absolute bottom-0 left-0 w-full mb-2 border-gray-300" />
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectDetails;
