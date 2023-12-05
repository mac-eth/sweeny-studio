import WhyScreenshot from '@assets/Group.png';
import { bounceAnimation, staggeredAnimation } from '@utils/animations';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Why() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref);

  // Animate on initial load, and when the element comes into view
  useEffect(() => {
    if (isInView) {
      controls.start('animate');
    }
  }, [isInView, controls]);
  return (
    <motion.div
      className="overflow-hidden py-24 "
      ref={ref}
      animate={isInView ? 'animate' : 'initial'}
      variants={staggeredAnimation}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <motion.h2
                variants={bounceAnimation}
                className="mt-2 font-melodrama text-3xl tracking-tight text-white sm:text-8xl"
              >
                <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
                  Why People Choose Us
                </span>
              </motion.h2>
              <motion.p variants={bounceAnimation} className="mt-6 text-lg leading-8 text-gray-300">
                Here at Sweeny Studio, we understand the painful process of setting up a website
                through slow and confusing web agencies. We strive to make sure that you don't have
                to deal with any of that ever again. Our team of experts will design, develop and
                deploy a beautiful website customized to your business needs in a matter of days and
                at an affordable price.
              </motion.p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none"></dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <motion.img
              src={WhyScreenshot.src}
              alt="Product screenshot"
              className="w-[40rem] max-w-none rounded-xl shadow-xl sm:w-[50rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
              variants={bounceAnimation}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
