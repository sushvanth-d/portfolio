import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Calculator from "../assets/Project-Imgs/Calculator.png";
import Countries from "../assets/Project-Imgs/Countries.png";
import Imdb from "../assets/Project-Imgs/Imdb.png";
import FoodOrder from "../assets/Project-Imgs/FoodOrder.png";
import Todo from "../assets/Project-Imgs/Todo.png";
import "./ProjectPage.css";

import { FaDiagramProject } from "react-icons/fa6";

function ProjectsPage() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="projectContainer" id="projects">
      <div className="projectContent">
        <div className="projectHead">
          <FaDiagramProject className="HeadIcon" />
          <h3>Projects</h3>
        </div>
        <Carousel
          responsive={responsive}
          infinite={false}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          showDots={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {ProjectDetails.map((project, index) => (
            <div className="projectBox" key={index}>
              <h3 className="ProjectTitle">{project.title}</h3>
              <img
                src={project.img}
                alt={project.title}
                className="projectImage"
              />
              <p>{project.desc}</p>
              <div className="projectButtons">
                <a
                  href={project.leftbtnLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="projectBtn">{project.leftbtn}</button>
                </a>
                <a
                  href={project.rightbtnLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="projectBtn">{project.rightbtn}</button>
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

const ProjectDetails = [
  {
    title: "IMDb Data Analysis Using Power BI",
    img: Imdb,
    desc: "Analyzed IMDb movie data using Power BI to uncover trends in production, revenue, and global film industry insights through interactive dashboards.",
    leftbtnLink: "https://github.com/sushvanth-d/IMDb-Data-Analysis",
    leftbtn: "View Report",
    rightbtnLink: "https://github.com/sushvanth-d/IMDb-Data-Analysis/blob/main/IMDB%20Data%20Analysis%20Project%20By%20Sushvanth_D.pbix",
    rightbtn: "Download Dashboard",
  },
  {
    title: "HYDERABAD KITCHEN - FOOD ORDER WEBSITE",
    img: FoodOrder,
    desc: "Created Online Food Order Website called “Hyderabad’s Kitchen” using HTML, CSS, and Java Script.",
    leftbtnLink: "https://sushvanth-d.github.io/Hyderabad-Kitchen/",
    leftbtn: "View Demo",
    rightbtnLink: "https://github.com/sushvanth-d/Hyderabad-Kitchen",
    rightbtn: "View Code",
  },
  {
    title: "Where in the World?",
    img: Countries,
    desc: "Created a ReactJs Website using RESTful Api which displays a detailed list of countries with their information such as population, Region, and Capital.",
    leftbtnLink: "https://countries-list-by-sushvanth.netlify.app/",
    leftbtn: "View Demo",
    rightbtnLink: "https://github.com/sushvanth-d/Countries-List",
    rightbtn: "View Code",
  },
  {
    title: "Calculator App",
    img: Calculator,
    desc: "Created a simple Arthitmetic Calculator using React Js.",
    leftbtnLink: "https://calculator-app-by-sushvanth.netlify.app/",
    leftbtn: "View Demo",
    rightbtnLink:"https://github.com/sushvanth-d/Calculator-App",
    rightbtn: "View Code",
  },
  {
    title: "Todo List App",
    img: Todo,
    desc: "Created a simple Todo List Creation app using React Js.",
    leftbtnLink: "https://todo-app-by-sushvanth.netlify.app/",
    leftbtn: "View Demo",
    rightbtnLink: "https://github.com/sushvanth-d/Todo-App",
    rightbtn: "View Code",
  },
];

export default ProjectsPage;
