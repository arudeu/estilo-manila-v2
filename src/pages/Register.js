import AppForm from "../components/AppForm";
import { motion } from "framer-motion";

export default function Register() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AppForm />
      </motion.div>
    </>
  );
}
