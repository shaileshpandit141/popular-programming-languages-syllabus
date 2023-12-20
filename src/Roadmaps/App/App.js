import Data from "./Data.js";
import DropdownCard from "./Components/DropdownCard.js";

const titleTextEl = document.getElementById('titleText')
const headingTextEl = document.getElementById('headingText')
const discriptionTextEl = document.getElementById('discriptionText')
const roadmapsContEl = document.getElementById('roadmaps--cont')


// || Get Window Path for data rendering
let currentPath = window.location.pathname;
let absoluteUrl = currentPath.toLowerCase().split('/')

function renderToDocument() {

    Data.forEach(mainData => {

        // || Cheacking url for data rendering 
        if (absoluteUrl.includes(mainData.url.toLowerCase())) {

            // || Handel syllabusData in Data 
            mainData.syllabusData.forEach(data => {

                // || Add Some Information to the Document 
                titleTextEl.innerText = mainData.title
                headingTextEl.innerText = mainData.title
                discriptionTextEl.innerText = mainData.discription

                // || Add DropdownCard Into The Document 
                roadmapsContEl.insertAdjacentHTML('beforeend', DropdownCard(data))

            })

        }

    });

}

renderToDocument()
