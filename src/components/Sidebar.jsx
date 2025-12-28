import { useState } from "react";
import MainContent from "./MainContent";

function Sidebar() {

  const [fleetData, setFleetData] = useState({
    number: "",
    category: "",
    DriverName: "",
    AvailabilityStatus: "",
  })
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    setSubmittedData(fleetData);
  }
  const handleChange = () => {
    const { name, value } = e.target;
    setFleetData({...fleetData, [name]: value})
  }

  return (
    <>
      <h2>This is Sidebar</h2>
      <form action="">
        <input type="text" name="name" placeholder="Enter vehicle registarion number"
          onChange={handleChange}
          required />
        <br />
        <select value="category">
          <option value="">Auto</option>
          <option value="">Car</option>
          <option value="">Truck</option>
          <option value="">Bus</option>
        </select>
        <br />
        <input type="text" name="name" placeholder="Driver Name"
          onChange={handleChange}
          required />
        <br />
        <select value="Availability Status">
          <option value="Available">Available</option>
          <option value="">Not Available</option>
        </select>
        <br />
        <button onClick={handleSubmit}>Add Fleet</button>
      </form>

      {submittedData && (
        <>
        <h3>Submitted Data</h3>
          <p>Number :{submittedData.name} </p>
          <p>Name: {submittedData.name}</p>
          </>
      )}
    </>
    )
}
export default Sidebar;
