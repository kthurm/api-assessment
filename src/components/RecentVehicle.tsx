import useFetchData from "./hooks/UseAxios";

const RecentVehicle = () => {
  const { vehicles, formatDate } = useFetchData();
  const firstVehicle = vehicles[0];
  console.log(firstVehicle);

  return (
    <div className="odd:bg-white even:bg-gray-100 text-sm">
      <p>{formatDate(firstVehicle.timestamp)}</p>
      <p className="capitalize text-center">{firstVehicle.classification}</p>
      <p>{firstVehicle.axles}</p>
      <p>{firstVehicle.height}</p>
    </div>
  );
};

export default RecentVehicle;
