import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import {
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  BellAlertIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    emoji: <ArrowTrendingUpIcon className="w-12 h-12 text-white" />,
    title: "Growth Insights",
    desc: "Visualize your saving & spending for smart progress.",
  },
  {
    emoji: <CurrencyDollarIcon className="w-12 h-12 text-white" />,
    title: "Budgeting Tools",
    desc: "Easy budgets, smart categories, and income tracking.",
  },
  {
    emoji: <BellAlertIcon className="w-12 h-12 text-white" />,
    title: "Real-Time Alerts",
    desc: "Bill reminders, goal nudges, and positive reinforcement.",
  },
  {
    emoji: <LockClosedIcon className="w-12 h-12 text-white" />,
    title: "Bank-Grade Security",
    desc: "Your data is always safe, private, and encrypted.",
  },
];

const cardVariants: Variants = {
  offscreen: { y: 120, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.35, duration: 0.8 },
  },
};

function Card({ emoji, title, desc, i }: any) {
  return (
    <motion.div
      className="flex flex-col items-center p-8 rounded-2xl shadow-lg m-4
                 bg-yellow-400 dark:bg-yellow-500
                 text-white dark:text-white
                 border-2 border-yellow-500 dark:border-yellow-400"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.6, once: true }}
      variants={cardVariants}
      transition={{ delay: i * 0.12 }}
    >
      <div className="mb-4">{emoji}</div>
      <div className="text-2xl font-bold text-white">{title}</div>
      <div className="mt-2 text-center text-white opacity-90">{desc}</div>
    </motion.div>
  );
}

export default function FeatureScroll() {
  return (
    <section id="features" className="py-20 bg-background dark:bg-darkblue">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary dark:text-yellow-400">
        Why Choose Birr-Wise?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <Card key={f.title} {...f} i={i} />
        ))}
      </div>
    </section>
  );
}
