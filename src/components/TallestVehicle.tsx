import useFetchData from "./hooks/UseAxios";
import { Modal } from "./ui/Modal";

const RecentVehicle = () => {
  const { vehicles, formatDate } = useFetchData();

  if (vehicles.length === 0) {
    return <p>No vehicles available.</p>;
  }

  const tallestVehicle = vehicles.reduce((max, vehicle) => {
    return vehicle.height > max.height ? vehicle : max;
  }, vehicles[0]);

  return (
    <Modal clickText="Current Tallest Vehicle">
      <div className="flex flex-col text-sm">
        <p className="font-bold text-lg leading-none pb-3 pt-2">
          Current Tallest Vehicle
        </p>
        <p className="capitalize">
          <span className="font-semibold">Classification:</span>{" "}
          {tallestVehicle.classification}
        </p>
        <p>
          {" "}
          <span className="font-semibold">Height:</span> {tallestVehicle.height}
        </p>
      </div>
    </Modal>
  );
};

export default RecentVehicle;
