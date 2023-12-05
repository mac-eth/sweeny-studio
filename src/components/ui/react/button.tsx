import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface ButtonProps {
  size?: 'md' | 'lg' | 'xl';
  block?: boolean;
  style?: 'outline' | 'primary' | 'inverted';
  className?: string;
  children?: React.ReactNode;
  [x: string]: any; // For additional props
}

function Button({
  size = 'md',
  style = 'primary',
  block = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizes = {
    md: 'px-5 py-2.5',
    lg: 'px-6 py-3',
    xl: 'px-8 py-6',
  };

  const styles = {
    outline: 'border-2 border-indigo-500 hover:bg-black text-black hover:text-white',
    primary: 'bg-neutral-950 text-neutral-50 border border-neutral-700',
    inverted: 'bg-neutral-50 text-neutral-950 border border-neutral-400',
  };

  const buttonClass = [
    'rounded-full text-center transition duration-200 transform relative overflow-hidden',
    block ? 'w-full' : '',
    sizes[size],
    styles[style],
    className,
  ]

    .filter(Boolean)
    .join(' ');

  return (
    <button
      {...rest}
      className={buttonClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`absolute inset-0 rounded-full ${style === 'primary' && 'bg-neutral-800'} ${
          style === 'inverted' && 'bg-neutral-200'
        }
        `}
        initial={{ y: '100%' }}
        animate={{ y: isHovered ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
      />
      <div className="relative z-10">{children}</div>
    </button>
  );
}

export default Button;
