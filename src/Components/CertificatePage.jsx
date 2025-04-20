import { BsPatchCheckFill } from "react-icons/bs";
import PrepInsta from '../assets/Certificates/prepinsta.png'
import Forage from '../assets/Certificates/forage.png'
import Udemy from '../assets/Certificates/Udemy.jpg'
import "./CertificatesPage.css";

function CertificatesPage() {
  return (
    <div className="certificateContainer" id="certificates">
      <div className="certificateContent">
        <div className="certiHead">
        <BsPatchCheckFill className="certHeadIcon" />
          <h3>Certificates</h3>
        </div>
        <div className="certificateInfo">
          <div className="certificateSet">
            <div className="certImg">
              <img src={PrepInsta} alt="Data Analysis - prepinsta" />
            </div>
            <div className="certDetails">
              <h3>Data Analytics</h3>
              <p>PrepInsta | Issued Mar 2025</p>
              <h5>
                Skills: Data Analysis · Data Visualization · Microsoft Excel ·
                Microsoft PowerBI · Tableau
              </h5>
            </div>
          </div>
          <div className="certificateSet">
            <div className="certImg">
              <img src={Forage} alt="Tata Data Visualization - Project" />
            </div>
            <div className="certDetails">
              <h3>TATA Data Visualisation: Empowering Business with Effective Insights Job Simulation</h3>
              <p>Forage | Issued Mar 2025</p>
              <h5>
                Skills: Data Analysis · Data Visualization · Microsoft PowerBI
              </h5>
            </div>
          </div>
          <div className="certificateSet">
            <div className="certImg">
              <img src={Udemy} alt="Web Development Bootcamp" />
            </div>
            <div className="certDetails">
              <h3>The Complete 2023 Web Development Bootcamp</h3>
              <p>Udemy | Issued Apr 2023</p>
              <h5>
                Skills: Web Development · MERN Stack · API
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificatesPage;
