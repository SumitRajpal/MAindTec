/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { animate, motion, useMotionValue } from "framer-motion";
import { Activity, LockIcon, LucideMail } from "lucide-react";
import { useEffect, useState } from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition duration-300 ease-in-out shadow hover:shadow-2xl hover:scale-105 focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
}

export function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none transition text-gray-800 placeholder-gray-400 ${className}`}
    />
  );
}

export default function Index() {
  useEffect(() => {
    document.title = "MAind AI - Empower";
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      animate(x, mousePosition.x - window.innerWidth / 2, { duration: 2, ease: "easeOut" });
      animate(y, mousePosition.y - window.innerHeight / 2, { duration: 2, ease: "easeOut" });
    }, 100);
    return () => clearInterval(interval);
  }, [mousePosition]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans" onMouseMove={handleMouseMove}>
      <div
        className="w-full md:w-3/5 relative overflow-hidden flex justify-center items-center text-white bg-maindb"
      >
        <motion.div
          className="z-10 max-w-xl p-6 md:p-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Empower Your Finances with <br /> Smart Solutions
          </h2>
          <p className="text-base md:text-lg text-white/80 mb-8">
            Transform your financial management with intuitive, data-driven solutions for better efficiency, accuracy, and growth.
          </p>
          <Button className="bg-white text-blue-800 hover:bg-blue-100">
            Start 14 days free trial
          </Button>
        </motion.div>

        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full bg-white/10 z-0"
          style={{ translateX: x, translateY: y }}
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        ></motion.div>
      </div>
      <div className="w-full md:w-2/5 flex flex-col justify-center items-center p-10 bg-gray-50 relative z-10">
        <motion.div
          className="max-w-md w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Welcome to the MAind AI.
          </h1>
          <p className="text-gray-600 mb-8">Sign up or login with your work email.</p>

          <div className="space-y-4">
            <div className="relative">
              <Input placeholder="Email" className="pl-12" />
              <LucideMail className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
            </div>
            <div className="relative">
              <Input type="password" placeholder="Continue with email" className="pl-12" />
              <LockIcon className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
            </div>

            <Button className="w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-700">
              <Activity className="w-5 h-5" /> Login
            </Button>

          </div>

          <p className="text-xs text-gray-500 mt-6">
            By signing up, you confirm to have read MAind <a className="underline" href="#">Privacy Policy</a> and agree to the <a className="underline" href="#">Terms of Service</a>.
          </p>
        </motion.div>
      </div>

    </div>
  );
}
