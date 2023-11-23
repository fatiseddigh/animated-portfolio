import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="container">
        <motion.img
          initial={{ opacity: 0, x: 0.5 }}
          animate={{ opacity: 1, x: 10 }}
          transition={{
            type: "smooth",
            duration: 1,
          }}
          src="/logos.svg"
          alt=""
          className="logo"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 0.9 }}
          transition={{
            type: "smooth",
            duration: 1,
          }}
          className="socials"
        >
          <img src="/dribbble.png" alt="" />
          <img src="facebook.png" alt="" />
          <img src="instagram.png" alt="" />
          <img src="youtube.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
