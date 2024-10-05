import AppDashBoard from "../components/AppDashBoard";
import { motion } from "framer-motion";

export default function DashBoard() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AppDashBoard />
      </motion.div>
    </>
  );
}
