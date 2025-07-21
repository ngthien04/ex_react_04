import React from "react";
import SeatList from "./components/seat-list";
import "./App.css";

function App() {
  return (
    <div className="bookingMovie">
      <h1 style={{ color: "orange", textAlign: "center" }}>Đặt vé xem phim</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: 40 }}>
        <SeatList />
      </div>
    </div>
  );
}

export default App;