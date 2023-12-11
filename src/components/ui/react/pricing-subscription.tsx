import { CheckIcon, MinusIcon } from '@radix-ui/react-icons';
import { Fragment } from 'react';

const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '#',
    priceMonthly: '$29',
    description:
      'Basic web-hosting for startups and personal projects. This is a great plan if you just want to get your website on the internet.',
    mostPopular: false,
  },
  {
    name: 'Essential',
    id: 'tier-essential',
    href: '#',
    priceMonthly: '$99',
    description:
      'Essential web-hosting for small businesses. This gets you specialised support, flexibility and maintenance.',
    mostPopular: true,
  },
  {
    name: 'Ultimate',
    id: 'tier-ultimate',
    href: '#',
    priceMonthly: '$499',
    description:
      'This is the ultimate plan for businesses that want to grow and scale their online presence. ',
    mostPopular: false,
  },
];
const sections = [
  {
    name: 'Hosting',
    features: [
      { name: '24/7 Web Hosting', tiers: { Basic: true, Essential: true, Ultimate: true } },
      { name: 'HTTPS/SSL Security', tiers: { Basic: true, Essential: true, Ultimate: true } },
      { name: 'DDos Mitigation', tiers: { Essential: true, Ultimate: true } },
      { name: 'Bandwidth', tiers: { Basic: '10 GB', Essential: '100 GB', Ultimate: '1 TB' } },
    ],
  },
  {
    name: 'Support',
    features: [
      { name: 'Support Resources', tiers: { Basic: true, Essential: true, Ultimate: true } },
      { name: 'Email Support', tiers: { Basic: true, Essential: true, Ultimate: true } },
      { name: 'Priority Support', tiers: { Essential: true, Ultimate: true } },
      { name: 'Dedicated Account Manager', tiers: { Ultimate: true } },
    ],
  },
  {
    name: 'Reporting',
    features: [
      { name: 'Basic Website Insights', tiers: { Essential: true, Ultimate: true } },
      { name: 'Google Analytics Integration', tiers: { Essential: true, Ultimate: true } },
      { name: 'Microsoft Clarity Integration', tiers: { Essential: true, Ultimate: true } },
      { name: 'Website Heatmaps', tiers: { Ultimate: true } },
      { name: 'Advanced Website Insights', tiers: { Ultimate: true } },
    ],
  },
  {
    name: 'Maintenance',
    features: [
      { name: 'Automatic Updates', tiers: { Basic: true, Essential: true, Ultimate: true } },
      { name: 'Flexible CMS', tiers: { Essential: true, Ultimate: true } },
      { name: 'Website Backups', tiers: { Ultimate: true } },
      { name: '2 Hours Of Website Updates', tiers: { Ultimate: true } },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PricingSubscription() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h3 className="text-start font-melodrama text-3xl text-neutral-50 sm:text-4xl lg:text-5xl">
          Website Service Packages
        </h3>
        <p className="mt-4 text-start text-lg text-neutral-300">
          We offer a variety of website services to not only get your website online, but to also
          help grow your business.
        </p>

        {/* xs to lg */}
        <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
          {tiers.map((tier) => (
            <section
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'rounded-xl bg-white/5 ring-1 ring-inset ring-white/10' : '',
                'p-8'
              )}
            >
              <h3 id={tier.id} className="text-sm font-semibold leading-6 text-white">
                {tier.name}
              </h3>
              <p className="mt-2 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold text-white">{tier.priceMonthly}</span>
                <span className="text-sm text-neutral-300">/month</span>
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
              <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-white">
                {sections.map((section) => (
                  <li key={section.name}>
                    <ul role="list" className="space-y-4">
                      {section.features.map((feature) =>
                        feature.tiers[tier.name] ? (
                          <li key={feature.name} className="flex gap-x-3">
                            <CheckIcon
                              className="h-6 w-5 flex-none text-indigo-400"
                              aria-hidden="true"
                            />
                            <span>
                              {feature.name}{' '}
                              {typeof feature.tiers[tier.name] === 'string' ? (
                                <span className="text-sm leading-6 text-neutral-400">
                                  ({feature.tiers[tier.name]})
                                </span>
                              ) : null}
                            </span>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="isolate mt-20 hidden lg:block">
          <div className="relative -mx-8">
            {tiers.some((tier) => tier.mostPopular) ? (
              <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                <div
                  className="flex w-1/4 px-4"
                  aria-hidden="true"
                  style={{
                    marginLeft: `${(tiers.findIndex((tier) => tier.mostPopular) + 1) * 25}%`,
                  }}
                >
                  <div className="w-full rounded-t-xl border-x border-t border-white/10 bg-white/5" />
                </div>
              </div>
            ) : null}
            <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead>
                <tr>
                  <td />
                  {tiers.map((tier) => (
                    <th key={tier.id} scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                      <div className="text-sm font-semibold leading-7 text-white">{tier.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="sr-only">Price</span>
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.id} className="px-6 pt-2 xl:px-8">
                      <div className="flex items-baseline gap-x-1 text-white">
                        <span className="text-4xl font-bold">{tier.priceMonthly}</span>
                        <span className="text-sm leading-6">/month</span>
                      </div>
                      <a
                        href={tier.href}
                        aria-describedby={tier.id}
                        className={classNames(
                          tier.mostPopular
                            ? 'bg-neutral-50 hover:bg-neutral-400 text-neutral-800 border border-neutral-700/20 shadow-white/80 shadow-lg hover:shadow-neutral-400 transition-all duration-200 '
                            : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white ',
                          'mt-6 block rounded-full py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-300'
                        )}
                      >
                        Buy plan
                      </a>
                    </td>
                  ))}
                </tr>
                {sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={classNames(
                          sectionIdx === 0 ? 'pt-8' : 'pt-16',
                          'pb-4 text-sm font-semibold leading-6 text-white'
                        )}
                      >
                        {section.name}
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/10" />
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <th scope="row" className="py-4 text-sm font-normal leading-6 text-white">
                          {feature.name}
                          <div className="absolute inset-x-8 mt-4 h-px bg-white/5" />
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.id} className="px-6 py-4 xl:px-8">
                            {typeof feature.tiers[tier.name] === 'string' ? (
                              <div className="text-center text-sm leading-6 text-neutral-300">
                                {feature.tiers[tier.name]}
                              </div>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon
                                    className="mx-auto h-5 w-5 text-white"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <MinusIcon
                                    className="mx-auto h-5 w-5 text-neutral-400"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name] === true ? 'Included' : 'Not included'}{' '}
                                  in {tier.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
