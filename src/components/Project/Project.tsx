import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">

                 </div>
            </header>
            <div className="body">
              <h3>Complexity MAtrix ( Client -Tata Motors )
              </h3>
              <p> Developed and maintained a web application for Tata Motors employees to efficiently manage inventory and automotive design data. The application enables users to dynamically add, view, and delete data exported from Excel, ensuring seamless inventory tracking on a single platform. It also provides real-time insights into available parts, improving inventory management and operational efficiency.

              The system is designed with three user roles: Electric Wiring Designers, Suppliers, and Team Leads, each with specific access controls and responsibilities. Designers can create and manage tabular data containing critical information related to automotive vehicle design and part details used in specific vehicle models. Suppliers can update inventory statuses, while Team Leads oversee and manage data flow across different user levels..</p></div>
            {/* <footer> <ul className="tech-list"> <li>React JS</li> <li>Jest</li> </ul> </footer> */}
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
              <a 
            href="https://mocingbird.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: "white", fontWeight: 600, textDecoration: "none",fontStyle:"italic" }}
          >
            Project URL
          </a>
              </div>
            </header>
            <div className="body">
              <h3>Mocingbird ( Client - George US )</h3>
              <p>
              Mocingbird is the web application for to US doctors..This app helps doctors to manage their state
              licenses, board certification and they can also upload on the app.
              It also remind them to update their license within due date..</p>
            </div>
           
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">

              </div>
            </header>
            <div className="body">
              <h3>Parachute ( Client - Clarigo Infotech )</h3>
              <p>
              Parachute is the web application to search Nannys or Babysitters by parents. My role in this project to
                make responsive design, API integration, also handle the routes of the components with check of the
                token for Authentication and make the app more user friendly.</p>
            </div>
            
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}