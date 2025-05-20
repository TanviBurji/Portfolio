import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Memory Card Game"
              description="A memory card game, often known as a matching or concentration game, is a fun and educational activity designed to test and improve a player’s memory skills. The game typically consists of a set of cards laid face down on a surface, each card having a matching pair."
              ghLink="https://github.com/TanviBurji/Memory_game"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ai-Career-Guidance"
              description="An AI Career Guidance Web App is an intelligent online platform designed to help users make informed career decisions using artificial intelligence technologies. The app typically collects user inputs such as educational background, skills, interests, and career goals, and then uses machine learning algorithms to analyze this data and suggest personalized career paths. It may offer features like aptitude tests, skill assessments, resume reviews, and real-time job market trends to guide users toward the most suitable professions."
              ghLink="https://github.com/TanviBurji/AiCareerGuidance"
              demoLink="https://ai-career-guidance-seven.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Gym-Management-App"
              description="A Gym Management App is a digital solution designed to streamline and automate the day-to-day operations of a fitness center or gym. This app helps gym owners, staff, and members manage various activities efficiently from a single platform."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
