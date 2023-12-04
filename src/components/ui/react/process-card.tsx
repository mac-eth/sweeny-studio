import { ChevronDownIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
}

export default function ProcessCard({ number, title, description }: ProcessCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Button remains the same since no animation changes are needed there
  const buttonVariants = {
    open: {
      padding: '2rem 2rem',
    },
    closed: {
      padding: '2rem 2rem',
    },
  };

  // Improved Dropdown animation variants
  const dropdownVariants = {
    open: {
      opacity: 1,
      maxHeight: 200, // Adjust as
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        mass: 0.5, // Adjust the mass for more 'weight' in the animation
      },
    },
    closed: {
      opacity: 0,
      maxHeight: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="group relative my-8 flex flex-col items-center justify-center w-full overflow-hidden rounded-xl border border-neutral-700 transition-colors duration-300 hover:bg-neutral-900">
      <motion.button
        className="flex justify-between items-center w-full"
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={buttonVariants}
        onClick={toggleDropdown}
      >
        <div className="flex gap-x-8">
          <h3 className="text-5xl font-semibold text-neutral-500">{number}</h3>
          <h3 className="text-5xl font-semibold text-neutral-500">{title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <ChevronDownIcon className={`w-8 h-8 text-neutral-500 duration-300`} />
        </motion.div>
      </motion.button>
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={dropdownVariants}
        className="overflow-hidden"
      >
        <div className="p-8">
          <p className="text-neutral-400">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}
