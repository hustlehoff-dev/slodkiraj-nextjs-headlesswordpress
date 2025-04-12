import "./footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
export default function Home() {
  return (
    <footer>
      <div className="footerSocial">
        <strong id="contact">Skontaktuj się z nami:</strong>
        <a
          href="https://www.instagram.com/slodki.raj.chojnice/"
          title="Instagram Profile Link"
          target="_blank">
          <InstagramIcon />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100086304732747"
          title="Facebook Profile Link"
          target="_blank">
          <FacebookIcon />
        </a>
      </div>
      <div className="copyright">
        <p>
          © 2025 Słodki Raj Chojnice | Przez:
          <Link
            href="https://adriankaczmarek.netlify.app"
            target="_blank"
            title="Firma odpowiedzialna za stworzenie strony Słodki Raj Chojnice">
            {" "}
            Adrian Kaczmarek
          </Link>
        </p>
      </div>
    </footer>
  );
}
