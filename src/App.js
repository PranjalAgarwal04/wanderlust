import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import Explore from "./pages/Explore";
import Payment from "./pages/Payment";
import NavBar from "./ui-components/NavBar";
import History from "./pages/History";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
}

export default App;
