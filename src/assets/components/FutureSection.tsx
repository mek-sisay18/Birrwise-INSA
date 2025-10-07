import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
    scale: 0.9,
    filter: "blur(4px)",
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

export default function FutureSection() {
  return (
    <section
      id="future"
      className="flex flex-col items-center justify-center py-24 
                 bg-gradient-to-br from-green-900 via-green-700 to-yellow-100 
                 dark:from-green-950 dark:via-green-800 dark:to-yellow-300"
    >
      <motion.h2
        className="text-4xl font-extrabold text-yellow-500 dark:text-yellow-300 mb-6 tracking-tight text-center"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
        variants={cardVariants}
      >
        Your Financial Future, Visualized
      </motion.h2>

      <motion.div
        className="relative drop-shadow-2xl mb-10"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.7 }}
        variants={cardVariants}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-0"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 0.4, scale: 1.1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <div className="w-80 h-80 rounded-full bg-yellow-300 blur-3xl opacity-50 dark:bg-yellow-500"></div>
        </motion.div>

        <motion.img
          src="/image.jpeg.webp"
          alt="Ethiopian Birr notes and wallet"
          className="relative z-10 w-[340px] h-auto rounded-xl border-4 border-white shadow-2xl hover:-translate-y-2 hover:shadow-yellow-400 transition"
          whileHover={{ scale: 1.03 }}
        />
      </motion.div>

      <motion.p
        className="text-lg text-white dark:text-yellow-100 mt-4 max-w-xl text-center"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
        variants={cardVariants}
      >
        Visualize your goals and watch your savings grow.{" "}
        <span className="text-yellow-600 dark:text-yellow-300 font-semibold">
          Birr-Wise
        </span>{" "}
        helps you manage, plan, and achieve your dreams with clarity and
        confidence.
      </motion.p>
    </section>
  );
}
