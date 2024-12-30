const AssignmentSection = () => {
	const assignments = [
		{ role: "Sales Rep", name: "Jayesh Sonawane", img: "/sr.jpeg" },
		{ role: "Account Manager", name: "Jayesh CRM Testing", img: "/am.jpeg" },
		{ role: "Project Owner", name: "Jayesh CRM Testing", img: "/pm.jpeg" },
		{ role: "SEO Strategist", name: "Jayesh CRM Testing", img: "/ss.jpeg" },
	];

	return (
		<div className="bg-white p-4 rounded-3xl w-full shadow">
			<div className="flex justify-between px-2 items-center mb-4">
				<h2 className="text-xl font-semibold">Assignment Section</h2>
				<button className="bg-primary text-white px-4 py-1 rounded-3xl text-sm flex items-center">
					Reassign
				</button>
			</div>
			<div className="grid grid-cols-2 w-full">
				{assignments.map((assignment, index) => (
					<div key={index} className="flex mt-1 items-center gap-2 w-full">
						<img src={assignment.img} alt="" className="w-12 h-12  rounded-full" />
						<div className="flex flex-col ">
							<span className="text-xs font-semibold text-gray-800 ">{assignment.role}</span>
							<span className="text-xs text-gray-600">{assignment.name}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AssignmentSection;
