import Data from "./Data.js";
import DropdownCard from "./Component/DropdownCard.js";

const roadmapsContEl = document.getElementById('roadmaps--cont')


function renderToDocument() {

    Data.forEach(data => {

        roadmapsContEl.insertAdjacentHTML('beforeend', DropdownCard(data))
        let liEl = document.getElementById(`${'subheading--' + data.id}`)

        data.subHeadings.forEach(subHed => {
            liEl.insertAdjacentHTML('beforeend', `<li>${subHed}</li>`)
        })
        
    });

}

renderToDocument()