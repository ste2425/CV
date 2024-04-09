import { Inter } from "next/font/google";
import { cvData } from "@/cvData";
import { CVComponent } from "@/components/cvComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const cv = cvData;
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <CVComponent cv={cv}/>
    </main>
  );
}