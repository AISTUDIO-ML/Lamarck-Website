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
  HealthMatters,
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
      <HealthMatters />
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
