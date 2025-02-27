import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Standard',
    price: 199,
    description: 'Perfect for casual listeners who want quality sound.',
    features: [
      'Premium sound quality',
      '30-hour battery life',
      'Bluetooth 5.0',
      'Basic noise cancellation',
      '1-year warranty',
    ],
    cta: 'Buy Standard',
    mostPopular: false,
  },
  {
    name: 'Pro',
    price: 299,
    description: 'For music enthusiasts who demand the best audio experience.',
    features: [
      'Superior sound quality',
      '40-hour battery life',
      'Bluetooth 5.2',
      'Advanced noise cancellation',
      'Wear detection',
      'Multi-device pairing',
      '2-year warranty',
    ],
    cta: 'Buy Pro',
    mostPopular: true,
  },
  {
    name: 'Elite',
    price: 399,
    description: 'The ultimate headphones for audiophiles and professionals.',
    features: [
      'Studio-grade sound quality',
      '50-hour battery life',
      'Bluetooth 5.2 with aptX HD',
      'Premium noise cancellation',
      'Wear detection',
      'Multi-device pairing',
      'Customizable EQ',
      'Premium carrying case',
      '3-year warranty',
    ],
    cta: 'Buy Elite',
    mostPopular: false,
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Choose your perfect fit
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Select the model that matches your listening needs and budget.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`${
                tier.mostPopular
                  ? 'border-indigo-500 border-2'
                  : 'border-gray-200 border'
              } rounded-lg shadow-sm divide-y divide-gray-200 bg-white`}
            >
              {tier.mostPopular && (
                <div className="bg-indigo-500 rounded-t-lg py-1.5">
                  <p className="text-xs text-center font-medium uppercase tracking-wide text-white">
                    Most Popular
                  </p>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h3>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${tier.price}</span>
                </p>
                <button
                  className={`${
                    tier.mostPopular
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700'
                  } mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium`}
                >
                  {tier.cta}
                </button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h4>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="ml-3 text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;