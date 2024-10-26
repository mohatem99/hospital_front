import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPAtientModel from "../components/patients/AddPAtientModel";
import { addToQueue, getQueue } from "../store/reducers/queueSlice";
import { Button } from "flowbite-react";
import { getPatients } from "../store/reducers/patientSlice";
function QueuePAge() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const queueData = useSelector((state) => state.queue.queue);
  const patientsData = useSelector((state) => state.patient.patients);

  const handleAddToQueue = (patientId) => {
    dispatch(addToQueue(patientId));
  };
  useEffect(() => {
    dispatch(getQueue());
    dispatch(getPatients());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Hospital Reception Dashboard
      </h2>

      <Button
        onClick={() => setShowModal(true)}
        className="mb-6 w-full md:w-auto bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1"
      >
        Add New Patient
      </Button>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Current Queue Section */}
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-xl font-semibold mb-4">Current Queue</h3>
          <ul className="space-y-4">
            {queueData?.length > 0 &&
              queueData?.map((entry) => (
                <li
                  key={entry?._id}
                  className="flex justify-between items-center p-3 bg-gray-100 rounded-lg"
                >
                  <span className="font-medium text-gray-700">
                    {entry?.name} - Waiting Number: {entry?.waitingNumber}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      entry.status === "waiting"
                        ? "bg-yellow-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {entry?.status}
                  </span>
                </li>
              ))}
          </ul>
        </div>

        {/* Available Patients Section */}
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-xl font-semibold mb-4">Available Patients</h3>
          <ul className="space-y-4">
            {patientsData?.length > 0 &&
              patientsData?.map((patient) => (
                <li
                  key={patient?._id}
                  className="flex justify-between items-center p-3 bg-gray-100 rounded-lg"
                >
                  <span className="font-medium text-gray-700">
                    {patient?.name}
                  </span>
                  <Button
                    size="small"
                    color="success"
                    onClick={() => handleAddToQueue(patient?._id)}
                    className="ml-4"
                  >
                    Add to Queue
                  </Button>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <AddPAtientModel
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </div>
  );
}

export default QueuePAge;
