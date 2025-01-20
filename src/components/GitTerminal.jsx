import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Terminal } from "lucide-react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

const GitTerminal = ({ name }) => {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([
    'Type "help" to see available commands',
  ]);
  const [currentTitle, setCurrentTitle] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const terminalRef = useRef(null);
  const textRef = useRef(null);
  const timelineRef = useRef(null);
  const outputContainerRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    if (outputContainerRef.current) {
      outputContainerRef.current.scrollTop =
        outputContainerRef.current.scrollHeight;
    }
  }, [output]);

  // Reset animation on route change
  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    setCurrentTitle("");
    initializeTypingAnimation();
  }, [location.pathname]);

  // Enhanced typing effect using GSAP
  const initializeTypingAnimation = () => {
    const titles = ["Full Stack Developer", "UI/UX Designer", "Problem Solver"];
    const baseText = `${name}\nI am a `;

    // Create a repeating timeline
    timelineRef.current = gsap.timeline({ repeat: -1 });

    // Set initial text
    timelineRef.current.set(textRef.current, { text: baseText });

    // Add animations for each title
    titles.forEach((title) => {
      // Type the title
      timelineRef.current.to(textRef.current, {
        duration: title.length * 0.1,
        text: baseText + title,
        ease: "none",
      });

      // Pause at the end
      timelineRef.current.to({}, { duration: 1.5 });

      // Delete the title
      timelineRef.current.to(textRef.current, {
        duration: title.length * 0.05,
        text: baseText,
        ease: "none",
      });
    });
  };

  // Initialize typing animation
  useEffect(() => {
    initializeTypingAnimation();

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [name]);

  const commands = {
    help: () => [
      "Available commands:",
      "help - Show this help message",
      "home - Go to home page",
      "projects - View projects",
      "experience - View experience",
      "contact - Contact page",
      "clear - Clear terminal",
    ],
    home: () => {
      navigate("/");
      return ["Navigating to Home..."];
    },
    projects: () => {
      navigate("/projects");
      return ["Navigating to Projects..."];
    },
    experience: () => {
      navigate("/experience");
      return ["Navigating to Experience..."];
    },
    contact: () => {
      navigate("/contact");
      return ["Navigating to Contact..."];
    },
    clear: () => {
      setTimeout(() => {
        setOutput(['Type "help" to see available commands']);
      }, 100);
      return [];
    },
  };

  const handleCommand = (e) => {
    if (e.key === "Enter" && command.trim()) {
      const newOutput = [...output, `$ ${command}`];
      const commandFn = commands[command.toLowerCase().trim()];

      if (commandFn) {
        const commandOutput = commandFn();
        if (command.toLowerCase() !== "clear") {
          newOutput.push(...commandOutput);
          setOutput(newOutput);

          // Animate new output lines
          gsap.from(`.output-line-${output.length}`, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            stagger: 0.1,
          });
        }
      } else {
        newOutput.push(`Command not found: ${command}`);
        setOutput(newOutput);
      }

      setCommand("");
    }
  };

  return (
    <div
      ref={terminalRef}
      className="w-full h-[32rem] bg-gray-900 text-green-400 p-4 font-mono rounded-lg shadow-lg"
    >
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-700">
        <Terminal size={20} />
        <span className="font-bold">GitBash Terminal</span>
      </div>

      <div ref={textRef} className="mb-4 whitespace-pre-line min-h-[60px]">
        <span className="animate-pulse">|</span>
      </div>

      <div
        ref={outputContainerRef}
        className="space-y-2 max-h-64 overflow-y-auto pr-2
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-gray-800
          [&::-webkit-scrollbar-thumb]:bg-green-500
          [&::-webkit-scrollbar-thumb]:rounded-full
          [scrollbar-width]:thin
          [scrollbar-color]:theme(colors.green.500)_theme(colors.gray.800)"
      >
        {output.map((line, i) => (
          <div key={i} className={`break-all output-line-${i}`}>
            {line}
          </div>
        ))}
      </div>

      <div className="flex items-center mt-2">
        <span className="mr-2">$</span>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyPress={handleCommand}
          className="bg-transparent focus:outline-none flex-1 text-green-400"
          autoFocus
        />
      </div>
    </div>
  );
};

export default GitTerminal;
