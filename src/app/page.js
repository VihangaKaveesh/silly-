"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ApologyPage() {
  const [clicked, setClicked] = useState(false);
  const [emojis, setEmojis] = useState([]);

  // List of happy & loving emojis ❤️🥰💖✨💞💘💗
  const loveEmojis = ["❤️", "🥰", "💖", "✨", "💞", "💘", "💗", "😍", "💕"];

  useEffect(() => {
    if (clicked) {
      const interval = setInterval(() => {
        setEmojis((prev) => [
          ...prev,
          {
            id: Math.random(),
            x: Math.random() * 100, // Random X position (0% - 100%)
            emoji: loveEmojis[Math.floor(Math.random() * loveEmojis.length)], // Random emoji
          },
        ]);
      }, 200); // New emoji every 500ms

      return () => clearInterval(interval);
    }
  }, [clicked]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-red-400 p-6 overflow-hidden">
      {/* Floating Emojis */}
      {clicked &&
        emojis.map((emoji) => (
          <motion.div
            key={emoji.id}
            initial={{ y: "100vh", opacity: 1, x: emoji.x + "%" }}
            animate={{ y: "-200vh", opacity: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute text-5xl"
          >
            {emoji.emoji}
          </motion.div>
        ))}

      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 2, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="bg-white p-5 rounded-xl shadow-lg text-center z-10 justify-center"
      >
        {clicked ? (
          <motion.div
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 20, type: "spring", stiffness: 5 }}
            className="mt-1"
          >
            <p className="text-lg font-semibold text-red-500 justify-center">I’m SORRY..</p>
            <p className="text-xl font-bold text-pink-500 m-2 justify-center">And I love you! 💕</p>
          </motion.div>
        ) : (
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setClicked(true)}
            className="mt-1 px-7 py-2 bg-red-500 text-white rounded-full text-lg font-semibold shadow-md transition duration-300 hover:bg-red-600 justify-center"
          >
            Click Me
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}
