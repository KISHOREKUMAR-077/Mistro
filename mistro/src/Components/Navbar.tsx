import { motion } from "framer-motion";
import {
  FaBolt,
  FaHammer,
  FaTools,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="floating-tools">
        <FaBolt className="tool tool1" />
        <FaHammer className="tool tool2" />
        <FaTools className="tool tool3" />
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          Service On.
          <br />
          Stress Gone.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
        >
          India's Smart Home Service Marketplace.
          Connect instantly with trusted
          electricians, plumbers, carpenters
          and cleaning professionals.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1,
          }}
        >
          <button className="primary-btn">
            Book Service
          </button>

          <button className="secondary-btn">
            Watch Demo
          </button>
        </motion.div>
      </motion.div>

      <div className="hero-glow"></div>

    </section>
  );
}

export default Hero;