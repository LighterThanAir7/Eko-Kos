import FooterLinks from "./FooterLinks.jsx";
import FooterBranding from "./FooterBranding.jsx";
import footerCover from "/src/assets/footer-cover.webp"

export default function Footer () {
  return (
    <footer>
      <div className="footer">
        <FooterBranding/>
        <FooterLinks/>
      </div>
      <p className="copyright">
        Copyright 2024 <span className="text-bold">EKO-KOS</span> • Sva Prava Pridržana. Za Attribution Page
      </p>
      <img
        className="footer__cover"
        src={footerCover}
        alt="fading footer image showing meadow with forest on the side"
      />
    </footer>
  )
}