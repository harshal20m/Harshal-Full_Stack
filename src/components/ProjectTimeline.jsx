const ProjectTimeline = () => {
	const timeline = [
		{
			date: "Jan 31",
			time: "03:06:40 PM",
			title: "Project Assigned",
			sub: "some subtext",
			description:
				"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.",
		},
		{
			date: "Jan 31",
			time: "03:06:40 PM",
			title: "Project Active",
			sub: "some subtext",
			description:
				"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.",
		},
		{
			date: "Jan 31",
			time: "03:06:40 PM",
			title: "Project Added",
			sub: "some subtext",
			description:
				"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.",
		},
		{
			date: "Jan 31",
			time: "03:06:40 PM",
			title: "Project Active",
			sub: "some subtext",
			description:
				"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.",
		},
		{
			date: "Jan 31",
			time: "03:06:40 PM",
			title: "Project Active",
			sub: "some subtext",
			description:
				"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.",
		},
	];

	return (
		<div className="bg-white p-6 rounded-3xl shadow">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-2xl font-semibold">Project Timeline</h2>
				<button className="bg-primary text-white px-4 py-2 rounded-3xl text-lg">Add</button>
			</div>
			<div className="space-y-2 border-l-2 border-gray-400 ml-8 pl-2 relative">
				{timeline.map((item, index) => (
					<div key={index} className="mb-4 pl-4 pb-4 relative">
						<div className="absolute left-[-24px] top-4 transform w-8 h-8 bg-white rounded-full border-2 border-gray-400 flex items-center justify-center">
							<div className="w-4 h-4 bg-gray-400 rounded-full border-2 border-white"></div>
						</div>
						<div className=" flex bg-gray-100 p-4 rounded-3xl w-full">
							<div className="">
								<div className="font-semibold  text-lg">{item.title}</div>
								<div className="font-semibold text-gray-700">{item.sub}</div>
								<p className="text-xs text-gray-500">{item.description}</p>
							</div>
							<div className=" w-[12%] flex flex-col mt-4 items-end">
								<div className="text-xs  font-semibold text-gray-700">{item.date}</div>
								<div className="text-xs text-gray-600">{item.time}</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectTimeline;
