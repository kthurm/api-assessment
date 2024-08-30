import { useState } from "react";
import Pagination from "./Pagination";
import useFetchData from "./hooks/UseAxios";

const DashboardTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [recordsPerPage] = useState<number>(20);

  const { vehicles, loading, formatDate } = useFetchData();

  // Pagination calculations
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = vehicles.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(vehicles.length / recordsPerPage);

  return (
    <div className="hidden sm:flex flex-col text-gray-900 mt-1.5 mx-4">
      {loading && <div>Loading</div>}
      {!loading && (
        <table
          id="vehicle-data"
          className="table-auto bg-gray-100 shadow-2xl mt-1 rounded-xl border-transparent"
        >
          <thead className="text-[.6rem] uppercase text-left text-gray-500 border border-b-gray-500">
            <tr>
              <th>Time Stamp</th>
              <th>Classification</th>
              <th>Axles</th>
              <th>Height</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {currentRecords.map((vehicle, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-100 text-sm">
                <td>{formatDate(vehicle.timestamp)}</td>
                <td className="capitalize text-center">
                  {vehicle.classification}
                </td>
                <td>{vehicle.axles}</td>
                <td>{vehicle.height}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default DashboardTable;
