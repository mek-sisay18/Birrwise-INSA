import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 bg-gradient-to-r from-primary/10 via-background to-accent/10 min-h-[80vh] overflow-hidden"
    >
    
      <div className="w-full md:w-1/2 z-10">
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-tight drop-shadow-lg text-yellow-500 dark:text-yellow-300"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          personal finance tracker &nbsp;
          <span className="inline-block bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 px-4 py-1 rounded-3xl shadow-md text-balance text-yellow-800 dark:text-yellow-900">
            Brighter Future
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
         
        </motion.p>

        <motion.p
          className="text-base sm:text-lg text-yellow-700 dark:text-yellow-400 mb-10 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          A simple and user-friendly personal finance tracker to record income and expenses, plan budgets, and visualize financial progress.
        </motion.p>
      </div>

   
      <motion.img
        src="/proj.png"
        alt="Birr App Hero"
        className="absolute right-2 bottom-2 md:static md:w-96 w-72 rounded-xl shadow-xl"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 1 }}
      />
    </section>
  );
}
