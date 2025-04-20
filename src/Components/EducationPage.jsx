import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import VnrImg from "../assets/vnr.jpeg";
import collegeImg from "../assets/college.webp";
import "./EducationPage.css";

function EduPage() {
  return (
    <div className="eduContainer" id="education">
      <div className="eduContent">
        <div className="eduHead">
          <FontAwesomeIcon icon={faGraduationCap} className="eduIcon" />
          <h3>Education</h3>
        </div>
        <div className="eduInfo">
          <div className="eduSet">
            <div className="eduImg">
              <img src={VnrImg} alt="VNR Vjiet" />
            </div>
            <div className="eduDetails">
              <h3>Bachelor of Technology in Electronics and Communication</h3>
              <h5>VNR VJIET, Nizampet | ECE</h5>
              <h5>2019 - 2023</h5>
            </div>
          </div>
          <div className="eduSet">
            <div className="eduImg">
              <img src={collegeImg} alt="Sri Chaitanya" />
            </div>
            <div className="eduDetails">
              <h3>Intermediate / 12th Class</h3>
              <h5>Sri Chaitanya College | MPC</h5>
              <h5>2017 - 2019</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EduPage;
