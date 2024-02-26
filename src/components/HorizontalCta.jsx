import { motion } from "framer-motion";

const HorizontalCta = ({ guaranteeBox }) => {
  const cardHoverVariants = {
    initial: {
      y: 0,
    },
    hover: {
      y: -5,
      boxShadow: "0 30px 30px rgba(24, 27, 34, 0.10)", // Add a drop shadow
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="grid md:grid-cols-2 md:grid-cols-4 gap-6 text-white px-8 md:px-24 gap-6">
      {guaranteeBox.map((item, index) => (
        <motion.div
          initial="initial"
          whileHover="hover"
          variants={cardHoverVariants}
          key={index}
          className="bg-gray-800 rounded-2xl text-center px-6 py-10 border flex flex-col items-center justify-center space-y-5"
        >
          <p className="text-5xl text-sky">{item.icon}</p>
          <h6 className="text-md">{item.boxTitle}</h6>
        </motion.div>
      ))}
    </div>
  );
};

export default HorizontalCta;
