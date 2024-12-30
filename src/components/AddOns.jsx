import { PiPencilSimple } from "react-icons/pi";
const AddOns = () => {
	const addOns = [
		{ name: "SEO Spanish", spend: "500.00", buttonLabel: "TN-22411" },
		{ name: "SEO Spanish", spend: "500.00", buttonLabel: "TN-22411" },
	];

	return (
		<div className="bg-white p-6 rounded-3xl shadow mb-24">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-2xl font-semibold">Add-Ons</h2>
				<button className="bg-primary text-white px-4 py-2 rounded-3xl text-lg">Add</button>
			</div>
			<div className="ml-10">
				<div className="ml-32 text-xl grid grid-cols-[auto,auto,auto,auto] items-center mb-4 gap-4">
					<span className="font-semibold">Name</span>
					<span className="font-semibold">Spend</span>
					<span className="font-semibold "></span>
				</div>
				{addOns.map((addOn, index) => (
					<div key={index} className="flex justify-between items-center mt-4 ">
						<div className="grid grid-cols-[auto,auto,auto,auto] items-center  border-t border-gray-300 py-2">
							<span className="mr-12 ml-12 mt-4">
								<PiPencilSimple size={30} />
							</span>
							<span className="mr-32 mt-4">{addOn.name}</span>
							<span className="mr-20 mt-4">{addOn.spend}</span>
							<div>
								<button className="bg-[#006666] text-white px-4 py-1 rounded-3xl mt-4">
									{addOn.buttonLabel}
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AddOns;
