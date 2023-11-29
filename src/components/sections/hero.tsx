import HeroCircle from '../../assets/hero-circle.svg';
import Button from '../ui/react/button';

export default function Hero() {
  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl overflow-x-clip">
        <div className="z-10 my-16 flex flex-col items-center text-center sm:my-24 md:my-32 lg:my-48 lg:grid lg:grid-cols-3">
          <div className="animateEntry col-span-2">
            <h1 className="font-melodrama text-6xl leading-tight sm:text-7xl lg:text-9xl text-start">
              <span className="bg-gradient-to-r from-neutral-50 from-65% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
                Sweeny Studio,{' '}
              </span>
              <span className="bg-gradient-to-r from-neutral-50 from-65% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
                Modern Web{' '}
              </span>
              <span className="bg-gradient-to-r from-neutral-50 from-65% to-neutral-400 bg-clip-text text-transparent lg:to-neutral-600">
                Development{' '}
              </span>
            </h1>
          </div>
          <div className="animateEntry col-span-1 text-start flex flex-col items-start justify-between gap-y-8 py-12 lg:h-full">
            <p className="text-lg leading-tight text-neutral-400">
              Sweeny Studio is a boutique web design & development studio based in Australia. We
              specialise in building modern, fast, and secure websites for businesses.
            </p>
            <Button size="xl" className="text-2xl uppercase">
              <a href="/contact">Get A Quote</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="ml-2 inline-block transition-all duration-300 group-hover:translate-x-2"
              >
                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
        <img
          src={HeroCircle.src}
          alt="circle background"
          loading="eager"
          className="animateEntry h-[20rem] w-auto animate-spinSlow md:h-[32rem]"
          width={1024}
          height={1024}
        />
      </div>
    </section>
  );
}
