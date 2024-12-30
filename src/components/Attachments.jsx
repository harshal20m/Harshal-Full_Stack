import { TbFileDownload } from "react-icons/tb";
const Attachments = () => {
	const attachments = [
		{ name: "Test File for SO", date: "Feb 8, 2023", time: "10:07:07 AM", user: "jayeshson@incquet.com" },
		{ name: "Test File for SO", date: "Feb 8, 2023", time: "10:07:07 AM", user: "jayeshson@incquet.com" },
		{ name: "Test File for SO", date: "Feb 8, 2023", time: "10:07:07 AM", user: "jayeshson@incquet.com" },
		{ name: "Test File for SO", date: "Feb 8, 2023", time: "10:07:07 AM", user: "jayeshson@incquet.com" },
		{ name: "Test File for SO", date: "Feb 8, 2023", time: "10:07:07 AM", user: "jayeshson@incquet.com" },
		{ name: "Test File for SO", date: "Feb 8, 2023", time: "10:07:07 AM", user: "jayeshson@incquet.com" },
	];

	return (
		<div className="bg-white p-4 rounded-3xl shadow">
			<div className="flex justify-between px-2 items-center mb-4">
				<h2 className="text-2xl font-semibold">Attachment</h2>
				<button className="bg-primary text-white px-4 py-1 rounded-3xl text-lg flex items-center">Add</button>
			</div>
			<div>
				{attachments.map((attachment, index) => (
					<div
						key={index}
						className="flex items-center justify-between space-x-4 mb-2 p-2 px-8 hover:bg-gray-100 rounded"
					>
						<div className="flex items-center space-x-2">
							<TbFileDownload size={30} className="text-gray-500" />
							<div>
								<div className="font-medium">{attachment.name}</div>
								<div className="text-xs text-gray-500">{attachment.user}</div>
							</div>
						</div>
						<div>
							<div className="text-xs text-gray-500">{attachment.date}</div>
							<div className="text-xs text-gray-500">{attachment.time}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Attachments;
