"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { cn } from "../lib/utils";

export default function FloatingContactButtons() {
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [mailOpen, setMailOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      {/* 전화 버튼 */}
      <motion.div
        layout
        initial={{ borderRadius: "9999px" }}
        animate={{ borderRadius: phoneOpen ? "1rem" : "9999px" }}
        transition={{ duration: 0.3 }}
        className="flex items-center bg-orange-500 hover:bg-orange-600 text-white shadow-lg cursor-pointer 
                   px-3 py-3 md:px-4 md:py-4 overflow-hidden text-base md:text-lg"
      >
        <div onClick={() => setPhoneOpen(!phoneOpen)} className="flex-shrink-0">
          <Phone size={18} className="md:w-8 md:h-8" />
        </div>

        <motion.div
          layout
          initial={{ maxWidth: 0, opacity: 0 }}
          animate={{
            maxWidth: phoneOpen ? 200 : 0,
            opacity: phoneOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={cn("overflow-hidden", phoneOpen ? "ml-2" : "")}
        >
          <span
            onClick={() => (window.location.href = "tel:070-4035-0380")}
            className="whitespace-nowrap cursor-pointer"
          >
            070-4035-0380
          </span>
        </motion.div>
      </motion.div>

      {/* 메일 버튼 */}
      <motion.div
        layout
        initial={{ borderRadius: "9999px" }}
        animate={{ borderRadius: mailOpen ? "1rem" : "9999px" }}
        transition={{ duration: 0.3 }}
        className="flex items-center bg-blue-800 hover:bg-blue-900 text-white shadow-lg cursor-pointer 
                   px-3 py-3 md:px-4 md:py-4 overflow-hidden text-base md:text-lg"
      >
        <div onClick={() => setMailOpen(!mailOpen)} className="flex-shrink-0">
          <Mail size={18} className="md:w-8 md:h-8" />
        </div>

        <motion.div
          layout
          initial={{ maxWidth: 0, opacity: 0 }}
          animate={{
            maxWidth: mailOpen ? 220 : 0,
            opacity: mailOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={cn("overflow-hidden", mailOpen ? "ml-2" : "")}
        >
          <span
            onClick={() =>
              (window.location.href = "mailto:theg1net@hanmail.net")
            }
            className="whitespace-nowrap cursor-pointer"
          >
            deojiwonnet@naver.com
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
