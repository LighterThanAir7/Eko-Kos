import Logo from "./Logo.jsx";
import AttributionModal from "./AttributionModal.jsx";

export default function FooterBranding () {
  return (
    <div className="footer__branding">
      <Logo/>
      <p className="footer__branding-text">
        Pozovite nas i zajedno ćemo oživjeti vaš prostor za svakodnevno uživanje u zelenilu koje vas okružuje.
      </p>
      <AttributionModal/>
    </div>
  )
}