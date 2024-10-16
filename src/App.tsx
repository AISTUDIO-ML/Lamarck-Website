import { Footer, NavBar } from "components/components";
import {
  BottomBanner,
  Home,
  TopBanner,
  UseCases,
  CaseStudies,
  ScalableSolutions,
  Awards,
  Community,
  Testimonials,
  Blogs,
  Subscribe,
  Methylation,
  Health,
  Homocysteine,
  UniqueGenetics,
} from "sections/sections";

function App() {
  return (
    <div>
      <TopBanner />
      <NavBar />
      <Home />
      <Methylation />
      <Health />
      <Homocysteine />
      <UniqueGenetics />
      {/* <UseCases /> */}
      {/* <ScalableSolutions /> */}
      {/* <CaseStudies /> */}
      {/* <Awards /> */}
      {/* <Community /> */}
      {/* <Testimonials /> */}
      {/* <BottomBanner /> */}
      {/* <Blogs /> */}
      {/* <Subscribe /> */}
      <Footer />
    </div>
  );
}

export default App;
