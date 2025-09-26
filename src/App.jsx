import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";
import Progress from "./components/Progress";
import Tickets from "./components/Tickets";
import Footer from "./components/Footer";

function App() {
  const [progressCount, setProgressCount] = useState(0);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
      <Navbar />
      <Progress count={progressCount} />
      <Tickets setProgressCount={setProgressCount} />
      <Footer />
    </>
  );
}

export default App;
