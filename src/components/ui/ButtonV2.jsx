import { motion } from "framer-motion";

export default function ButtonV2({ text, isFullWidth }) {
  return (
    <>
       <motion.button
        whileTap={{ scale: 0.95 }}
        className={`py-3 ${
          isFullWidth && 'w-full'
        } px-8 bg-domain text-white sm:hover:text-domain sm:hover:bg-white hover:drop-shadow-md transition ease-in-out duration-300 font-medium rounded-full`}>
        {text}
      </motion.button> 
    </>
  );
}
