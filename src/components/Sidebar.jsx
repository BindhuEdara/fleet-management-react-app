function Sidebar() {
  return (
    <>
      <h2>This is Sidebar</h2>
      <form action="">
        <input type="text" placeholder="Enter vehicle registarion number" onChange={(e) => e.target.value} />
        <option value="category">
          <input type="text" placeholder="Auto" />
          <input type="text" placeholder="Car" />
          <input type="text" placeholder="Truck" />
          <input type="text" placeholder="Bus" />
        </option>
        <input type="text" placeholder="Driver Name" />
        <option value="Availability Status">
          <input type="text" placeholder="available" />
          <input type="text" placeholder="not available" />
        </option>
      </form>
    </>
    )
}
export default Sidebar;
