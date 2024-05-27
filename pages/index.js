import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import OurHappyCustomers from "@/components/OurHappyCustomers";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className=""
    >
     

      <Banner />
      <Features/>
     <OurHappyCustomers/>
    </main>
  );
}
