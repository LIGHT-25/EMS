import { BiColor } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Sidebar = ({changeUser, data }) => {

  const logOut = () => {
    localStorage.setItem('loggedInUser', "");
    console.log("Doing Logout");
    changeUser("");
  };

  return (
    <div className="h-1 w-60 bg-gray-900 text-white flex flex-col p-5">
      <div className="row" ><h1 className="text-2xl font-bold mb-6">DashBoard</h1></div>

      <nav className="flex flex-col gap-4">
        <Link to="/AdminDashBoard" className="hover:text-blue-400">📊 AdminDashBoard</Link>
        <Link to="/EmployeeDashBoard" className="hover:text-blue-400">👥 Employees</Link>
        <Link to ="/Department" className="hover:text-blue-400">📝 Department</Link>
        <Link to="/leave" className="hover:text-blue-400">🗓 Leaves</Link> 
        <Link to="/salary" className="hover:text-blue-400">💰 salary</Link>

      </nav>
    </div>
  );
};

export default Sidebar;
