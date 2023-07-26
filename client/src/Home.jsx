import { Link } from "react-router-dom";
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the website</h1>
      <div className="container">
            <div className="compound-1">
            <Link className="l1" to="/alogin">Admin</Link><br></br>
            </div><br />
            <div className="compound-2">
            
            <Link className="l1" to="/flogin">Faculty</Link><br></br>
            </div><br />
            <div className="compound-3">
              
            <Link className="l1" to="/slogin">Student</Link>
      </div>
</div>
    </div>
  );
}

export default Home;