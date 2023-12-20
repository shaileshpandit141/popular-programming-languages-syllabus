import Data from "./Data.js";
import Header from "./Components/Header.js";
import DropdownCard from "./Components/DropdownCard.js";
import FooterLink from "./Components/FooterLink.js";

const titleTextEl = document.getElementById('titleText')
const headerEl = document.getElementById('header')
const footerEl = document.getElementById('footer')
const headingTextEl = document.getElementById('headingText')
const discriptionTextEl = document.getElementById('discriptionText')
const roadmapsContEl = document.getElementById('roadmaps--cont')


// || Get Window Path for data rendering
let currentPath = window.location.pathname;
let absoluteUrl = currentPath.toLowerCase().split('/')

function renderToDocument() {

    Data.forEach(mainData => {

        // || Inserting Footer elements 
        footerEl.insertAdjacentHTML('beforeend', FooterLink(mainData))

        // || Cheacking url for data rendering 
        if (absoluteUrl.includes(mainData.url.toLowerCase())) {

            // || Handel syllabusData in Data 
            mainData.syllabusData.forEach(data => {

                // || Add Some Information to the Document 
                titleTextEl.innerText = mainData.title
                headerEl.innerHTML = Header(mainData)
                // headingTextEl.innerText = mainData.title
                discriptionTextEl.innerText = mainData.discription

                // || Add DropdownCard Into The Document 
                roadmapsContEl.insertAdjacentHTML('beforeend', DropdownCard(data))

            })

        }

    });

}

renderToDocument()
