import { motion } from "framer-motion";

export default function Button({ text }) {
  return (
    <>
      <motion.button  
        whileTap={{ scale: 0.95 }}
        className="py-3 px-8 bg-white text-domain sm:hover:text-white sm:hover:bg-domain hover:drop-shadow-md transition ease-in-out duration-300 font-medium rounded-full">
        {text}
      </motion.button>
    </>
  );
}
