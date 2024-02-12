import { SpecialOffer, CustomerReviews, Footer, Hero, PopularProducts, Services, Subscribe, SuperQuality } from './sections';
import Nav from './components/Nav';
import ShoeCard from './components/ShoeCard';

const App = () => {
  return(
    <main className="relative">
        <div className="w-full text-center sticky -top-0 p-2 bg-black text-coral-red font-light text-lg font-palanquin z-20">
          <p>
          Disclaimer: This website is a personal project and not affiliated with Nike Inc. All trademarks, logos, and brand names are property of their respective owners.
          </p>
        </div>
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding">
          <Services />
        </section>
        <section className="padding-x py-10">
          <SpecialOffer />
        </section>
        <section className="padding bg-pale-blue">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
    </main>
  )
}

export default App;