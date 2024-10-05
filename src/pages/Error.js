import Banner from "../components/Banner";
import { motion } from "framer-motion";

export default function Error() {
  const errorData = {
    title: "404 - Not Found",
    content: "We can't found your page",
    destination: "/",
    buttonLabel: "Go Back",
  };

  return (
    <motion.div
      className="error"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Banner data={errorData} />
    </motion.div>
  );
}
