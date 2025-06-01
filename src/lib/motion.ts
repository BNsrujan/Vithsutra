const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  // <motion.div
  //           initial={{ opacity: 0, y: 30 }}
  //           whileInView={{ opacity: 1, y: 0 }}
  //           transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
  //           key={`${index}+${feature.title}`}
  //           className="rounded-[24px] p-12 h-96 relative bg-cover bg-company-light-light-gray "
  //           style={{ backgroundImage: `url(${feature.bgImage}) opacity-20 ` }}
  //         >
  //           <div className="max-w-md">
  //             <h3 className="text-xl font-semibold text-company-white mb-1">
  //               {feature.title}
  //             </h3>
  //             <p className="text-company-text-gray text-sm">
  //               {feature.description}
  //             </p>
  //           </div>
  //         </motion.div>

  export {containerVariants,itemVariants}