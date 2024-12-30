import { VscBellDot } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { GoPencil } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

const Header = () => {
	const gradientStyle = {
		background: "linear-gradient(to right, #fec163, #de4313)",
	};
	return (
		<header className="bg-white mb-4 p-14 rounded-3xl shadow flex justify-between items-center">
			<div className="">
				<div>
					<h1 className="text-xl font-medium">#999 : Project Name</h1>
				</div>
				<div className="flex items-center space-x-4 mt-2">
					<div className="flex items-center w-full justify-between gap-24">
						<span className="text-sm ">Hinjewadi</span>
						<div className="flex items-center justify-between ">
							<span className="text-red-600 px-2  flex items-center justify-center rounded text-sm ">
								<GoDotFill className="inline" /> Cancelled
							</span>
							<button className="text-yellow-600 px-3 flex items-center justify-center rounded text-sm">
								<GoDotFill className="inline" /> Pause
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-4 items-end ">
				<div className="flex items-center justify-center gap-4">
					<div
						style={gradientStyle}
						className="text-white w-32 px-6 py-2 flex items-center justify-between rounded-full text-sm "
					>
						<p>Pause</p> <IoIosArrowDown />
					</div>
					<GoPencil size={20} className="inline" />
					<VscBellDot size={20} className="inline" />
				</div>
				<div className="flex items-center text-center gap-2">
					<button className="px-3 py-1 rounded-full border border-gray-700 text-xs">View Sitemap</button>
					<button className="px-3 py-1 rounded-full border border-gray-700 text-xs ">View CS</button>
					<button className="px-3 py-1 rounded-full border border-gray-700 text-xs ">KW Main</button>
					<button style={{ background: "#004d4d" }} className="text-white px-3 py-1 rounded-full text-xs">
						Update Increment
					</button>
					<button className="px-3 py-1 rounded-full border border-black text-xs">Upgrade / downgrade</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
