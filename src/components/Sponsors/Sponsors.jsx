import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./Sponsors.css";
import autodesk from "../../assets/autodesk.png";
import altium from "../../assets/altium.png";

const Sponsors = () => {
  const controls = useAnimation();

  // Ref for in-view detection
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // Start animation when in view
  if (inView) {
    controls.start("visible");
  }
  return (
    <>
      <h2 class="sponsersText"> Sponsors</h2>

      <motion.div
        class="sponsors-section"
        ref={ref}
        variants={{
          hidden: { opacity: 0.8, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1 }}
      >
        <p style={{ fontFamily: "Bebas Neue, sans-serif", fontSize: "70px", marginTop: "90px" }}>COMING SOON</p>

       
      </motion.div>
    </>
  );
};

export default Sponsors;
