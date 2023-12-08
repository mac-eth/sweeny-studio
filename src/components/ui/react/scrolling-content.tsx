import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

interface ScrollingContentProps {
  children: React.ReactNode;
  baseVelocity?: number;
}

export default function ScrollingContent({ children, baseVelocity = 300 }: ScrollingContentProps) {
  const baseX = useMotionValue(0);
  const contentWidthRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  // Measure the width of a single set of content

  useEffect(() => {
    if (containerRef.current && containerRef.current.firstChild) {
      const childWidth = (containerRef.current.firstChild as HTMLDivElement).offsetWidth;
      contentWidthRef.current = childWidth / 2;
      // Set initial position to the start of the 4th set of children
      baseX.set(-3 * childWidth);
    }
  }, [children]);
  useAnimationFrame((t, delta) => {
    // Determine the direction based on user scroll, default is forward (1)
    const directionFactor = velocityFactor.get() < 0 ? -1 : 1;

    // Adjust the velocity based on user interaction or use the base velocity
    let adjustedVelocity = baseVelocity + Math.abs(velocityFactor.get()) * baseVelocity;

    // Calculate the new position
    let newBaseX = baseX.get() - directionFactor * (adjustedVelocity / 1000) * delta;

    // Reset position for seamless looping
    if (-newBaseX >= contentWidthRef.current) {
      newBaseX += contentWidthRef.current;
    }

    baseX.set(newBaseX);
  });

  return (
    <div ref={containerRef} className="group relative gap-10 overflow-hidden py-5 flex">
      <motion.div
        style={{ x: baseX }}
        className="flex w-auto min-w-[200%] shrink-0 snap-x snap-mandatory flex-nowrap items-stretch gap-10 overflow-x-auto px-5 py-5 "
      >
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}
