"use client";
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

function Transition({ children }) {
  return (
    <AnimatePresence>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0}}
      className="flex w-full "
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default Transition
