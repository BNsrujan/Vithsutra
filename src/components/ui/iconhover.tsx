import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // optional: to merge Tailwind classes

export const IconButton = ({ icon: Icon, active = false, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500",
        active ? "bg-[#1e1e1e] text-orange-500 shadow-[0_0_20px_rgba(255,100,0,0.8)]" :
                 "bg-[#1e1e1e] text-gray-400 hover:text-orange-400 hover:shadow-[0_0_12px_rgba(255,80,0,0.5)]"
      )}
    >
      <Icon className="w-6 h-6" />
    </motion.button>
  );
};