export default function FooterLinks () {
  return (
    <>
      <div className="footer-section">
        <h4 className="footer-section__title">Brzi linkovi</h4>
        <ul className="footer-section__list">
          <li className="footer-section__item"><i className="icon-leaf"></i><a className="footer-section__link" href="#pocetna">Naslovna</a></li>
          <li className="footer-section__item"><i className="icon-leaf"></i><a className="footer-section__link" href="#kako-radimo">Kako radimo</a></li>
          <li className="footer-section__item"><i className="icon-leaf"></i><a className="footer-section__link" href="#o-nama">O nama</a></li>
          <li className="footer-section__item"><i className="icon-leaf"></i><a className="footer-section__link" href="#usluge">Usluge</a></li>
          <li className="footer-section__item"><i className="icon-leaf"></i><a className="footer-section__link" href="#galerija">Galerija</a></li>
          <li className="footer-section__item"><i className="icon-leaf"></i><a className="footer-section__link" href="#cijena">Cijena</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4 className="footer-section__title">Kontakt</h4>
        <ul className="footer-section__list">
          <li className="footer-section__item"><i className="icon-map-pin"></i>Zagreb, Hrvatska</li>
          <li className="footer-section__item"><i className="icon-phone"></i><a className="footer-section__link" href="tel:091/782-5340">091 782 5340</a></li>
          <li className="footer-section__item"><i className="icon-email"></i><a className="footer-section__link" href="mailto:antogalic68@gmail.com">antogalic68@gmail.com</a></li>
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