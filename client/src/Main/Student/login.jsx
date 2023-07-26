import { Link } from "react-router-dom";
import "./login.css"


function Home() {

  return (
    <div className="body">
      <div className="box">
    
          <h2>Login Here</h2>

          <form name="myform"  method="POST" onsubmit="return vfun()">

              <p className="p">Username</p>
              <input className="input" type="text" required="" name="uname" placeholder="Enter Username"></input>

              <p className="p">Password</p>
              <input className="input" type="password" required="" name="upswd" placeholder="Enter Password"></input>

              {/* <Link className="login" to="/slogin/student">login</Link> */}
              <div id="ipl"><Link className="ll"  to="/slogin/student">login</Link><br></br><br></br>
   </div>
                <br></br>
              
              <br></br>
      

    </form>
    </div>
</div>
   
  );
}

{/* <div>
<h1>This is the Login  page</h1>
<Link to="/slogin/student">login</Link><br></br>
</div> */}
export default Home;


