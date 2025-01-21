// // Layout.jsx
// import React from "react";
// import GitTerminal from "./GitTerminal";
// import { useLocation, Link } from "react-router-dom";

// const Layout = ({ children }) => {
//   const location = useLocation();

//   const navigationItems = [
//     { path: "/", label: "Home" },
//     { path: "/projects", label: "Projects" },
//     { path: "/experience", label: "Experience" },
//     { path: "/contact", label: "Contact" },
//   ];

//   const getPageTitle = () => {
//     switch (location.pathname) {
//       case "/":
//         return "Home";
//       case "/projects":
//         return "Projects";
//       case "/experience":
//         return "Experience";
//       case "/contact":
//         return "Contact";
//       default:
//         return "Portfolio";
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black flex flex-col">
//       {/* Navigation Bar */}
//       <nav className="fixed top-0 left-0 right-0 bg-gray-900 z-50">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             <h1 className="text-2xl font-bold text-white">
//               Portfolio<span className="text-purple-500">.</span>
//             </h1>
//             <div className="flex space-x-4">
//               {navigationItems.map((item) => (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   className={`px-3 py-2 rounded-md text-sm font-medium ${
//                     location.pathname === item.path
//                       ? "bg-gray-700 text-white"
//                       : "text-gray-300 hover:bg-gray-700 hover:text-white"
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main content */}
//       <div className="flex-1 pt-16">
//         <header className="w-full bg-gray-900 p-6 mb-8">
//           <h1 className="text-4xl font-bold text-white text-center">
//             {getPageTitle()}
//             <span className="text-purple-500">.</span>
//           </h1>
//         </header>
//         <div className="container mx-auto px-4 pb-16">
//           <div className="flex gap-14">
//             {/* Fixed Terminal */}
//             <div className="w-[28rem] shrink-0">
//               <div className="fixed w-[28rem]">
//                 <GitTerminal name="John Doe" />
//               </div>
//             </div>

//             {/* Page content */}
//             <div className="flex-1 min-h-0">{children}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;
import React, { useState } from "react";
import GitTerminal from "./GitTerminal";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Layout = ({ children }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);

  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/contact", label: "Contact" },
  ];

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/projects":
        return "Projects";
      case "/experience":
        return "Experience";
      case "/contact":
        return "Contact";
      default:
        return "Portfolio";
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-white">
              Portfolio<span className="text-purple-500">.</span>
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === item.path
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsTerminalVisible(!isTerminalVisible)}
                className="p-2 rounded-md text-gray-300 hover:bg-gray-700"
              >
                Terminal
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-300 hover:bg-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === item.path
                        ? "bg-gray-700 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main content */}
      <div className="flex-1 pt-16">
        <header className="w-full bg-gray-900 p-6 mb-8">
          <h1 className="text-4xl font-bold text-white text-center">
            {getPageTitle()}
            <span className="text-purple-500">.</span>
          </h1>
        </header>

        <div className="container mx-auto px-4 pb-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
            {/* Terminal - Desktop Fixed, Mobile Modal */}
            <div
              className={`
              lg:w-[28rem] lg:shrink-0
              ${
                isTerminalVisible
                  ? "fixed inset-0 z-50 p-4 bg-black/90 flex items-center justify-center"
                  : "hidden lg:block"
              }
            `}
            >
              <div
                className={`
                lg:fixed lg:w-[28rem]
                ${isTerminalVisible ? "w-full max-w-2xl relative" : ""}
              `}
              >
                {isTerminalVisible && (
                  <button
                    onClick={() => setIsTerminalVisible(false)}
                    className="absolute -top-1 right-0 p-2 text-white lg:hidden"
                  >
                    <X size={24} />
                  </button>
                )}
                <GitTerminal name="John Doe" />
              </div>
            </div>

            {/* Page content */}
            <div className="flex-1 min-h-0">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
