import Image from "../asset/images/3.jpg";
import classes from "../styles/MiniPlayer.module.css"

export default function MiniPlayer(){
    return (
        <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
            <span class={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
            <span class={`material-icons-outlined ${classes.close}`}> close </span>
            <img src={Image} alt="Alt Tag" />
        </div>
    );
}