"use client";

import { useEffect, useState } from "react";

const Typewriter = () => {
  const sentences = [
    "Front-End Devloper",
    "JavaScript Devloper",
    "Deep Learning Engineer",
    "Responsive Web Developer",
    // "Explore all the features we offer.",
    // "Enjoy your experience and have fun!",
  ];

  const [displayText, setDisplayText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex];

    if (isDeleting) {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 50); // deleting speed
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setSentenceIndex((prev) => (prev + 1) % sentences.length); // Move to next sentence
        const timeout = setTimeout(() => {
          setCharIndex(0); // Reset charIndex for next sentence
          setDisplayText(""); // Clear displayText
        }, 1000); // pause before typing next sentence
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex < currentSentence.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentSentence.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        }, 100); // typing speed
        return () => clearTimeout(timeout);
      } else {
        // Start deleting after typing is done
        setIsDeleting(true);
      }
    }
  }, [charIndex, sentenceIndex, isDeleting]);

  return (
    <div
      style={{
        fontFamily: "Courier New",
        whiteSpace: "pre",
        borderRight: "2px solid",
        display: "inline-block",
      }}
    >
      {displayText}
    </div>
  );
};

export default Typewriter;
