import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import gtIMG from "../assets/img/gt-website.png";
import aibat from "../assets/img/aibat.png";
import ltpuass from "../assets/img/ltpuass.png";
import riderMonitoring from "../assets/img/rider-monitoring.png";
import marvis from "../assets/img/marvis.png";
import tdms from "../assets/img/tdms.png";
import e_blood from "../assets/img/e-blood.png";
import doc_search from "../assets/img/docsearch.png";
import portfolio from "../assets/img/portfolio.png";
import wwa from "../assets/img/wwa.png";
import food_bazaar from "../assets/img/food_app.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const professional = [
    {
      title: "AI Based Target Classification Software",
      description:
        "Developement of a robust web-based React application utilizing Django and MySQL for backend support with integrating the cutting-edge AI/ML models for precise target detection, enhancing operational efficiency and decision-making.",
      imgUrl: aibat,
    },
    {
      title: "Turbine Data Monitoring System",
      description:
        "Development of the Turbine Data Monitoring System for DRDO-GTRE, featuring a robust FastAPI backend optimized for performance and scalability, alongside a user-friendly React frontend with dynamic data visualization capabilities.",
      imgUrl: tdms,
    },
    {
      title: "Underwate Surveillance System",
      description:
        "Design & Development of a full-stack system software using AI algorithms for autonomous acoustic data analysis and signal classification, integrated with Django APIs and React frontend for comprehensive underwater surveillance and analysis.",
      imgUrl: ltpuass,
    },
  ];

  const freelance = [
    {
      title: "Guardinger Technologies Website Development",
      description:
        "Design & Developed a responsive website for Guardinger Advanced Technologies Pvt. Ltd using React, ensuring clean HTML and CSS coding practices for enhanced user experience.",
      imgUrl: gtIMG,
      link: "https://guardinger.in/",
    },
    {
      title: "MARVIS ",
      description:
        "Design & Development of a Graphical User Interface for existing software of Maritime Vessel Awareness and Identification.",
      imgUrl: marvis,
    },
    {
      title: "False Rider Monitoring System",
      description:
        "Design and Developement of a Spring Boot and React-based full-stack application designed to enhance security and trust in ride-sharing services by tracking and identifying instances of over-stunting or false rider behavior.",
      imgUrl: riderMonitoring,
    },
  ];

  const academic = [
    {
      title: "E-Blood Seva Application",
      description:
        "Developed a seamless full-stack blood service application using Java Spring Boot, React, and MySQL, facilitating efficient management of blood service requests for NGOs, blood banks, donors, and seekers.",
      imgUrl: e_blood,
      link: "https://github.com/Aadesh0296/E-Blood-Seva",
    },
    {
      title: "Lipik - Document Search Engine",
      description:
        "Developed a seamless full-stack blood service application using Java Spring Boot, React, and MySQL, facilitating efficient management of blood service requests for NGOs, blood banks, donors, and seekers.",
      imgUrl: doc_search,
      link: "https://github.com/Aadesh0296/Document-Search-Engine",
    },
    {
      title: "Personal Portfolio",
      description:
        "Design & Developed a responsive personal portfolio website using React, ensuring clean HTML and CSS coding practices for enhanced user experience.",
      imgUrl: portfolio,
      link: "https://work-with-aadesh.github.io/Portfolio/",
    },
    {
      title: "Work With Aadesh Website Developement",
      description:
        "Design & Developed Work With Aadesh a responsive freelancing website using React, ensuring clean HTML and CSS coding practices for enhanced user experience.",
      imgUrl: wwa,
      link: "https://workwithaadesh.000webhostapp.com/",
    },
    {
      title: "Food Bazaar (Food Delivery App)",
      description:
        "Developed Food Bazaar, a cutting-edge food delivery app using MERN stack (MongoDB, Express.js, React, Node.js) with PostgreSQL backend for seamless ordering and delivery tracking.",
      imgUrl: food_bazaar,
      link: "https://github.com/Aadesh0296/Food_Bazaar",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I've developed resilient full-stack software applications
                    using JavaScript, Python, Java, C#, and C++, ensuring
                    security and accuracy for defense organizations. Employing
                    React, Node.js, Angular, Django, Spring, and ASP.Net, I
                    crafted user-friendly interfaces with advanced visualization
                    capabilities. Database management strategies focused on data
                    organization and security, leveraging MySQL, Oracle. AWS
                    services like EC2, S3, Lambda, RDS, and API Gateway enabled
                    scalable and secure deployment, meeting stringent security
                    standards. Real-time communication was optimized using
                    MQTT-like protocols and multiprocessing techniques, while
                    Gunicorn, Nginx, Git, and GitHub facilitated efficient
                    deployment and collaborative coding practices.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Professional Experience
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Freelance</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Personal/Academic</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {professional.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {freelance.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {academic.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="bg-right-proj"
      ></img>
    </section>
  );
};
