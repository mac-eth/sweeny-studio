import { bounceAnimation } from '@utils/animations';
import { cn } from '@utils/cn';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionHeadProps {
  title: string;
  className: React.ReactNode;
}

export default function SectionHead({ title, className }: SectionHeadProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div animate={isInView ? 'animate' : 'initial'}>
      <motion.h2
        ref={ref}
        className={cn(
          `font-melodrama text-6xl leading-tight sm:text-7xl lg:text-9xl my-16`,
          className
        )}
        variants={bounceAnimation}
      >
        <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
          {title}
        </span>
      </motion.h2>
    </motion.div>
  );
}
