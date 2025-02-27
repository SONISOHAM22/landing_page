import React from 'react';
import { Battery, Bluetooth, Clock, Volume2, Wifi, Music } from 'lucide-react';

const features = [
  {
    name: 'Long Battery Life',
    description: 'Enjoy up to 40 hours of playback time on a single charge. Quick charge feature gives you 4 hours of playback with just 10 minutes of charging.',
    icon: Battery,
  },
  {
    name: 'Bluetooth 5.2',
    description: 'Latest Bluetooth technology ensures stable connection up to 10 meters away from your device with minimal latency.',
    icon: Bluetooth,
  },
  {
    name: 'Active Noise Cancellation',
    description: "Advanced ANC technology blocks out external noise so you can focus on what you're listening to.",
    icon: Volume2,
  },
  {
    name: 'Quick Pairing',
    description: 'Seamlessly connect to your devices with just one tap. Compatible with iOS, Android, and Windows devices.',
    icon: Wifi,
  },
  {
    name: 'Wear Detection',
    description: 'Smart sensors detect when you remove the headphones and automatically pause your music.',
    icon: Clock,
  },
  {
    name: 'Premium Sound Quality',
    description: 'Custom-designed 40mm dynamic drivers deliver rich, immersive sound with deep bass and crisp highs.',
    icon: Music,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need in premium headphones
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Designed with cutting-edge technology and premium materials for the ultimate listening experience.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;