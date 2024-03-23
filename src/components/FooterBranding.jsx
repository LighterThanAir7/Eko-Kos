import Logo from "./Logo.jsx";
import AttributionModal from "./AttributionModal.jsx";

export default function FooterBranding () {
  function showModal() {
    return (
      <div className="modal">

      </div>
    )
  }
  return (
    <div className="footer__branding">
      <Logo/>
      <p className="footer__branding-text">
        Adipisicing elit sed do eiusmod tempor incidunt labore et dolore magna aliqua enim minim ven quis nostu
        exercitation ullamco.
      </p>
      <AttributionModal/>
    </div>
  )
}