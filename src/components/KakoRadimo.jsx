import Steps from "./Steps.jsx";
import SectionTitle from "./SectionTitle.jsx";

export default function KakoRadimo () {
  return (
    <section id="kako-radimo">
      <img className="bg-leaves" src="/src/assets/leaves-bg.webp" alt="leaves pattern in the background"/>
      <div className="triangle-top-right" role="presentation"></div>
      <div className="triangle-bottom-left" role="presentation"></div>
      <div className="content-padding-left">
        <SectionTitle title="Kako radimo" type="fancy"/>
        <Steps/>
      </div>
    </section>
  )
}