import Steps from "./Steps.jsx";
import SectionTitle from "./SectionTitle.jsx";
import leavesPattern from "/src/assets/leaves-bg.webp"

export default function KakoRadimo () {
  return (
    <section id="kako-radimo">
      <img className="bg-image" src={leavesPattern} alt="leaves pattern in the background"/>
      <div className="triangle-top-right" role="presentation"></div>
      <div className="triangle-bottom-left" role="presentation"></div>
      <div>
        <SectionTitle title="Kako radimo" type="normal"/>
        <Steps/>
      </div>
    </section>
  )
}