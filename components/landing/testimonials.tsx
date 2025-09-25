import { StarIcon } from '@heroicons/react/20/solid';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    body: 'Amazing quality products and incredibly fast shipping. The customer service team went above and beyond to help me find exactly what I needed.',
    author: {
      name: 'Sarah Chen',
      handle: 'sarahc_tech',
      location: 'San Francisco, CA',
    },
    rating: 5,
  },
  {
    body: 'Best tech store I\'ve found online. Authentic products, competitive prices, and hassle-free returns. Highly recommend!',
    author: {
      name: 'Marcus Johnson',
      handle: 'mjtech',
      location: 'Austin, TX',
    },
    rating: 5,
  },
  {
    body: 'The mobile experience is seamless and checkout was so smooth. Got my order in 2 days and everything was perfectly packaged.',
    author: {
      name: 'Elena Rodriguez',
      handle: 'elenr',
      location: 'Miami, FL',
    },
    rating: 5,
  },
];

const stats = [
  { name: 'Happy Customers', value: '10,000+' },
  { name: 'Products Delivered', value: '50,000+' },
  { name: 'Countries Served', value: '25+' },
  { name: 'Customer Rating', value: '4.9/5' },
];

export function Testimonials() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by thousands of customers
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Join our community of satisfied customers who love our products and service.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="text-center">
              <dt className="text-base leading-7 text-muted-foreground">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, testimonialIdx) => (
              <Card key={testimonialIdx}>
                <CardContent className="p-6">
                  <div className="flex gap-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="mt-6 text-foreground">
                    <p>"{testimonial.body}"</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {testimonial.author.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.author.name}
                      </div>
                      <div className="text-muted-foreground">
                        @{testimonial.author.handle} • {testimonial.author.location}
                      </div>
                    </div>
                  </figcaption>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}