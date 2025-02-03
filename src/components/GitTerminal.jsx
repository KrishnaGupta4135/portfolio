import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Terminal } from "lucide-react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const GitTerminal = ({ name }) => {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([
    'Type "help" to see available commands',
  ]);
  const navigate = useNavigate();
  const location = useLocation();
  const terminalRef = useRef(null);
  const textRef = useRef(null);
  const timelineRef = useRef(null);
  const outputContainerRef = useRef(null);
  const cursorRef = useRef(null);

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
    initializeTypingAnimation();
  }, [location.pathname]);

  const initializeTypingAnimation = () => {
    const titles = ["Full Stack Developer", "UI/UX Designer", "Problem Solver"];
    const baseText = `${name}\nI am a `;

    if (!textRef.current) return;

    // Kill existing timeline if it exists
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Create new timeline
    const tl = gsap.timeline({ repeat: -1 });
    timelineRef.current = tl;

    // Set initial state
    tl.set(textRef.current, { text: baseText });
    tl.set(cursorRef.current, { opacity: 1 });

    // Create typing effect for each title
    titles.forEach((title, index) => {
      // Type the title
      tl.to(textRef.current, {
        duration: 2,
        text: baseText + title,
        ease: "none",
      });

      // Pause at full text
      tl.to({}, { duration: 1.8 });

      // Delete the title (but keep the base text)
      if (index !== titles.length - 1) {
        tl.to(textRef.current, {
          duration: 1,
          text: baseText,
          ease: "none",
        });
      }
    });

    // Blink cursor throughout animation
    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
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

      <div className="mb-4 whitespace-pre-line min-h-[60px]">
        <span ref={textRef}></span>
        <span ref={cursorRef} className="text-green-400">
          |
        </span>
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
