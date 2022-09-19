import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IProps {
  isVisible: boolean;
}

function randomQuote() {
  let quotes: string[] = [
    "You are my sunshine, My only sunshine",
    "I missed you.",
    "Play with me",
    "It's just a game, mostly.",
    "This game is not suitable for children or those who are easily disturbed?",
    "sdfasdklfgsdfgsgoinrfoenlvbd",
    "null",
    "I have granted kids to hell",
    "PM died for this.",
    "It was only partially your fault.",
    "This game is not suitable for children or those who are easily dismembered.",
    "Don't forget to backup Monika's character file.",
  ];

  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function Transition({ isVisible }: IProps) {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(randomQuote());
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="z-[100] absolute flex flex-col min-h-screen  min-w-full bg-cover bg-center bg-[#1e1e2e] text-[#cdd6f4] justify-center items-center"
        >
          <p className="relative text-[#cdd6f4] text-3xl">{quote}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
