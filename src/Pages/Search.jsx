import React, { useState, useEffect, useRef } from "react";

const phrases = ["Search...", "Find your product", "Type to explore", "Looking for something?"];

const TypedPlaceholder = ({ active }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayAfterTyping = 1500;

  useEffect(() => {
    if (!active) {
      setDisplayedText("");
      setCharIndex(0);
      setDeleting(false);
      return;
    }

    let timeout;

    if (!deleting && charIndex < phrases[phraseIndex].length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + phrases[phraseIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!deleting && charIndex === phrases[phraseIndex].length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, delayAfterTyping);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, active]);

  return (
    <span className="absolute left-14 top-1/2 transform -translate-y-1/2 text-gray-400 italic pointer-events-none select-none whitespace-nowrap">
      {displayedText}
      <span className="blinking-cursor">|</span>
      <style>{`
        .blinking-cursor {
          animation: blink 1s infinite step-end;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

const Search = () => {
  const [hovered, setHovered] = useState(false);
  const inputRef = useRef(null);

  return (
    <div className="pt-20 flex justify-center items-center min-h-screen bg-gray-50">
      <div className="relative w-full max-w-xl">
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>

        <input
          ref={inputRef}
          type="text"
          placeholder=""
          aria-label="Search"
          className="w-full pl-14 pr-6 py-4 text-lg text-gray-700 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:shadow-lg transition duration-300 bg-white"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        <TypedPlaceholder active={hovered} />
      </div>
    </div>
  );
};

export default Search;
