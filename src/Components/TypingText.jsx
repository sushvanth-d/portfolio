import { useState, useEffect } from "react";
import "./TypingText.css";

function TypingText() {
  const roles = ["Web Development", "Data Analysis", "Software Engineering"];
  const [index, setIndex] = useState(0); // current role index
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150); // typing speed

  useEffect(() => {
    const currentRole = roles[index];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, prev.length - 1));
        setSpeed(50);
      } else {
        setText((prev) => currentRole.slice(0, prev.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <p>
      I'm into <span className="typing-span">{text}</span>
      <span className="cursor">|</span>
    </p>
  );
}

export default TypingText;