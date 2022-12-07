import { Footer, Navbar, Navbar2 } from '../components';
import { About, Explore, Hero, News } from '../sections';
import Overview from '../sections/Overview';

const Page = () => (
  <div className="overflow-hidden">
    <Navbar />
    <Navbar2 />
    <Hero />
    <div className="relative">
      <div className="absolute gradient-07 z-0" />
      <div className="absolute gradient-08 z-0" />
      <Overview />
      <Explore />
      <About />
    </div>
    <div className="relative">
      <div className="absolute gradient-02 z-0" />
      <div className="absolute gradient-06 z-0" />
      <News />
      <Footer />
    </div>
  </div>
);

export default Page;
