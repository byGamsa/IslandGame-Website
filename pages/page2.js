import { Footer, Navbar2 } from '../components';
import { Contact } from '../sections';

const Page2 = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar2 />
    <div>{'\u00A0'}</div>
    <div className="relative">
      <div className="gradient-02 z-0" />
      <Contact />
      <Footer />
      <div className="gradient-04 z-0" />
    </div>
  </div>
);

export default Page2;
