import { Footer, NavBar } from "components/components";
import {
  Home,
  TopBanner,
  Community,
  Testimonials,
  Methylation,
  Health,
  Homocysteine,
  UniqueGenetics,
  HealthMatters,
  Security,
  Process,
  Introduction,
  Story,
  Faq,
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
      <Process />
      <Community />
      <Introduction />
      <Security />
      <Testimonials />
      <Story />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
