import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AnimatedSection = ({ children,trans }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // animate on scroll up & down
    threshold: 0.2,      // how much of the element must be visible
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    //   transition={{ duration: 0.5, ease: "easeOut" }}
    transition={{ duration: 0.6, ease: trans }}
    

    >
      {children}
    </motion.div>
  );
};
