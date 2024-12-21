import '../styles/interests.css';
import InterestIcons from "../images/interests.png";
function Interests() {
  return (
    <>
        <div className="interest-container">
            <div class="interest-left">
                <div class="interest-title">Where do my passions lie?</div>
                <div class="interest-description">this is a description this is a description this is a description this is a description this is a description this is a description </div>
            </div>
            <div class="interest-right">
                <img class="interest-pic" src={InterestIcons}></img>
            </div>

        </div>

    </>
  );
}

export default Interests;
