import Checkbox from "./Checkbox";
import Classes from "../styles/Answers.module.css";

export default function Answers(){
    return (
        <div className={Classes.answers}>
            <Checkbox className={Classes.answer} text="Test Checkbox"/>
            <Checkbox className={Classes.answer} text="Test Checkbox"/>
            <Checkbox className={Classes.answer} text="Test Checkbox"/>
            <Checkbox className={Classes.answer} text="Test Checkbox"/>
            <Checkbox className={Classes.answer} text="Test Checkbox"/>
            <Checkbox className={Classes.answer} text="Test Checkbox"/>
            <Checkbox className={Classes.answer} text="Test Checkbox"/>
            <Checkbox className={Classes.answer} text="Test Checkbox"/>
            <Checkbox className={Classes.answer} text="Test Checkbox"/>
            <Checkbox className={Classes.answer} text="Test Checkbox"/>
        </div>
        
    );
}