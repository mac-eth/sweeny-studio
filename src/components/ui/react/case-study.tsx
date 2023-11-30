import { bounceAnimation, staggeredAnimationFast } from '@utils/animations';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from './button';

interface CaseStudyProps {
  imageSrc: ImageMetadata;
  imageAlt: string;
  year: string;
  services: string;
  name: string;
  url: string;
}

export default function CaseStudy({
  imageSrc,
  imageAlt,
  year,
  services,
  name,
  url,
}: CaseStudyProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <motion.div
        ref={ref}
        animate={isInView ? 'animate' : 'initial'}
        className="relative"
        variants={staggeredAnimationFast}
      >
        <motion.div
          variants={bounceAnimation}
          className="group -z-10 rounded-xl border border-neutral-700 font-melodrama shadow-2xl shadow-neutral-700 transition duration-300 hover:scale-90 hover:shadow-neutral-500"
        >
          <a href={url} target="_blank">
            <img
              src={imageSrc.src}
              alt={imageAlt}
              loading="lazy"
              className="rounded-xl brightness-90"
            />
            <div className="absolute bottom-0 z-10 flex flex-col gap-4 p-8">
              <div className="invisible flex w-fit flex-row rounded-full border border-neutral-400 bg-neutral-50 px-4 py-2 text-center font-satoshi text-sm uppercase text-neutral-950 transition duration-300 ease-in-out hover:bg-neutral-200 group-hover:visible">
                <p>
                  <span className="font-semibold">Year:</span> <span>{year}</span>
                </p>
              </div>
              <div className="invisible flex w-fit flex-row rounded-full border border-neutral-400 bg-neutral-50 px-4 py-2 text-center font-satoshi text-sm uppercase text-neutral-950 transition duration-300 ease-in-out hover:bg-neutral-200 group-hover:visible">
                <p>
                  <span className="font-semibold">Services:</span>
                  <span>{services}</span>
                </p>
              </div>
              <div className="flex flex-row gap-x-4">
                <Button
                  style="inverted"
                  size="lg"
                  className="text-2xl group-hover:border group-hover:border-neutral-400 group-hover:bg-neutral-950 group-hover:text-neutral-50"
                >
                  {name}
                </Button>
                <Button
                  style="inverted"
                  className="items-center justify-center rounded-full px-4 py-4 group-hover:border group-hover:border-neutral-400 group-hover:bg-neutral-950 group-hover:text-neutral-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="h-8 w-8"
                  >
                    <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                  </svg>
                  <span className="sr-only">View Project</span>
                </Button>
              </div>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </>
  );
}
