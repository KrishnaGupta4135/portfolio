import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll.js";
import { Link } from "react-router-dom";

export const Home = () => {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const certRef = useRef(null);
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

  useAnimateOnScroll(certRef, {
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
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I specialize in AI/ML solutions, conversational AI, web development, and data analysis.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "I have expertise in Python, FastAPI, Flask, Langchain, PostgreSQL, Streamlit, and deep learning frameworks.",
    },
    {
      question: "Are you open to freelance projects?",
      answer:
        "Yes! I’m always excited to work on innovative projects that align with my expertise.",
    },
  ];
  const certs = [
    {
      question: "Microsoft Certified Azure Fundamentals",
      answer:
        "I specialize in AI/ML solutions, conversational AI, web development, and data analysis.",
    },
    {
      question: "Data Science (ML & AI) – E&ICT Academy, IIT Kanpur",
      answer:
        "I have expertise in Python, FastAPI, Flask, Langchain, PostgreSQL, Streamlit, and deep learning frameworks.",
    },
    {
      question:
        "Innovations in Artificial Intelligence in Biotechnology and Health Care",
      answer:
        "Yes! I’m always excited to work on innovative projects that align with my expertise.",
    },
  ];

  return (
    <div className="space-y-20">
      <section ref={headerRef} className="text-center">
        <h2 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Passionate about blending AI and technology to create user-centric
          solutions
        </p>
      </section>

      <section ref={aboutRef} className="bg-gray-800/50 rounded-xl p-8">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="text-gray-300 leading-relaxed">
          As a Data Science enthusiast and skilled developer, I specialize in
          harnessing the power of Artificial Intelligence, Machine Learning, and
          Web Development to craft innovative, functional solutions. My journey
          began with my passion for analyzing datasets and building intuitive
          applications, which has now evolved into leading complex projects that
          bridge technology and user needs. <br />
          <br />
          <p>
            With hands-on experience in tools like Python, Langchain, FastAPI,
            and PostgreSQL, I strive to solve real-world problems with
            creativity and precision.
          </p>
        </p>
      </section>

      <section
        ref={skillsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
      >
        {[
          {
            title: "Frontend",
            items: ["Streamlit", "Flask", "Selenium"],
          },
          {
            title: "Backend",
            items: [
              "PostgreSQL",
              "Python (FastAPI, Flask)",
              "Databricks on Azure",
            ],
          },
          {
            title: "AI & Data Science",
            items: [
              "Machine Learning",
              "Deep Learning",
              "Natural Language Processing (NLP)",
            ],
          },
          {
            title: "Conversational AI",
            items: [
              "Langchain Framework",
              "asa Framework",
              "OpenAI API Integration",
            ],
          },
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

      <section ref={certRef} className="space-y-8">
        <h3 className="text-3xl font-bold text-center">Certifications</h3>
        <div className="space-y-6 max-w-3xl mx-auto">
          {certs.map((faq, index) => (
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
