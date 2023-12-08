import { ChevronDownIcon } from '@radix-ui/react-icons';
import type { ImageMetadata } from 'astro';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import DesignImg from '../../../assets/design.jpeg';
import DevelopmentImg from '../../../assets/development.jpeg';
import { bounceAnimation, staggeredAnimation } from '../../../utils/animations';

const processCardContent = [
  {
    name: 'Research & Design',
    description:
      'We work with you to understand your business and your customers. We then design a website that not only looks beautiful, but also helps you achieve your business goals. Each website we create is designed from scratch and tailored towards your branding, business, and customers. ',
    image: DesignImg,
  },
  {
    name: 'Development',
    description:
      'We develop your website using the latest web technologies in the world. Our main objective is to not only create a beautiful website, but also a fast, secure, and easy to use website. We also ensure your website is fully responsive and works on all devices. ',
    image: DevelopmentImg,
  },
  {
    name: 'Launch & Hosting',
    description:
      'We launch and host your website on our secure servers. We also provide ongoing support and maintenance to ensure your website is always up to date and running smoothly. We understand that your website is a critical part of your business, and we are here to help you every step of the way.',
    image: DevelopmentImg,
  },
];

interface CardProps {
  card: {
    name: string;
    description: string;
    image: ImageMetadata;
  };
}

function ProcessCard({ card }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef);

  const handleCardClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <motion.div
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={staggeredAnimation}
      className="relative w-full flex flex-col items-center group mb-4"
      ref={cardRef}
    >
      <motion.div
        className="relative w-full flex flex-row h-32 rounded-2xl justify-between px-8 border border-neutral-700 items-center overflow-hidden cursor-pointer shadow-lg shadow-neutral-800"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
        variants={bounceAnimation}
        layout
      >
        <motion.div
          className="absolute inset-0 bg-neutral-800 rounded-2xl"
          initial={{ y: '100%' }}
          animate={{ y: isHovered ? 0 : '100%' }}
          transition={{ type: 'spring', stiffness: 400, damping: 50 }}
        />
        <h2 className="lg:text-4xl text-2xl font-medium text-neutral-400 group-hover:text-neutral-100 transition-colors z-10">
          {card.name}
        </h2>
        <motion.div
          className="z-10"
          style={{ rotate: isDropdownOpen ? 180 : 0, transition: 'all 0.3s ease-in-out' }}
        >
          <ChevronDownIcon className="h-8 w-8 text-neutral-400" />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            className="w-full border border-neutral-700 mt-3 p-4 rounded-xl text-neutral-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="grid grid-cols-4 gap-x-12">
              <div className="col-span-3 items-center flex mx-6">
                <p className="text-lg">{card.description}</p>
              </div>
              <div className="col-span-1">
                <img src={card.image.src} alt="" className="rounded-xl" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ProcessCards() {
  return (
    <motion.section className="flex items-center flex-col gap-y-4" layout>
      {processCardContent.map((card) => (
        <ProcessCard card={card} key={card.name} />
      ))}
    </motion.section>
  );
}

export default ProcessCards;
