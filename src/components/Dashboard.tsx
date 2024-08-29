import DashboardTable from "./DashboardTable";
import NavBar from "./NavBar";
import RecentVehicle from "./RecentVehicle";

const Dashboard = () => {
  return (
    <div className="w-screen h-screen flex flex-col text-gray-900 mt-1.5">
      <NavBar />
      <div className="flex justify-between">
        <div className="w-1/2 bg-yellow-50 p-5">
          <DashboardTable />
        </div>
        <div>
          <RecentVehicle />
          <p>Charts will go here</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
