import { Link } from "react-router-dom"
function NevigationBar() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/student-list">Student</Link>
      <Link to="/add-student">Add New Student</Link>
    </div>
  );
}

export default NevigationBar;
