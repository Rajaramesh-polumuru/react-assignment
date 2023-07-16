import { useEffect } from "react";
import moment from "moment";
import useShifts from "./useShifts";
import {
  Button,
  Container,
  StyledInput,
  Tab,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  TabsContainer,
  Title,
} from "./styled-components";

export default function Home() {
  const {
    shifts,
    loading,
    error,
    success,
    activeTab,
    setActiveTab,
    cancelShift,
    bookShift,
    filter,
    setFilter,
  } = useShifts();

  useEffect(() => {
    let timer;
    if (success) {
      timer = setTimeout(() => {
        setSuccess(null);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [success]);

  return (
    <Container>
      <Title>Shifts</Title>
      <TabsContainer>
        <Tab
          active={activeTab === "my-shifts"}
          onClick={() => setActiveTab("my-shifts")}
        >
          My Shifts
        </Tab>
        <Tab
          active={activeTab === "available-shifts"}
          onClick={() => setActiveTab("available-shifts")}
        >
          Available Shifts
        </Tab>
      </TabsContainer>
      <TabsContainer>
        <label htmlFor="area-filter">Filter by Area: </label>
        <StyledInput
          id="area-filter"
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </TabsContainer>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <Table>
          <thead>
            <tr>
              <TableHeader>Start Time</TableHeader>
              <TableHeader>End Time</TableHeader>
              <TableHeader>Area</TableHeader>
              <TableHeader>Booked</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {shifts.map((shift) => (
              <TableRow key={shift.id}>
                <TableCell>{moment(shift.startTime).format("lll")}</TableCell>
                <TableCell>{moment(shift.endTime).format("lll")}</TableCell>
                <TableCell>{shift.area}</TableCell>
                <TableCell>{shift.booked ? "Yes" : "No"}</TableCell>
                <TableCell>
                  {shift.booked ? (
                    <Button
                      backgroundColor="#FD93B4"
                      onClick={() => cancelShift(shift.id)}
                    >
                      Cancel
                    </Button>
                  ) : (
                    <Button
                      backgroundColor="#55CB82"
                      onClick={() => bookShift(shift.id)}
                    >
                      Book
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      )}
      {success && (
        <div>
          <p>Success: {success}</p>
        </div>
      )}
    </Container>
  );
}
