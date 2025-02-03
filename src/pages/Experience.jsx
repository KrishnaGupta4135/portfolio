import React, { useRef } from "react";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

export const Experience = () => {
  const timelineRef = useRef(null);

  useAnimateOnScroll(timelineRef, {
    fromVars: { opacity: 0, x: -50 },
    duration: 1,
    stagger: 0.3,
    start: "top center+=100",
  });

  const experiences = [
    {
      company: "Dotsquares Pvt. Ltd., Jaipur, Rajasthan",
      role: "Associate Programmer (AI/ML Department)",
      period: "August 2023 – Present",
      description: "Description ....",
      achievements: [
        "Spearheaded the ESG Project (GetGPT) by developing a Langchain-based chatbot using OpenAI APIs for versatile user query handling.",
        "Built a Streamlit web app to enable user interactions with GetGPT, incorporating database-driven, internet-search, and LLM-based response mechanisms.",
        "Automated data extraction from news websites, storing datasets in PostgreSQL on Databricks Azure Portal.",
        "Developed the Career Companion Chatbot (C3Bot), featuring an AI-powered resume generator, customization options, Rasa-based chatbot integration, and Selenium-based job automation.",
      ],
    },
    {
      company: "Axis India Machine Learning, Jaipur, Rajasthan",
      role: "Data Science Intern",
      period: "May 2023 – July 2023",
      description:
        "Gained hands-on experience in Deep Learning through research paper implementation and real-world challenges.",
      achievements: [
        "NIH Chest Classification Project: Created a web app for chest X-ray disease detection with localization, leveraging deep learning and image processing techniques.",
        "Monkey Species Classification: Built a high-accuracy classification system using VGG16 and VGG19 CNNs, making species identification user-friendly and effective.",
      ],
    },
  ];

  return (
    <div className="w-full ml-10 flex-1">
      <div className="space-y-6 content-center" ref={timelineRef}>
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl p-6 w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">{exp.company}</h3>
                <p className="text-purple-400">{exp.role}</p>
              </div>
              <span className="text-gray-400">{exp.period}</span>
            </div>
            <p className="text-gray-300 mb-4">{exp.description}</p>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-300 flex items-start gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
