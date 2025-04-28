// AdminDash.js
import Header from "../Header";
import AllTasks from "./AllTasks";
import CreateTask from "./CreateTask";

function AdminDash({handleLogout}:any) {
  return (
    <div className="flex flex-col max-h-screen">
     {/* <Header onLogout={handleLogout} /> */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden p-10">
        <div className="md:w-1/2 p-3">
          <CreateTask />
        </div>
        <div className="md:w-1/2 p-4 overflow-y-auto">
          <AllTasks />
        </div>
      </div>
    </div>
  );
}

export default AdminDash;