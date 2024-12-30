import { FaReply } from "react-icons/fa";

const Comments = () => {
	const comments = [
		{
			user: "Apeksha Ramteke",
			img: "/apeksha.jpeg",
			date: "Mar 8, 2024",
			content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.",
			tags: [
				{ name: "Jayesh", active: false },
				{ name: "Rashmi", active: true },
				{ name: "Apeksha", active: false },
			],
		},
		{
			user: "Jayesh Sonawane",
			img: "/jayesh.jpeg",
			date: "Mar 8, 2024",
			content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.",
			tags: [
				{ name: "Rashmi", active: true },
				{ name: "Jayesh", active: false },
				{ name: "Apeksha", active: false },
			],
		},
	];

	return (
		<div className="bg-white p-4 rounded-3xl shadow">
			<div className="flex justify-between px-2 items-center mb-4">
				<h2 className="text-2xl font-semibold">Comments</h2>
				<button className="bg-primary text-white px-4 py-1 rounded-3xl text-lg flex items-center">Add</button>
			</div>

			<div>
				{comments.map((comment, index) => (
					<div key={index} className="mb-4 p-2 hover:bg-gray-100 rounded">
						<div className="flex items-start w-full">
							<div className="w-16 mr-3 h-9 bg-gray-300 rounded-full self-start">
								<img src={comment.img} alt="" />
							</div>
							<div>
								<div>
									<div className="flex justify-between px-2 items-center mb-4">
										<div>
											<p className="font-semibold text-lg">{comment.user}</p>
											<div className="text-xs text-gray-500">{comment.date}</div>
										</div>
										<button className="bg-[#009a9a] text-white px-4 py-2 rounded-3xl text-sm flex items-center">
											<FaReply className="mr-3" /> Reply
										</button>
									</div>
								</div>
								<p className="mt-2 text-sm">{comment.content}</p>
								<div className="flex items-center mt-2 gap-4">
									{comment.tags.map((tag, index) => (
										<div
											key={index}
											className={`text-gray-600 border border-gray-400 px-4 py-1 rounded-3xl text-sm flex items-center ${
												tag.active ? "bg-[#009a9a] text-white" : ""
											}`}
										>
											<p className=" mr-2">{tag.name}</p>
											<p className="font-bold">x</p>
										</div>
									))}
								</div>
							</div>
						</div>
						<hr className="mt-8" />
					</div>
				))}
			</div>
		</div>
	);
};

export default Comments;
