import Illustration from "../Illustration";
import Form from "../Form";
import Classes from "../../styles/Signup.module.css";
import Textinput from "../Textinput";
import Checkbox from "../Checkbox";
import Button from "../Button";
import {Link} from "react-router-dom";

export default function Signup() {  
    return (
        <>
            <h1>Create an account</h1>
            <div class="column">
                <Illustration/>
                <Form className={`${Classes.signup}`}>
                    <Textinput type="text" Placeholder="Enter your Name" icon="person"/>
                    <Textinput type="email" Placeholder="Enter your Email" icon="alternate_email"/>
                    <Textinput type="password" Placeholder="Enter your Password" icon="lock"/>
                    <Textinput type="password" Placeholder="Confirm Password" icon="lock_clock"/>
                    <Checkbox text="I agree to the Terms &amp; Conditions"/>
                    <Button><span>Singup</span></Button>
                    <div className="info">Already have an account? <Link to="/login">Login</Link> instead.</div>
                </Form>
            </div>
        </>
    );
}