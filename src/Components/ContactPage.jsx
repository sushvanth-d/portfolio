import { MdHeadsetMic } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Swal from "sweetalert2";
import "./ContactPage.css";

function ContactPage() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0a8eaab5-4736-448a-bb9f-c9277acad305");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div className="contactContainer" id="contact">
      <div className="contContent">
        <div className="contHead">
          <MdHeadsetMic className="headIcon" />
          <h2>Get in Touch</h2>
        </div>
        <div className="contForm">
          <form onSubmit={onSubmit}>
            <h5>Thank you for visiting my site! I'd love to hear from you.</h5>
            <div className="inputBox">
              <label>Name:</label>
              <input
                type="text"
                className="field"
                placeholder="Enter your name"
                name="name"
                required
              />
            </div>
            <div className="inputBox">
              <label>Email:</label>
              <input
                type="email"
                className="field"
                placeholder="Enter you email address"
                name="email"
                required
              />
            </div>
            <div className="inputBox">
              <label>Message:</label>
              <textarea
                name="message"
                className="fieldMess"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contLinks">
          <a href="#home">
            <p>Home</p>
          </a>
          <a href="#about">
            <p>About</p>
          </a>
          <a href="#skills">
            <p>Skills</p>
          </a>
          <a href="#education">
            <p>Education</p>
          </a>
          <a href="#projects">
            <p>Projects</p>
          </a>
          <a href="#certificates">
            <p>Certificates</p>
          </a>
        </div>
        <div className="contLast">
          <h2>Follow Me</h2>
          <div className="but-icons">
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
      </div>
    </div>
  );
}

export default ContactPage;
