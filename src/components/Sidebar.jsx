import { useState } from "react";
import MainContent from "./MainContent";

function Sidebar() {

  const [fleetData, setFleetData] = useState({
    vehicleRegistrationNumber: "",
    category: "",
    DriverName: "",
    AvailabilityStatus: "",
  })

  const handleClick = () => {
    setFleetData(fleetData);
  }
  return (
    <>
      <h2>This is Sidebar</h2>
      <form action="">
        <input type="text" placeholder="Enter vehicle registarion number" onChange={(e) => e.target.value}  required/>
        <br />
        <select value="category">
          <option value="">Auto</option>
          <option value="">Car</option>
          <option value="">Truck</option>
          <option value="">Bus</option>
        </select>
        <br />
        <input type="text" placeholder="Driver Name" required />
        <br />
        <select value="Availability Status">
          <option value="Available">Available</option>
          <option value="">Not Available</option>
        </select>
        <br />
        <button onClick={handleClick}>Add Fleet</button>
        {fleetData.map((item) => (
          <MainContent item={item} />
        ))}
      </form>
    </>
    )
}
export default Sidebar;
