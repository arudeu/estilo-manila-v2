import React from 'react';
import AppCheckoutForm from "../components/AppCheckoutForm";
import AppPaymentMethod from "../components/AppPaymentMethod";
import { motion } from "framer-motion";

export default function Checkout() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AppCheckoutForm />
        <AppPaymentMethod/>
      </motion.div>
    </>
  );
}
