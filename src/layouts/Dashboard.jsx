import Header from "../components/Header";
import ProjectDetails from "../components/ProjectDetails";
import ProjectTimeline from "../components/ProjectTimeline";
import Attachments from "../components/Attachments";
import Comments from "../components/Comments";
import AssignmentSection from "../components/AssignmentSection";
import ReportingSection from "../components/ReportingSection";
import AddOns from "../components/AddOns";
import TopHeader from "../components/TopHeader";

const Dashboard = () => {
	return (
		<div className="min-h-screen min-w-screen bg-gray-100">
			<TopHeader />
			<div className="container pt-4 mx-auto">
				<Header />
				<div className="container flex">
					<div className="container w-[65%] flex flex-col gap-4 mr-4">
						<ProjectDetails />
						<ProjectTimeline />
						<div className="flex gap-2 justify-between w-auto">
							<AssignmentSection />

							<ReportingSection />
						</div>
						<AddOns />
					</div>

					<div className="container flex flex-col gap-4 w-[35%]">
						<Attachments />
						<Comments />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
