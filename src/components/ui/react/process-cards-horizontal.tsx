import { motion } from 'framer-motion';

interface ProcessHorizontalCardProps {
  title: string;
  description: string;
  number: string;
  color: string;
}

const ProcessCards = [
  {
    title: 'Research & Design',
    description:
      'We start with a deep dive into your business and your customers. We get an understanding of your business and your vision. We then create a design that looks beautiful, easy to use, and is unique to your business and your customers.',
    number: '01',
    color: 'from-teal-500',
  },
  {
    title: 'Development',
    description:
      'We develop your website using the fastest technologies and best practices. We make sure your website is fast, secure, and offers an easy user experience to your customers and clients. ',
    number: '02',
    color: 'from-orange-500',
  },
  {
    title: 'Launch + Hosting',
    description:
      'We give your website its domain and deploy it to the internet. We host and maintain your website to make sure it is always up and running. We also offer a free SSL certificate to make sure your website is secure. ',
    number: '03',
    color: 'from-blue-500',
  },
];

function ProcessHorizontalCard({ title, description, number, color }: ProcessHorizontalCardProps) {
  return (
    <div
      className={`relative w-full rounded-xl border border-neutral-700 text-start h-[70vh] md:h-[36rem] p-12 bg-gradient-to-bl ${color} duration-500 via-transparent via-50% hover:via-80% transition shadow-xl shadow-neutral-800`}
    >
      <div className="flex flex-col justify-between h-full">
        <h3 className="font-melodrama text-5xl text-neutral-50 ">{number}</h3>
        <div className="flex flex-col gap-y-4 ">
          <h3 className="font-melodrama text-5xl text-neutral-50">{title}</h3>
          <p className="text-neutral-50">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function ProcessCardsHorizontal() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 snap-mandatory">
        {ProcessCards.map((card) => (
          <ProcessHorizontalCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}
