// src/pages/Projects.jsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

// Projects.jsx
export const Projects = () => {
  const projectsRef = useRef(null);

  useAnimateOnScroll(projectsRef, {
    fromVars: { opacity: 0, y: 30 },
    duration: 0.8,
    stagger: 0.2,
    start: "top center+=100",
    toggleActions: "play none none none", // Prevents bounce effect
  });

  const projects = [
    {
      title: "LangChain-Based Chatbot - GetGPT (ESG Project)",
      description:
        "A Streamlit-based web application to serve as the chatbot's interface, enabling seamless interaction with the GetGPT Assistant.",
      tech: [
        "LangChain",
        "OpenAI API",
        "Streamlit",
        "PostgreSQL",
        "SERPAPI",
        "Databricks Azure Portal",
        "Python",
      ],
      image: "/images/LangChain-Based-Chatbot.png",
    },
    {
      title: "Career Companion ChatBot (C3Bot)",
      description:
        "An advanced career companion chatbot and dynamic website designed to assist users in navigating their professional journey with ease and efficiency.",
      tech: [
        "Flask",
        "Rasa Framework",
        "AI/ML",
        "Selenium",
        "Google APIs (Gmail & Calendar)",
        "Python",
      ],
      image: "/images/ai-chatbot-companion.png",
    },
    {
      title: "Music Recommendation System ",
      description:
        "It is designed to analyze users' facial expressions and provide personalized music recommendations based on their emotional state.",
      tech: [
        "OpenCV",
        "TensorFlow/Keras",
        "Python",
        "Music Streaming APIs",
        "Flask/Streamlit",
      ],
      image: "/images/Music-Recommendation-System.jpeg",
    },
    {
      title: "Email Spam Classification System",
      description:
        "It accurately identify and filter spam emails using robust text preprocessing and machine learning techniques.",
      tech: [
        "Python",
        "NLTK",
        "Scikit-learn",
        "Machine Learning (Naive Bayes, SVM, Random Forest)",
      ],
      image: "/images/Email-Spam-Classification-System.png",
    },
    // {
    //   title: "Portfolio Website",
    //   description: "Personal portfolio with GSAP animations",
    //   tech: ["React", "GSAP", "Tailwind"],
    //   image: "/images/portfolio.png",
    // },
  ];
  // .concat(
  //   Array(3).fill({
  //     title: "Coming Soon",
  //     description: "More exciting projects in development",
  //     tech: ["???"],
  //     image: "/api/placeholder/400/300",
  //   })
  // );

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={projectsRef}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-500/20 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
