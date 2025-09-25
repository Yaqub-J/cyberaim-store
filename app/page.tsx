import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { Hero } from 'components/landing/hero';
import { Features } from 'components/landing/features';
import { Testimonials } from 'components/landing/testimonials';
import { CallToAction } from 'components/landing/cta';

export const metadata = {
  description: 'Discover premium technology products and cutting-edge solutions for your digital lifestyle at Cyberaim Store.',
  openGraph: {
    type: 'website',
    title: 'Cyberaim Store - Premium Tech Products',
    description: 'Discover premium technology products and cutting-edge solutions for your digital lifestyle.',
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ThreeItemGrid />
      <Carousel />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
