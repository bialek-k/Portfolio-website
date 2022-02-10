import ProjectItem from "./ProjectItem";

import sucharPhoto from "../assets/suchar-romana.png";
import WeatherApp from "../assets/weather-app.png";
import PortfolioWebsite from "../assets/portfolio-website.png";

const ProjectsList = () => {
  return (
    <>
      <ProjectItem
        img={sucharPhoto}
        title={"Suchar Romana"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lavbore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
        }
        tech={"HTML CSS JavaScript React"}
      />
      <ProjectItem
        img={WeatherApp}
        title={"Weather App"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lavbore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
        }
        tech={"HTML CSS JavaScript React"}
        rev
      />
      <ProjectItem
        img={PortfolioWebsite}
        title={"Portfolio Website"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lavbore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
        }
        tech={"HTML CSS JavaScript React Next.js"}
      />
    </>
  );
};

export default ProjectsList;
