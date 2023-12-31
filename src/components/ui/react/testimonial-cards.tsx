import { bounceAnimation, staggeredAnimation, staggeredAnimationFast } from '@utils/animations';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const featuredTestimonial = {
  body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
  author: {
    name: 'Brenna Goyette',
    handle: 'brennagoyette',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
  },
};
const testimonials = [
  [
    [
      {
        body: `Sweeny Studio's expertise in web design transformed our online presence. Their team's creativity and technical skill brought our vision for a modern, user-friendly construction company website to life.`,
        author: {
          name: 'Dave Thompson',
          handle: 'Thompson Constructions',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: `The website Sweeny Studio developed for our legal firm is outstanding. It's professional, sleek, and has significantly improved our client engagement.`,
        author: {
          name: 'Sarah Lin',
          handle: 'Lin Legal Services',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: `We're amazed by the vibrant and intuitive website Sweeny Studio created for our cafe. It perfectly captures the essence of our brand and has boosted our online orders.`,
        author: {
          name: 'Emily Chen',
          handle: 'The Green Bean Cafe',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
    [
      {
        body: `Sweeny Studio was instrumental in elevating our digital marketing agency's website. Their innovative approach to design and functionality has set us apart in the industry.`,
        author: {
          name: 'Mark Johnson',
          handle: 'ClickBoost Digital',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: `Our yoga studio's website, crafted by Sweeny Studio, is a work of art. It's not only visually stunning but also easy to navigate, enhancing our client's experience.`,
        author: {
          name: 'Laura Kim',
          handle: 'Serenity Yoga',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
  ],
  [
    [
      {
        body: `Our vineyard's website, designed by Sweeny Studio, perfectly encapsulates the essence of our brand. Their attention to detail and creative approach have greatly enhanced our online visibility.`,
        author: {
          name: 'Thomas Green',
          handle: 'Green Vineyards',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: `Sweeny Studio's design of our e-commerce site has been a game changer. Their understanding of digital trends and user experience has significantly boosted our sales.`,
        author: {
          name: 'Sophie Lee',
          handle: 'Trendy Threads Online',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
    [
      {
        body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: `Launching our accounting firm's website with Sweeny Studio was a seamless experience. Their team understood our unique needs and delivered a site that perfectly aligns with our professional image.`,
        author: {
          name: 'David Park',
          handle: 'Park & Co. Accounting',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: `Our graphic design studio's website, created by Sweeny Studio, stands out in the digital space. Their innovative approach and technical expertise have given us a competitive edge.`,
        author: {
          name: 'Alex Rodriguez',
          handle: 'AR Design Studio',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function TestimonialGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={staggeredAnimationFast}
      className="relative isolate hidden md:block"
      ref={ref}
    >
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-neutral-400 to-neutral-600"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-neutral-400 to-neutral-600 xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-neutral-100 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <motion.figure
            variants={bounceAnimation}
            className="rounded-2xl bg-neutral-950 shadow-lg border border-neutral-700 sm:col-span-2 xl:col-start-2 xl:row-end-1"
          >
            <blockquote className="p-6 text-lg font-medium leading-7 tracking-tight text-neutral-100 sm:p-12 sm:text-xl sm:leading-8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-neutral-700 px-6 py-4 sm:flex-nowrap">
              <div className="flex-auto">
                <div className="font-medium">{featuredTestimonial.author.name}</div>
                <div className="text-neutral-400">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              <img
                className="h-10 w-auto flex-none"
                src={featuredTestimonial.author.logoUrl}
                alt=""
              />
            </figcaption>
          </motion.figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8'
                  )}
                >
                  {column.map((testimonial) => (
                    <motion.figure
                      variants={bounceAnimation}
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 to-50% p-6 shadow-lg border border-neutral-700"
                    >
                      <blockquote className="text-neutral-300">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center flex-row justify-between gap-x-4">
                        <div className="flex flex-col">
                          <div className="font-semibold">{testimonial.author.name}</div>
                          <div className="text-neutral-400">{`@${testimonial.author.handle}`}</div>
                        </div>
                        <img
                          loading="lazy"
                          className="h-10 w-auto rounded-full flex-none"
                          src={testimonial.author.imageUrl}
                          alt=""
                        />
                      </figcaption>
                    </motion.figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function TestimonialSlider() {
  const testimonialsFlat = testimonials.reduce((acc, curr) => acc.concat(curr), []);
  const flattenedTestimonials = testimonialsFlat.reduce((acc, curr) => acc.concat(curr), []);

  return (
    <div className="md:hidden relative my-12 py-12 border-y border-neutral-700 flex flex-row overflow-x-scroll bg-neutral-950 ">
      <span className="absolute underline z-10 rotate-180 left-0 top-1/3 [writing-mode:vertical-rl] text-2xl text-neutral-300 font-melodrama ">
        Scroll Right
      </span>
      {flattenedTestimonials.map((testimonial) => (
        <div
          key={testimonial.author.name}
          className="ml-12 p-6 bg-gradient-to-br flex flex-col justify-between from-neutral-900 to-neutral-950 to-50% rounded-2xl shadow-lg border border-neutral-700 shadow-neutral-600 min-w-full"
        >
          <span className="text-neutral-300">
            <p>{`“${testimonial.body}”`}</p>
          </span>
          <div className="mt-6 flex items-center gap-x-4 flex-row">
            <div className="flex flex-col justify-between w-full">
              <div className="font-semibold text-neutral-300">{testimonial.author.name}</div>
              <div className="text-neutral-400">{`@${testimonial.author.handle}`}</div>
            </div>
            <img
              loading="lazy"
              className="h-10 w-auto rounded-full flex-none"
              src={testimonial.author.imageUrl}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <>
      <TestimonialSlider />
      <TestimonialGrid />
    </>
  );
}
