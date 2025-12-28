import MainContent from "./MainContent";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AdminPage() {
  return (
    <>
      <h1>This is Admin Page</h1>
      <Navbar />
      <Sidebar />
      <MainContent />
    </>
    )
}
export default AdminPage;
