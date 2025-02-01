import Faqs from "@/components/landingpage/Faqs";
import Features from "@/components/landingpage/Features";
import Footer from "@/components/landingpage/Footer";
import Intro from "@/components/landingpage/Intro";
import MovingGrid from "@/components/landingpage/MovingGrid";
import PricingCard from "@/components/landingpage/PricingCard";
import Products from "@/components/landingpage/Products";


export default function Home() {
   return (
      <div className="bg-[#090909] text-white h-screen"> {/* Agar header ke niche prob aaya to just : pt-[72px]*/}
         <Intro />
         <MovingGrid />
         <Features />
         <Products />
         <PricingCard />
         <Faqs />
         <Footer />
         <div className="bg-[#090909] flex items-center justify-center text-sm text-gray-300 py-20">
            © Copyright 2025 Verity, Inc. All Rights Reserved
         </div>
      </div>
   );
}
