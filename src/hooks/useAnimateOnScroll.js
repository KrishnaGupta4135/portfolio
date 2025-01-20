// src/hooks/useAnimateOnScroll.js
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useAnimateOnScroll = (elementRef, options = {}) => {
  useEffect(() => {
    const element = elementRef.current;

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        y: options.yOffset || 50,
        ...options.fromVars,
      },
      {
        opacity: 1,
        y: 0,
        duration: options.duration || 1,
        delay: options.delay || 0,
        ease: options.ease || "power2.out",
        scrollTrigger: {
          trigger: element,
          start: options.start || "top bottom-=100",
          toggleActions: options.toggleActions || "play none none reverse",
          ...options.scrollTrigger,
        },
        ...options.toVars,
      }
    );

    return () => {
      animation.kill();
    };
  }, [options]);
};
