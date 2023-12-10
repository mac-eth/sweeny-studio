import { CheckIcon } from '@radix-ui/react-icons';

const tiers = [
  {
    name: 'Landing Page',
    id: 'tier-landing-page',
    href: '#',
    price: '$995',
    description: 'A supercharged landing page that will generate you as many leads as possible. ',
    features: [
      '1x Page',
      '1x Lead Generation / Contact Form',
      'Mobile First Design',
      'x1 Set Of Revisions',
      'Built-In SEO',
      'Email Support',
    ],
    mostPopular: false,
  },
  {
    name: 'Business',
    id: 'tier-business',
    href: '#',
    price: '$2,995',
    description:
      'An Advanced website features that will make you stand out from your competitors. ',
    features: [
      'Up to 3x Pages',
      'Custom Lead Generation / Contact Forms',
      'Website Speed Report',
      'Lead Generation Pipeline',
      'Mobile First Design',
      'x3 Sets Of Revisions',
      'Built-In Advanced SEO',
      'Email Support',
    ],
    mostPopular: true,
  },
  {
    name: 'E-Commerce',
    id: 'tier-ecommerce',
    href: '#',
    price: '$14,995',
    description: 'The ultimate website package for businesses that are selling products online. ',
    features: [
      'Unlimited Products',
      'Connect Seamlessly To Your Shopify Store',
      'Fastest Ecommerce Website Speeds In The World',
      'Competitor Analysis',
      'Website Audit & Report',
      'Built-In Advanced SEO',
      'Advanced Analytics',
      'Dedicated Account Manager',
      'Mobile First Design',
      'x5 Sets Of Revisions',
    ],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.mostPopular
                ? 'bg-neutral-900 border-2 border-neutral-400'
                : 'border border-neutral-700',
              'rounded-3xl p-8 xl:p-10'
            )}
          >
            <div className="flex items-center justify-between gap-x-4">
              <h3 id={tier.id} className="text-lg font-semibold leading-8 text-neutral-100">
                {tier.name}
              </h3>
              {tier.mostPopular ? (
                <p className="rounded-full bg-neutral-950 px-2.5 py-1 text-xs font-semibold leading-5 text-neutral-300 border border-neutral-700 shadow-xl shadow-neutral-800">
                  Most popular
                </p>
              ) : null}
            </div>
            <p className="mt-4 text-sm leading-6 text-neutral-300">{tier.description}</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">{tier.price}</span>
            </p>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'bg-neutral-50 hover:bg-neutral-400 text-neutral-800 border border-neutral-700 shadow-sm '
                  : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                'mt-6 block rounded-full py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-300'
              )}
            >
              Buy plan
            </a>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-neutral-300 xl:mt-10">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
