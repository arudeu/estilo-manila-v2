import AppCarousel from "../components/AppCarousel";
import { motion } from "framer-motion";
import Products from "./Products";
import SiteDescription from "../components/SiteDescription";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AppCarousel />
        <Products />
        <SiteDescription />
      </motion.div>
    </>
  );
}
