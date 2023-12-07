import WhyScreenshot from '@assets/mobileimg.png';
import Button from '@components/ui/react/button';
import { bounceAnimation, staggeredAnimationFast } from '@utils/animations';
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
      className="overflow-hidden py-12 lg:py-24"
      ref={ref}
      animate={isInView ? 'animate' : 'initial'}
      variants={staggeredAnimationFast}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <motion.h2
                variants={bounceAnimation}
                className="mt-2 font-melodrama text-3xl tracking-tight text-white sm:text-6xl"
              >
                <span className="bg-gradient-to-b from-neutral-50 from-60% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
                  No More Slow and Painful Web Agencies
                </span>
              </motion.h2>
              <motion.p variants={bounceAnimation} className="mt-6 text-lg leading-8 text-gray-300">
                Here at Sweeny Studio, we understand the painful process of setting up a website
                through slow and confusing web agencies. We strive to make sure that you don't have
                to deal with any of that ever again. Our team of experts will design, develop and
                deploy a beautiful website customized to your business needs in a matter of days and
                at an affordable price.
              </motion.p>
              <dl className="my-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none"></dl>
              <Button size="lg" className=" uppercase">
                <a href="/contact">Get A Quote</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="ml-2 inline-block transition-all duration-300 group-hover:translate-x-2"
                >
                  <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                </svg>
              </Button>
            </div>
          </div>
          <motion.img
            src={WhyScreenshot.src}
            alt="Product screenshot"
            className="w-[24rem] max-w-none rounded-xl shadow-xl sm:w-[36rem] md:-ml-4 lg:-ml-0"
            variants={bounceAnimation}
          />
        </div>
      </div>
    </motion.div>
  );
}
