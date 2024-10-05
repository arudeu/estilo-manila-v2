import { motion } from "framer-motion";
import AppOrder from "../components/AppOrder";

export default function AdminOrder() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AppOrder />
      </motion.div>
    </>
  );
}
