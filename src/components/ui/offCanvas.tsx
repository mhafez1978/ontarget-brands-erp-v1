"use client";

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CircleXIcon } from "lucide-react";

interface OffCanvasProps {
  formName: string;
  open: boolean;
  onClose: () => void;
  children: (close: () => void) => ReactNode;
}

export const OffCanvas: React.FC<OffCanvasProps> = ({
  formName,
  open,
  onClose,
  children,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/30 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed right-0 top-0 h-full w-[30vw] bg-white shadow-lg z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="p-4 flex justify-between items-center border-b px-10">
              <h2 className="font-black text-2xl">{formName}</h2>
              <Button variant="ghost" onClick={onClose}>
                <CircleXIcon />
              </Button>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100%-4rem)]">
              {children(onClose)}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
