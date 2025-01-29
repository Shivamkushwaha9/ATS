import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import MovingGrid from "@/components/MovingGrid";
import PricingCard from "@/components/PricingCard";
import Products from "@/components/Products";


export default function Home() {
   return (
      <div className="bg-[#090909] text-white h-screen"> {/* Agar header ke niche prob aaya to just : pt-[72px]*/}
         <Intro />
         <MovingGrid />
         <Features />
         <Products />
         <PricingCard />
         <Faqs/>
         <Footer />
      </div>
   );
}
