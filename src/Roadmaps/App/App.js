import Data from "./Data.js";
import DropdownCard from "./Components/DropdownCard.js";

const titleTextEl = document.getElementById('titleText')
const headingTextEl = document.getElementById('headingText')
const discriptionTextEl = document.getElementById('discriptionText')
const roadmapsContEl = document.getElementById('roadmaps--cont')


// || Get Window Path for data rendering
let currentPath = window.location.pathname;
let absoluteUrl = currentPath.split('/')[3]


function renderToDocument() {

    Data.forEach(data => {

        titleTextEl.innerText = data.title
        headingTextEl.innerText = data.title
        discriptionTextEl.innerText = data.discription

        // || Cheacking url for data rendering 
        if (data.url === absoluteUrl) {

            // || Handel syllabusData in Data 
            data.syllabusData.forEach(data => {

                // || Add DropdownCard Into The Document 
                roadmapsContEl.insertAdjacentHTML('beforeend', DropdownCard(data))

            })

        }

    });

}

renderToDocument()
