import type { AppProps } from "next/app";
import { Fraunces, Inter, Patrick_Hand } from "next/font/google";
import "../styles/globals.css";

// Self-hosted at build time by next/font — no request to Google on each visit.
const fraunces = Fraunces({ subsets: ["latin"], axes: ["SOFT", "opsz"], display: "swap" });
const inter = Inter({ subsets: ["latin"], display: "swap" });
const patrickHand = Patrick_Hand({ subsets: ["latin"], weight: "400", display: "swap" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-fraunces: ${fraunces.style.fontFamily};
          --font-inter: ${inter.style.fontFamily};
          --font-patrick-hand: ${patrickHand.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
