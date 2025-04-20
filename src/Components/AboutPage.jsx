import "./AboutPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import AboutImg from "../assets/About-img.png";

function AboutPage() {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <div className="about-heading">
          <FontAwesomeIcon icon={faUser} id="head-icon" />
          <h2>About Me</h2>
        </div>
        <div className="about-details">
          <div className="about-privacy">
            <div id="about-img">
              <img src={AboutImg} alt="About Image" />
            </div>
            <div id="privacy-imp">
              <p><span>Age: 23</span></p>
              <p><span>Phone: 9381945461</span></p>
              <p><span>Email: sushvanthdudgundi@gmail.com</span> </p>
            </div>
          </div>
          <div className="about-info">
            <div id="sub-heading">
              <h3>I'm Sushvanth Dudgundi</h3>
              <p>Web Developer | Data Analyst | MERN Stack Developer</p>
            </div>
            <div id="info-details">
              <p>
                A passionate and self-motivated aspirant with a strong interest
                in Web Development and Data Analysis, constantly exploring new
                technologies and improving skills through hands-on practice.
                Skilled in Java, Python, JavaScript, MERN Stack, Power BI,
                Tableau, and Excel, with a solid foundation in both frontend and
                backend development, as well as data visualization.
              </p>
              <p>
                Currently on the lookout for exciting opportunities to
                contribute, grow, and continue learning in a dynamic work
                environment. The short-term goal is to secure a role in a
                reputable company with a great package, while the long-term
                vision is to take on leadership responsibilities and move into a
                managerial role.
              </p>
              <p>
                Outside the tech world, enjoy watching movies and dabbling in
                video editing—always curious, always learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
