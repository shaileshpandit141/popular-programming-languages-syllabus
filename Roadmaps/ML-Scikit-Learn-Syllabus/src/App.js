import Data from "./Data.js";
import DropdownCard from "./Component/DropdownCard.js";

const roadmapsContEl = document.getElementById('roadmaps--cont')


function renderToDocument() {

    Data.forEach(data => {

        // || Add DropdownCard Into The Document 
        roadmapsContEl.insertAdjacentHTML('beforeend', DropdownCard(data))

    });

}

renderToDocument()
