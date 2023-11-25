import { motion } from "framer-motion";
import "./parallax.scss";
const Parallax = ({ type }) => {
  return (
    <div
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #082b2a, #041615)"
            : "linear-gradient(180deg, #082b2a, #20aca8)",
      }}
    >
      <motion.h1>
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets"></motion.div>
      <motion.div className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
