import { useEffect, useState } from 'react';

export function useTypingText(words, typingSpeed = 95, pause = 1400) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) {
      return undefined;
    }

    const currentWord = words[wordIndex % words.length];
    const isWordComplete = displayText === currentWord;
    const isWordEmpty = displayText === '';

    const timeout = setTimeout(
      () => {
        if (!isDeleting && isWordComplete) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && isWordEmpty) {
          setIsDeleting(false);
          setWordIndex((currentIndex) => (currentIndex + 1) % words.length);
          return;
        }

        const nextText = isDeleting
          ? currentWord.slice(0, displayText.length - 1)
          : currentWord.slice(0, displayText.length + 1);

        setDisplayText(nextText);
      },
      !isDeleting && isWordComplete ? pause : isDeleting ? typingSpeed / 2 : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, pause, typingSpeed, wordIndex, words]);

  return displayText;
}
