import React from "react";
import HotelHistoryCardCollection from "../ui-components/HotelHistoryCardCollection.jsx";
import FlightHistoryCardCollection from "../ui-components/FlightHistoryCardCollection.jsx";
const History = () => {
  return (
    <>
      <FlightHistoryCardCollection />
      <HotelHistoryCardCollection />
    </>
  );
};

export default History;
