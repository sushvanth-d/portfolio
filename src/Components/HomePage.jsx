import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import myImage from "../assets/Sushvanth.jpg";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page" id="home">
      <div className="homepage-Container">
        <div className="homepage-content">
          <h1>
            Hi There, <br />
            I'm Sushvanth Dudgundi
          </h1>
          <p>I'm into Web Development</p>
          <div className="but-icons">
            <a href="#about">
              <button>
                About Me
                <FontAwesomeIcon icon={faArrowDown} className="arrow-icon" />
              </button>
            </a>
            <div className="links-icons">
              <a
                href="https://www.linkedin.com/in/sushvanth-d/"
                target="/blank"
              >
                <div className="icon-space">
                  <FontAwesomeIcon icon={faLinkedin} className="follow-icon" />
                </div>
              </a>
              <a href="https://github.com/sushvanth-d" target="/blank">
                <div className="icon-space">
                  <FontAwesomeIcon icon={faGithub} className="follow-icon" />
                </div>
              </a>
              <a href="https://x.com/sushvanth_d22" target="/blank">
                <div className="icon-space">
                  <FontAwesomeIcon
                    icon={faSquareXTwitter}
                    className="follow-icon"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="my-image">
          <img src={myImage} alt="My-Image" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
