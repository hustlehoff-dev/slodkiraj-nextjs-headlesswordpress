import "./aboutus.scss";
import Image from "next/image";
export default function AboutUs() {
  const h1 = "Słodki Raj - Rozkoszne Torty, Desery Na Specjalne Okazje!🍰";
  const h2s = [
    "Torty i Ciasta, Które Smakują jak w Domu",
    "Poznaj Naszą Pasję do Prawdziwego Smaku",
    "Naturalne Składniki, Wyjątkowe Smaki – Bez Kompromisów",
    "Zamów Słodkie Rarytasy na Każdą Okazję",
  ];
  return (
    <section id="aboutUs">
      <div className="aboutWrapper">
        <div className="aboutContainer">
          <div className="helloContainer">
            <h1>{h1}</h1>
            <p>
              Witaj w miejscu, gdzie słodycze to coś więcej niż wypieki – to
              sztuka, pasja i miłość do prawdziwego smaku.
            </p>
          </div>

          <div className="sweetContainer">
            <h2>{h2s[0]}</h2>
            <p>
              W Słodkim Raju nie uznajemy kompromisów. <br />
              Nie znajdziesz tu sztucznych kremów, przesłodzonych mas czy
              sztucznych śmietan.
            </p>
            <p>
              Znajdziesz najlepsze ciasta, torty i desery, jakie kiedykolwiek
              jadłeś – ręcznie robione, z naturalnych składników, pełne
              prawdziwego smaku.
            </p>
          </div>
          <h3>Poznajmy się!</h3>
          <div className="author">
            <Image
              src="/author.png"
              alt="Karolina - Twórca najlepszych tortów na świecie!"
              width={400}
              height={400}
              quality={100}
              placeholder="blur"
              blurDataURL="author-placeholder.png"
              loading="lazy"
            />
          </div>
          <h3>Na imię mam Karolina.</h3>
          <p>
            Dzięki mnie każdy kęs będzie wspaniałym przeżyciem. Soczyste owoce,
            puszyste biszkopty, kremy, które rozpływają się w ustach... To
            właśnie ten prawdziwy, domowy smak, który pamiętasz z dzieciństwa.
          </p>
          <div className="pickusContainer">
            <h3>💎 Dlaczego Wybierzesz Właśnie Nas?</h3>
            <p>
              ❤️ Bo tu liczy się smak. Nie idziemy na skróty, nie używamy
              gotowców, robimy wszystko od podstaw.
            </p>
            <p>
              🌿 Naturalne składniki – prawdziwa śmietana, prawdziwe owoce,
              prawdziwa czekolada.
            </p>
            <p>
              🎨 Wyjątkowy wygląd – Twoje ciasto ma zachwycać nie tylko smakiem,
              ale i wyglądem.
            </p>
            <p>
              🛠 Ręczna robota – każdy tort i każde ciasto robimy tak, jakbyśmy
              piekli dla własnych mam.
            </p>
          </div>
          <h2>🎂 Twój Tort, Twoje Marzenie</h2>
          <p>
            Torty u nas to dzieła sztuki, ale nie tylko wizualnie.
            <br /> One smakują dokładnie tak, jak wyglądają – czyli obłędnie.
          </p>
          <ul>
            <li>
              ✅ Na każdą okazję – urodziny, wesela, chrzciny, rocznice, czy po
              prostu zwykła ochota na coś wyjątkowego.
            </li>
            <li>
              ✅ Personalizowane – masz wymarzony smak? Chcesz tort jak z bajki?
              Spełnimy Twoją wizję!
            </li>
            <li>
              ✅ Najwyższa jakość – naturalne śmietany, świeże owoce, prawdziwa
              czekolada, najlepsze składniki – to czuć!
            </li>
          </ul>
          <p>
            Jesteś team czekolada czy owocowa lekkość? U nas nie musisz
            wybierać, bo stworzymy dokładnie to, na co masz ochotę.
          </p>
          <div className="memoriesContainer">
            <h2>🥧 Ciasta, Które Przywołują Wspomnienia</h2>
            <p>
              Pamiętasz ten moment, gdy babcia wyciągała z piekarnika pachnącą
              szarlotkę? Albo ten pierwszy kęs sernika, który rozpływał się na
              języku? To właśnie ten klimat – ciasta, które smakują prawdziwie.
            </p>
            <ul>
              <li>
                🫐 Sernik wiedeński – puszysty, delikatny, na bazie prawdziwego
                twarogu.
              </li>
              <li>🍏 Szarlotka – krucha, z masą jabłek i nutą cynamonu.</li>
              <li>
                🍫 Brownie – intensywnie czekoladowe, rozpływające się w ustach.
              </li>
              <li>
                🍰 Ciasta śmietanowe i biszkoptowe – lekkie, idealnie wyważone,
                nieprzesłodzone.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
