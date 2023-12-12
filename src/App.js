import Data from "./Data.js";
import RoadmapCard from "./Components/RoadmapCard.js"

// || Target Root Element 
const rootEl = document.getElementById('root')

const roadmapCardsWrapper = document.getElementById('cards--wrapper')

const searchBar = document.getElementById('searchBar')

Data.forEach(data => {
    roadmapCardsWrapper.insertAdjacentHTML('afterbegin', RoadmapCard(data))
})


searchBar.addEventListener('input', event => {
    event.preventDefault()

    let searchValue = searchBar.value

    if (searchValue === '') {
        roadmapCardsWrapper.innerHTML = ''
        Data.forEach(data => {
            roadmapCardsWrapper.insertAdjacentHTML('afterbegin', RoadmapCard(data))
        })
    } else {
        roadmapCardsWrapper.innerHTML = ''
        Data.forEach(data => {
            if ((data.title).toLowerCase().includes(searchValue.toLowerCase())) {
                roadmapCardsWrapper.insertAdjacentHTML('afterbegin', RoadmapCard(data))
            }
        })
        // roadmapCardsWrapper.insertAdjacentHTML('afterbegin', "<h4 class='no--metch'>Oop's! No metch for it.</>")
    }
})


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