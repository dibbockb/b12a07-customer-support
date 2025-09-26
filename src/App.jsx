// import { use, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Progress from "./components/Progress";
import Tickets from "./components/Tickets";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Progress></Progress>
      <Tickets></Tickets>
      <Footer></Footer>
    </>
  );
}

export default App;
