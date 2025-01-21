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
      company: "Tech Solutions Inc",
      role: "Senior Frontend Developer",
      period: "2021 - Present",
      description:
        "Leading frontend development team, implementing new features",
      achievements: [
        "Reduced load time by 40%",
        "Implemented new design system",
        "Mentored junior developers",
      ],
    },
    {
      company: "Digital Innovations",
      role: "Full Stack Developer",
      period: "2019 - 2021",
      description: "Full stack development with React and Node.js",
      achievements: [
        "Built microservices architecture",
        "Improved API response time",
        "Implemented CI/CD pipeline",
      ],
    },
    {
      company: "StartUp Co",
      role: "Junior Developer",
      period: "2017 - 2019",
      description: "Frontend development with Vue.js",
      achievements: [
        "Developed responsive UI components",
        "Integrated third-party APIs",
        "Optimized application performance",
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
