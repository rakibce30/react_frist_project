import Classes from "../styles/Video.module.css";
import image from "../asset/images/3.jpg";

export default function Video() {
    return(
        <a href="quiz.html"
            ><div className={Classes.video}>
              <img src={image} alt="" />
              <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
              <div className={Classes.qmeta}>
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
              </div>
            </div>
          </a>
    );
}