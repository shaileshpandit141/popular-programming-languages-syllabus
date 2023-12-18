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


// || Hendel Loder Element
const loderEl = document.getElementById('loder')
window.addEventListener('load', event => {
    event.preventDefault()

    // || Adding css Class to hide loader
    loderEl.classList.add('loder--hidden')

    loderEl.addEventListener('transitionend', event => {
        event.preventDefault()

        // || For Deleting element from the document 
        document.body.removeChild(loderEl)
    })
})