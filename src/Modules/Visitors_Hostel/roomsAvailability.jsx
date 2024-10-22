import React, { useState } from "react";
import {
  MantineProvider,
  Table,
  Button,
  Box,
  Text,
  TextInput,
  Grid,
} from "@mantine/core";
import RoomsDetails from "./roomsAvailibilityDetails.jsx";

function BookingsRequestTable() {
  const [showForm, setShowForm] = useState(false); // Manage form visibility

  const handleButtonClick = () => {
    setShowForm(true); // Show the BookingForm when button is clicked
  };

  return (
    <Box p="md" style={{ margin: 10 }}>
      <Box
        mb="md"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text size="xl" style={{ paddingBottom: 15, fontWeight: "bold" }}>
          Rooms Availibility
        </Text>

        <Button variant="outline" color="green" onClick={handleButtonClick}>
          Submit
        </Button>
      </Box>

      <Table
        style={{
          marginTop: "20px",
          borderRadius: "8px", // Border radius for table
          overflow: "hidden", // Overflow hidden to round table corners
          border: "1px solid #E0E0E0", // Optional border for visibility
        }}
      >
        <thead>
          <tr>
            <th style={{ backgroundColor: "#E6F3FF", padding: "12px" }}>
              Booking From
            </th>
            <th style={{ backgroundColor: "#E6F3FF", padding: "12px" }}>
              Booking To
            </th>
          </tr>
          <tr>
            <td style={{ padding: "12px" }}>
              <Grid>
                <Grid.Col span={12}>
                  <TextInput placeholder="From" type="date" required />
                </Grid.Col>
              </Grid>
            </td>
            <td style={{ padding: "12px" }}>
              <Grid>
                <Grid.Col span={12}>
                  <TextInput placeholder="To" type="date" required />
                </Grid.Col>
              </Grid>
            </td>
          </tr>
        </thead>
      </Table>
      {showForm && <RoomsDetails onClose={() => setShowForm(false)} />}
    </Box>
  );
}

function RoomsAvailibility() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Box
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          backgroundColor: "white",
          borderRadius: "12px", // Add border radius to outer Box
          padding: "16px", // Optional padding
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Optional shadow
        }}
      >
        <BookingsRequestTable />
      </Box>
    </MantineProvider>
  );
}

export default RoomsAvailibility;
