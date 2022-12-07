import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, News, Skills, World } from '../sections';

const Page = () => (
  <div className='bg-primary-black overflow-hidden'>
    <Navbar />
    <Hero />
    <Hero />
    <div className='relative'>
          <Link href="/page2" >
            <h2>Home</h2>
          </Link>
    </div>
    <div className='relative'>
      <About />
      <div className="gradient-03 z-0"/>
      <Explore />
    </div>
    <div className='relative'>
      <div className="gradient-02 z-0"/>
      <News />
      <Skills />
      <Feedback />
      <div className="gradient-04 z-0"/>
    </div>
    <Footer />
  </div>
);

export default Page;
