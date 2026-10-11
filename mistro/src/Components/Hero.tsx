import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Service On. Stress Gone.
      </motion.h1>

      <p>
        Find trusted Electricians, Plumbers,
        Carpenters and Cleaning Professionals.
      </p>

      <button>Get Started</button>
    </section>
  );
}

export default Hero;