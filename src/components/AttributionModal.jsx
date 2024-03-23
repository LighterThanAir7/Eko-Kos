import {useState} from "react";

export default function AttributionModal () {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <h5 className="attribution">
        Informacije o autorstvu slika i ikona te pripisivanje autorskih prava možete pronaći&nbsp;
        <button onClick={toggleModal} className="btn-modal">ovdje</button>.
      </h5>

      {modal && (
        <div className="modal">
          <div className="modal__content">
            <header className="modal__heading">
              <h2 className="modal__title">Attribution & Licenses</h2>
              <button className="modal__close" onClick={toggleModal}>
                &#x1F5D9;
              </button>
            </header>

            <h3 className="modal__subtitle">Images</h3>
            <p className="margin-bottom-20">Images were used as background images with some minimal changes image exposure and dark gradients to better fit the overall look of the webpage.</p>
            <ul className="modal__list">
              <li>Seamless Leaf Pattern - <a href="https://www.freevector.com/seamless-leaf-pattern-19445">Freevector.com</a></li>
              <li>Residential Garden Worker Trimming Backyard Lawn - by <a href="https://www.freepik.com/free-ai-image/residential-garden-worker-trimming-backyard-lawn_65695160.htm">WangXiNa (Freepik.com)</a></li>
              <li>Close-up image of fresh spring green grass - by <a href="https://www.freepik.com/free-photo/close-up-image-fresh-spring-green-grass_1010156.htm">janoon028 (Freepik.com)</a></li>
            </ul>

            <h3 className="modal__subtitle">Icons</h3>
            <p className="margin-bottom-20">Icons were used to give more meaning to the overall idea of the website with no changes to the original icons. Icons were used as font icons from <a href="https://icomoon.io/">Icomoon</a> website and used in _icomoon-fonts.scss</p>
            <ul className="modal__list">
              <li>lawn-mower - by <a href="https://www.svgrepo.com/svg/208260/lawn-mower">SVG Repo</a></li>
              <li>euro-coin - by <a href="https://thenounproject.com/icon/euro-coin-1961332/">Vectorstall</a></li>
              <li>hedge-trimmer - by <a href="https://thenounproject.com/icon/hedge-trimmer-4454266/">Lars Meiertoberens</a></li>
              <li>people-talking - by <a href="https://thenounproject.com/icon/people-talking-1275610/">Foxyard Studio</a></li>
              <li>tree-thin - by <a href="https://github.com/game-icons/icons">GameIcons</a></li>
              <li>handshake-outline - by <a href="https://github.com/google/material-design-icons">Google</a></li>
              <li>calendar - by <a href="https://github.com/vmware-archive/clarity">VMware</a></li>
              <li>axe - by <a href="https://github.com/tabler/tabler-icons">Pawel Kuna</a></li>
              <li>workspace-trusted <a href="https://github.com/microsoft/vscode-codicons">Microsoft Corporation</a></li>
              <li>grass - by <a href="https://github.com/google/material-design-icons">Google</a></li>
              <li>phone - by <a href="https://github.com/material-icons/material-icons">Material Design Authors</a></li>
              <li>paintbrush - by <a href="https://github.com/webalys-hq/streamline-vectors">Streamline</a></li>
              <li>gardening-shears - by <a href="https://github.com/game-icons/icons">GameIcons</a></li>
              <li>email - by <a href="https://github.com/Templarian/MaterialDesign">Pictogrammers</a></li>
              <li>map-pin - by <a href="https://github.com/phosphor-icons/core">Phosphor Icons</a></li>
              <li>gear - by <a href="https://github.com/phosphor-icons/core">Phosphor Icons</a></li>
              <li>arrow-left - by <a href="https://github.com/formkit/formkit/tree/master/packages/icons">FormKit</a></li>
              <li>leaf - by <a href="https://github.com/Templarian/MaterialDesign">Pictogrammers</a></li>
              <li>medal - by <a href="https://github.com/icons8/line-awesome">Icons8</a></li>
            </ul>

            <h3 className="modal__subtitle">Licenses</h3>
            <p className="margin-bottom-20">In this project there were many different licensed icons from various authors. Here are all the links to their original license files on their github repositories.</p>
            <ul className="modal__list">
              <li><a href="https://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a></li>
              <li><a href="https://opensource.org/license/mit">MIT License</a></li>
              <li><a href="https://creativecommons.org/public-domain/cc0/">CC0 License</a></li>
              <li><a href="https://creativecommons.org/licenses/by/3.0/deed.en">CC BY 3.0</a></li>
              <li><a href="https://creativecommons.org/licenses/by/4.0/deed.en">CC BY 4.0</a></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}