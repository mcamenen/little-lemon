import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import BookingPage from "./components/BookingPage";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Header setPage={setPage} />
      {page === "home" && <Main setPage={setPage} />}
      {page === "reservations" && <BookingPage />}
      <Footer />
    </>
  );
}

export default App;