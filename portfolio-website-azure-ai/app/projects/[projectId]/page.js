"use client";

const ProjectDetails = ({ params }) => {
  const { projectId } = params;

  // Example project data (replace with actual data or fetch from an API)
  const projects = {
    portfolio: {
      title: "Portfolio Website",
      description: "A personal portfolio website built with Next.js.",
      image: "/images/portfolioimg.png",
      technologies: ["Next.js", "React", "CSS"],
    },
    falldetection: {
      title: "Fall Detection System",
      description: "An IoT-based fall detection system for elderly care.",
      image: "/images/falldetect.png",
      technologies: ["IoT", "Python", "TensorFlow"],
    },
    carpooling: {
      title: "Carpooling Platform",
      description: "A blockchain-based decentralized carpooling platform.",
      image: "/images/carpooling.jpg",
      technologies: ["Blockchain", "Solidity", "React"],
    },
    chatbot: {
      title: "AI Chatbot",
      description: "An AI-powered chatbot for answering user queries.",
      image: "/images/aichatbot.png",
      technologies: ["AI", "Python", "Flask"],
    },
  };

  const project = projects[projectId];

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="project-details container">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} width="100%" />
      <p>{project.description}</p>
      <h3>Technologies Used:</h3>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;