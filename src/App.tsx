import { Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden text-white">

    <div className={`paddingX flexCenterNav`}>
      <div className={`boxWidth`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary flexStart`}>
      <div className={`boxWidth`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary paddingX flexCenter`}>
      <div className={`boxWidth`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>

  </div>
);

export default App