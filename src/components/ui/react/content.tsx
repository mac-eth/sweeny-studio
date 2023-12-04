import { bounceAnimation, staggeredAnimation } from '@utils/animations';
import { cn } from '@utils/cn';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from './button';

interface ContentProps {
  children: React.ReactNode;
  className?: string;
  cta?: boolean;
  ctaText?: string;
  ctaLink?: string;
}
export default function Content({ children, className, cta, ctaText, ctaLink }: ContentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref}>
      <motion.main
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        variants={staggeredAnimation}
        className={cn('mx-auto my-16 max-w-xl pb-8 text-center lg:max-w-2xl', className)}
      >
        <motion.div variants={bounceAnimation} className=" text-2xl text-white lg:text-4xl">
          {children}
        </motion.div>
        <motion.div variants={bounceAnimation}>
          {cta && ctaLink && ctaText && (
            <Button className="mt-12" size="lg" href={ctaLink}>
              {ctaText}
            </Button>
          )}
        </motion.div>
      </motion.main>
    </div>
  );
}
