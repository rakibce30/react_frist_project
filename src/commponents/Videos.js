import Video from "./Video";
import Classes from "../styles/Videos.module.css";
import {Link} from "react-router-dom";

export default function Videos(){
    return (
        <div class={Classes.videos}>
            <Link to="/quiz"><Video/></Link>
            <Link to="/quiz"><Video/></Link>
            <Link to="/quiz"><Video/></Link>
            <Link to="/quiz"><Video/></Link>
            <Link to="/quiz"><Video/></Link>
            <Link to="/quiz"><Video/></Link>
            <Link to="/quiz"><Video/></Link>
            <Link to="/quiz"><Video/></Link>
            <Link to="/quiz"><Video/></Link>

        </div>
        
    );
}