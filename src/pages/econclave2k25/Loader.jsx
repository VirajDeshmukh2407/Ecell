"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Loader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // Adjust time as needed

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-md aspect-[9/16]">
              {/* Door frame */}
              <div className="absolute inset-0 border-4 border-yellow-500 rounded-t-xl"></div>

              {/* Left door */}
              <motion.div
                className="absolute left-0 top-0 w-1/2 h-full bg-black border-r-2 border-yellow-500 rounded-tl-xl origin-left shadow-[0px_0px_20px_5px_rgba(255,223,0,0.6)]"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 90 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              ></motion.div>

              {/* Right door */}
              <motion.div
                className="absolute right-0 top-0 w-1/2 h-full bg-black border-l-2 border-yellow-500 rounded-tr-xl origin-right shadow-[0px_0px_20px_5px_rgba(255,223,0,0.6)]"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: -90 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              ></motion.div>

              {/* Door knob */}
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-yellow-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  )
}

export default Loader
