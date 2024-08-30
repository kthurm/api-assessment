import useFetchData from "./hooks/UseAxios";

const RecentVehicle = () => {
  const { vehicles, formatDate } = useFetchData();

  if (vehicles.length === 0) {
    return <p>No vehicles available.</p>;
  }

  const tallestVehicle = vehicles.reduce((max, vehicle) => {
    return vehicle.height > max.height ? vehicle : max;
  }, vehicles[0]);

  return (
    <div className="odd:bg-white even:bg-gray-100 text-sm">
      <p>{formatDate(tallestVehicle.timestamp)}</p>
      <p className="capitalize text-center">{tallestVehicle.classification}</p>
      <p>{tallestVehicle.axles}</p>
      <p>{tallestVehicle.height}</p>
    </div>
  );
};

export default RecentVehicle;
