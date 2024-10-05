import AppCart from "../components/AppCart"
import { motion } from "framer-motion";

export default function Cart() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AppCart />
      </motion.div>
    </>
  );
}
