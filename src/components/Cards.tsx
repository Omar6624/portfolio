import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CardScrollerProps {
  items: string[];
}

export default function CardScroller({ items }: CardScrollerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto no-scrollbar px-4 py-6"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items.map((item, index) => {
          const isStacked = index >= 2;

          return (
            <motion.div
              key={index}
              className={`shrink-0 w-64 h-40 rounded-xl bg-white shadow-lg p-4 scroll-snap-align-start ${
                isStacked ? "-ml-48" : ""
              }`}
              style={{
                zIndex: isStacked ? 100 - index : "auto",
              }}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <h3 className="text-lg font-semibold">Card {index + 1}</h3>
              <p className="text-sm text-gray-600">{item}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
