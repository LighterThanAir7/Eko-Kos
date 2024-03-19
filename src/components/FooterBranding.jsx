import Logo from "./Logo.jsx";

export default function FooterBranding () {
  return (
    <div className="footer__branding">
      <Logo/>
      <p className="footer__branding-text">
        Adipisicing elit sed do eiusmod tempor incidunt labore et dolore magna aliqua enim minim ven quis nostu
        exercitation ullamco.
      </p>
      <div className="attribution">
        <h5 className="attribution__title">Attribution ©</h5>
        <h6 className="attribution__subtitle">Images - designed by <a href="https://www.freepik.com">Freepik</a></h6>
        <ul className="attribution__list">
          <li><a href="https://www.freevector.com/seamless-leaf-pattern-19445">Seamless Leaf Pattern</a></li>
          <li>
            <a href="https://www.freepik.com/free-ai-image/residential-garden-worker-trimming-backyard-lawn_65695160.htm">
              Residential Garden Worker Trimming Backyard Lawn - by WangXiNa
            </a>
          </li>
          <li><a href="https://www.freepik.com/free-photo/close-up-image-fresh-spring-green-grass_1010156.htm">Close-up image of fresh spring green grass - by janoon028</a></li>
        </ul>
        <h6 className="attribution__subtitle">Icons</h6>
        <ul className="attribution__list">
          <li><a href="https://www.svgrepo.com/svg/208260/lawn-mower">Lawn mower - by SVG Repo</a></li>
          <li><a href="https://thenounproject.com/icon/euro-coin-1961332/">Euro Coin - by Vectorstall</a></li>
          <li><a href="https://thenounproject.com/icon/hedge-trimmer-4454266/">Hedge Trimmer - by Lars Meiertoberens</a></li>
        </ul>
      </div>
    </div>
  )
}