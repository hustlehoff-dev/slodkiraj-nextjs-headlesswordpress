import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.scss";
import Navbar from "./components/nav/Nav";

import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "Słodki Raj Chojnice - Smakowicie Naturalna Rozkosz Dla Podniebienia",
  description:
    "Witaj w miejscu, gdzie słodycze to coś więcej niż wypieki – to sztuka, pasja i miłość do prawdziwego smaku. W Słodkim Raju nie uznajemy kompromisów. Nie znajdziesz tu sztucznych kremów, przesłodzonych mas czy masowej produkcji. Znajdziesz najlepsze ciasta, torty i desery, jakie kiedykolwiek jadłeś – ręcznie robione, z naturalnych składników, pełne prawdziwego smaku. Każdy kęs ma być przeżyciem. Soczyste owoce, puszyste biszkopty, kremy, które rozpływają się w ustach... To właśnie ten prawdziwy, domowy smak, który pamiętasz z dzieciństwa.",
  keywords:
    "cukiernia Chojnice, torty Chojnice, ciasta Chojnice, ciastka Chojnice, słodkości Chojnice, najlepsza cukiernia w Chojnicach, torty na zamówienie Chojnice, domowe wypieki Chojnice, naturalne torty Chojnice, torty z naturalnych składników, domowe ciasta na zamówienie, ręcznie robione słodkości, cukiernia bez konserwantów, najlepsze ciasta z owocami, gdzie zamówić tort w Chojnicach, torty weselne Chojnice cena, cukiernia z naturalnymi składnikami, personalizowane torty na zamówienie, ciasta bez sztucznych dodatków, torty urodzinowe Chojnice, torty weselne Chojnice, torty komunijne na zamówienie, ciastka i słodkości na imprezy, babeczki i muffinki na zamówienie",
};

const quicksand = Quicksand({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} antialiased slodkiraj-app`}>
        <Navbar />

        {children}
        <Footer />
        <div className="loader">
          {" "}
          <img
            src="https://slodkirajchojnice.pl/cms/wp-content/uploads/2025/02/slodkirajchojnice-logo-320p-light-1.png"
            alt="Słodki Raj Chojnice - Logo najlepszego producenta tortów na świecie!"
          />
          <span>Zapraszamy do naszego świata!</span>
        </div>
      </body>
    </html>
  );
}
