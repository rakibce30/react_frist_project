import Illustration from "../Illustration";
import Form from "../Form";
import Classes from "../../styles/Login.module.css";
import Textinput from "../Textinput";
import Button from "../Button";
import {Link} from "react-router-dom";

export default function Signup() {  
    return (
        <>
            <h1>Login to your account</h1>
            <div class="column">
                <Illustration />
                <Form className={`${Classes.login}`}>
                    <Textinput type="email" Placeholder="Enter your Email" icon="alternate_email"/>
                    <Textinput type="password" Placeholder="Enter your Password" icon="lock"/>
                
                    <Button><span>Login</span></Button>
                    <div className="info">
                        Don't have an account? <Link to="/signup">Signup</Link> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}