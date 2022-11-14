import Classes from "../styles/Summary.module.css";
import Image from "../asset/images/success.png";

export default function Summary(){
    return (
        <div className={Classes.summary}>
          <div className={Classes.point}>
            {/* progress bar will be placed here */}
            <p className={Classes.score}>
              Your score is <br />
              5 out of 10
            </p>
          </div>

          <div className={Classes.badge}>
            <img src={Image} alt="Success" />
          </div>
        </div>
    );
}