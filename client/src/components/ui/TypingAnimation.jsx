import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ 
  texts = ["Unleash the Beast Within 🥊"], 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseTime = 2000,
  className = ""
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer;

    if (isPaused) {
      timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        timer = setTimeout(() => {
          setCurrentText(prev => prev.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      const targetText = texts[currentTextIndex];
      if (currentText === targetText) {
        setIsPaused(true);
      } else {
        timer = setTimeout(() => {
          setCurrentText(prev => targetText.slice(0, prev.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;