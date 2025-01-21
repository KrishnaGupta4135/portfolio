import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll.js";
import { Link } from "react-router-dom";

export const Home = () => {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const faqRef = useRef(null);
  const footerRef = useRef(null);

  // Initial animations
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  // Scroll animations
  useAnimateOnScroll(aboutRef, {
    fromVars: { opacity: 0, y: 50 },
    duration: 1,
    start: "top center+=100",
  });

  useAnimateOnScroll(skillsRef, {
    fromVars: { opacity: 0, y: 50 },
    duration: 1,
    start: "top center+=100",
  });

  useAnimateOnScroll(projectsRef, {
    fromVars: { opacity: 0, y: 50 },
    duration: 1,
    start: "top center+=100",
  });

  useAnimateOnScroll(faqRef, {
    fromVars: { opacity: 0, y: 50 },
    duration: 1,
    start: "top center+=100",
  });

  useAnimateOnScroll(footerRef, {
    fromVars: { opacity: 0, y: 20 },
    duration: 0.8,
    start: "top bottom-=50",
  });

  const featuredProjects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/api/placeholder/400/300",
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task management application",
      tech: ["Vue", "Firebase", "Tailwind"],
      image: "/api/placeholder/400/300",
    },
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I specialize in full-stack web development, responsive design, and modern JavaScript applications.",
    },
    {
      question: "What's your preferred tech stack?",
      answer:
        "I primarily work with React, Node.js, and modern JavaScript frameworks, but I'm adaptable to project requirements.",
    },
    {
      question: "Do you take on freelance projects?",
      answer:
        "Yes, I'm open to freelance opportunities that align with my expertise and schedule.",
    },
  ];

  return (
    <div className="space-y-20">
      <section ref={headerRef} className="text-center">
        <h2 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Passionate about creating beautiful and functional web experiences
        </p>
      </section>

      <section ref={aboutRef} className="bg-gray-800/50 rounded-xl p-8">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="text-gray-300 leading-relaxed">
          With over 5 years of experience in web development, I specialize in
          creating responsive, user-friendly applications. My journey in tech
          started with a simple HTML page and has evolved into building complex
          full-stack applications.
        </p>
      </section>

      <section
        ref={skillsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {[
          { title: "Frontend", items: ["React", "Vue", "TypeScript"] },
          { title: "Backend", items: ["Node.js", "Python", "MongoDB"] },
          { title: "Tools", items: ["Git", "Docker", "AWS"] },
        ].map((category) => (
          <div key={category.title} className="bg-gray-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4">{category.title}</h4>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li key={item} className="text-gray-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section ref={projectsRef} className="space-y-8">
        <h3 className="text-3xl font-bold text-center">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
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
                <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
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
      </section>

      <section ref={faqRef} className="space-y-8">
        <h3 className="text-3xl font-bold text-center">FAQ</h3>
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors"
            >
              <h4 className="text-xl font-bold mb-2">{faq.question}</h4>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <footer ref={footerRef} className="text-center py-8 text-gray-400">
        <p>
          Made by{" "}
          <Link to={"https://github.com/Rohan-Raidani"} target="_blank">
            {" "}
            <span className="text-purple-500"> Rohan Raidani</span>
          </Link>
          {/* <span className="text-red-500">♥</span> */}
        </p>
      </footer>
    </div>
  );
};
