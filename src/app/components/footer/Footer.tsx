import "./footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <footer>
      <div className="footerSocial">
        <div className="footerLogo">
          <Image
            src="/"
            alt="Słodki Raj Chojnice - Logo najlepszego producenta tortów na świecie!"
            width={400}
            height={400}
          />
        </div>
        <strong>Skontaktuj się z nami:</strong>
        <a
          href="https://www.instagram.com/slodki.raj.chojnice/"
          target="_blank">
          <InstagramIcon />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100086304732747"
          target="_blank">
          <FacebookIcon />
        </a>
      </div>
      <div className="copyright">
        <p>
          © 2025 Słodki Raj Chojnice | Built by
          <Link
            href="blockwebstudio.com"
            target="_blank"
            title="Firma odpowiedzialna za stworzenie strony Słodki Raj Chojnice">
            {" "}
            BlockWEBStudio
          </Link>
        </p>
      </div>
    </footer>
  );
}
