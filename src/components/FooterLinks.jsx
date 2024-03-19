export default function FooterLinks () {
  return (
    <>
      <div className="footer-section">
        <h4 className="footer-section__title">Brzi linkovi</h4>
        <ul className="footer-section__list">
          <li className="footer-section__item"><i className="icon-leaf"></i>Naslovna</li>
          <li className="footer-section__item"><i className="icon-leaf"></i>Kako radimo</li>
          <li className="footer-section__item"><i className="icon-leaf"></i>O nama</li>
          <li className="footer-section__item"><i className="icon-leaf"></i>Usluge</li>
          <li className="footer-section__item"><i className="icon-leaf"></i>Galerija</li>
          <li className="footer-section__item"><i className="icon-leaf"></i>Cijena</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4 className="footer-section__title">Kontakt</h4>
        <ul className="footer-section__list">
          <li className="footer-section__item"><i className="icon-map-pin"></i>Zagreb, Hrvatska</li>
          <li className="footer-section__item"><i className="icon-phone"></i>091/782-5340</li>
          <li className="footer-section__item"><i className="icon-email"></i>antogalic68@gmail.com</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4 className="footer-section__title">Radno vrijeme</h4>
        <ul className="footer-section__list">
          <li className="margin-bottom-12">Pon - Sub: <span className="clr-primary-normal">07 - 16h</span></li>
          <li>Nedjeljom i blagdanima ne radimo</li>
        </ul>
      </div>
    </>
  )
}