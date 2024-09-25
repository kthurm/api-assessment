import { useAuth0 } from "@auth0/auth0-react";
import DashboardTable from "./DashboardTable";
import TallestVehicle from "./TallestVehicle";
import VehicleDoughnut from "./charts/VehicleDoughnut";
import OccupantBar from "./charts/OccupantBar";

const Dashboard = () => {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="max-w-[1600px] w-full mx-auto relative flex flex-col lg:flex-row lg:space-x-2 border">
        <div className="lg:w-1/2 sm:bg-gray-200 p-5 order-2 lg:order-1">
          <DashboardTable />
        </div>
        <div className="mx-auto order-1 lg:order-2 px-10">
          <div className="absolute mr-0 right-0">
            <TallestVehicle />
          </div>
          <div className="mx-auto mt-20 flex flex-col items-center">
            <VehicleDoughnut />
            <OccupantBar />
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
