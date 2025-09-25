import {
  TruckIcon,
  ShieldCheckIcon,
  ClockIcon,
  StarIcon,
  DevicePhoneMobileIcon,
  CreditCardIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Fast & Free Shipping',
    description: 'Free shipping on orders over $50. Express delivery available for urgent orders.',
    icon: TruckIcon,
  },
  {
    name: 'Secure Shopping',
    description: 'Your data and payments are protected with industry-leading security standards.',
    icon: ShieldCheckIcon,
  },
  {
    name: '24/7 Support',
    description: 'Get help whenever you need it with our round-the-clock customer support team.',
    icon: ClockIcon,
  },
  {
    name: 'Premium Quality',
    description: 'Carefully curated products from trusted brands and manufacturers worldwide.',
    icon: StarIcon,
  },
  {
    name: 'Mobile Optimized',
    description: 'Shop seamlessly across all devices with our responsive, mobile-first design.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Easy Payments',
    description: 'Multiple payment options including cards, digital wallets, and buy now, pay later.',
    icon: CreditCardIcon,
  },
];

export function Features() {
  return (
    <section id="features" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Why Choose Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need for a great shopping experience
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We're committed to providing you with the best online shopping experience possible.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}