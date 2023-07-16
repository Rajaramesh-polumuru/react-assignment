import axios from "axios";
import { useEffect, useState } from "react";

const useShifts = () => {
  const [shifts, setShifts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [activeTab, setActiveTab] = useState("my-shifts");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchShifts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8080/shifts");
        setShifts(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchShifts();
  }, []);

  const cancelShift = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/shifts/${id}/cancel`
      );
      setSuccess(response.data);
    } catch (error) {
      setError(error);
    }
  };

  const bookShift = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/shifts/${id}/book`
      );
      setSuccess(response.data);
    } catch (error) {
      setError(error);
    }
  };

  const filterShifts = (booked) => {
    let filteredShifts = shifts;
    if (booked) {
      filteredShifts = filteredShifts.filter((shift) => shift.booked);
    }
    if (filter) {
      filteredShifts = filteredShifts.filter((shift) =>
        shift.area.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return filteredShifts;
  };
  return {
    shifts: filterShifts(activeTab === "my-shifts"),
    loading,
    error,
    success,
    activeTab,
    setActiveTab,
    cancelShift,
    bookShift,
    filter,
    setFilter,
  };
};

export default useShifts;
