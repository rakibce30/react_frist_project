import Classes from "../styles/Account.module.css";
import {Link} from "react-router-dom";

export default function Account() {
    return(
        <div className={Classes.account}>

            <span className="material-icons-outlined" title="Account">
            login
            </span>
            <Link to="/login">Login</Link>

            <span className="material-icons-outlined" title="Account">
            account_circle
            </span>
            <Link to="/signup">Signup</Link>
            <Link to="/results">Results</Link>
            
            {/* <!-- <span className="material-icons-outlined" title="Logout"> logout </span> --> */}
        </div> 
    );
  }