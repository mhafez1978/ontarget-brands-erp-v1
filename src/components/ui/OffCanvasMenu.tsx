"use client";

import { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CircleXIcon, Pencil, Plus } from "lucide-react";

interface OffCanvasMenuProps {
  formName: string;
  children: (close: () => void) => ReactNode;
}

export const OffCanvasMenu: React.FC<OffCanvasMenuProps> = ({
  formName,

  children,
}) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <Button variant={"ghost"} onClick={() => setOpen(true)}>
        <Pencil className="w-12 h-12" />
      </Button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />

            {/* Off-canvas panel */}
            <motion.div
              className="fixed right-0 top-0 h-full w-[30vw] bg-white shadow-lg z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-4 flex justify-between items-center border-b px-10">
                <h2 className="font-black text-2xl">{formName}</h2>
                <Button variant="ghost" onClick={close}>
                  <CircleXIcon />
                </Button>
              </div>
              <div className="p-4 overflow-y-auto h-[calc(100%-4rem)]">
                {children(close)}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
