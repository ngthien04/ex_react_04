import React, { useState } from "react";
import data from "../data/danhSachGhe.json";
import Seat from "./seat";

function SeatList() {
  const [name, setName] = useState("");
  const [numSeats, setNumSeats] = useState("");
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [tableData, setTableData] = useState([]);

  const handleSelectSeat = (ghe) => {
    if (selectedSeats.some(s => s.soGhe === ghe.soGhe)) {
      setSelectedSeats(selectedSeats.filter(s => s.soGhe !== ghe.soGhe));
    } else {
      if (selectedSeats.length < Number(numSeats)) {
        setSelectedSeats([...selectedSeats, ghe]);
      }
    }
  };

  const handleConfirm = () => {
    if (selectedSeats.length === Number(numSeats)) {
      setTableData([
        ...tableData,
        {
          name,
          numSeats,
          seats: selectedSeats.map(s => s.soGhe).join(", ")
        }
      ]);
      setName("");
      setNumSeats("");
      setIsSelecting(false);
      setSelectedSeats([]);
    }
  };

  const handleStartSelecting = () => {
    if (name && numSeats > 0) {
      setIsSelecting(true);
      setSelectedSeats([]);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <label style={{ color: 'orange', fontWeight: 'bold' }}>
          Name *
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            disabled={isSelecting}
            style={{ marginLeft: 10 }}
          />
        </label>
        <label style={{ marginLeft: 20, color: 'orange', fontWeight: 'bold' }}>
          Number of Seats *
          <input
            type="number"
            min={1}
            value={numSeats}
            onChange={e => setNumSeats(e.target.value)}
            disabled={isSelecting}
            style={{ marginLeft: 10, width: 50 }}
          />
        </label>
        <button
          onClick={handleStartSelecting}
          disabled={!name || !numSeats || isSelecting}
          style={{ marginLeft: 20 }}
        >
          Start Selecting
        </button>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
          <span className="screen">SCREEN THIS WAY</span>
        </div>
        {data.map((row, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            <span className="firstChar">{row.hang}</span>
            {row.danhSachGhe.map(ghe => (
              <Seat
                key={ghe.soGhe}
                ghe={ghe}
                isSelecting={isSelecting}
                isSelected={selectedSeats.some(s => s.soGhe === ghe.soGhe)}
                onSelect={handleSelectSeat}
                disabled={
                  !isSelecting ||
                  (selectedSeats.length >= Number(numSeats) && !selectedSeats.some(s => s.soGhe === ghe.soGhe))
                }
              />
            ))}
          </div>
        ))}
      </div>
      <button
        onClick={handleConfirm}
        disabled={!isSelecting || selectedSeats.length !== Number(numSeats)}
        style={{ marginTop: 20 }}
      >
        Confirm Selection
      </button>
      <table style={{ marginTop: 20, width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of Seats</th>
            <th>Seats</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, idx) => (
            <tr key={idx}>
              <td>{row.name}</td>
              <td>{row.numSeats}</td>
              <td>{row.seats}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SeatList;