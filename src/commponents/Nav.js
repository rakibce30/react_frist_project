import Classes from "../styles/Nav.module.css";
import Account from "./Account";
import logo from "../asset/images/logo-bg.png";
import {Link} from "react-router-dom";

export default function Nav() {
    return(
        <nav className={Classes.nav}>
            <ul>
                <li>
                <Link to="/" className={Classes.brand}>
                    <img src={logo} alt="Learn with Sumit Logo" />
                    <h3>Learn with Sumit</h3>
                </Link>
                </li>
            </ul>
        <Account/>
        </nav>
    );

  }